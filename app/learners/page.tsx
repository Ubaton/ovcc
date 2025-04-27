"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle, Star } from "lucide-react";
import { Button } from "../components/ui/button"; // Adjust this path if needed
import Link from "next/link";
import BackButton from "../components/BackButton/BackButton";

export default function page() {
  const learnerCardData = [
    {
      icon: BookOpen,
      title: "Personalized Learning",
      description: "OVCC tailors educational content to match your learning style, ensuring you get the most out of your studies.",
    },
    {
      icon: CheckCircle,
      title: "Track Your Progress",
      description: "Easily monitor your academic achievements and growth with real-time updates on your grades, assignments, and attendance.",
    },
    {
      icon: Star,
      title: "Motivation & Rewards",
      description: "Earn rewards and badges for completing milestones, setting goals, and improving your performance.",
    },
  ];

  return (
    <section className="bg-white text-gray-800">
      <BackButton />
      {/* Hero Section */}
      <div className="py-20 px-6 md:px-20 text-center space-y-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Empowering Learners for Success
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          OVCC helps you stay on top of your education journey with real-time tracking, personalized learning, and engaging rewards.
        </motion.p>
      </div>

      {/* Features for Learners */}
      <div className="py-16 px-6 md:px-20">
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {learnerCardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl shadow-md p-8 text-center space-y-6 hover:shadow-lg transition"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <card.icon size={40} className="mx-auto text-mirage" />
              </motion.div>
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* About OVCC for Learners */}
      <div className="bg-gray-50 text-center py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold">About OVCC for Learners</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          OVCC isn&apos;t just for parents — it's also a powerful tool for students. From tracking your assignments to celebrating your achievements, OVCC helps you stay focused, motivated, and on track to reach your academic goals.
        </p>
      </div>

      {/* Success Stories Section */}
      <div className="bg-mirage text-gray-800 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold">Success Stories</h2>
        <p className="text-lg mt-4">See how students like you are using OVCC to enhance their learning experience:</p>
        <div className="mt-8 space-y-6">
          <p className="italic">“With OVCC, I can easily track my grades and see where I need to improve. It&apos;s been a game-changer for my motivation!”</p>
          <p className="italic">“The personalized learning features helped me focus on areas where I was struggling, and I&apos;ve noticed significant improvement!”</p>
        </div>
      </div>

      {/* Gamification & Rewards Section */}
      <div className="py-16 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Gamification & Rewards</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Stay motivated with OVCC&apos;s gamification system. Earn rewards and unlock achievements as you complete assignments, set goals, and improve your skills. It&apos;s not just about learning; it&apos;s about celebrating your progress!
        </p>
      </div>

      {/* How It Works for Learners Section */}
      <div className="py-20 px-6 md:px-20 max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            OVCC is easy to use, and it helps you manage your academic life more effectively. Here&apos;s how it works:
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[ 
            { step: "1", title: "Sign Up & Connect", description: "Create your account and link to your courses and assignments." },
            { step: "2", title: "Track Your Work", description: "View your grades, assignments, and progress in one central place." },
            { step: "3", title: "Earn Rewards", description: "Complete tasks, set goals, and earn rewards for your achievements." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition space-y-4"
            >
              <div className="text-4xl font-bold text-mirage">{item.step}</div>
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16">
        <Link href="/register">
          <Button variant="outline" className="text-black border-black hover:bg-mirage hover:text-white transition">
            Join OVCC Today
          </Button>
        </Link>
      </div>
    </section>
  );
}
