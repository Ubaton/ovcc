"use client";

import { Mail, Send, Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

export default function page() {
  return (
    <section
      id="contact"
      className="bg-white text-gray-800 py-20 px-6 md:px-20 border-t"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Let’s Connect</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Whether you're a school, investor, or parent — we’d love to hear from you.
            Drop us a message and we’ll get back shortly.
          </p>
        </div>

        {/* Contact Form */}
        <motion.form
          className="grid gap-6 md:grid-cols-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! (This is a static demo)");
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-lg p-4 w-full focus:ring-2 focus:ring-mirage outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-lg p-4 w-full focus:ring-2 focus:ring-mirage outline-none"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="md:col-span-2 border border-gray-300 rounded-lg p-4 w-full focus:ring-2 focus:ring-mirage outline-none"
          />
          <Button
            variant="outline"
            type="submit"
            className="text-black font-semibold flex items-center justify-center md:w-fit"
          >
            <Send size={18} />
            Send Message
          </Button>
        </motion.form>

        {/* Contact Info & Socials */}
        <div className="text-center space-y-4 text-sm text-gray-500 pt-10">
          <p>Prefer to email us directly?</p>
          <p className="flex items-center justify-center gap-2 text-base text-gray-700">
            <Mail size={16} /> hello@ovcc.education
          </p>

          {/* Socials */}
          <div className="flex justify-center gap-6 pt-4 text-gray-500">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mirage transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mirage transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mirage transition"
            >
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
