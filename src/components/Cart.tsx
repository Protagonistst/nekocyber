import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import SectionTitle from './SectionTitle';

const Cart: React.FC = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-cyberpunk text-cyber-blue mb-4">Your cart is empty</h2>
          <p className="text-gray-400 mb-6">Looks like your cat needs some cyberpunk gear!</p>
          <Link to="/shop" className="cyber-button">
            Go Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-8">
      <SectionTitle title="Your Cart" subtitle="Review your cyberpunk cat gear" />
      
      <div className="mt-8 space-y-4">
        {cartItems.map(item => (
          <div 
            key={item.id} 
            className="cyber-card grid grid-cols-1 sm:grid-cols-5 gap-4 p-4 items-center"
          >
            {/* Image - Mobile: full width, Desktop: col 1 */}
            <div className="sm:col-span-1">
              <Link to={`/product/${item.id}`}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="h-24 w-24 object-cover mx-auto sm:mx-0"
                />
              </Link>
            </div>
            
            {/* Product Info - Mobile: full width, Desktop: col 2 */}
            <div className="sm:col-span-2 text-center sm:text-left">
              <Link to={`/product/${item.id}`} className="text-cyber-blue hover:text-cyber-magenta">
                <h3 className="font-cyberpunk text-lg mb-1">{item.name}</h3>
              </Link>
              <p className="text-sm text-gray-400 line-clamp-1">{item.description}</p>
              <p className="text-cyber-yellow mt-1">${item.price.toFixed(2)}</p>
            </div>
            
            {/* Quantity Controls - Mobile: full width, Desktop: col 1 */}
            <div className="sm:col-span-1 flex items-center justify-center">
              <button 
                onClick={() => removeFromCart(item.id)}
                className="p-2 text-cyber-blue hover:text-cyber-magenta"
                aria-label="Decrease quantity"
              >
                <FaMinus />
              </button>
              
              <span className="mx-3 font-medium text-lg min-w-8 text-center">
                {item.quantity}
              </span>
              
              <button 
                onClick={() => addToCart(item)}
                className="p-2 text-cyber-blue hover:text-cyber-magenta"
                aria-label="Increase quantity"
              >
                <FaPlus />
              </button>
            </div>
            
            {/* Total & Delete - Mobile: full width, Desktop: col 1 */}
            <div className="sm:col-span-1 flex flex-col items-center sm:items-end">
              <span className="font-bold mb-2">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
              
              <button
                onClick={() => {
                  // Remove all items at once
                  for (let i = 0; i < item.quantity; i++) {
                    removeFromCart(item.id);
                  }
                }}
                className="text-cyber-magenta hover:text-red-500 flex items-center"
                aria-label="Remove from cart"
              >
                <FaTrash className="mr-1" /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Cart Summary */}
      <div className="mt-8 flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <button 
            onClick={clearCart}
            className="text-gray-400 hover:text-cyber-magenta transition-colors underline"
          >
            Clear cart
          </button>
        </div>
        
        <div className="bg-cyber-dark border border-cyber-blue p-4 md:w-80">
          <div className="flex justify-between mb-4 pb-4 border-b border-gray-700">
            <span className="text-gray-400">Subtotal:</span>
            <span className="font-bold">${getCartTotal().toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between mb-4 pb-4 border-b border-gray-700">
            <span className="text-gray-400">Shipping:</span>
            <span className="font-bold">Free</span>
          </div>
          
          <div className="flex justify-between mb-4">
            <span className="text-lg">Total:</span>
            <span className="text-lg font-bold text-cyber-yellow">${getCartTotal().toFixed(2)}</span>
          </div>
          
          <button className="cyber-button w-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart; 