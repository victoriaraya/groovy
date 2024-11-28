"use client";
import Artist from "@/components/Artist";
import { useState } from "react";

export default function Home() {
  const [hoveredElement, setHoveredElement] = useState("");

  const handleMouseLeave = () => {
    setHoveredElement("");
  };

  return (
    <div className="bg-zinc-700 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-7 lg:gap-x-5 px-5 lg:px-0">
        <div>
          <Artist
            id={1}
            onHover={setHoveredElement}
            onLeave={handleMouseLeave}
            hoveredElement={hoveredElement}
            customStyle1="relative grayscale hover:grayscale-0 lg:ml-16 h-[440px] w-[350px]"
            customStyle2="flex gap-1 absolute bottom-2 -right-7 text-3xl bg-zinc-700 rounded-md p-1"
          />
        </div>
        <div></div>
        <div>
          <Artist
            id={3}
            onHover={setHoveredElement}
            onLeave={handleMouseLeave}
            hoveredElement={hoveredElement}
            customStyle1="relative grayscale hover:grayscale-0 h-[330px] w-[460px] lg:-ml-28 lg:mt-12"
            customStyle2="flex gap-1 absolute bottom-2 -right-7 text-3xl bg-zinc-700 rounded-md p-1"
          />
        </div>
        <div></div>
        <div>
          <Artist
            id={6}
            onHover={setHoveredElement}
            onLeave={handleMouseLeave}
            hoveredElement={hoveredElement}
            customStyle1="relative grayscale hover:grayscale-0 h-[380px] w-[380px]"
            customStyle2="flex gap-1 absolute bottom-2 -left-16 text-3xl bg-zinc-700 rounded-md p-1"
          />
        </div>
        <div></div>
        <div>
          <Artist
            id={4}
            onHover={setHoveredElement}
            onLeave={handleMouseLeave}
            hoveredElement={hoveredElement}
            customStyle1="relative grayscale hover:grayscale-0 h-[320px] w-[500px] lg:ml-14 lg:mt-7"
            customStyle2="flex gap-1 absolute bottom-2 -right-[28px] text-3xl bg-zinc-700 rounded-md p-1"
          />
        </div>
        <div></div>
        <div>
          <Artist
            id={2}
            onHover={setHoveredElement}
            onLeave={handleMouseLeave}
            hoveredElement={hoveredElement}
            customStyle1="relative grayscale hover:grayscale-0 lg:-ml-6 w-[390px] h-[390px]"
            customStyle2="flex gap-1 absolute bottom-2 -left-16 text-3xl bg-zinc-700 rounded-md p-1"
          />
        </div>
        <div></div>
        <div>
          <Artist
            id={5}
            onHover={setHoveredElement}
            onLeave={handleMouseLeave}
            hoveredElement={hoveredElement}
            customStyle1="relative grayscale hover:grayscale-0 h-[380px] w-[380px]"
            customStyle2="flex gap-1 absolute bottom-2 -left-16 text-3xl bg-zinc-700 rounded-md p-1"
          />
        </div>
        <div></div>
        <div>
          <Artist
            id={8}
            onHover={setHoveredElement}
            onLeave={handleMouseLeave}
            hoveredElement={hoveredElement}
            customStyle1="relative grayscale hover:grayscale-0 lg:ml-24 lg:mt-7 w-[375px] h-[375px]"
            customStyle2="flex gap-1 absolute bottom-2 -right-8 text-3xl bg-zinc-700 rounded-md p-1"
          />
        </div>
        <div></div>
        <div>
          <Artist
            id={7}
            onHover={setHoveredElement}
            onLeave={handleMouseLeave}
            hoveredElement={hoveredElement}
            customStyle1="relative grayscale hover:grayscale-0 lg:-ml-4 lg:-mt-5 w-[380px] h-[410px]"
            customStyle2="flex gap-1 absolute bottom-2 -left-16 text-3xl bg-zinc-700 rounded-md p-1"
          />
        </div>
      </div>
      <footer className="text-center p-3 mt-5 text-lg">
        Made by Victoria Raya
      </footer>
    </div>
  );
}
