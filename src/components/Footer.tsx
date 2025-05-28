import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-black pt-12 pb-6 border-t border-cyber-blue/30">
      <div className="cyber-container">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-cyberpunk text-cyber-blue mb-4">
              Neko<span className="text-cyber-magenta">Cyber</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Gear up your cat for the future with our cyberpunk-themed accessories.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<FaInstagram />} href="https://instagram.com" />
              <SocialLink icon={<FaTwitter />} href="https://twitter.com" />
              <SocialLink icon={<FaFacebook />} href="https://facebook.com" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-cyberpunk text-cyber-blue mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/shop" label="Shop" />
              <FooterLink href="/cart" label="Cart" />
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-lg font-cyberpunk text-cyber-blue mb-4">
              Categories
            </h4>
            <ul className="space-y-2">
              <FooterLink href="/shop?category=Collars" label="Cyber Collars" />
              <FooterLink href="/shop?category=Armor" label="Cat Armor" />
              <FooterLink href="/shop?category=Accessories" label="Tech Accessories" />
            </ul>
          </div>
        </div>
        
        {/* Neon Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-70 relative my-6">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyber-blue shadow-neon-blue"></div>
        </div>
        
        {/* Bottom copyright */}
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>© {currentYear} NekoCyber. All rights reserved.</p>
          <p className="mt-2">
            <span className="text-cyber-blue">Designed for cats</span>
            <span className="mx-2">|</span>
            <span className="text-cyber-magenta">Built for the future</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-cyber-blue flex items-center justify-center text-cyber-blue hover:bg-cyber-blue hover:text-cyber-black transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => {
  return (
    <li>
      <Link 
        to={href}
        className="text-gray-400 hover:text-cyber-blue transition-colors duration-200"
      >
        {label}
      </Link>
    </li>
  );
};

export default Footer; 