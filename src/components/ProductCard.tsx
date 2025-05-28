import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="cyber-card group relative overflow-hidden rounded-lg transition-transform hover:scale-[1.02] hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-cyber-dark">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-cyberpunk text-cyber-blue tracking-wide">
            {product.name}
          </h3>
          <span className="text-cyber-yellow font-bold">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        <div className="text-sm text-gray-300 mb-4 line-clamp-2">
          {product.description.substring(0, 80)}...
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/product/${product.id}`}
            className="text-sm text-cyber-magenta hover:text-cyber-blue transition-colors"
          >
            Details
          </Link>
          
          <button 
            onClick={() => addToCart(product)}
            className="cyber-button text-xs py-1 px-3"
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      {product.featured && (
        <div className="absolute top-2 right-2 bg-cyber-magenta text-xs py-1 px-2 rounded-sm font-cyberpunk">
          Featured
        </div>
      )}
    </div>
  );
};

export default ProductCard; 