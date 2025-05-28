import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import LoadingGlitch from '../components/LoadingGlitch';
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  // Find the product by ID
  const product = products.find(p => p.id === Number(id));
  
  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle 404 for products not found
  if (!loading && !product) {
    return (
      <div className="cyber-container py-20 text-center">
        <h2 className="text-3xl font-cyberpunk text-cyber-blue mb-6">Product Not Found</h2>
        <p className="text-gray-400 mb-8">The cybernetic upgrade you're looking for might be in another dimension.</p>
        <Link to="/shop" className="cyber-button">
          Return to Shop
        </Link>
      </div>
    );
  }
  
  // Handle loading state
  if (loading) {
    return (
      <div className="cyber-container py-20">
        <LoadingGlitch message="Accessing data..." />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (product) {
      // Add the product to cart multiple times based on quantity
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      
      // Show success message or redirect to cart
      navigate('/cart');
    }
  };
  
  return (
    <div className="cyber-container py-20">
      {/* Back Button */}
      <Link to="/shop" className="inline-flex items-center text-cyber-blue hover:text-cyber-magenta mb-10">
        <FaArrowLeft className="mr-2" /> Back to Shop
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative overflow-hidden border border-cyber-blue rounded-lg shadow-neon-blue">
          <img 
            src={product?.image} 
            alt={product?.name} 
            className="w-full h-auto object-cover"
          />
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4 bg-cyber-black/80 border border-cyber-blue px-3 py-1 rounded">
            <span className="text-cyber-blue font-cyberpunk text-sm">
              {product?.category}
            </span>
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-cyberpunk text-cyber-blue mb-4">
            {product?.name}
          </h1>
          
          <div className="text-2xl text-cyber-yellow font-bold mb-6">
            ${product?.price.toFixed(2)}
          </div>
          
          <div className="prose prose-invert mb-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              {product?.description}
            </p>
          </div>
          
          {/* Quantity Selector */}
          <div className="mb-8">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-400 mb-2">
              Quantity
            </label>
            <div className="flex items-center">
              <button 
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="w-10 h-10 border border-cyber-blue text-cyber-blue flex items-center justify-center hover:bg-cyber-blue hover:text-cyber-black"
                disabled={quantity <= 1}
              >
                -
              </button>
              
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="no-spinner w-16 h-10 text-center bg-cyber-dark border-t border-b border-cyber-blue text-white"
              />
              
              <button 
                onClick={() => setQuantity(prev => prev + 1)}
                className="w-10 h-10 border border-cyber-blue text-cyber-blue flex items-center justify-center hover:bg-cyber-blue hover:text-cyber-black"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <button 
            onClick={handleAddToCart}
            className="cyber-button w-full py-3 flex items-center justify-center text-lg"
          >
            <FaShoppingCart className="mr-2" /> Add to Cart
          </button>
          
          {/* Additional Info */}
          <div className="mt-10 border-t border-cyber-blue/30 pt-6">
            <h3 className="text-xl font-cyberpunk text-cyber-magenta mb-4">Technical Specs</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-cyber-blue mr-2">■</span>
                <span>Advanced cybernetic interface compatible with all feline models</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-2">■</span>
                <span>Waterproof and dust resistant (IP67 rated)</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-2">■</span>
                <span>Quantum-encrypted security features</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-2">■</span>
                <span>Built-in neural happiness enhancers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 