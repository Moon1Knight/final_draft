
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import SchoolLogo from './SchoolLogo';
import { Menu, X, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'News & Events', href: '/news' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      {/* Top Bar with Contact Info and Social Icons */}
      <div className="bg-school-blue-dark text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              <span>123 Education Street, Knowledge City</span>
            </div>
            <div className="hidden md:flex items-center">
              <Phone className="h-3.5 w-3.5 mr-1" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="hidden md:flex items-center">
              <Mail className="h-3.5 w-3.5 mr-1" />
              <span>info@smartavenues.edu</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" className="text-white hover:text-school-orange transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-school-orange transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-school-orange transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <SchoolLogo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="font-medium text-gray-600 hover:text-school-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-school-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-school-orange hover:bg-school-red text-white transition-all duration-300 transform hover:scale-105">Apply Now</Button>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <nav className="flex flex-col px-4 py-2">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="font-medium text-gray-600 hover:text-school-blue py-3 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="py-4">
              <Button className="bg-school-orange hover:bg-school-red text-white w-full">Apply Now</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
