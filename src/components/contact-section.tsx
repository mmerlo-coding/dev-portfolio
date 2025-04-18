"use client";

import type React from "react";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from "lucide-react";
import { sendContactEmail } from "@/lib/actions";

// Define Zod schema for updated form fields
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  budget: z.string().optional(), // Budget range is optional
  details: z.string().min(10, { message: "Details must be at least 10 characters." }),
});

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize react-hook-form with updated defaults
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      budget: "$1,000 - $5,000", // Default budget to empty string or a specific value
      details: "",
    },
  });

  // onSubmit function remains largely the same, logging the new values
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Submitted Values:", values);
    const result = await sendContactEmail(values);
    if (result.success) {
      console.log("Email sent successfully");
    } else {
      console.error("Email sending failed:", result.error);
    }
    setIsSubmitted(true);
    // form.reset(); // Optionally keep form reset
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-gray-800 dark:text-gray-200" />,
      title: "Email",
      value: "miguealemer@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-gray-800 dark:text-gray-200" />,
      title: "Phone",
      value: "+57 323 675 2310",
    },
    {
      icon: <MapPin className="h-6 w-6 text-gray-800 dark:text-gray-200" />,
      title: "Location",
      value: "Bogotá, Colombia",
    },
  ];

  const formContainerAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  // Define budget options
  const budgetOptions = [
    { value: "< $1,000", label: "Less than $1,000" },
    { value: "$1,000 - $5,000", label: "$1,000 - $5,000" },
    { value: "$5,000 - $10,000", label: "$5,000 - $10,000" },
    { value: "$10,000+", label: "$10,000+" },
    { value: "Not Sure", label: "Not Sure / TBD" },
  ];

  return (
    <section id="contact" className="p-5 md:p-20 bg-muted dark:bg-secondary flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center text-center mb-12"
      >
        <div className="space-y-4 max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full border text-sm font-medium"
          >
            <span>Contact Me</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Let's work together!</h2>
          <p className="text-muted-foreground text-lg">Have a project in mind or want to collaborate? Feel free to reach out!</p>
        </div>
      </motion.div>

      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.5 }}>
          <Card className="h-full hover:border-primary/20 transition-colors duration-300">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-3 rounded-full bg-primary/10">
                    {item.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={formContainerAnimation} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <Card className="h-full hover:border-primary/20 transition-colors duration-300">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Tell me about more about your project or idea.</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-4 flex flex-col items-center justify-center h-full"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4"
                  >
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold">Message Sent Successfully!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll be in touch soon.</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      form.reset();
                    }}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estimated Budget (Optional)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {budgetOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="details"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Please describe your project or idea..." rows={5} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
