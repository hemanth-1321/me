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
    name: "PhotoGenAi",
    slug: "PhotoGenAi",
    image: {
      url: "/image.png",
      width: 800,
      height: 200,
      alt: "image gen",
    },
    urls: {
      githubUrl: "https://github.com/hemanth-1321/Ai-img-gen",
    },
    description:
      "A powerful Al-powered image generation application where users can upload their images, train a model, and use it to generate their own images. Built using the FluxLoRA Al model, it provides a customizable image-generation experience",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Shadcn UI",
      "Tailwind CSS",
      "Aceternity UI",
      "Node js",
    ],
  },

  {
    name: "Manimator",
    slug: "Manimator",
    image: {
      url: "/manim.png",
      width: 800,
      height: 200,
      alt: "video gen",
    },
    urls: {
      githubUrl: "https://github.com/hemanth-1321/manim-videos.git",
    },
    description:
      "A platform where users can input plain text to generate 2D animations using the Python Manim library. While it is not yet suitable for complex mathematical animations, it works well for simple animations. The platform is built using FastAPI for the backend and Next.js for the frontend",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Shadcn UI",
      "Tailwind CSS",
      "Aceternity UI",
      "python",
      "fast API",
    ],
  },
];
