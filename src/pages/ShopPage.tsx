import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, Product } from '../data/products';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import { FaFilter, FaTimes } from 'react-icons/fa';

const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categories = ['All', 'Collars', 'Armor', 'Accessories'];
  
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    setActiveCategory(categoryParam);
    
    if (categoryParam && categoryParam !== 'All') {
      setFilteredProducts(products.filter(product => product.category === categoryParam));
    } else {
      setFilteredProducts(products);
    }
  }, [searchParams]);
  
  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category });
    }
    setIsFilterOpen(false);
  };
  
  return (
    <div className="py-20">
      <div className="cyber-container">
        <SectionTitle 
          title="Shop Cyberpunk Cat Gear" 
          subtitle="Find the perfect tech-enhanced accessories for your feline companion"
        />
        
        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-6">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="cyber-button flex items-center"
          >
            {isFilterOpen ? <FaTimes className="mr-2" /> : <FaFilter className="mr-2" />}
            {isFilterOpen ? 'Close Filters' : 'Filter Products'}
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row mt-10">
          {/* Category Filter - Desktop */}
          <div className={`
            md:w-60 md:block md:pr-8 mb-6 md:mb-0 
            ${isFilterOpen ? 'block' : 'hidden'}
          `}>
            <h3 className="text-xl font-cyberpunk text-cyber-blue mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full text-left py-2 px-4 transition-colors rounded-sm hover:bg-cyber-dark
                      ${activeCategory === category || (category === 'All' && !activeCategory) 
                        ? 'bg-cyber-blue/20 text-cyber-blue border-l-2 border-cyber-blue' 
                        : 'text-gray-400 hover:text-cyber-blue'
                      }
                    `}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-lg text-gray-400 mb-4">No products found.</p>
                <button 
                  onClick={() => handleCategoryChange('All')}
                  className="cyber-button"
                >
                  View All Products
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage; 