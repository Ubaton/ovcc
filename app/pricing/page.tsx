"use client";

import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import BackButton from "../components/BackButton/BackButton";
import type { FeatureRow } from "../components/PricingTable/PricingTable";
import PricingTable from "../components/PricingTable/PricingTable";


const plans = [
  {
    title: "Basic",
    price: "Free",
    audience: "Learners & Parents",
    features: [
      "Access to live & recorded classes",
      "Career simulator & APS matcher",
      "Basic performance tracking",
      "Limited Resources",
    ],
    highlight: "Great for exam preparation",
  },
  {
    title: "Premium",
    price: "R99/mo",
    audience: "Learners & Parents",
    features: [
      "Everything in Basic",
      "AI Study Assistant",
      "Parent dashboard insights",
      "Direct messaging with tutors",
      "Unlimited Resource"
    ],
    highlight: "Perfect for busy families",
  },
  {
    title: "Elite",
    price: "R149/mo",
    audience: "Learners & Parents",
    features: [
      "Everything in Premium",
      "Skill-building & micro-courses",
      "Auto varsity applications",
      "Priority academic support",
    ],
    highlight: "Maximum value & support",
  },
];

const features: FeatureRow[] = [
  ["Live & Recorded Classes", true, true, true],
  ["Career APS Matching", true, true, true],
  ["Parent Dashboard", false, true, true],
  ["AI Study Assistant", false, true, true],
  ["Direct Tutor Messaging", false, true, true],
  ["Micro-Courses & Skill Building", false, false, true],
  ["Auto Varsity Application", false, false, true],
  ["Priority Support", false, false, true],
];

export default function page() {
  return (
    <section className="bg-white text-gray-800 py-20 px-6 md:px-20">
      <BackButton/>
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl font-bold">Choose Your Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Affordable plans for students and parents — designed to support every academic journey.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              {/* Popular Badge */}
              {plan.title === "Elite" && (
                <span className="absolute top-0 right-0 bg-black text-white px-4 py-1 text-xs font-semibold rounded-bl-xl rounded-tr-xl z-10">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <p className="text-2xl font-bold text-mirage my-2">{plan.price}</p>
              <p className="text-sm text-faded-jade mb-4">{plan.audience}</p>
              <ul className="text-sm text-left space-y-2 mt-4">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="before:content-['✓'] before:mr-2 text-gray-700">
                    {feat}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-faded-jade mt-4 italic">{plan.highlight}</p>
              <Button className="mt-6 w-full text-white bg-black hover:bg-opacity-90 cursor-pointer">
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 space-y-4 text-center">
          <p className="text-gray-600">Need help choosing a plan?</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="cursor-pointer">Talk to Support</Button>
          </div>
        </div>

        {/* Compare Table */}
        <PricingTable features={features}/>
        {/* FAQs */}
        <div className="mt-20 space-y-8">
          <div className="space-y-4 max-w-3xl mx-auto text-gray-700 text-sm">
            <h3 className="text-2xl font-semibold text-center">Pricing FAQs</h3>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Can I switch plans later?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! You can upgrade or downgrade anytime directly from your profile dashboard.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Are there any cancellation fees?</AccordionTrigger>
                <AccordionContent>
                  No. Cancel anytime without extra charges. We believe in flexibility and fairness.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Do parents and learners need separate subscriptions?</AccordionTrigger>
                <AccordionContent>
                  Not at all. One subscription covers both the learner and their connected parent account.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Do you offer school bulk pricing?</AccordionTrigger>
                <AccordionContent>
                  We currently only support individual subscriptions, but school-wide access is free for academic tracking.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
          </div>
        </div>
    </section>
  );
}
