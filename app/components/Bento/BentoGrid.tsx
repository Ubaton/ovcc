import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
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
    description: "Daily subject-specific classes by qualififed tutors, available in-person or virtually.",
    header: (
      <div className="w-full h-40 md:h-full relative overflow-hidden rounded-xl">
        <img
          src="/assets/online.jpg"
          alt="Tutoring session"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Exam Practice Tools",
    description: "Accessible exam practice tools to help you prepare for your exams.",
    header: (
      <div className="w-full h-40 md:h-full relative overflow-hidden rounded-xl">
        <img
          src="/assets/learning.jpg"
          alt="Tutoring session"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Career Simulation Tool",
    description: "Interactive mobile tool that matches learners APS scores with career pathways and university requirements.",
    header: (
      <div className="w-full h-40 md:h-full relative overflow-hidden rounded-xl">
        <img
          src="/assets/simulate.jpg"
          alt="Tutoring session"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Parental Profile Access",
    description:
      "Dedicated space for parents to monitor academic performance, attendance, and progress in real time.",
      header: (
        <div className="w-full h-40 md:h-full relative overflow-hidden rounded-xl">
          <img
            src="/assets/service.jpg"
            alt="Tutoring session"
            className="w-full h-full object-cover"
          />
        </div>
      ),
      className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Administrative Support",
    description: "Digital tools for streamlining student data and academic management, specially tailored for high schools and higher education platforms.",
    header: (
      <div className="w-full h-40 md:h-full relative overflow-hidden rounded-xl">
        <img
          src="/assets/support.jpg"
          alt="Tutoring session"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Skils Development & Training",
    description: "Practical and career-aligned learning for skills that matter beyond the classroom.",
    header: (
      <div className="w-full h-40 md:h-full relative overflow-hidden rounded-xl">
        <img
          src="/assets/practice.jpg"
          alt="Tutoring session"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
];
