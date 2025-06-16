import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Profile = () => {
  return (
    <div className="flex justify-start items-start gap-4 p-4">
      <Avatar className="w-20 h-20">
        <AvatarImage src="https://avatars.githubusercontent.com/u/116090792?s=400&u=d5629197c507b723c29e0a1b24aa378a1923f6e8&v=4" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-lg font-semibold text-gray-800 dark:text-white">
          Hemanth
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Full-Stack Developer
        </p>
      </div>
    </div>
  );
};
