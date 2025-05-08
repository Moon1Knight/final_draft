
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Smart Avenues has provided my child with an exceptional learning environment where they are both challenged and supported.",
      author: "Jessica P.",
      relation: "Parent of Primary Student",
      color: "bg-school-green"
    },
    {
      quote: "The teachers go above and beyond to ensure each student receives personalized attention and guidance.",
      author: "Rajesh K.",
      relation: "Parent of Secondary Student",
      color: "bg-school-orange"
    },
    {
      quote: "My children have flourished academically and socially since joining Smart Avenues Global School.",
      author: "Michelle T.",
      relation: "Parent of Two Students",
      color: "bg-school-blue"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          Parents' Words Are The <span className="text-school-blue-dark">Key</span> To Happy Kids
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Hear from our community about their experiences at Smart Avenues
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className={`${testimonial.color} h-2`}></div>
              <CardContent className="p-6">
                <svg className="h-8 w-8 text-gray-300 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.relation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
