import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer absolute bottom-0 py-6 text-white text-center">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        
        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Vrushant14"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/vrushantmukherjee14"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Resume Download */}
        <a
          href="/Vrushant_Resume.pdf"
          download="Vrushant_Resume.pdf"
          className="resume-btn px-4 py-2 bg-indigo-200 bg-opacity-20 rounded-md text-white font-medium hover:bg-opacity-50 transition duration-300"
        >
          Download Resume
        </a>

        {/* Footer Text */}
        <p className="text-sm text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Vrushant Mukherjee. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
