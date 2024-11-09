import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Footer from './Footer';
import { FiAlignJustify } from "react-icons/fi";

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu

  const roles = [
    'Tech Enthusiast',
    'Web Developer',
    'AI/ML Explorer',
    'Cybersecurity Learner'
  ];
  const typingSpeed = 150;
  const deletingSpeed = 100;

  // Typing Effect
  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];

      if (!isDeleting && charIndex < currentRole.length) {
        setText((prev) => prev + currentRole.charAt(charIndex));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      } else if (charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (charIndex === 0 && isDeleting) {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const typingTimer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="hero min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      <div className="animated-bg absolute inset-0 -z-10"></div>

      {/* Hamburger Icon */}
      <div
        className="hamburger absolute top-4 right-4 cursor-pointer z-10"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FiAlignJustify className="text-4xl text-white" />
      </div>

      {/* Navigation Menu */}
      <nav
        className={`fixed top-0 right-0 bg-gray-900 bg-opacity-95 h-full w-1/3 flex flex-col justify-center items-center text-white text-2xl z-20 transform transition-all duration-500 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        <Link
          to="/about"
          className="mb-6 hover:text-indigo-400"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="mb-6 hover:text-indigo-400"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
        <Link
          to="/projects"
          className="hover:text-indigo-400"
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </Link>
      </nav>

      {/* Hero Content */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Vrushant Mukherjee</h1>
      <p className="typing-effect md:text-2xl font-bold mb-6">{text}</p>

      <Link
        to="/projects"
        className="cta-button inline-block mt-6 px-8 py-3 text-lg font-medium text-white bg-indigo-200 bg-opacity-20 rounded-md relative overflow-hidden"
      >
        View My Work
      </Link>
      <Footer />
    </section>
  );
};

export default Hero;
