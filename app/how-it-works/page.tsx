"use client"

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUserPlus,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaTools,
  FaSchool,
  FaChartLine,
} from 'react-icons/fa';
import { Button } from '../components/ui/button';
import BackButton from '../components/BackButton/BackButton';
import { useRouter } from 'next/navigation';



const steps = [
  {
    icon: <FaUserPlus className="text-3xl text-mirage" />,
    title: "Sign Up & Get Onboard",
    desc: "Whether you're a learner, parent, or school admin — getting started is quick and easy. Access your personalized dashboard right away.",
  },
  {
    icon: <FaGraduationCap className="text-3xl text-mirage" />,
    title: "Personalized Learning",
    desc: "Students receive tutoring, exam practice, and skills training tailored to their goals, both online and in person.",
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-mirage" />,
    title: "Parent & Teacher Insights",
    desc: "Real-time dashboards help parents and teachers stay connected to academic progress, attendance, and trends.",
  },
  {
    icon: <FaTools className="text-3xl text-mirage" />,
    title: "Career Readiness Tools",
    desc: "Learners discover career paths with simulation tools that align APS scores and subject choices to future goals.",
  },
  {
    icon: <FaSchool className="text-3xl text-mirage" />,
    title: "Seamless Admin for Schools",
    desc: "Schools use smart tools to manage learners, performance, and communication — all in one place.",
  },
  {
    icon: <FaChartLine className="text-3xl text-mirage" />,
    title: "Growth Beyond School",
    desc: "We empower learners with real-world skills to help them thrive long after graduation.",
  },
];

const Page = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/contact'); // or any other route
  };

  return (
    <>
      {/* Gradient Intro Divider */}
      <div className="h-24 bg-gradient-to-b from-white to-transparent" />
        {/* Back Button */}
        <BackButton />

      <section className="bg-white text-gray-800 px-6 py-16 md:px-24 relative">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-mirage">
              How OVCC Works
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A smarter, simpler, and more impactful way to empower every learner — with tools that guide, connect, and inspire.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  i % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-shrink-0 bg-aqua-island/10 rounded-full p-6">
                  {step.icon}
                </div>
                <div className="text-center md:text-left max-w-md">
                  <h2 className="text-2xl font-semibold text-mirage">
                    {step.title}
                  </h2>
                  <p className="text-gray-700 mt-2">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA Text */}
          <div className="text-center pt-16">
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-mirage"
            >
              OVCC is more than a system — it&apos;s your academic journey&apos;s best companion.
            </motion.h3>
            <p className="text-gray-600 mt-2">
              Let&apos;s explore, learn, and succeed — together.
            </p>
          </div>
        </div>
      </section>

      {/* Gradient Exit Divider */}
      <div className="h-24 bg-gradient-to-t from-sky-100 to-transparent" />

      {/* Bottom CTA Section */}
      <section className="text-center bg-mirage text-black py-16 px-6 rounded-t-xl shadow-inner">
        <h2 className="text-3xl font-bold">Ready to transform learning with OVCC?</h2>
        <p className="text-lg mt-2 mb-6">
          Join thousands of learners, schools, and parents creating brighter futures.
        </p>
        <Button
          onClick={handleClick}
          className="inline-block text-white font-semibold rounded-full hover:bg-gray-400 transition cursor-pointer"
        >
          Get Started 🚀
        </Button>
      </section>
    </>
  );
}

export default Page;
