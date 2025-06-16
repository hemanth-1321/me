import { Profile } from "@/components/profile";
import Transition from "@/components/textTransition";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-start py-10 px-4">
      <div className="p-6 rounded-xl shadow-lg w-full max-w-2xl flex flex-col gap-6 items-start">
        <div className="w-full flex justify-start ml-[-20]">
          <Profile />
        </div>

        <p className="text-muted-foreground text-xl text-left">
          Hey, I'm{" "}
          <span className="font-bold text-white animate-pulse">Hemanth</span> —
          a 20-year-old self-taught developer based in India. I’m passionate
          about coding and love turning ideas into real, working projects.
          Always curious, always building.
        </p>

        <h1 className="text-xl font-bold text-muted-foregroundtext-left">
          I build <Transition />
        </h1>

        <Skills />
        <div className="text-center mb-4 flex justify-center items-center">
          <p className="text-xl font-semibold">
            Contact Me <span className="inline-block animate-bounce">↓</span>
          </p>
          <Contact />
        </div>

        {/* <blockquote className="mt-4 border-l-2 border-gray-600 pl-4 italic text-left text-gray-400">
          &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
          it&apos;s only fair that they should pay for the privilege.&quot;
        </blockquote> */}
      </div>
    </div>
  );
}
