import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Bargain Bot",
    description: "A multicommerce platform for comparing prices across sites.",
    link: "https://github.com/Vrushant14/BargainBot-front/tree/main/frontend/multiCom",
  },
  {
    title: "PPT-Enhancer",
    description: "Web Dev+ Gen AI Project to enhance your PowerPoint presentations.",
    link: "https://github.com/Vrushant14/PPT-Enhancer",
  },
  {
    title: "Assignment Portal System",
    description: "Java-based web app built with Apache NetBeans for managing and submitting assignments.",
    link: "https://github.com/Vrushant14/Assignment-Portal-System",
  },
  {
    title: "Online Voting System",
    description: "A C++ Project on Online Voting System, using OOPS concepts like Inheritance and Polymorphism.",
    link: "https://github.com/Vrushant14/Online-Voting-System",
  }
];

const Projects = () => (
  <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200">
    <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
      
      {/* Home Button */}
      <div className="mb-8 text-left">
        <Link to="/" className="text-white text-4xl hover:text-indigo-500 transition duration-300">
          <FaHome />
        </Link>
      </div>

      {/* Section Header */}
      <h2 className="text-5xl font-bold text-center mb-16 text-indigo-400 tracking-tight uppercase">
        My Projects
      </h2>

      {/* Projects Horizontal Scroll */}
      <div className="overflow-x-auto">
        <div className="flex gap-12 pb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 w-80 flex-shrink-0"
            >
              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-white mb-4 hover:text-indigo-500 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* GitHub Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md text-lg transition duration-300 transform hover:scale-105"
              >
                <FaGithub className="mr-2" />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
