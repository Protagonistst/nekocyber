import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { products } from '../data/products';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with cyberpunk gradient */}
        <div className="absolute inset-0 bg-cyber-black z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 via-cyber-black to-cyber-magenta/10"></div>
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
               style={{backgroundImage: 'url("https://picsum.photos/seed/cyber-bg/1920/1080")', backgroundSize: 'cover'}}></div>
          
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-20" 
               style={{
                 backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.3) 25%, rgba(0, 255, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.3) 75%, rgba(0, 255, 255, 0.3) 76%, transparent 77%, transparent), 
                                   linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.3) 25%, rgba(0, 255, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.3) 75%, rgba(0, 255, 255, 0.3) 76%, transparent 77%, transparent)`,
                 backgroundSize: '50px 50px'
               }}></div>
        </div>
        
        {/* Hero Content */}
        <div className="cyber-container relative z-10 text-center px-4 py-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-cyberpunk font-bold mb-6 text-white shadow-neon-blue
                         animate-[glow_1.5s_ease-in-out_infinite_alternate]">
            <span className="text-cyber-blue block md:inline">Gear Up</span>{' '}
            <span className="text-white block md:inline">Your Cat</span>{' '}
            <span className="text-cyber-magenta block md:inline">For The Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Cyberpunk accessories for the modern feline. Style meets technology for cats who live in the edge of tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop" className="cyber-button text-lg py-3 px-8">
              Shop Now
            </Link>
            
            <Link to="/shop?category=Collars" className="cyber-button bg-cyber-magenta border-cyber-magenta text-white hover:bg-transparent hover:text-cyber-magenta text-lg py-3 px-8">
              Explore Collars
            </Link>
          </div>
        </div>
        
        {/* Scrolling indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="h-10 w-6 border-2 border-cyber-blue rounded-full flex justify-center">
            <div className="h-2 w-2 bg-cyber-blue rounded-full mt-1 animate-[bounce_1s_infinite]"></div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20 bg-cyber-black">
        <div className="cyber-container">
          <SectionTitle 
            title="Featured Products" 
            subtitle="Cutting-edge cyberpunk gear for your feline friend"
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/shop" className="cyber-button inline-flex items-center">
              View All Products <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Cyber Cat Feature */}
      <section className="py-20 bg-cyber-dark">
        <div className="cyber-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-cyberpunk font-bold mb-6 text-cyber-blue">
                The Future Is <span className="text-cyber-magenta">Meow</span>
              </h2>
              
              <p className="text-gray-300 mb-6">
                In a world where technology meets style, your cat deserves to stand out. 
                Our cyberpunk accessories combine cutting-edge design with comfort and durability.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'LED-infused collars with reactive patterns',
                  'Lightweight armor with holographic displays',
                  'Tech-enhanced accessories for the modern feline',
                  'All products tested and approved by cyber-cats'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-cyber-magenta/20 border border-cyber-magenta flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-cyber-blue text-xs">✓</span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/shop" className="cyber-button">
                Shop the Collection
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-cyber-dark rounded-lg overflow-hidden border border-cyber-blue shadow-neon-blue">
                <img 
                  src="/src/assets/products/home2.png" 
                  alt="Cyberpunk Cat"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-24 w-24 border-t-2 border-r-2 border-cyber-magenta opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b-2 border-l-2 border-cyber-blue opacity-70"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 