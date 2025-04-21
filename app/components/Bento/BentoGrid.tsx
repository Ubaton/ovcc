import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Image from "next/image";
import { BriefcaseBusiness, GraduationCap, Notebook, NotebookPen, ServerCog, Users } from "lucide-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const items = [
  {
    title: "Extra Tutoring (Virtual & Physical)",
    description: "Daily subject-specific classes by qualified tutors, available in-person or virtually.",
    header: (
      <div className="w-full h-40 md:h-full relative overflow-hidden rounded-xl">
        <Image
          src="/assets/online.jpg"
          alt="Tutoring session"
          fill
          className="object-cover"
        />
      </div>
    ),
    className: "md:col-span-2",
    icon: <Notebook className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Exam Practice Tools",
    description: "Accessible exam practice tools to help you prepare for your exams.",
    header: (
      <div className="w-full h-40 md:h-full relative overflow-hidden rounded-xl">
        <Image
          src="/assets/learning.jpg"
          alt="Exam practice"
          fill
          className="object-cover"
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <NotebookPen className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Career Simulation Tool",
    description: "Interactive mobile tool that matches learners APS scores with career pathways and university requirements.",
    header: (
      <div className="w-full h-40 md:h-full relative overflow-hidden rounded-xl">
        <Image
          src="/assets/simulate.jpg"
          alt="Career simulation"
          fill
          className="object-cover"
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <BriefcaseBusiness className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Parental Profile Access",
    description:
      "Dedicated space for parents to monitor academic performance, attendance, and progress in real time.",
    header: (
      <div className="w-full h-40 md:h-full relative overflow-hidden rounded-xl">
        <Image
          src="/assets/service.jpg"
          alt="Parent access"
          fill
          className="object-cover"
        />
      </div>
    ),
    className: "md:col-span-2",
    icon: <Users className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Administrative Support",
    description: "Digital tools for streamlining student data and academic management, specially tailored for high schools and higher education platforms.",
    header: (
      <div className="w-full h-40 md:h-full relative overflow-hidden rounded-xl">
        <Image
          src="/assets/support.jpg"
          alt="Admin support"
          fill
          className="object-cover"
        />
      </div>
    ),
    className: "md:col-span-2",
    icon: <ServerCog className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Skills Development & Training",
    description: "Practical and career-aligned learning for skills that matter beyond the classroom.",
    header: (
      <div className="w-full h-40 md:h-full relative overflow-hidden rounded-xl">
        <Image
          src="/assets/practice.jpg"
          alt="Skills training"
          fill
          className="object-cover"
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <GraduationCap className="h-4 w-4 text-neutral-500" />,
  },
];