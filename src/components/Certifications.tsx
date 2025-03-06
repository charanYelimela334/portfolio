'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Define certifications data
const certifications = [
  {
    id: 1,
    title: 'Python Essentials 1',
    issuer: 'Cisco',
    date: 'February 2024',
    description: 'Fundamentals of Python programming including syntax, data types, control structures, and basic algorithms.',
    skills: ['Python', 'Programming Fundamentals', 'Algorithms']
  },
  {
    id: 2,
    title: 'Data Analytics Visualization Job Simulation',
    issuer: 'Accenture',
    date: 'May 2024',
    description: 'Practical experience in data analytics and visualization techniques using industry-standard tools and methodologies.',
    skills: ['Data Analytics', 'Data Visualization', 'Business Intelligence']
  },
  {
    id: 3,
    title: 'Microsoft Excel',
    issuer: 'Udemy',
    date: 'August 2024',
    description: 'Advanced Excel skills including formulas, functions, data analysis, pivot tables, and visualization techniques.',
    skills: ['Excel', 'Data Analysis', 'Pivot Tables', 'Formulas']
  },
  {
    id: 4,
    title: 'SQL Complete Bootcamp',
    issuer: 'Udemy',
    date: 'September 2023',
    description: 'Comprehensive SQL training covering database design, queries, joins, subqueries, and database management.',
    skills: ['SQL', 'Database Management', 'Data Querying']
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Professional certifications that demonstrate my commitment to continuous learning and skill development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary">{cert.title}</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {cert.date}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">Issuer:</span> {cert.issuer}
                </p>
                
                <p className="text-gray-800 mb-4">
                  {cert.description}
                </p>
                
                <div className="mb-2">
                  <h4 className="font-medium mb-2 text-gray-900">Skills Gained:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Continuous Learning Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Continuous Learning</h3>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            I&apos;m committed to continuous learning and staying updated with the latest technologies and methodologies in the field of 
            Python development, Machine Learning, and Data Science.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { text: "Online Courses", icon: "📘" },
              { text: "Technical Blogs", icon: "📝" },
              { text: "Tech Communities", icon: "💻" },
              { text: "Hackathons", icon: "🚀" },
              { text: "Personal Projects", icon: "🔧" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-lg shadow-sm">
                <span className="text-xl">{item.icon}</span>
                <span className="text-gray-900 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
