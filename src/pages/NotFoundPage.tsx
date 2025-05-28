import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-black p-4">
      <div className="text-center max-w-xl border border-cyber-magenta p-10 bg-cyber-dark relative">
        {/* Glitch Effect */}
        <div className="absolute inset-0 border border-cyber-blue opacity-70 -translate-x-2 translate-y-2 pointer-events-none"></div>
        
        {/* Error Code */}
        <div className="relative mb-6">
          <h1 className="text-9xl font-cyberpunk font-bold text-cyber-blue opacity-30">404</h1>
          <h2 className="text-4xl font-cyberpunk text-cyber-magenta absolute inset-0 flex items-center justify-center">
            Cat Not Found
          </h2>
        </div>
        
        <p className="text-gray-300 mb-8 relative z-10">
          The cybernetic feline you're looking for has escaped into the neon grid. 
          It seems you've wandered into an unmapped sector of our digital realm.
        </p>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="cyber-button block w-full"
          >
            Return to Base
          </Link>
          
          <Link 
            to="/shop" 
            className="block text-cyber-blue hover:text-cyber-magenta underline transition-colors"
          >
            Or continue shopping
          </Link>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 h-10 w-10 border-t border-l border-cyber-magenta -translate-x-2 -translate-y-2 opacity-70"></div>
        <div className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-cyber-blue translate-x-2 translate-y-2 opacity-70"></div>
      </div>
    </div>
  );
};

export default NotFoundPage; 