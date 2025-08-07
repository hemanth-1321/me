"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink, Sparkles } from "lucide-react";
import { projects } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const ProjectPage = () => {
  const router = useRouter();
  const params = useParams();

  const slug =
    typeof params.slug === "string" ? params.slug : params.slug?.[0] ?? "";

  const project = projects.find(
    (p) => p.slug?.toLowerCase() === slug.toLowerCase()
  );

  if (!project) {
    return (
      <main className="p-8 text-center text-muted-foreground">
        <p>🚫 Project not found.</p>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <button
        onClick={() => router.back()}
        className="p-2 mb-6 rounded-md bg-muted text-foreground hover:bg-muted/70 transition-colors"
      >
        <ArrowLeft size={18} />
      </button>

      <div className="mb-6">
        {project.image?.url ? (
          <Image
            src={project.image.url}
            width={project.image.width}
            height={project.image.height}
            alt={project.image.alt || "Project image"}
            className="rounded-xl w-full object-cover"
          />
        ) : (
          <div className="rounded-xl w-full h-64 bg-muted flex items-center justify-center text-muted-foreground">
            No image available
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 mb-2">
        <h1 className="text-2xl font-bold">{project.name}</h1>
        <Sparkles className="text-primary w-5 h-5" />
      </div>

      <p className="text-muted-foreground text-base leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex justify-between gap-3 mb-6">
        <div className="flex gap-3">
          {project.urls?.githubUrl && (
            <a
              href={project.urls.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.urls?.liveUrl && (
            <a
              href={project.urls.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
        <div>
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
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags?.map((tag, idx) => (
          <Badge key={idx} variant="secondary" className="text-sm">
            {tag}
          </Badge>
        ))}
      </div>
    </main>
  );
};

export default ProjectPage;
