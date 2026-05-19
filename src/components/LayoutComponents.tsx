/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Shop All', path: '/products' },
    { name: 'T-shirts', path: '/products?category=T-shirts' },
    { name: 'Hoodies', path: '/products?category=Hoodies' },
    { name: 'Accessories', path: '/products?category=Accessories' },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-3xl font-black italic text-white tracking-tighter">
              G<span className="text-brand">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex ml-10 space-x-8 uppercase font-extrabold text-[10px] tracking-[0.2em]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-zinc-500 hover:text-white transition-colors">
              <Search size={20} />
            </button>
            <Link to="/profile" className="text-zinc-500 hover:text-white transition-colors">
              <User size={20} />
            </Link>
            <Link to="/cart" className="relative text-zinc-500 hover:text-white transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-brand text-black text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                03
              </span>
            </Link>
            <button
              className="md:hidden text-zinc-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 py-6 px-6 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-zinc-300 font-extrabold uppercase italic text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/admin"
            className="block text-zinc-600 font-bold uppercase italic"
            onClick={() => setIsMenuOpen(false)}
          >
            Admin Dashboard
          </Link>
        </div>
      )}
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-4xl font-black italic text-white tracking-tighter mb-8 block">
              G<span className="text-brand">.</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-medium">
              Forge ahead. Engineered with ultra-light breathable mesh and multi-axis stretch for those who thrive in the competitive arena.
            </p>
            <div className="flex gap-6 text-zinc-600">
              <button className="hover:text-brand transition-colors"><Instagram size={20} /></button>
              <button className="hover:text-brand transition-colors"><Facebook size={20} /></button>
              <button className="hover:text-brand transition-colors"><Twitter size={20} /></button>
              <button className="hover:text-brand transition-colors"><Youtube size={20} /></button>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black tracking-widest text-zinc-400 mb-8 uppercase italic">Shop</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-tight text-zinc-500">
              <li><Link to="/products" className="hover:text-white">New Arrivals</Link></li>
              <li><Link to="/products" className="hover:text-white">Men's Apparel</Link></li>
              <li><Link to="/products" className="hover:text-white">Women's Apparel</Link></li>
              <li><Link to="/products" className="hover:text-white">Performance Core</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black tracking-widest text-zinc-400 mb-8 uppercase italic">Support</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-tight text-zinc-500">
              <li><button className="hover:text-white">Shipping Policy</button></li>
              <li><button className="hover:text-white">Return & Exchanges</button></li>
              <li><button className="hover:text-white">Size Guide</button></li>
              <li><button className="hover:text-white">Elite Rewards</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black tracking-widest text-zinc-400 mb-8 uppercase italic">Inner Circle</h4>
            <p className="text-zinc-500 text-xs font-medium mb-6">Join for exclusive early access and performance reports.</p>
            <div className="flex bg-zinc-900 border border-zinc-800 p-1 rounded-xl">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent px-4 py-2 w-full focus:outline-none text-white text-[10px] font-bold"
              />
              <button className="bg-brand text-black px-6 py-2 rounded-lg font-black text-[10px] uppercase">JOIN</button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:row justify-between items-center text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
          <p>© 2026 GRIT PERFORMANCE APPAREL. PEAK EFFICIENCY.</p>
          <div className="mt-6 md:mt-0 flex gap-10">
            <button className="hover:text-white transition-colors">Instagram</button>
            <button className="hover:text-white transition-colors">Twitter</button>
            <button className="hover:text-white transition-colors">Newsletter</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
