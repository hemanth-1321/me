"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getLikes, incrementLike, decrementLike } from "@/actions/like";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    getLikes().then(setLikes);
    const liked = localStorage.getItem("hasLiked") === "true";
    setHasLiked(liked);
  }, []);

  const toggleLike = async () => {
    if (hasLiked) {
      await decrementLike();
      localStorage.setItem("hasLiked", "false");
      setHasLiked(false);
    } else {
      await incrementLike();
      localStorage.setItem("hasLiked", "true");
      setHasLiked(true);
      setBurst(true); // trigger burst
      setTimeout(() => setBurst(false), 100); // reset burst
    }

    const updated = await getLikes();
    setLikes(updated);
  };

  return (
    <div className="relative inline-block">
      <motion.button
        onClick={toggleLike}
        className="text-xl px-4 py-2 rounded focus:outline-none"
        whileTap={{ scale: 1.4 }}
        animate={{ scale: hasLiked ? 1.2 : 1 }}
        transition={{ type: "spring", stiffness: 600, damping: 20 }}
      >
        {hasLiked ? "❤️" : "🤍"} {likes}
      </motion.button>

      <AnimatePresence>
        {burst && (
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-pink-400 text-4xl">💥</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
