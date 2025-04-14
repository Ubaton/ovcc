import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";



export default function Home() {
  return (
    <div>
      <Navbar logoSrc={"/ovc2logo.jpg"}/>
      <h1 className="flex justify-center items-center pt-40 text-4xl bg-amber-300">
        Hello OVC<sup>2</sup>
      </h1>
    </div>
  );
}
