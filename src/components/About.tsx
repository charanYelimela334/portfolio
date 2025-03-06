'use client';

import React from 'react';
import { motion } from 'framer-motion';

type IconType = 'user' | 'email' | 'phone' | 'location' | 'education';

interface DetailItemProps {
  icon: IconType;
  title: string;
  value: string;
}

const icons: Record<IconType, string> = {
  user: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  email: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  phone: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  location: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  education: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-primary">Who am I?</h3>
            <p className="text-lg text-gray-700">
              I&apos;m Charan Yelimela, a Computer Science and Information Technology student at the Institute of Aeronautical Engineering in Telangana, India. 
              I&apos;m passionate about Python development, Machine Learning, and Data Analysis.
            </p>
            <p className="text-lg text-gray-700">
              My journey in technology began with Python programming, which led me to explore the fascinating world of Machine Learning and Data Science. 
              I enjoy solving complex problems and creating data-driven solutions.
            </p>
            <p className="text-lg text-gray-700">
              When I&apos;m not coding, I&apos;m actively participating in tech communities, working on personal projects, 
              and continuously expanding my knowledge in the ever-evolving field of technology.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-neutral-50 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">Personal Details</h3>
            
            <div className="space-y-4">
              <DetailItem icon="user" title="Name" value="Charan Yelimela" />
              <DetailItem icon="email" title="Email" value="Charanyelimela@gmail.com" />
              <DetailItem icon="phone" title="Phone" value="+91 9912446487" />
              <DetailItem icon="location" title="Location" value="Telangana, India" />
              <DetailItem icon="education" title="Education" value="B.Tech in Computer Science and IT" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const DetailItem = ({ icon, title, value }: DetailItemProps) => {
  return (
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icons[icon]} />
        </svg>
      </div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
};
