import { ResizableNavbar } from "./components/Navbar/Navbar";
import WelcomeMessage from "./components/WelcomeMessage/WelcomeMessage";
import { HeroParallaxDemo } from "./components/HeroParallex/HeroParallex";
import { StickyScrollRevealDemo } from "./components/StickyRoll/StickyRoll";
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
      <StickyScrollRevealDemo />

      {/* Footer Section */}
      <Footer/>
    </div>
  );
}
