"use client";

import { motion } from "framer-motion";
import { GraduationCap, PencilRuler, Rocket, UserCheck, FileText, LayoutDashboard, Compass, BrainCog, Target } from "lucide-react";
import { Button } from "../components/ui/button";
import BackButton from "../components/BackButton/BackButton";

const features = [
  {
    icon: <PencilRuler size={28} className="text-faded-jade" />,
    title: "Smart Tutoring — Anytime, Anywhere",
    description: "Join daily lessons tailored to your grade and subjects, taught by passionate educators — accessible online or on school grounds.",
  },
  {
    icon: <FileText size={28} className="text-reddish-orange" />,
    title: "Real Exam Practice — Zero Stress",
    description: "Boost confidence with free, downloadable past papers and memos. Get smart tips and prep like a pro.",
  },
  {
    icon: <Compass size={28} className="text-mirage" />,
    title: "Career Path Matching",
    description: "Use your APS score to discover real career options and university programs — instantly.",
  },
  {
    icon: <Rocket size={28} className="text-aqua-island" />,
    title: "One-Click Varsity Applications",
    description: "No lines. No hassle. Apply to multiple universities in seconds through our platform.",
  },
  {
    icon: <LayoutDashboard size={28} className="text-faded-jade" />,
    title: "Personal Dashboard",
    description: "Track your progress, goals, and academic growth in one beautiful, easy-to-use interface.",
  },
  {
    icon: <UserCheck size={28} className="text-chalk" />,
    title: "Life Skills for Success",
    description: "Learn time management, communication, financial literacy, and more — skills that matter beyond school.",
  },
  {
    icon: <GraduationCap size={28} className="text-reddish-orange" />,
    title: "Connect with Mentors",
    description: "Chat with real students and professionals who guide and motivate you towards your future.",
  },
  {
    icon: <BrainCog size={28} className="text-aqua-island" />,
    title: "AI-Powered Study Assistant",
    description: "Get answers, explanations, and revision tips from our smart learning bot — like having a tutor 24/7.",
  },
  {
    icon: <Target size={28} className="text-reddish-orange" />,
    title: "Goal Tracker & Rewards",
    description: "Set academic goals and earn achievement badges when you reach them — gamified learning that keeps you motivated.",
  },
  
];

export default function page() {
  return (
    <section className="bg-white text-gray-800 px-6 md:px-20 py-20">
      <BackButton/>
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl font-bold tracking-tight">
            Built for Students. Powered by Your Dreams.
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            OVCC is your all-in-one learning companion — designed to help you succeed in school,
            explore your future, and take action. From test prep to university applications, we&apos;ve got your back.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-4">{feature.icon}<h3 className="text-lg font-semibold">{feature.title}</h3></div>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center pt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button className="bg-black text-white font-medium py-3 px-6 rounded-lg hover:bg-opacity-90 transition cursor-pointer">
            Create Your Free Profile
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
