// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white py-4 px-6">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-600">
          Qpaw
        </a>
        <div className="hidden md:flex space-x-4">
          <a href="#about">About</a>
          <a href="#signup">Sign Up</a>
          <a href="#contact">Contact</a>
        </div>
        {/* Add mobile navigation menu here */}
      </nav>
    </header>
  );
};

export default Header;
