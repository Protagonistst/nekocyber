import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartCount } = useCart();
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cyber-black/90 backdrop-blur-md shadow-neon-blue' 
          : 'bg-cyber-black/70'
      }`}
    >
      <div className="cyber-container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-cyberpunk text-2xl tracking-wider text-cyber-blue"
          >
            Neko<span className="text-cyber-magenta">Cyber</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/shop" label="Shop" />
            <Link 
              to="/cart" 
              className="relative flex items-center"
            >
              <FaShoppingCart className="text-cyber-blue" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-cyber-magenta text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </nav>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <Link 
              to="/cart" 
              className="relative mr-4"
            >
              <FaShoppingCart className="text-cyber-blue text-xl" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-cyber-magenta text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {getCartCount()}
                </span>
              )}
            </Link>
            
            <button
              onClick={toggleMenu}
              className="text-cyber-blue"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-16 inset-x-0 bg-cyber-dark border-y border-cyber-blue transition-all duration-300 ${
          isMenuOpen ? 'max-h-40 py-2' : 'max-h-0 py-0 overflow-hidden border-none'
        }`}
      >
        <div className="cyber-container flex flex-col space-y-4 py-2">
          <NavLink to="/" label="Home" mobile />
          <NavLink to="/shop" label="Shop" mobile />
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, mobile }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`
        ${mobile 
          ? 'block py-2 px-4 w-full hover:bg-cyber-black/20' 
          : 'inline-block'
        }
        ${isActive 
          ? 'text-cyber-magenta font-medium' 
          : 'text-gray-300 hover:text-cyber-blue'
        }
        transition-colors relative
        ${!mobile && isActive ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-cyber-magenta' : ''}
      `}
    >
      {label}
    </Link>
  );
};

export default Navbar; 