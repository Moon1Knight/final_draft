
import React from 'react';

const LocationMap = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63499.5759094865!2d-0.24168120642536509!3d51.5287718408918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47761aa5e6e8edb1%3A0x3dd442b53f765deb!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1636647175283!5m2!1sen!2s" 
        width="100%" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy"
        title="School Location"
      ></iframe>
    </div>
  );
};

export default LocationMap;
