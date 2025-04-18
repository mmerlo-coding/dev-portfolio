"use server";

import Mailgun from "mailgun.js"; // mailgun.js v11.1.0
import formData from "form-data"; // formData is required by mailgun.js
import * as z from "zod";

// Define the schema for validation (should match your form component's schema)
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  budget: z.string().optional(), // Budget range is optional
  details: z.string().min(10, { message: "Details must be at least 10 characters." }),
});

// Type for the validated form data
type ContactFormData = z.infer<typeof formSchema>;

// Define the Server Action
export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; error?: string | null }> {
  // 1. Validate data on the server
  const validationResult = formSchema.safeParse(data);
  if (!validationResult.success) {
    console.error("Server Action Validation Error:", validationResult.error.flatten().fieldErrors);
    return { success: false, error: "Invalid data provided." };
  }

  const { name, email, budget, details } = validationResult.data;

  // 2. Check for required environment variables
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const recipientEmail = process.env.RECIPIENT_EMAIL; // Your email address

  if (!apiKey) {
    console.error("MAILGUN_API_KEY is not set in environment variables.");
    return { success: false, error: "Server configuration error [API Key]." };
  }
  if (!domain) {
    console.error("MAILGUN_DOMAIN is not set in environment variables.");
    return { success: false, error: "Server configuration error [Domain]." };
  }
  if (!recipientEmail) {
    console.error("RECIPIENT_EMAIL is not set in environment variables.");
    return { success: false, error: "Server configuration error [Recipient]." };
  }

  // 3. Initialize Mailgun client
  const mailgun = new Mailgun(formData); // Requires formData
  const mg = mailgun.client({
    username: "api",
    key: apiKey,
    url: process.env.MAILGUN_URL || "https://api.mailgun.net", // Default URL, change if needed (e.g., EU region)
  });

  // 4. Construct email content
  const emailSubject = `New Portfolio Contact: ${name}`;
  const emailTextBody = `
    You received a new message from your portfolio contact form:

    Name: ${name}
    Email: ${email}
    Budget: ${budget || "Not specified"}

    Details:
    ${details}
  `;
  // Optional: Create an HTML version for better formatting
  // const emailHtmlBody = `...`;

  // 5. Send the email
  try {
    const msg = await mg.messages.create(domain, {
      from: `Portfolio Bot <mailgun@${domain}>`, // Use an email address from your verified domain
      to: [recipientEmail],
      subject: emailSubject,
      text: emailTextBody,
      // html: emailHtmlBody, // Uncomment if using HTML body
      "h:Reply-To": email, // Set Reply-To header to the sender's email
    });

    console.log("Mailgun Response:", msg); // Log success response from Mailgun
    return { success: true, error: null };
  } catch (error) {
    console.error("Mailgun API Error:", error);
    // Try to provide a more specific error message if possible
    const errorMessage = error instanceof Error ? error.message : "Failed to send email due to an unknown error.";
    return { success: false, error: errorMessage };
  }
}
