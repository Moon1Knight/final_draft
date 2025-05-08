
import React from 'react';
import SchoolLogo from './SchoolLogo';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <SchoolLogo className="mb-4" />
            <p className="text-gray-600 mb-4">
              Smart Avenues is dedicated to providing quality education that nurtures young minds and prepares them for future success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-school-blue-dark hover:text-school-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.177l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="#" className="text-school-blue-dark hover:text-school-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-school-blue-dark hover:text-school-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-school-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-school-blue transition-colors">Admissions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-school-blue transition-colors">Academics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-school-blue transition-colors">News & Events</a></li>
              <li><a href="#" className="text-gray-600 hover:text-school-blue transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-school-blue transition-colors">Student Portal</a></li>
              <li><a href="#" className="text-gray-600 hover:text-school-blue transition-colors">Parent Resources</a></li>
              <li><a href="#" className="text-gray-600 hover:text-school-blue transition-colors">Faculty & Staff</a></li>
              <li><a href="#" className="text-gray-600 hover:text-school-blue transition-colors">Calendar</a></li>
              <li><a href="#" className="text-gray-600 hover:text-school-blue transition-colors">Career</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-school-orange mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-600">123 Education Street, Knowledge City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-school-green mr-3 flex-shrink-0" />
                <span className="text-gray-600">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-school-blue mr-3 flex-shrink-0" />
                <span className="text-gray-600">info@smartavenues.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Smart Avenues Global School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
