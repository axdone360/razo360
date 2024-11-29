import React, { useState } from 'react';
import logo from '../assets/With-Glow-Logo.png';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary shadow-sm fixed w-full z-20 py-4 max-sm:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to={'/'}>
              <img src={logo} alt="razo360° Logo" className="w-40" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-white">
            <Link to="/contact" className="hover:text-yellow-300 px-3 py-2">Contact Us</Link>
          
            <Link to="/article" className="hover:text-yellow-300 block px-3 py-2">Article</Link>
            <Link to="/services" className="hover:text-yellow-300 block px-3 py-2">OCS</Link>
            <button  onClick ={()=>setModalOpen(true)} className="bg-yellow-500 text-primary px-4 py-2 rounded hover:bg-yellow-400">
              Get Started
            </button>
            <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

          </div>
          <div className="md:hidden flex items-center">
          <button onClick={()=>setModalOpen(true)} className="ml-2 bg-yellow-500 text-primary px-4 py-2 rounded hover:bg-yellow-400">
              Get Started
            </button>

          <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6 ml-4" /> : <Menu className="h-6 ml-4 w-6" />}
            </button>
           
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white z-20 text-primary space-y-2 p-4 flex flex-col items-center justify-center rounded-lg shadow-lg">
            <Link to="/contact" className="hover:text-yellow-300 px-3 py-2">Contact Us</Link>
      
            <Link to="/article" className="hover:text-yellow-300 block px-3 py-2">Article</Link>
            <Link to="/services" className="hover:text-yellow-300 block px-3 py-2">Services</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
