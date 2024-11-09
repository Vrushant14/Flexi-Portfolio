// src/components/Contact.jsx
import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaHome } from 'react-icons/fa'; // Social media and home icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here, e.g., send to an API or email service
    setSubmitted(true);
  };

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        
        {/* Home Icon */}
        <div className="absolute top-6 left-6">
          <button
            onClick={handleHomeClick}
            className="text-3xl text-white hover:text-indigo-500 transition duration-300"
          >
            <FaHome />
          </button>
        </div>

        <h2 className="text-4xl font-bold text-center text-white mb-6">Contact Me</h2>

        {/* Form Section */}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-lg font-semibold">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              rows="5"
              className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 px-6 py-3 rounded-md text-white hover:bg-indigo-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <p className="mt-6 text-center text-green-400">Thank you for your message! I will get back to you soon.</p>
        )}

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">Or reach me on:</p>
          <div className="flex justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/vrushantmukherjee14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-indigo-500 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Vrushant14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-indigo-500 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:vrushantmukherjee@gmail.com"
              className="text-3xl text-white hover:text-indigo-500 transition duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
