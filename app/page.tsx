"use client";
import Artist from "@/components/Artist";
import { useState } from "react";

export default function Home() {
  const [hoveredElement, setHoveredElement] = useState("");

  const handleMouseLeave = () => {
    setHoveredElement("");
  };

  return (
    <div className="bg-zinc-700 text-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 sm:gap-y-7 lg:gap-x-5 px-5 lg:px-0">
        <div>
          <Artist
            id={1}
            onHover={setHoveredElement}
            onLeave={handleMouseLeave}
            hoveredElement={hoveredElement}
            customStyle1="relative grayscale hover:grayscale-0 lg:ml-16 sm:h-[440px] sm:w-[350px] pt-5 sm:pt-0"
            customStyle2="flex gap-1 absolute sm:bottom-2 sm:-right-7 text-3xl bg-zinc-700 rounded-md p-1"
          />
        </div>
        <div></div>
        <div>
          <Artist
            id={3}
            onHover={setHoveredElement}
            onLeave={handleMouseLeave}
            hoveredElement={hoveredElement}
            customStyle1="relative grayscale hover:grayscale-0 sm:h-[330px] sm:w-[460px] lg:-ml-28 lg:mt-12"
            customStyle2="flex gap-1 absolute sm:bottom-2 sm:-right-7 text-3xl bg-zinc-700 rounded-md p-1"
          />
        </div>
        <div></div>
        <div>
          <Artist
            id={6}
            onHover={setHoveredElement}
            onLeave={handleMouseLeave}
            hoveredElement={hoveredElement}
            customStyle1="relative grayscale hover:grayscale-0 sm:h-[380px] sm:w-[380px]"
            customStyle2="flex gap-1 absolute sm:bottom-2 sm:-left-16 text-3xl bg-zinc-700 rounded-md p-1"
          />
        </div>
        <div></div>
        <div>
          <Artist
            id={4}
            onHover={setHoveredElement}
            onLeave={handleMouseLeave}
            hoveredElement={hoveredElement}
            customStyle1="relative grayscale hover:grayscale-0 sm:h-[320px] sm:w-[500px] lg:ml-14 lg:mt-7"
            customStyle2="flex gap-1 absolute sm:bottom-2 sm:-right-[28px] text-3xl bg-zinc-700 rounded-md p-1"
          />
        </div>
        <div></div>
        <div>
          <Artist
            id={2}
            onHover={setHoveredElement}
            onLeave={handleMouseLeave}
            hoveredElement={hoveredElement}
            customStyle1="relative grayscale hover:grayscale-0 lg:-ml-6 sm:w-[390px] sm:h-[390px]"
            customStyle2="flex gap-1 absolute sm:bottom-2 sm:-left-16 text-3xl bg-zinc-700 rounded-md p-1"
          />
        </div>
        <div></div>
        <div>
          <Artist
            id={5}
            onHover={setHoveredElement}
            onLeave={handleMouseLeave}
            hoveredElement={hoveredElement}
            customStyle1="relative grayscale hover:grayscale-0 sm:h-[380px] sm:w-[380px]"
            customStyle2="flex gap-1 absolute sm:bottom-2 sm:-left-16 text-3xl bg-zinc-700 rounded-md p-1"
          />
        </div>
        <div></div>
        <div>
          <Artist
            id={8}
            onHover={setHoveredElement}
            onLeave={handleMouseLeave}
            hoveredElement={hoveredElement}
            customStyle1="relative grayscale hover:grayscale-0 lg:ml-24 lg:mt-7 sm:w-[375px] sm:h-[375px]"
            customStyle2="flex gap-1 absolute sm:bottom-2 sm:-right-8 text-3xl bg-zinc-700 rounded-md p-1"
          />
        </div>
        <div></div>
        <div>
          <Artist
            id={7}
            onHover={setHoveredElement}
            onLeave={handleMouseLeave}
            hoveredElement={hoveredElement}
            customStyle1="relative grayscale hover:grayscale-0 lg:-ml-4 lg:-mt-5 sm:w-[380px] sm:h-[410px]"
            customStyle2="flex gap-1 absolute sm:bottom-2 sm:-left-16 text-3xl bg-zinc-700 rounded-md p-1"
          />
        </div>
      </div>
      <footer className="text-center p-3 mt-5 text-lg pt-14 sm:pt-5">
        Made by Victoria Raya
      </footer>
    </div>
  );
}
