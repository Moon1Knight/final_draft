
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Top Choice For Children",
      description: "Our curriculum is designed to nurture young minds while making learning enjoyable and engaging.",
      image: "/lovable-uploads/fa784a72-4089-47d6-9c6e-99df3fce9ae8.png",
      color: "bg-school-red"
    },
    {
      title: "We Meet Kids At Their Level",
      description: "Personalized attention ensures every student receives the support they need to excel.",
      color: "bg-school-green"
    },
    {
      title: "Experienced Educators",
      description: "Our passionate teachers bring education to life with innovative teaching methods.",
      color: "bg-school-blue"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          <span className="text-school-blue-dark">Top Choice</span> For Children
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Smart Avenues is committed to providing exceptional education that prepares students for a bright future through holistic development.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/fa784a72-4089-47d6-9c6e-99df3fce9ae8.png" 
              alt="Happy students at Smart Avenues" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-display font-semibold mb-4 text-school-green-dark">Why Parents Choose Smart Avenues</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-school-orange text-white p-2 rounded-full mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Comprehensive Curriculum</h4>
                  <p className="text-gray-600">Balancing academic excellence with creative development</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-school-green text-white p-2 rounded-full mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Safe Learning Environment</h4>
                  <p className="text-gray-600">Creating spaces where children feel secure to explore and grow</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-school-blue text-white p-2 rounded-full mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Individual Attention</h4>
                  <p className="text-gray-600">Small class sizes ensure personalized learning experience</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-3xl font-display font-bold text-center mb-12">
          We Meet Kids At <span className="text-school-red">Their Level</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Early Years", 
              description: "Building foundational skills through play-based learning",
              color: "bg-school-blue",
              age: "Ages 3-5"
            },
            { 
              title: "Primary", 
              description: "Developing core competencies with engaging curriculum",
              color: "bg-school-orange",
              age: "Ages 6-10"
            },
            { 
              title: "Secondary", 
              description: "Preparing students for future academic success",
              color: "bg-school-green",
              age: "Ages 11-16"
            }
          ].map((program, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className={`${program.color} h-2`}></div>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-white px-3 py-1 rounded-full inline-block mb-4" style={{backgroundColor: program.color === 'bg-school-blue' ? '#27AAE1' : program.color === 'bg-school-orange' ? '#F15A29' : '#00A551'}}>
                  {program.age}
                </div>
                <h4 className="text-xl font-display font-semibold mb-3">{program.title}</h4>
                <p className="text-gray-600">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
