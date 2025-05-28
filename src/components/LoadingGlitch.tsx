import React from 'react';

interface LoadingGlitchProps {
  message?: string;
}

const LoadingGlitch: React.FC<LoadingGlitchProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-40 py-16">
      <div className="relative h-16 w-16 mb-6">
        {/* Center circle */}
        <div className="absolute inset-0 border-2 border-cyber-blue rounded-full opacity-75 animate-ping"></div>
        
        {/* Rotating ring */}
        <div className="absolute inset-0 border-2 border-transparent border-t-cyber-magenta rounded-full animate-spin"></div>
        
        {/* Inner glitch effect */}
        <div className="absolute inset-4 bg-cyber-blue/30 rounded-full animate-pulse"></div>
      </div>
      
      {/* Text with glitch effect */}
      <div className="text-cyber-blue font-cyberpunk text-xl relative">
        <span className="absolute inset-0 text-cyber-magenta opacity-75 animate-pulse blur-[1px]">
          {message}
        </span>
        <span className="relative">
          {message}
        </span>
      </div>
      
      {/* Horizontal glitch line */}
      <div className="h-px w-32 mt-4 bg-gradient-to-r from-transparent via-cyber-blue to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-magenta animate-pulse opacity-50"></div>
        <div className="absolute top-0 left-0 h-full w-6 bg-cyber-blue animate-[glitch_1.5s_infinite] transform translate-x-0"></div>
      </div>
    </div>
  );
};

export default LoadingGlitch; 