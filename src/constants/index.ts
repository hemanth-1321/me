export const projects = [
  {
    name: "Mocky",
    slug: "mocky",
    image: {
      url: "/mocky.png",
      width: 800,
      height: 200,
      alt: "Mocky - Mock Interview Platform with AI Integration",
    },
    urls: {
      githubUrl: "https://github.com/hemanth-1321/Mock_Interviewer.git",
      liveUrl: "https://mocky21.vercel.app",
    },
    description:
      "Mocky is a modern mock interview platform built using Next.js, TypeScript, Prisma, and Shadcn UI components. It fetches job listings from RemoteOK, forwards job details to Gemini AI to generate tailored interview questions, and conducts real-time mock interviews via AvoAI agents in a conversational interface.",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Shadcn UI",
      "Tailwind CSS",
      "Aceternity UI",
    ],
  },

  {
    name: "Imagely",
    description: "Admin dashboard with product, order, and user management.",
  },
  {
    name: "photoAi",
    description: "Real-time messaging app with Socket.io and MongoDB.",
  },
];
