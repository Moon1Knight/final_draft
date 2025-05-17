
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div>
      <Helmet>
        <title>About Us - Avenues Global School</title>
        <meta name="description" content="Learn about Avenues Global School - our history, mission, vision, and values." />
        <meta name="keywords" content="Avenues, global school, school history, education mission, school values" />
      </Helmet>
      <Navigation />
      
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 pt-16 pb-24">
          <h1 className={`text-5xl font-display font-bold text-center mb-4 text-school-blue-dark transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About Our School
          </h1>
          <p className={`text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Shaping young minds to create a brighter tomorrow through comprehensive education and values.
          </p>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h2 className="text-2xl font-display font-bold text-school-green mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  At Avenues, our mission is to provide a nurturing and stimulating environment where 
                  children can develop intellectually, emotionally, and socially. We believe in fostering 
                  creativity, critical thinking, and a lifelong love of learning.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h2 className="text-2xl font-display font-bold text-school-orange mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  To be recognized as a center of educational excellence, inspiring and empowering our students 
                  to become global citizens who contribute positively to society through their knowledge, 
                  skills, and compassion.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h2 className="text-2xl font-display font-bold text-school-blue mb-4">Our Values</h2>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-school-green font-bold mr-2">•</span>
                    <span>Excellence in all endeavors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-school-green font-bold mr-2">•</span>
                    <span>Respect for diversity and inclusivity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-school-green font-bold mr-2">•</span>
                    <span>Integrity and ethical conduct</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-school-green font-bold mr-2">•</span>
                    <span>Innovation and adaptability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-school-green font-bold mr-2">•</span>
                    <span>Social responsibility</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h2 className="text-2xl font-display font-bold text-school-red mb-4">Our History</h2>
                <p className="text-gray-700">
                  Founded in 2005, Avenues began with a vision to transform education. From its humble 
                  beginnings with just 50 students, we have grown into a prestigious institution recognized 
                  for academic excellence and holistic development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
