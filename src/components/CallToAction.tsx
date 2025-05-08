
import React from 'react';
import { Button } from "@/components/ui/button";
import { GraduationCap } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-12 bg-school-blue text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-display font-semibold">
            Come And Be Part Of Our School Session!
          </h2>
          <p className="mt-2 text-blue-100">
            Enrollment for the next academic year is now open
          </p>
        </div>
        <Button size="lg" className="bg-white text-school-blue-dark hover:bg-gray-100">
          <GraduationCap className="mr-2 h-5 w-5" /> Apply Now
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
