'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Achievements Data
const achievements = [
  {
    id: 1,
    title: '3rd Position in METE EXPO',
    description: 'Secured 3rd position in the METE EXPO competition, winning a ₹500 cash prize for innovative project implementation.',
    icon: '🏆',
    color: 'text-yellow-500'
  },
  {
    id: 2,
    title: 'Marketing Team Member, Compendium Club',
    description: 'Successfully increased event registrations by 100% through strategic marketing campaigns and outreach initiatives.',
    icon: '📈',
    color: 'text-green-500'
  },
  {
    id: 3,
    title: 'Hackathon Participant',
    description: 'Actively participated in multiple hackathons, developing innovative solutions to real-world problems under tight deadlines.',
    icon: '💡',
    color: 'text-blue-500'
  },
  {
    id: 4,
    title: 'Technical Workshop Organizer',
    description: 'Organized and conducted technical workshops on Python programming and data analysis for junior students.',
    icon: '🎤',
    color: 'text-purple-500'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Achievements</h2>
          <div className="w-16 h-1 bg-primary mx-auto my-2"></div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Key accomplishments that showcase my skills, dedication, and impact.
          </p>
        </div>
        
        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className={`text-4xl ${achievement.color}`}>{achievement.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                  <p className="text-gray-700 mt-1">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Achievement Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {[
            { value: '2+', label: 'Years of Learning' },
            { value: '2+', label: 'Projects Completed' },
            { value: '4+', label: 'Certifications' },
            { value: '1+', label: 'Hackathons' }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="bg-white p-6 rounded-lg shadow-md text-center w-40"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-700">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
