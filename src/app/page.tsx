import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
    </div>
  );
}
