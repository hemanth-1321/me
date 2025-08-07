"use client";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ResumeShowcase() {
  return (
    <div className="max-w-3xl mx-auto p-4 border rounded-xl shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4">My Resume</h2>

      {/* Resume preview */}
      <div className="w-full aspect-[1/1.41] mb-4 border">
        <iframe
          src="/resume.pdf"
          className="w-full h-[70vh]"
          title="Resume Preview"
        />
      </div>

      {/* Download button */}
      <div className="flex justify-end">
        <Link href="/resume.pdf" download>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </Link>
      </div>
    </div>
  );
}
