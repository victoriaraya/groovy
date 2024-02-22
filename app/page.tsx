"use client";
import React, { useState } from "react";
import { artists } from "@/prisma/artists";
import Image from "next/image";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

export default function Home() {
  const [hoveredElement, setHoveredElement] = useState("");

  const handleMouseLeave = () => {
    setHoveredElement("");
  };

  return (
    <div className="bg-zinc-700 text-white">
      <div className="grid grid-cols-3 gap-y-7 gap-x-5">
        <div
          id="wizkid"
          className="relative grayscale hover:grayscale-0 ml-16 h-[440px] w-[350px]"
          onMouseEnter={() => {
            setHoveredElement("wizkid");
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/artist/1">
            <Image
              className="h-full w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              src="/images/wizkid.jpg"
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
          </Link>
        </div>
        <div></div>
        <div
          className="relative grayscale hover:grayscale-0 h-[330px] w-[460px] -ml-28 mt-12"
          onMouseEnter={() => {
            setHoveredElement("don");
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/artist/3">
            <Image
              className="h-full w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              src="/images/dontoliver.jpg"
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
          </Link>
        </div>
        <div></div>
        <div
          className="relative grayscale hover:grayscale-0 h-[380px] w-[380px]"
          onMouseEnter={() => {
            setHoveredElement("kali");
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/artist/6">
            <Image
              className="h-full w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              src="/images/kaliuchis.jpg"
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
          </Link>
        </div>
        <div></div>
        <div
          className="relative grayscale hover:grayscale-0 h-[320px] w-[500px] ml-14 mt-7"
          onMouseEnter={() => {
            setHoveredElement("amr");
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/artist/4">
            <Image
              className="h-full w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              src="/images/amrdiab.jpg"
              width={400}
              height={400}
              alt={artists[3].name}
            />
            <div className="flex gap-1 absolute bottom-2 -right-[28px] text-3xl bg-zinc-700 rounded-md p-1">
              <span className="animate-pulse">
                {hoveredElement == "amr" ? <FaPlus /> : <FaMinus />}
              </span>
              {artists[3].name}
            </div>
          </Link>
        </div>
        <div></div>
        <div
          className="relative grayscale hover:grayscale-0 -ml-6 w-[390px] h-[390px]"
          onMouseEnter={() => {
            setHoveredElement("rema");
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/artist/2">
            <Image
              className="h-full w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              src="/images/rema.jpg"
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
          </Link>
        </div>
        <div></div>
        <div
          className="relative grayscale hover:grayscale-0 h-[380px] w-[380px]"
          onMouseEnter={() => {
            setHoveredElement("cleo");
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/artist/5">
            <Image
              className="h-full w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              src="/images/cleosol.jpg"
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
          </Link>
        </div>
        <div></div>
        <div
          className="relative grayscale hover:grayscale-0 ml-24 mt-7 w-[375px] h-[375px]"
          onMouseEnter={() => {
            setHoveredElement("kaytra");
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/artist/8">
            <Image
              className="h-full w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              src="/images/kaytranada.jpg"
              width={400}
              height={400}
              alt={artists[7].name}
            />
            <div className="flex gap-1 absolute bottom-2 -right-8 text-3xl bg-zinc-700 rounded-md p-1">
              <span className="animate-pulse">
                {hoveredElement == "kaytra" ? <FaPlus /> : <FaMinus />}
              </span>
              {artists[7].name}
            </div>
          </Link>
        </div>
        <div></div>
        <div
          className="relative grayscale hover:grayscale-0 -ml-4 -mt-5 w-[380px] h-[410px]"
          onMouseEnter={() => {
            setHoveredElement("beenie");
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/artist/7">
            <Image
              className="h-full w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              src="/images/beenieman.jpg"
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
          </Link>
        </div>
      </div>
      <footer className="text-center p-3.5 mt-5 text-lg">
        Made by Victoria Raya
      </footer>
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
