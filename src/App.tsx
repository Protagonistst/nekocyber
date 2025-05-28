import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingGlitch from './components/LoadingGlitch';

// Lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow pt-16">
            <Suspense fallback={
              <div className="flex justify-center items-center pt-20">
                <LoadingGlitch message="Loading interface..." />
              </div>
            }>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
