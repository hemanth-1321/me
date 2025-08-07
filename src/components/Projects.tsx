"use client";

import { useRouter } from "next/navigation";
import { projects } from "@/constants";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Projects() {
  const router = useRouter();

  const handleRedirect = (slug: string) => {
    const formattedSlug = slug.toLowerCase().replace(/\s+/g, "-");
    router.push(`/projects/${formattedSlug}`);
  };

  return (
    <div className="flex flex-col divide-y divide-border w-full">
      {projects.map((project, index) => (
        <div
          key={index}
          onClick={() => handleRedirect(project.name!)}
          className="cursor-pointer group flex items-center justify-between px-2 py-4 hover:bg-muted/30 transition-colors"
        >
          <span className="text-lg font-medium group-hover:underline underline-offset-4">
            {project.name}
          </span>

          <div className="flex  gap-4">
            {project.ongoing && (
              <div className="flex items-center gap-2">
                {/* Glowing dot */}
                <div className="relative h-4 w-4">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-green-400 blur-md opacity-70"
                    animate={{
                      scale: [1, 1.8],
                      opacity: [0.7, 0],
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  />
                  <div className="relative h-4 w-4 rounded-full bg-green-500 shadow-md shadow-green-700" />
                </div>

                {/* Text */}
                <span className="text-sm  font-medium">Ongoing</span>
              </div>
            )}
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      ))}
    </div>
  );
}
