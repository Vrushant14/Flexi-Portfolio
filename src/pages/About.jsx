import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaCloud, FaServer } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiTensorflow, SiPostman } from 'react-icons/si';

const About = () => (
  <section id="about" className="py-20 h-full bg-gradient-to-br from-gray-800 to-gray-900 text-gray-200">
    <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-6xl">
      {/* Home Button */}
      <div className="mb-6 text-center">
        <Link to="/" className="text-white text-4xl hover:text-indigo-500 transition duration-300">
          <FaHome />
        </Link>
      </div>

      {/* About Me Section */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white border-b-2 border-indigo-500 pb-4">About Me</h2>
        <p className="text-lg leading-relaxed mb-6 text-gray-300 max-w-3xl mx-auto">
          I’m Vrushant Mukherjee, a B.Tech Computer Science student at Symbiosis Institute of Technology. I’m deeply passionate about web development, AI/ML, and cybersecurity, with hands-on experience across real-world projects. With a solid foundation in programming languages and full-stack development, I am passionate about transforming ideas into impactful solutions. I thrive on learning new technologies and adapting to the rapid pace of the tech world, always curious to understand how innovations can be applied to solve real problems.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-white mb-6 text-center">Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Skill Boxes */}
          <SkillBox title="Web Development" icon={<FaReact className="text-cyan-400" />} skills={['React', 'Vite', 'Tailwind CSS', 'HTML, CSS, JavaScript']} />
          <SkillBox title="Backend Development" icon={<FaNodeJs className="text-green-400" />} skills={['Node.js', 'Express.js', 'MongoDB', 'API Development']} />
          <SkillBox title="AI/ML" icon={<FaPython className="text-yellow-400" />} skills={['Python', 'TensorFlow', 'Scikit-learn', 'Data Preprocessing']} />
          <SkillBox title="Other Skills" icon={<FaGitAlt className="text-orange-400" />} skills={['Git/GitHub', 'Basic Cloud Knowledge', 'Cybersecurity Principles', 'Postman']} />
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-white mb-6 text-center">Experience</h3>
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-2xl font-semibold text-white mb-4">Meta Craftlab Internship</h4>
          <p className="text-lg text-gray-300">
            As an intern at Meta Craftlab, I worked on multiple projects, gaining hands-on experience in full-stack development. I played a leadership role in one of the projects, guiding the team to meet tight deadlines while building solutions.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-white mb-6 text-center">Education</h3>
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-2xl font-semibold text-white mb-4 hover:text-blue-300"><a href='https://www.sitpune.edu.in/' target="_blank">Symbiosis Institute of Technology</a></h4>
          <p className="text-lg text-gray-300">
            B.Tech in Computer Science and Engineering (Graduation: 2026)
          </p>
        </div>
      </div>
    </div>
  </section>
);

const SkillBox = ({ title, icon, skills }) => (
  <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-600 transition duration-300 transform hover:scale-105">
    <div className="flex items-center mb-4">
      <span className="text-3xl mr-3">{icon}</span>
      <h4 className="text-xl font-semibold text-white">{title}</h4>
    </div>
    <ul className="text-gray-300">
      {skills.map((skill, index) => (
        <li key={index} className="hover:text-indigo-400 transition duration-200">{skill}</li>
      ))}
    </ul>
  </div>
);

export default About;
