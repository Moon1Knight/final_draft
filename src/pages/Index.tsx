
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Faculty from '@/components/Faculty';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import NewsSection from '@/components/NewsSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import LoadingAnimation from '@/components/LoadingAnimation';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Smart Avenues Global School - Nurturing Tomorrow's Leaders</title>
        <meta name="description" content="Smart Avenues provides quality education that nurtures young minds to reach their full potential in a supportive and innovative environment." />
        <meta name="keywords" content="Smart Avenues, global school, education, learning, children education, school admission" />
        <link rel="canonical" href="https://smartavenues.edu/" />
        <meta property="og:title" content="Smart Avenues Global School" />
        <meta property="og:description" content="Nurturing Tomorrow's Leaders" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartavenues.edu/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smart Avenues Global School" />
        <meta name="twitter:description" content="Nurturing Tomorrow's Leaders" />
      </Helmet>
      
      <LoadingAnimation isLoading={loading} />
      
      {!loading && (
        <>
          <Navigation />
          <HeroSection />
          <WhyChooseUs />
          <Faculty />
          <Testimonials />
          <CallToAction />
          <NewsSection />
          <Newsletter />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
