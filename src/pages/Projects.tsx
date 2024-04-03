import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import anime from "animejs";

interface Project {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Projects: React.FC = () => {
  const [, setA1Ref] = useState<ReturnType<typeof anime> | undefined>();

  useEffect(() => {
    setA1Ref(
      anime({
        targets: ".card",
        translateY: [1000, 0],
        duration: 1000,
        easing: "spring(1, 100, 100, 0)",
        delay: anime.stagger(100),
      })
    );
  }, []);

  const projects: Project[] = [
    {
      image: require("../assets/images/lovelace.png"),
      title: "Lovelace",
      description:
        "Mobile dating application built with Flutter and Flask, focused on implementing securities to prevent data breach.",
      link: "https://github.com/pi-mon/lovelace",
    },
    {
      image: require("../assets/images/flask-blog-secure.png"),
      title: "Flask Blog Secure",
      description:
        "Website application for blogs built with Flask, focused on complying with OWASP Top 10 and OWASP API Top 10 guidelines.",
      link: "https://github.com/lgf2111/flask-blog-secure",
    },
    {
      image: require("../assets/images/vision-core.png"),
      title: "Vision Core",
      description:
        "Website application for hardware repair business built with Flask, focused on application development.",
      link: "https://github.com/lgf2111/vision-core",
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center md:h-screen justify-center mt-24 md:mt-10">
        {projects.map(({ image, title, description, link }, index) => (
          <div key={index} className="my-3 md:my-0 md:w-80 flex justify-center">
            <ProjectCard {...{ image, title, description, link }} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
