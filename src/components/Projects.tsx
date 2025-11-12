"use client";

import { useEffect, useRef, useState } from "react";

import Heading from "./sub/Heading";
import Project from "./sub/Project";

import { projectsButton, projectsData } from "@/assets";
import { animate, motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [selectedButton, setSelectedButton] = useState(0);
  const prevIndex = useRef(0);
  const buttonsRef = useRef<HTMLButtonElement[]>([]);

  const handleButtonClick = (prev: number, next: number) => {
    const prevEl = buttonsRef.current[prev];
    const nextEl = buttonsRef.current[next];

    if (prevEl) {
      animate(prevEl, { opacity: 0.5, scale: 1 }, { duration: 0.25 });
    }

    if (nextEl) {
      animate(nextEl, { opacity: 1, scale: 1.2 }, { duration: 0.25 });
    }
  };

  useEffect(() => {
    handleButtonClick(prevIndex.current, selectedButton);
    prevIndex.current = selectedButton;
  }, [selectedButton]);

  const handleFilterProject = (tech: string) => {
    if (tech === "All") {
      return setProjects(projectsData);
    }

    const filteredProjects = projectsData.filter(
      (project) => !!project.tech?.includes(tech)
    );

    setProjects(filteredProjects);
  };

  return (
    <div id="projects" className="min-h-screen py-20">
      <Heading text="Projects" />
      <div className="flex flex-wrap items-center justify-between gap-4 py-10">
        {projectsButton.map((tech, index) => (
          <motion.button
            key={index}
            initial={{
              opacity: index === 0 ? 1 : 0.5,
              scale: index === 0 ? 1.2 : 1,
            }}
            ref={(element) => {
              if (element) buttonsRef.current[index] = element;
            }}
            className="px-2 py-1 text-sm font-light tracking-wider text-gray-400 rounded-xl border border-yellow-500"
            onClick={() => {
              setSelectedButton(index);
              handleFilterProject(tech);
            }}
          >
            {tech}
          </motion.button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {projects.map((projectData, index) => (
          <motion.div key={`id-${index}`} layout>
            <Project
              name={projectData.name}
              desc={projectData.desc}
              url={projectData.url}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
