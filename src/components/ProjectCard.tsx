import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <div className="flex items-center md:block w-10/12 lg:w-4/5 p-6  border  rounded-lg shadow bg-green-200 border-green-100 card">
      <div className="md:max-w-52 md:max-h-52 mb-5 p-5 bg-gray-100 rounded-lg">
        <img src={image} alt={title} className="w-52 max-h-52" />
      </div>
      <div className="flex flex-col md:block ms-5 md:ms-0">
        <a href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 md:h-32">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          <FontAwesomeIcon
            icon={faGithub as IconProp}
            className="w-4 h-4 me-2 -mr-1"
          />
          View Repository
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
