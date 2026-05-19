/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Header, Footer } from './components/LayoutComponents';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import { SignIn, SignUp } from './pages/AuthPages';

// Layout wrapper to conditionally show header/footer
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideLayoutPaths = ['/signin', '/signup', '/checkout', '/admin'];
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-dark-pure">
      {!shouldHideLayout && <Header />}
      <main className="flex-grow">{children}</main>
      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

