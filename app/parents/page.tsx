"use client";

import { motion } from "framer-motion";
import { Users, Eye, ShieldCheck } from "lucide-react";
import { Button } from "../components/ui/button"; // Adjust this path if needed
import Link from "next/link";
import BackButton from "../components/BackButton/BackButton";

export default function page() {
  const cardData = [
    {
      icon: Users,
      title: "Parent Dashboard",
      description: "Monitor academic performance, attendance, and feedback — all in one place.",
    },
    {
      icon: Eye,
      title: "Real-Time Visibility",
      description: "See daily class updates, exam results, and upcoming assignments at your fingertips.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Private",
      description: "Your child's information is protected with top-level security and privacy standards.",
    },
  ];

  return (
    <section className="bg-white text-gray-800">
      <BackButton />

      {/* Background Accent Blob */}
      {/* Hero Section */}
      <div className="py-20 px-6 md:px-20 text-center space-y-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Empowering Parents, Empowering Futures
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          At OVCC, we believe that education is a family journey. Our platform connects you directly to your child&apos;s progress — creating stronger, more confident learners.
        </motion.p>
      </div>

      {/* Features */}
      <div className="py-16 px-6 md:px-20">
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {cardData.map((card, index) => (
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

      {/* About OVCC Section */}
      <div className="bg-gray-50 text-center py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold">About OVCC</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          OVCC is a comprehensive school management platform designed to empower parents by providing easy access to real-time updates on their child&apos;s education. From academic progress and attendance tracking to secure communication with teachers, OVCC ensures you&apos;re always in the loop.
        </p>
      </div>

      {/* Features of OVCC Section */}
      <div className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center">Features of OVCC</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Academic Tracking</h3>
            <p className="text-gray-600">Monitor your child&apos;s grades, attendance, and assignments in real-time, ensuring you're always informed of their progress.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Real-Time Notifications</h3>
            <p className="text-gray-600">Stay updated with instant notifications for new grades, exams, assignments, and school events.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Secure Communication</h3>
            <p className="text-gray-600">Easily communicate with teachers, administrators, and other school staff through a secure messaging system.</p>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="bg-mirage text-gray-800 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold">Success Stories</h2>
        <p className="text-lg mt-4">OVCC has helped countless families stay connected and actively involved in their children&apos;s learning journey. Here&apos;s how it&apos;s made a difference:</p>
        <div className="mt-8 space-y-6">
          <p className="italic">“Since using OVCC, I&apos;ve been able to track my child&apos;s grades and attendance without waiting for reports. It&apos;s incredibly reassuring to have everything at my fingertips!”</p>
          <p className="italic">“The real-time updates keep me informed about my child&apos;s academic journey, and I can communicate directly with teachers when I have concerns.”</p>
        </div>
      </div>

      {/* Security & Privacy Section */}
      <div className="py-16 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Security & Privacy</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          At OVCC, we prioritize your child&apos;s safety and privacy. Our platform uses state-of-the-art encryption and follows the highest standards of data protection to ensure that all personal information remains secure. Your child&apos;s academic data is protected at all times.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="py-16 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold">Pricing Plans</h2>
        <p className="text-gray-600 mt-4">OVCC offers flexible pricing plans to fit your needs. Choose a plan that works for you and get started with a free trial today.</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
            <h3 className="text-xl font-semibold">Basic Plan</h3>
            <p className="text-gray-600">Access to core features such as progress tracking and attendance.</p>
            <p className="text-lg font-bold">R0/month</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
            <h3 className="text-xl font-semibold">Advanced Plan</h3>
            <p className="text-gray-600">Includes all features plus priority support and additional customization options.</p>
            <p className="text-lg font-bold">R100/month</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
            <h3 className="text-xl font-semibold">Premium Plan</h3>
            <p className="text-gray-600">Includes all features plus priority support and additional customization options.</p>
            <p className="text-lg font-bold">R950/year</p>
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold">Getting Started</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Setting up your OVCC account is easy! Follow our step-by-step guide to get started today. You&apos;ll be tracking your child&apos;s progress and staying involved in no time.
        </p>
        <div className="mt-8">
          <Link href="/getting-started">
            <Button variant="outline" className="text-black border-black hover:bg-mirage hover:text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
