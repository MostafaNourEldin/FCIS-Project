/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
import { ProductCard } from './Home';

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const [sortBy, setSortBy] = useState('Newest');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="bg-dark-pure min-h-screen">
      {/* Header */}
      <div className="relative h-[40vh] flex flex-col justify-center items-center overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 opacity-20 grayscale scale-110">
           <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-6xl md:text-8xl text-white relative z-10 italic">COMMUNITY GEAR</h1>
        <p className="text-brand font-black uppercase tracking-[0.4em] text-[10px] relative z-10 italic mt-4">
          PHASE II // ELITE PERFORMANCE FABRIC
        </p>
      </div>

      <div className="section-container">
        {/* Filters & Grid */}
        <div className="flex flex-col lg:row gap-16">
          {/* Sidebar Filters */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="sticky top-32 space-y-12">
              <div>
                <h3 className="text-xs font-black italic mb-8 uppercase tracking-widest text-white flex items-center gap-2">
                  <Filter size={14} className="text-brand stroke-[3]" /> CATEGORY FILTER
                </h3>
                <div className="space-y-6">
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className={`block w-full text-left uppercase text-[10px] font-black transition-all tracking-widest italic ${selectedCategory === 'All' ? 'text-brand' : 'text-zinc-500 hover:text-white'}`}
                  >
                    ALL INVENTORY
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`block w-full text-left uppercase text-[10px] font-black transition-all tracking-widest italic ${selectedCategory === cat.name ? 'text-brand' : 'text-zinc-500 hover:text-white'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="card-premium glass p-8 border-zinc-800/50">
                 <h3 className="text-xs font-black italic mb-6 uppercase tracking-widest text-white">IRON LABS PRO</h3>
                 <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-tight mb-8 leading-relaxed italic">JOIN THE ELITE EXPERIMENTAL GROUP FOR REWARDS AND EARLY RELEASES.</p>
                 <button className="text-[10px] font-black uppercase tracking-widest text-brand italic underline decoration-2 underline-offset-8">INITIATE CONNECTION</button>
              </div>
            </div>
          </aside>

          {/* Product Grid Area */}
          <main className="flex-1">
            <div className="flex flex-col sm:row justify-between items-center mb-12 gap-6">
               <p className="text-[10px] text-zinc-600 uppercase font-black italic tracking-widest">
                 DETECTED <span className="text-white">{filteredProducts.length}</span> ACTIVE UNITS IN {selectedCategory}
               </p>
               <div className="flex items-center gap-6">
                  <div className="relative group">
                     <button className="flex items-center gap-3 text-[10px] font-black uppercase italic tracking-widest border border-zinc-800 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition-colors">
                        Sort Priority: {sortBy} <ChevronDown size={14} />
                     </button>
                     <div className="absolute right-0 top-full mt-2 bg-zinc-950 border border-zinc-800 p-2 rounded-2xl shadow-2xl hidden group-hover:block z-20 min-w-[200px]">
                        {['Newest', 'Price: Low to High', 'Price: High to Low'].map((option) => (
                           <button
                             key={option}
                             onClick={() => setSortBy(option)}
                             className="block w-full text-left px-4 py-3 text-[10px] font-black uppercase italic tracking-widest hover:bg-brand hover:text-black rounded-xl transition-all"
                           >
                             {option}
                           </button>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
