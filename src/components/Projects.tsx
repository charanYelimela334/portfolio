'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define projects data
const projects = [
  {
    id: 1,
    title: 'Attendance Face Management System',
    description: 'An AI-powered attendance tracking system using facial recognition technology. The system automatically identifies students and marks their attendance, eliminating the need for manual roll calls.',
    technologies: ['Python', 'OpenCV', 'Tkinter', 'Machine Learning', 'NumPy', 'Pandas', 'Pillow', 'MySQL'],
    features: [
      'AI-powered attendance tracking',
      'Facial recognition integration',
      'CSV export functionality',
      'User-friendly interface',
      'Database integration'
    ],
    image: '/images/project-attendance.jpg',
    github: 'https://github.com/charanYelimela334/Attendance-Management-System-using-Face-Recognition.git',
    demo: '#',
    year: 2024
  },
  {
    id: 2,
    title: 'Fake News Detection',
    description: 'A machine learning model that can identify fake news articles with high accuracy. The system analyzes text content and determines the likelihood of it being false information.',
    technologies: ['Python', 'Machine Learning', 'NLP', 'Data Preprocessing', 'Pandas', 'Scikit-learn'],
    features: [
      'Over 90% accuracy in fake news detection',
      'Dataset collection and preprocessing',
      'Text analysis and feature extraction',
      'Model training and evaluation'
    ],
    image: '/images/fake news.jpg',
    github: 'https://github.com/charanYelimela334/Fake-News-Detection',
    demo: '#',
    year: 2023
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on, showcasing my skills in Python, 
            Machine Learning, and Data Analysis.
          </p>
        </div>
        
        {/* Project Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeProject.id === project.id
                  ? 'bg-primary text-white'
                  : 'bg-neutral-200 hover:bg-primary/20 text-neutral-800'
              }`}
              suppressHydrationWarning
            >
              {project.title}
            </button>
          ))}
        </div>
        
        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            key={activeProject.id + "-image"}
            className="bg-neutral-100 rounded-lg overflow-hidden shadow-lg aspect-video relative"
          >
            <Image
              src={activeProject.image}
              alt=""
              fill
              className="absolute inset-0 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-accent/70 flex items-center justify-center text-white text-xl font-bold">
              {/* Removed activeProject.title */}
            </div>
          </motion.div>
          
          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            key={activeProject.id + "-info"}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">{activeProject.title}</h3>
            <p className="text-neutral-600 mb-6">
              {activeProject.description}
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside text-neutral-600 space-y-1">
                {activeProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex gap-4">
              <a 
                href={activeProject.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
              >
                GitHub
              </a>
              {activeProject.demo !== '#' && (
                <a 
                  href={activeProject.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
        
        {/* Project Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-neutral-900">Project Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary"></div>
            
            {projects.map((project, index) => (
              <div key={project.id} className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                <div className="flex flex-col md:flex-row items-center">
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'} mb-4 md:mb-0 order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                    <h4 className="text-xl font-bold text-primary">{project.title}</h4>
                    <p className="text-neutral-600 mt-2">{project.description.substring(0, 100)}...</p>
                    <p className="text-sm text-primary font-medium mt-2">{project.year}</p>
                    <button 
                      onClick={() => setActiveProject(project)}
                      className="mt-3 text-primary hover:underline"
                      suppressHydrationWarning
                    >
                      View Details
                    </button>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0">
                    <span className="text-white font-bold">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
