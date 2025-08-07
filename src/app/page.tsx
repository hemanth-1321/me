import { Profile } from "@/components/profile";
import Transition from "@/components/textTransition";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center py-10 px-4">
      {/* Content Section - centered and constrained */}
      <div className="p-6 rounded-xl shadow-lg w-full max-w-2xl flex flex-col gap-6 items-start">
        <div className="w-full flex justify-start ml-[-20]">
          <Profile />
        </div>

        <p className="text-muted-foreground text-xl text-left">
          Hey, I&apos;m{" "}
          <span className="font-bold dark:text-white animate-pulse">
            Hemanth
          </span>{" "}
          &mdash; a 20-year-old self-taught developer based in India. I&apos;m
          passionate about coding and love turning ideas into real, working
          projects. Always curious, always building.
        </p>

        <h1 className="text-xl font-bold text-muted-foreground text-left">
          I build <Transition />
        </h1>

        {/* <LikeButton /> */}

        <Skills />

        <div className="flex flex-col items-center justify-between  space-x-10">
          <div className="flex gap-4">
            <p className="text-xl font-semibold  flex items-center gap-2 ">
              <span>Get in touch</span>
              <span className="inline-block animate-bounce">→</span>
            </p>
            <div className="mb-10">
              <Contact />
            </div>
          </div>
        </div>

        <div className="w-full ">
          <h3 className="text-2xl font-semibold tracking-tight mb-6">
            Projects
          </h3>
          <Projects />
        </div>

        <div>{/* <ResumeShowcase /> */}</div>
      </div>
    </div>
  );
}
