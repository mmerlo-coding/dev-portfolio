# Miguel Merlo - Portfolio Website

This is the source code for my personal portfolio website, built with [Next.js](https://nextjs.org/), showcasing my skills, projects, and experience as a full-stack developer.

**Live Site:** [https://miguelmerlo.vercel.app](https://miguelmerlo.vercel.app/)

## Technologies Used

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Contact Form Backend:** Server Actions & [Mailgun](https://www.mailgun.com/) (via `mailgun.js`)
- **Deployment:** [Vercel](https://vercel.com/)

## Features

- Responsive design adapting to all screen sizes.
- Interactive sections for About Me, Projects, Experience, and Contact.
- Animated timeline for work experience.
- Project showcase with image thumbnails.
- Functional contact form integrated with Mailgun via Server Actions.
- SEO optimized using Next.js metadata API (`robots.ts`, `sitemap.xml`).

## Project Structure

- `/src/app`: Contains page routes, layouts, `robots.ts`, and `sitemap.xml.ts`.
- `/src/components`: Reusable UI components for different sections of the site.
- `/src/lib`: Utility functions, constants, and Server Actions (`actions.ts`).
- `/src/hooks`: Custom React hooks (if any).
- `/public`: Static assets like images and fonts.

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm, yarn, or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repo-url>
    cd <repo-name>
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Environment Variables

To run the contact form functionality locally, you'll need to set up environment variables for Mailgun.

1.  Create a `.env.local` file in the root of the project.
2.  Add the following variables, replacing the placeholders with your actual Mailgun credentials and desired recipient email:
    ```
    MAILGUN_API_KEY=your_mailgun_api_key
    MAILGUN_DOMAIN=your_mailgun_domain
    RECIPIENT_EMAIL=your_receiving_email@example.com
    # MAILGUN_URL=https://api.eu.mailgun.net # Optional: Use if your Mailgun region is EU
    ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the main page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Ensure you set up the environment variables (mentioned above) in your Vercel project settings for the contact form to work in production.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
