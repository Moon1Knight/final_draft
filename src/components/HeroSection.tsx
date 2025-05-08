
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { GraduationCap, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return <section className="bg-gradient-to-r from-blue-50 to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-28">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`md:w-1/2 z-10 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              <span className="text-school-red animate-fade-in opacity-0" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
                Kids' Promising
              </span>
              <br />
              <span className="text-school-green animate-fade-in opacity-0" style={{animationDelay: '600ms', animationFillMode: 'forwards'}}>
                Tomorrow Ahead
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg animate-fade-in opacity-0" style={{animationDelay: '900ms', animationFillMode: 'forwards'}}>
              Smart Avenues provides quality education that nurtures young minds to reach their full potential in a supportive and innovative environment.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{animationDelay: '1200ms', animationFillMode: 'forwards'}}>
              <Button size="lg" className="bg-school-green hover:bg-school-green-dark group transition-all duration-300 transform hover:scale-105">
                <GraduationCap className="mr-2 h-5 w-5" /> 
                <span>Discover More</span>
                <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-school-blue text-school-blue hover:bg-school-blue hover:text-white transition-all duration-300">
                Contact Us
              </Button>
            </div>
          </div>
          <div className={`md:w-1/2 mt-10 md:mt-0 flex justify-center items-center transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-full max-w-md">
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-school-orange rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-3 -right-8 w-16 h-16 bg-school-green rounded-full opacity-30 animate-float" style={{animationDelay: '1.5s'}}></div>
              <img 
                src="/lovable-uploads/43644de1-429b-498a-a71c-6dae33131f80.png" 
                alt="Smart Avenues School Students" 
                className="rounded-lg shadow-xl animate-fade-in opacity-0 transform hover:scale-105 transition-all duration-500" 
                style={{animationDelay: '800ms', animationFillMode: 'forwards'}}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-school-orange opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-school-green opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
    </section>;
};

export default HeroSection;
