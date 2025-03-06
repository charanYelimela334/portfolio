'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/meoajapg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Have a question or want to work together? Feel free to reach out!
          </motion.p>
        </div>
        
        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Info */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-4">
              
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-primary text-white p-2 rounded-full mr-3">
                  📧
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:charanyelimela@gmail.com" className="text-gray-700 hover:text-primary transition">
                    charanyelimela@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-start">
                <div className="bg-primary text-white p-2 rounded-full mr-3">
                  📍
                </div>
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-700">Hyderabad, India</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-primary text-white p-2 rounded-full mr-3">
                  📞
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href="tel:+919912446487" className="text-gray-700 hover:text-primary transition">
                    +91 99124 46487
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/charanYelimela334" target="_blank" className="text-gray-700 hover:text-primary transition">
                  🐱 GitHub
                </a>
                <a href="https://www.linkedin.com/in/charanyelimela/" target="_blank" className="text-gray-700 hover:text-primary transition">
                  🔗 LinkedIn
                </a>
                <a href="https://x.com/c_yelimela" target="_blank" className="text-gray-700 hover:text-primary transition">
                  🐦 Twitter
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New submission!" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  rows={5}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-accent transition-colors"
              >
                Send Message
              </button>

              {submitStatus === 'success' && (
                <p className="mt-4 text-green-500">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-red-500">Failed to send message. Please try again later.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
