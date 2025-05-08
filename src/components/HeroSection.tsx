import React from 'react';
import { Button } from "@/components/ui/button";
import { GraduationCap } from 'lucide-react';
const HeroSection = () => {
  return <section className="bg-gradient-to-r from-blue-50 to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-school-blue-dark leading-tight mb-4">
              <span className="text-school-red">Kids' Promising</span>
              <br />
              <span className="text-school-green">Tomorrow Ahead</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Smart Avenues provides quality education that nurtures young minds to reach their full potential in a supportive and innovative environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-school-green hover:bg-school-green-dark">
                <GraduationCap className="mr-2 h-5 w-5" /> Discover More
              </Button>
              <Button size="lg" variant="outline" className="border-school-blue text-school-blue hover:bg-school-blue hover:text-white">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-school-orange rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-3 -right-8 w-16 h-16 bg-school-green rounded-full opacity-30 animate-float"></div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-school-orange opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-school-green opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
    </section>;
};
export default HeroSection;