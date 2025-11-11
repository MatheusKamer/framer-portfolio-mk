"use client";

import { useEffect, useRef, useState } from "react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Reviews from "@/components/Reviews";
import Projects from "@/components/Projects";
import PricingPlans from "@/components/PricingPlans";
import Contact from "@/components/Contact";
import Questions from "@/components/Questions";
import NavBar from "@/components/NavBar";

export default function Home() {
  const [id, setId] = useState("0");
  const componentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          if (intersecting) {
            setId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const children = componentRef.current?.children ?? [];
    const componentsArray = Array.from(children) as Element[];

    componentsArray.forEach((child) => observer.observe(child));

    return () => {
      componentsArray.forEach((child) => observer.unobserve(child));
    };
  }, []);

  return (
    <>
      <NavBar id={id} />
      <div ref={componentRef} className="w-full">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Reviews />
        <Projects />
        <PricingPlans />
        <Contact />
        <Questions />
      </div>
    </>
  );
}
