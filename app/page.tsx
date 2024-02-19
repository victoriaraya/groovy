"use client";
import { Lobster } from "next/font/google";
import React, { useState } from "react";
import { artists } from "@/prisma/artists";
import Image from "next/image";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const lobster = Lobster({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lobster",
  weight: "400",
});

export default function Home() {
  const [hoveredElement, setHoveredElement] = useState("");

  const handleMouseLeave = () => {
    setHoveredElement("");
  };

  return (
    <div className="bg-zinc-700 text-white">
      <header
        className={`flex-1 flex-row text-center ${lobster.className} text-4xl py-2`}
      >
        <span className="justify-center">Groovy</span>
        <span className="flex justify-end -mt-9 mr-4">
          <Link href="/sign-in">
            <CgProfile />
          </Link>
        </span>
      </header>
      <div className="grid grid-cols-3 gap-y-7 gap-x-5">
        <div
          id="wizkid"
          className="relative grayscale hover:grayscale-0 ml-16 h-[440px] w-[350px]"
          onMouseEnter={() => {
            setHoveredElement("wizkid");
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            className="h-full w-full"
            src="/images/wizkid1.jpg"
            width={314}
            height={314}
            alt={artists[0].name}
          />
          <div className="flex gap-1 absolute bottom-2 -right-7 text-3xl bg-zinc-700 rounded-md p-1">
            <span className="animate-pulse">
              {hoveredElement == "wizkid" ? <FaPlus /> : <FaMinus />}
            </span>
            {artists[0].name}
          </div>
        </div>
        <div></div>
        <div
          className="relative grayscale hover:grayscale-0 h-[330px] w-[460px] -ml-28 mt-12"
          onMouseEnter={() => {
            setHoveredElement("don");
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            className="h-full w-full"
            src="/images/dontoliver1.jpg"
            width={400}
            height={400}
            alt={artists[2].name}
          />
          <div className="flex gap-1 absolute bottom-2 -right-7 text-3xl bg-zinc-700 rounded-md p-1">
            <span className="animate-pulse">
              {hoveredElement == "don" ? <FaPlus /> : <FaMinus />}
            </span>
            {artists[2].name}
          </div>
        </div>
        <div></div>
        <div
          className="relative grayscale hover:grayscale-0 h-[380px] w-[380px]"
          onMouseEnter={() => {
            setHoveredElement("kali");
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            className="h-full w-full"
            src="/images/kaliuchis1.jpg"
            width={400}
            height={400}
            alt={artists[5].name}
          />
          <div className="flex gap-1 absolute bottom-2 -left-16 text-3xl bg-zinc-700 rounded-md p-1">
            <span className="animate-pulse">
              {hoveredElement == "kali" ? <FaPlus /> : <FaMinus />}
            </span>
            {artists[5].name}
          </div>
        </div>
        <div></div>
        <div
          className="relative grayscale hover:grayscale-0 h-[340px] w-[455px] ml-14 mt-7"
          onMouseEnter={() => {
            setHoveredElement("playboi");
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            className="h-full w-full"
            src="/images/playboicarti1.jpg"
            width={400}
            height={400}
            alt={artists[3].name}
          />
          <div className="flex gap-1 absolute bottom-2 -right-6 text-3xl bg-zinc-700 rounded-md p-1">
            <span className="animate-pulse">
              {hoveredElement == "playboi" ? <FaPlus /> : <FaMinus />}
            </span>
            {artists[3].name}
          </div>
        </div>
        <div></div>
        <div
          className="relative grayscale hover:grayscale-0 -ml-6 w-[390px] h-[390px]"
          onMouseEnter={() => {
            setHoveredElement("rema");
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            className="h-full w-full"
            src="/images/rema1.jpg"
            width={400}
            height={400}
            alt={artists[1].name}
          />
          <div className="flex gap-1 absolute bottom-2 -left-16 text-3xl bg-zinc-700 rounded-md p-1">
            <span className="animate-pulse">
              {hoveredElement == "rema" ? <FaPlus /> : <FaMinus />}
            </span>
            {artists[1].name}
          </div>
        </div>
        <div></div>
        <div
          className="relative grayscale hover:grayscale-0 h-[380px] w-[380px]"
          onMouseEnter={() => {
            setHoveredElement("cleo");
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            className="h-full w-full"
            src="/images/cleosol1.jpg"
            width={400}
            height={400}
            alt={artists[4].name}
          />
          <div className="flex gap-1 absolute bottom-2 -left-16 text-3xl bg-zinc-700 rounded-md p-1">
            <span className="animate-pulse">
              {hoveredElement == "cleo" ? <FaPlus /> : <FaMinus />}
            </span>
            {artists[4].name}
          </div>
        </div>
        <div></div>
        <div
          className="relative grayscale hover:grayscale-0 ml-24 mt-7 w-[370px] h-[370px]"
          onMouseEnter={() => {
            setHoveredElement("kaytra");
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            className="h-full w-full"
            src="/images/kaytranada1.jpg"
            width={400}
            height={400}
            alt={artists[7].name}
          />
          <div className="flex gap-1 absolute bottom-2 -right-10 text-3xl bg-zinc-700 rounded-md p-1">
            <span className="animate-pulse">
              {hoveredElement == "kaytra" ? <FaPlus /> : <FaMinus />}
            </span>
            {artists[7].name}
          </div>
        </div>
        <div></div>
        <div
          className="relative grayscale hover:grayscale-0 -ml-4 -mt-5 w-[380px] h-[410px]"
          onMouseEnter={() => {
            setHoveredElement("beenie");
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            className="h-full w-full"
            src="/images/beenieman1.jpg"
            width={400}
            height={400}
            alt={artists[6].name}
          />
          <div className="flex gap-1 absolute bottom-2 -left-16 text-3xl bg-zinc-700 rounded-md p-1">
            <span className="animate-pulse">
              {hoveredElement == "beenie" ? <FaPlus /> : <FaMinus />}
            </span>
            {artists[6].name}
          </div>
        </div>
      </div>
      <footer className="text-center py-1.5 mt-3">Made by Victoria Raya</footer>
    </div>
  );
}

/*<Artist id={1} />
<div></div>
<Artist id={3} />
<div></div>
<Artist id={6} />
<div></div>
<Artist id={4} />
<div></div>
<Artist id={2} />
<div></div>
<div></div>
<div></div>
<div></div>
<Artist id={5} />
<div></div>
<div></div>
<div></div>
<Artist id={7} /> */
