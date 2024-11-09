// src/components/Skills.jsx
import React from 'react';

const skills = ["React", "Vite", "Tailwind CSS", "MongoDB", "Node.js", "Postman"];

const Skills = () => (
  <section id="skills" className="py-20 bg-white text-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <ul className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="bg-gray-200 px-4 py-2 rounded-md">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Skills;
