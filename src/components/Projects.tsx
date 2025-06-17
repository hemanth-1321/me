"use client";

import { useRouter } from "next/navigation";
import { projects } from "@/constants";
import { ArrowRight } from "lucide-react";

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
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      ))}
    </div>
  );
}
