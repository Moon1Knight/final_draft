
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import SchoolLogo from './SchoolLogo';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'News & Events', href: '/news' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <SchoolLogo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="font-medium text-gray-600 hover:text-school-blue transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-school-orange hover:bg-school-red text-white">Apply Now</Button>
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
        <div className="md:hidden bg-white shadow-lg">
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
