
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { GraduationCap, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Staggered animation variants for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-r from-white via-blue-50 to-purple-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-school-blue opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-school-green opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      
      {/* Abstract design elements */}
      <div className="absolute top-20 left-1/4 w-12 h-12 rounded-full bg-school-orange opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-1/4 w-8 h-8 rounded-full bg-school-green opacity-20 animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="md:col-span-7 z-10"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h5 
              className="text-school-orange font-medium mb-2 tracking-wider"
              variants={itemVariants}
            >
              WELCOME TO SMART AVENUES GLOBAL SCHOOL
            </motion.h5>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-gray-900"
              variants={itemVariants}
            >
              <span className="text-school-blue-dark block">Nurturing Young Minds,</span>
              <span className="text-school-green mt-2 block">Building Future Leaders.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed"
              variants={itemVariants}
            >
              Smart Avenues provides exceptional education that inspires creativity, 
              fosters intellectual growth, and develops well-rounded individuals in a 
              supportive and innovative environment.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Button 
                size="lg" 
                className="bg-school-green hover:bg-school-green-dark group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg rounded-full px-6"
              >
                <GraduationCap className="mr-2 h-5 w-5" /> 
                <span>Explore Our Programs</span>
                <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-school-blue text-school-blue hover:bg-school-blue hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md rounded-full px-6"
                >
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute top-8 -left-8 w-full h-full rounded-2xl border-4 border-school-blue-dark opacity-10 transform rotate-6"></div>
              <div className="absolute top-4 -left-4 w-full h-full rounded-2xl border-4 border-school-orange opacity-20 transform rotate-3"></div>
              <img 
                src="/lovable-uploads/43644de1-429b-498a-a71c-6dae33131f80.png" 
                alt="Smart Avenues School Students" 
                className="rounded-2xl shadow-2xl object-cover w-full h-full transform hover:scale-[1.02] transition-all duration-500 z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-3 shadow-lg z-20">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-school-red"></div>
                    <div className="w-8 h-8 rounded-full bg-school-orange"></div>
                    <div className="w-8 h-8 rounded-full bg-school-green"></div>
                  </div>
                  <div className="ml-2">
                    <p className="text-xs font-semibold">Established</p>
                    <p className="text-lg font-bold">2005</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
