// Define project data outside the component scope
export const projects = [
  {
    title: "CSAT AI",
    fileName: "csat-ai.tsx",
    description:
      "This startup uses AI to analyze customer feedback and provide insights on how to improve the customer experience. Built with Next.js, Tailwind CSS, and React. Supabase and PostgreSQL for the database. I use embeddings via Supabase and OpenAI's API to analyze the customer feedback. Each organization can upload their own documentation for more accurate results.",
    images: [
      "/csatai-login.png?height=600&width=800&text=Login+Page",
      "/csatai-1.png?height=600&width=800&text=Image+1",
      "/csatai-2.png?height=300&width=400&text=Image+2",
      "/csatai-3.png?height=300&width=400&text=Image+3",
      "/csatai-4.png?height=300&width=400&text=Image+4",
      "/csatai-5.png?height=300&width=400&text=Image+5",
    ],
    tags: ["Next.js", "Tailwind CSS", "React", "Supabase", "PostgreSQL"],
    liveUrl: "https://csat-ai-xufk.vercel.app",
    githubUrl: "https://github.com/mmerlo-coding/csat-ai",
  },
  {
    title: "Lens Calculator",
    fileName: "lens-calculator.tsx",
    description:
      "Optometry tool for calculating lens power and more formulas like RGP, Vertex, and more. Built with Next.js, Tailwind CSS, and React. For backend, I used server actions to handle the calculations and API routes to handle the requests.",
    images: [
      "/lens-calculator.png?height=600&width=800&text=Lens+Calculator",
      "/lens-calculator-2.png?height=300&width=400&text=Image+2",
      "/lens-calculator-3.png?height=300&width=400&text=Image+3",
      "/lens-calculator-4.png?height=300&width=400&text=Image+4",
    ],
    tags: ["Next.js", "Tailwind CSS", "React", "Server Actions", "API Routes", "Appwrite", "CI/CD Pipelines", "GIT"],
    liveUrl: "https://next.linsenrechner.de/en/rgp",
    githubUrl: "https://github.com/mmerlo-coding",
  },
  {
    title: "TimePrime",
    fileName: "timeprime.tsx",
    description:
      "Time management tool for tracking time and productivity of employees and staff members. Built with Next.js, Tailwind CSS, and React, ShadCN, and FullCalendar.js.",
    images: [
      "/timeprime-1.png?height=600&width=800&text=TimePrime",
      "/timeprime-2.png?height=300&width=400&text=Image+2",
      "/timeprime-3.png?height=300&width=400&text=Image+3",
      "/timeprime-login.png?height=300&width=400&text=Image+4",
    ],
    tags: ["Next.js", "Tailwind CSS", "React", "ShadCN", "FullCalendar.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/mmerlo-coding",
  },
  {
    title: "Carlton Jones NYC",
    fileName: "carlton-jones-nyc.tsx",
    description: "An e-commerce website for a recognized and renowned stylist in New York City. Built with WordPress, WooCommerce, and Elementor Pro.",
    images: [
      "/carlton-jones-1.png?height=600&width=800",
      "/carlton-jones-2.png?height=300&width=400&text=Image+2",
      "/carlton-jones-3.png?height=300&width=400&text=Image+3",
    ],
    tags: ["WordPress", "WooCommerce", "Elementor Pro"],
    liveUrl: "https://www.carltonjonesnyc.com",
    githubUrl: "#",
  },
  {
    title: "Technology Personal Blog",
    fileName: "technology-blog.tsx",
    description:
      "A personal blog for sharing my thoughts and experiences on technology and software development. Built with Next.js, Tailwind CSS, and React. Sanity CMS for the blog posts and persistent storage.",
    images: ["/technology-blog-1.png?height=600&width=800&text=Technology+Blog", "/technology-blog-2.png?height=300&width=400&text=Image+2"],
    tags: ["Next.js", "Tailwind CSS", "React", "Sanity CMS", "Persistent Storage"],
    liveUrl: "https://modernbizhub.vercel.app",
    githubUrl: "https://github.com/Alejandromcad13/modernbizhub-blog",
  },
  {
    title: "Amazon Web Scraper",
    fileName: "amazon-web-scraper.tsx",
    description:
      "This website uses Brighdata Scraper in order to obtain Amazon's product information. It uses cloud functions from Firebase, which allow it set up a Webhook event listener that would capture the data given by Brightdata Asynchronously. All the functionality is achieved also by using API endpoints and RESTful architecture in order to create records inside a Firestore Database.",
    images: [
      "/amazonscrapper-1.png?height=600&width=800&text=Technology+Blog",
      "/amazonscrapper-2.png?height=300&width=400&text=Image+2",
      "/amazonscrapper-3.png?height=300&width=400&text=Image+3",
    ],
    tags: ["Next.js", "Tailwind CSS", "React", "Webhooks", "Persistent Storage", "Firebase"],
    liveUrl: "https://amazonwebscraper-alejandromcad13.vercel.app",
    githubUrl: "https://github.com/Alejandromcad13/amazonwebscraper",
  },
  {
    title: "Architek Health",
    fileName: "architek-health.tsx",
    description:
      "A full-featured telemedicine platform with a focus on patient-centric care and provider-client communication. Front-end built with Next.js, AWS, Stripe, Tailwind CSS, and React. Back-end built with DynamoDB, Lambda, and API Gateway. I was responsible for overseeing the Front-end department and maintain the applications.s",
    images: [
      "/ahco-hero-image.png?height=600&width=800",
      "/ahco-features-3.png?height=300&width=400&text=Image+2",
      "/provider-client-ahco.png?height=300&width=400&text=Image+3",
      "/ahco-features.png?height=300&width=400&text=Image+4",
    ],
    tags: ["Next.js", "AWS", "Stripe", "Tailwind CSS", "React", "Node.js", "DynamoDB", "Lambda", "API Gateway"],
    liveUrl: "https://www.architekhealth.com",
    githubUrl: "https://github.com/mmerlo-coding",
  },
];

// Icon mapping for technology tags
export const tagIcons: { [key: string]: string } = {
  "Next.js": "/nextjs-icon.png",
  React: "/react-logo.png",
  Supabase: "/supabase.png",
  Stripe: "/stripe.png",
  "Tailwind CSS": "/tailwind.png",
  "Node.js": "/nodejs.png",
  OpenAI: "/openai.png",
  PostgreSQL: "/postgresql.png",
  "Sanity CMS": "/sanity.png",
  ShadCN: "/shadcn.png",
  "Framer Motion": "/framer-motion.png",
  "Appwrite": "/appwrite.png",
  "FullCalendar.js": "/fullcalendarjs.png",
  "WordPress": "/wordpress.png",
  "WooCommerce": "/woocommerce.jpg",
  "Elementor Pro": "/elementor.png",
  "AWS": "/aws.png",
  "Firebase": "/firebase.png",
  "Server Actions": "/nextjs-icon.png",
  "API Routes": "/nextjs-icon.png",
  "Webhooks": "/nextjs-icon.png",
  "Persistent Storage": "/supabase.png",
  "DynamoDB": "/dynamodb.png",
  "Lambda": "/lambda.png",
  "API Gateway": "/nextjs-icon.png",
  "CI/CD Pipelines": "/nextjs-icon.png",
  "GIT": "/git.png",
};
