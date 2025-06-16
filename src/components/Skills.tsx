import React from "react";
import { Badge } from "@/components/ui/badge";

const logos: Record<string, string> = {
  Express: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
  "Node.js":
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  "Next.js":
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  React: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  TypeScript:
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  AWS: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  Docker:
    "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
};

export const Skills = () => {
  const skills = [
    "Express",
    "Node.js",
    "Next.js",
    "React",
    "TypeScript",
    "AWS",
    "Docker",
  ];

  return (
    <section className="rounded-xl ">
      <h2 className="scroll-m-20 border-t   pt-4 text-l text-wrap font-semibold tracking-tight first:mt-0 mb-5">
        Here are the tools I work with,
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="flex items-center gap-2 bg-gray-200 text-gray-900 border border-gray-300 hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 px-3 py-2"
          >
            <img
              src={logos[skill]}
              alt={`${skill} logo`}
              className="w-4 h-4 object-contain dark:invert"
            />
            <span>{skill}</span>
          </Badge>
        ))}
      </div>
    </section>
  );
};
