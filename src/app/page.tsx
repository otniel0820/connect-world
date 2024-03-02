import Navbar from "@/components/Navbar";
import { HeroParallax } from "@/components/ui/HeroParallax";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <HeroParallax products={[]}/>
      <div className="absolute top-0 w-full z-10">
        <Navbar/>
      </div>
      
    </main>
  );
}
