/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Zap } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/mockData';

const Home = () => {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 4);
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div className="flex flex-col bg-dark-pure">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541534741688-6078c64b5c54?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-50 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-dark-pure via-zinc-950/80 to-transparent"></div>
        </div>

        <div className="section-container relative z-10 w-full flex flex-col lg:row items-center justify-between gap-12">
          <div className="max-w-3xl">
            <span className="text-zinc-500 font-black tracking-[0.3em] text-[10px] mb-6 block uppercase">
              Release v2.0 // Active Performance
            </span>
            <h1 className="text-7xl md:text-9xl text-white mb-8 leading-[0.8] italic uppercase tracking-tighter">
              FORGE <br />
              <span className="text-brand">AHEAD.</span>
            </h1>
            <p className="text-zinc-400 text-lg mb-12 max-w-lg font-medium leading-relaxed">
              Engineered with ultra-light breathable mesh and multi-axis stretch for peak intensity. Elevate your competitive edge.
            </p>
            <div className="flex flex-col sm:row gap-4">
              <Link to="/products" className="btn-primary px-10">
                START TRAINING <ArrowRight size={18} className="ml-1" />
              </Link>
              <Link to="/products" className="btn-outline">
                RESEARCH LAB
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
             <div className="w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] absolute -top-20 -right-20"></div>
             <div className="relative glass p-4 rounded-[40px] rotate-3 border-zinc-800/50 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800" className="w-[350px] aspect-[4/5] object-cover rounded-[32px] grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute -bottom-6 -left-6 bg-brand text-black p-6 rounded-2xl shadow-xl rotate-[-6deg]">
                   <p className="text-2xl font-black italic tracking-tighter">ELITE SERIES</p>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-black/60">PRO GRADE EQUIPMENT</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-container">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-brand font-black text-xs uppercase tracking-widest mb-2 block italic">Core Selection</span>
            <h2 className="text-5xl md:text-6xl mb-2">COLLECTIONS</h2>
          </div>
          <Link to="/products" className="text-[10px] font-black uppercase tracking-widest hover:text-brand transition-colors flex items-center gap-2 italic">
            Examine All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.name}`}
              className="group relative h-96 rounded-3xl overflow-hidden border border-zinc-900 hover:border-zinc-700 transition-all duration-500"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-pure/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl text-white mb-2 italic">{cat.name}</h3>
                <span className="text-brand text-[10px] font-black tracking-widest uppercase">{cat.count} UNITS AVAILABLE</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-zinc-950 py-32 border-y border-zinc-900">
        <div className="section-container">
          <div className="text-center mb-24">
            <span className="text-brand font-black text-xs uppercase tracking-widest mb-4 block italic">Professional Inventory</span>
            <h2 className="text-5xl md:text-7xl mb-6">KINEMATIC SERIES</h2>
            <p className="text-zinc-500 max-w-xl mx-auto uppercase text-[10px] font-black tracking-[0.2em] leading-relaxed italic">
              Multi-axis compression gear selected for extreme mechanical stress resistance and peak thermal regulation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="relative py-24 overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-brand/5"></div>
        <div className="section-container relative z-10 flex flex-col lg:row items-center justify-between gap-12">
          <div className="flex items-center gap-8">
            <div className="w-24 h-24 bg-brand text-black rounded-[32px] flex items-center justify-center rotate-6 shadow-[0_0_50px_rgba(204,255,0,0.2)]">
              <Zap size={48} fill="currentColor" strokeWidth={3} />
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white mb-2">QUARTER RECAP CLEARANCE</h3>
              <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em]">OPERATIONAL LEVEL DISCOUNT // UP TO 40% OFF STOREWIDE</p>
            </div>
          </div>
          <Link to="/products" className="btn-primary text-lg px-12 whitespace-nowrap">
            SECURE ACCESS
          </Link>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section-container">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-brand font-black text-xs uppercase tracking-widest mb-2 block italic">Deployment Stats</span>
            <h2 className="text-5xl md:text-6xl mb-2">ACTIVE DUTY</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand Ethos */}
      <section className="relative h-[80vh] flex items-center overflow-hidden border-t border-zinc-900">
        <div className="absolute inset-0 grayscale opacity-10">
           <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
        </div>
        
        <div className="section-container relative z-10 text-center">
          <p className="text-brand font-black text-xs uppercase tracking-widest mb-8 italic">The Iron Philosophy</p>
          <h2 className="text-6xl md:text-9xl text-white mb-10 italic">NO EXCUSES.<br />ONLY <span className="text-brand">POWER.</span></h2>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-16 text-lg font-medium leading-relaxed">
            We don't manufacture apparel. We engineer tactical equipment for those who acknowledge that comfort is the enemy of progress.
          </p>
          <div className="flex justify-center">
             <Link to="/signup" className="btn-primary shadow-[0_0_50px_rgba(204,255,0,0.1)] hover:scale-105 transition-transform duration-300">
               JOIN THE SYNDICATE
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  return (
    <div className="group card-premium flex flex-col h-full">
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-zinc-950">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />
        {product.isBestSeller && (
          <span className="absolute top-6 left-6 bg-brand text-black text-[9px] font-black px-3 py-1.5 uppercase tracking-widest italic rounded-md shadow-xl">
            BEST SELLER
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
           <button className="w-full btn-primary h-12 text-[10px] tracking-widest rounded-2xl">
             <ShoppingBag size={14} /> ADD TO CART
           </button>
        </div>
      </Link>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-4 mb-4">
          <Link to={`/product/${product.id}`} className="font-extrabold text-sm uppercase italic hover:text-brand transition-colors tracking-tight">
            {product.name}
          </Link>
          <span className="font-black text-lg tracking-tighter">${product.price}</span>
        </div>
        <div className="flex justify-between items-center mt-auto">
           <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest italic leading-none">{product.category}</p>
           <div className="flex items-center gap-1.5 grayscale opacity-50">
             <Star size={10} className="fill-brand text-brand" />
             <span className="text-[10px] text-zinc-500 font-bold">{product.rating}</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
