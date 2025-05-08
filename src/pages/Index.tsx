
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Faculty from '@/components/Faculty';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import NewsSection from '@/components/NewsSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhyChooseUs />
      <Faculty />
      <Testimonials />
      <CallToAction />
      <NewsSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
