// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: "Bargain Bot",
    description: "A multicommerce platform for comparing prices across sites.",
    link: "https://github.com/Vrushant-Portfolio/Bargain-Bot",
  },
  // Add other projects similarly
];

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-100 text-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 mt-2 block">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
