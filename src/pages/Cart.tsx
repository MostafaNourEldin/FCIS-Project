/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';

const Cart = () => {
  const cartItems = [
    { ...PRODUCTS[0], quantity: 1, selectedSize: 'L', selectedColor: 'Black' },
    { ...PRODUCTS[1], quantity: 1, selectedSize: 'XL', selectedColor: 'Slate' },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="bg-dark-pure min-h-screen">
      <div className="section-container">
        <h1 className="text-6xl md:text-8xl mb-16 italic tracking-tighter">MISSION ASSETS.</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Cart List */}
          <div className="lg:col-span-8 space-y-8">
            {cartItems.map((item, idx) => (
              <div key={idx} className="card-premium glass p-8 flex flex-col sm:row gap-8">
                <div className="w-full sm:w-40 aspect-[4/5] bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800/50">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale opacity-70" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-black text-2xl uppercase italic tracking-tighter mb-2">{item.name}</h3>
                      <p className="text-[10px] text-zinc-600 uppercase font-black tracking-widest italic mb-6">UNIT: {item.category}</p>
                      <div className="flex gap-6 text-[10px] font-black uppercase italic tracking-widest text-zinc-400">
                         <span>SIZE: <span className="text-white">{item.selectedSize}</span></span>
                         <span>SPEC: <span className="text-white">{item.selectedColor}</span></span>
                      </div>
                    </div>
                    <p className="font-black text-2xl italic tracking-tighter text-brand">${item.price}</p>
                  </div>

                  <div className="flex justify-between items-end mt-12 sm:mt-0">
                    <div className="flex items-center bg-dark-pure border border-zinc-800 rounded-xl px-2 h-10">
                      <button className="px-4 text-zinc-500 hover:text-white transition-colors">-</button>
                      <span className="px-4 font-black italic text-sm">{item.quantity}</span>
                      <button className="px-4 text-zinc-500 hover:text-brand transition-colors">+</button>
                    </div>
                    <button className="text-zinc-700 hover:text-red-500 transition-colors p-2">
                       <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            <Link to="/products" className="inline-flex items-center gap-3 font-black uppercase italic text-[10px] tracking-[0.2em] text-zinc-500 hover:text-white transition-all">
              <ShoppingBag size={14} className="stroke-[3]" /> RETURN TO ARMORY
            </Link>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-4">
            <div className="card-premium glass p-10 sticky top-32 shadow-2xl overflow-visible">
              <h3 className="text-2xl font-black italic tracking-wide mb-10 pb-4 border-b border-zinc-800/50">OPERATIONAL TOTAL</h3>
              <div className="space-y-6 mb-10">
                 <div className="flex justify-between text-[10px] uppercase font-black tracking-widest italic text-zinc-500">
                    <span>Baseline Subtotal</span>
                    <span className="text-white">${subtotal}.00</span>
                 </div>
                 <div className="flex justify-between text-[10px] uppercase font-black tracking-widest italic text-zinc-500">
                    <span>Global Logistics</span>
                    <span className="text-brand">SECURED / FREE</span>
                 </div>
                 <div className="pt-6 border-t border-zinc-800 flex justify-between items-center">
                    <span className="text-sm font-black uppercase italic tracking-widest">Grand Total</span>
                    <span className="text-3xl font-black italic tracking-tighter text-brand">${subtotal}.00</span>
                 </div>
              </div>

              <Link to="/checkout" className="btn-primary w-full h-16 text-lg rounded-2xl group">
                FINALIZE ACQUISITION <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform stroke-[3]" />
              </Link>
              
              <div className="space-y-6 pt-10">
                <div className="flex items-center gap-4">
                   <ShieldCheck size={20} className="text-brand stroke-[3]" />
                   <p className="text-[8px] font-black uppercase italic tracking-widest leading-tight text-zinc-600">ENCRYPTED CORE LINK SECURED VIA STRIPE PROTOCOL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
