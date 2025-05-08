
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message (would implement with a toast)
    alert('Your message has been sent successfully!');
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us - Smart Avenues Global School</title>
        <meta name="description" content="Get in touch with Smart Avenues Global School. Contact us for admissions, inquiries, or to schedule a visit." />
        <meta name="keywords" content="contact school, school admissions, school location, school inquiry" />
      </Helmet>
      <Navigation />
      
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className={`text-5xl font-display font-bold text-center mb-4 text-school-blue-dark transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Contact Us
          </h1>
          <p className={`text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We'd love to hear from you. Get in touch with us for any inquiries or to schedule a visit to our campus.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-display font-bold text-school-blue mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-school-blue/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-school-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Our Location</h3>
                      <p className="text-gray-600">123 Education Street, Knowledge City, 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-school-green/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-school-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone Number</h3>
                      <p className="text-gray-600">+1 (123) 456-7890</p>
                      <p className="text-gray-600">+1 (987) 654-3210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-school-orange/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-school-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email Address</h3>
                      <p className="text-gray-600">info@smartavenues.edu</p>
                      <p className="text-gray-600">admissions@smartavenues.edu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-school-red/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-school-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-3">Follow Us On</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-school-blue-dark text-white p-2 rounded-full hover:bg-school-orange transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-school-blue-dark text-white p-2 rounded-full hover:bg-school-orange transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-school-blue-dark text-white p-2 rounded-full hover:bg-school-orange transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`lg:col-span-3 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-display font-bold text-school-green mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-school-blue focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-school-blue focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-school-blue focus:border-transparent"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-school-blue focus:border-transparent"
                      placeholder="Please write your message here..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button type="submit" className="w-full md:w-auto bg-school-green hover:bg-school-green-dark text-white py-3 px-8 rounded-md flex items-center justify-center transition-all duration-300 transform hover:scale-105">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <div className={`mt-12 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63499.5759094865!2d-0.24168120642536509!3d51.5287718408918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47761aa5e6e8edb1%3A0x3dd442b53f765deb!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1636647175283!5m2!1sen!2s" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="School Location"
            ></iframe>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
