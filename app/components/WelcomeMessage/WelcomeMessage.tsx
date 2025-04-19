// components/WelcomeMessage.tsx
import React from "react";
import { ContainerTextFlip } from "../ui/container-text-flip";

const WelcomeMessage = () => {
    const words = ["Explore", "Learn", "Succeed"]

  return (
    <section className="w-full px-4 py-12 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Your Gateway to Academic Success
        </h1>
        <p className="text-lg leading-relaxed">
          OVCC is a forward-thinking digital education platform empowering high school learners to unlock their full academic and career potential.
          Whether online or in person, we provide powerful tools, personalized tutoring, and career-driven insights — guiding students every step
          of the way from the classroom to their future.
        </p>

        <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 p-4">
            <ContainerTextFlip words={words} />
        </div>
        
        <div className="text-md text-neutral-500 dark:text-neutral-400 space-x-2">
          <span>Learn smarter.</span>
          <span>|</span>
          <span>Dream bigger.</span>
          <span>|</span>
          <span>Succeed boldly.</span>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
