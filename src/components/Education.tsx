import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary"></div>
            
            {/* Education Item */}
            <div className="relative mb-16">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-primary">Bachelor of Technology</h3>
                  <p className="text-lg font-medium text-gray-800">Computer Science and Information Technology</p>
                  <p className="text-gray-600">Institute of Aeronautical Engineering</p>
                  <p className="text-gray-500">2022 - 2026 (Expected)</p>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                
                <div className="flex-1 md:pl-8 order-3">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200">
                    <h4 className="font-semibold mb-2 text-gray-900">Highlights</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>GPA: 7.95</li>
                      <li>Relevant Coursework: Data Structures, Algorithms, Database Management, Machine Learning</li>
                      <li>Active member of the Compendium Club</li>
                      <li>Participated in various hackathons and coding competitions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Previous Education */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-primary">High School</h3>
                  <p className="text-lg font-medium text-gray-800">Science and Mathematics</p>
                  <p className="text-gray-600">Higher Secondary Education</p>
                  <p className="text-gray-500">Completed 2022</p>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <div className="flex-1 md:pl-8 order-3">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200">
                    <h4 className="font-semibold mb-2 text-gray-900">Highlights</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Focused on Physics, Chemistry, and Mathematics</li>
                      <li>Participated in science exhibitions and competitions</li>
                      <li>Developed interest in programming and technology</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
