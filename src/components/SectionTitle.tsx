import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false 
}) => {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-cyber-blue tracking-wider mb-2">
        {title}
        <span className="text-cyber-magenta">.</span>
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-300 mt-2">{subtitle}</p>
      )}
      <div className="h-1 w-24 bg-cyber-magenta mt-4 mb-2 
        relative overflow-hidden before:absolute before:inset-0 
        before:bg-cyber-blue before:opacity-70 before:animate-pulse">
      </div>
    </div>
  );
};

export default SectionTitle; 