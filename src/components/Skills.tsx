'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define skill categories and items
const skillCategories = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 85 },
    ]
  },
  {
    name: 'Frameworks & Libraries',
    skills: [
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 80 },
      { name: 'Machine Learning Libraries', level: 75 },
    ]
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Excel', level: 90 },
      { name: 'PowerPoint', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'OpenCV', level: 75 },
      { name: 'Tkinter', level: 85 },
    ]
  },
  {
    name: 'Soft Skills',
    skills: [
      { name: 'Problem-Solving', level: 90 },
      { name: 'Analytical Thinking', level: 85 },
      { name: 'Communication', level: 80 },
      { name: 'Teamwork', level: 85 },
      { name: 'Adaptability', level: 80 },
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        {/* Skill Categories Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.name
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 hover:bg-primary/20 text-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Category Title */}
        <div className="max-w-4xl mx-auto mb-8">
          <motion.h3
            key={activeCategory}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold text-center text-gray-900"
          >
            {activeCategory}
          </motion.h3>
          <motion.div
            key={`underline-${activeCategory}`}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.3 }}
            className="h-0.5 bg-primary/20 mt-2 mx-auto"
          />
        </div>
        
        {/* Skills Display */}
        <div className="max-w-4xl mx-auto relative min-h-[300px]">
          <AnimatePresence mode="wait">
            {skillCategories.map((category) => (
              activeCategory === category.name && (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill) => (
                      <motion.div 
                        key={skill.name} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold text-lg text-gray-900">{skill.name}</h3>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <motion.div
                            className="bg-primary h-2.5 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
        
        {/* Skills Matrix Visualization */}
        <div className="mt-16 bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-6 text-center text-gray-900">Skills Matrix</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skillCategories.flatMap(category => 
              category.skills.map(skill => (
                <motion.div 
                  key={skill.name} 
                  className="group relative flex flex-col items-center p-4 rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-all duration-300"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `conic-gradient(var(--primary) ${skill.level}%, transparent 0)`,
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-sm font-medium text-gray-900">
                      {skill.level}%
                    </div>
                  </div>
                  <span className="text-center font-medium text-sm text-gray-900 transition-colors duration-300 group-hover:text-primary">
                    {skill.name}
                  </span>
                  <span 
                    className={`absolute -top-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-primary text-white text-xs rounded opacity-0 transition-opacity duration-300 whitespace-nowrap ${
                      hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {category.name}
                  </span>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
