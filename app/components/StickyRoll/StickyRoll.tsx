"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Our Services",
    description:
      "We offer a full suite digital and in-person services designed to uplift education and prepare learners for life after high school. Our services include:",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing (replace with Image)
      </div>
    ),
  },
  {
    title: "Extra Tutoring (Virtual & Physical)",
    description:
      "Daily subject-specific classes by qualififed tutors, available in-person or virtually.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Exam Practice Tools",
    description:
      "Accessible exam practice tools to help you prepare for your exams.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Career Simulation Tool",
    description:
      "Interactive mobile tool that matches learners’ APS scores with career pathways and university requirements.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },  {
    title: "Parenta Profile Access",
    description:
      "Dedicated space for parents to monitor academic performance, attendance, and progress in real time.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Skils Development & Training",
    description:
      "Practical and career-aligned learning for skills that matter beyond the classroom.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Administrative Support",
    description:
      "Digital tools for streamlining student data and academic management, specially tailored for high schools and higher education platforms.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "",
    description:
      "",
    // content: (
    //   <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
    //     Running out of content
    //   </div>
    // ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
