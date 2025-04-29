"use client";

import {
  School,
  ClipboardList,
  Users,
  FileText,
  GraduationCap,
  Compass,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import BackButton from "../components/BackButton/BackButton";

export default function page() {
  const offerings = [
    {
      title: "Academic Management",
      icon: <ClipboardList size={28} />,
      description:
        "Track student performance, attendance, and academic progress in one intuitive dashboard.",
    },
    {
      title: "Tutoring (On-Site & Online)",
      icon: <School size={28} />,
      description:
        "Provide access to daily tutoring sessions — either in person or virtually, powered by OVCC's platform.",
    },
    {
      title: "Smart Student Profiles",
      icon: <Users size={28} />,
      description:
        "Each learner gets a digital profile to monitor growth, goals, and alignment with career paths.",
    },
    {
      title: "Parent Engagement",
      icon: <FileText size={28} />,
      description:
        "Parents stay informed with live updates on performance, attendance, and progress.",
    },
    {
      title: "Skills-Based Training",
      icon: <GraduationCap size={28} />,
      description:
        "Prepare learners for the future with career-relevant and practical training modules.",
    },
    {
      title: "Career & University Matching",
      icon: <Compass size={28} />,
      description:
        "Match students’ performance and passion to the right career and university options.",
    },
  ];

  return (
    <motion.section
      id="schools"
      className="py-20 px-6 md:px-24 bg-white text-gray-800"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
        <BackButton/>
        <h2 className="text-4xl font-bold">For Schools</h2>
        <p className="text-gray-600 text-lg">
          Empower your institution with tools that support excellence, efficiency, and innovation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {offerings.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-4 text-mirage">
              {item.icon}
              <h4 className="text-xl font-semibold">{item.title}</h4>
            </div>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-20 space-y-6">
        <h3 className="text-2xl font-semibold">Want to see OVCC in action?</h3>
        <p className="text-gray-600 max-w-lg mx-auto">
          Discover how our platform can be tailored to your school’s specific needs.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition"
        >
          Request a School Demo
        </Link>
      </div>
    </motion.section>
  );
}
