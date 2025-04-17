import { ResizableNavbar } from "./components/Navbar/Navbar";
import WelcomeMessage from "./components/WelcomeMessage/WelcomeMessage";
import { HeroParallaxDemo } from "./components/HeroParallex/HeroParallex";
import { BentoGridDemo } from "./components/Bento/BentoGrid";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation Bar */}
      <ResizableNavbar />

      {/* Welcome Section */}
      <WelcomeMessage />

      {/* Hero Section with Parallax Effect */}
      <HeroParallaxDemo />

      {/* Scroll Animation Section */}
      <div className="col-span-1 md:col-span-3 m-10">
          <h2 className="text-2xl font-bold text-center text-neutral-600 ">
            Our Services
          </h2>
      </div>
      <BentoGridDemo />

      {/* Footer Section */}
      <Footer/>
    </div>
  );
}
