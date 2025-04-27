"use client";

import {
  BookOpen,
  ClipboardList,
  BarChart,
  UserCircle2,
  Brain,
  School,
} from "lucide-react";
import { motion } from "framer-motion";
import BackButton from "../components/BackButton/BackButton";

const services = [
  {
    icon: <BookOpen size={28} />,
    title: "Extra Tutoring",
    desc: "Daily subject-specific sessions by certified tutors — online or at school.",
  },
  {
    icon: <ClipboardList size={28} />,
    title: "Exam Practice Tools",
    desc: "Downloadable past papers & memos to prepare for exams effectively.",
  },
  {
    icon: <BarChart size={28} />,
    title: "Career Simulation Tool",
    desc: "Match APS scores to careers & university programs in real-time.",
  },
  {
    icon: <UserCircle2 size={28} />,
    title: "Parent Profile Access",
    desc: "Live dashboards for parents to track performance, progress, and attendance.",
  },
  {
    icon: <Brain size={28} />,
    title: "Skills Training",
    desc: "Career-aligned development for life beyond the classroom.",
  },
  {
    icon: <School size={28} />,
    title: "Admin Support",
    desc: "Digital tools to manage academic records, learners, and reports efficiently.",
  },
];

export default function page() {
  return (
    <section
      id="services"
      className="bg-mirage text-black py-20 px-6 md:px-20"
    >
      <BackButton />
      <div className="max-w-7xl mx-auto text-center space-y-16">
        {/* Title */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-black max-w-2xl mx-auto text-lg">
            Whether on campus or online, OVCC provides powerful solutions
            designed to elevate learning, empower parents, and streamline school systems.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="pt-16">
          <motion.a
            href="/contact"
            className="inline-block bg-reddish-orange text-black text-lg font-medium px-8 py-3 rounded-full shadow-md hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            Book a Free Demo
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white text-gray-800 rounded-2xl p-6 space-y-4 text-left hover:shadow-xl transition">
      <div className="flex items-center space-x-3 text-reddish-orange">
        <div className="bg-reddish-orange/10 p-2 rounded-full">{icon}</div>
        <h4 className="text-lg font-semibold">{title}</h4>
      </div>
      <p className="text-sm text-gray-600 pl-12">{desc}</p>
    </div>
  );
}
