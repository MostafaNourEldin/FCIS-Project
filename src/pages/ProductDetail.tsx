/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, Truck, RefreshCcw, ShieldCheck, Plus, Minus, ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { ProductCard } from './Home';

const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-dark-pure">
      <div className="section-container">
        {/* Breadcrumbs / Back */}
        <Link to="/products" className="inline-flex items-center gap-3 text-[10px] font-black uppercase italic text-zinc-500 hover:text-white mb-12 group transition-colors tracking-widest">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform stroke-[3]" /> BACK TO REPOSITORY
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-[4/5] bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 p-8 shadow-2xl">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="grid grid-cols-4 gap-6">
               {[product.image, product.image, product.image].map((img, i) => (
                 <div key={i} className={`aspect-square bg-zinc-900 rounded-2xl border-2 overflow-hidden transition-all p-2 ${i === 0 ? 'border-brand' : 'border-zinc-800 hover:border-zinc-700'}`}>
                    <img src={img} alt={`${product.name} ${i}`} className="w-full h-full object-cover opacity-60 grayscale" />
                 </div>
               ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-12">
              <p className="text-brand font-black text-[10px] uppercase tracking-[0.3em] mb-4 italic">{product.category} // PERFORMANCE UNIT</p>
              <h1 className="text-6xl md:text-8xl mb-6 italic tracking-tighter leading-none">{product.name}</h1>
              <div className="flex items-center gap-6 mb-8 text-[10px] font-black italic tracking-widest uppercase text-zinc-600">
                 <div className="flex text-brand">
                   {[1, 2, 3, 4, 5].map((s) => (
                     <Star key={s} size={14} fill={s <= Math.floor(product.rating) ? "currentColor" : "none"} strokeWidth={3} />
                   ))}
                 </div>
                 <span>{product.reviews} VERIFIED DEPLOYMENTS</span>
              </div>
              <p className="text-5xl font-black italic tracking-tighter text-white">${product.price}.00</p>
            </div>

            <div className="space-y-12">
              {/* Color Select */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest italic mb-6 text-zinc-500">SELECT SPECTRUM // <span className="text-white">{selectedColor}</span></p>
                <div className="flex gap-4">
                   {product.colors.map(color => (
                     <button
                       key={color}
                       onClick={() => setSelectedColor(color)}
                       className={`w-12 h-12 rounded-2xl border-2 p-1.5 transition-all ${selectedColor === color ? 'border-brand scale-110 shadow-xl' : 'border-zinc-800'}`}
                     >
                       <div 
                         className="w-full h-full rounded-xl" 
                         style={{ backgroundColor: color === 'Black' ? '#1a1a1a' : color === 'Venom Green' ? '#ccff00' : '#8e9299' }}
                       ></div>
                     </button>
                   ))}
                </div>
              </div>

              {/* Size Select */}
              <div>
                 <div className="flex justify-between items-center mb-6">
                    <p className="text-[10px] font-black uppercase tracking-widest italic text-zinc-500">DIMENSION SCALE // <span className="text-white">{selectedSize}</span></p>
                    <button className="text-[8px] font-black underline uppercase text-zinc-700 tracking-widest italic">CALIBRATE SIZE</button>
                 </div>
                 <div className="grid grid-cols-4 gap-3">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-4 border border-zinc-800 rounded-2xl font-black italic transition-all text-xs uppercase tracking-widest ${selectedSize === size ? 'border-brand bg-brand text-black shadow-xl shadow-brand/20' : 'bg-transparent text-zinc-500 hover:border-zinc-600 hover:text-white'}`}
                      >
                        {size}
                      </button>
                    ))}
                 </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex flex-col sm:row gap-6">
                 <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-2xl h-16 px-2">
                    <button onClick={() => setQuantity(Math.max(1, quantity-1))} className="w-12 h-full flex items-center justify-center hover:bg-zinc-900 transition-colors text-zinc-400"><Minus size={18} /></button>
                    <span className="w-12 text-center font-black italic text-lg">{quantity}</span>
                    <button onClick={() => setQuantity(quantity+1)} className="w-12 h-full flex items-center justify-center hover:bg-zinc-900 transition-colors text-brand"><Plus size={18} /></button>
                 </div>
                 <Link to="/cart" className="btn-primary flex-1 h-16 text-xl rounded-2xl">
                    <ShoppingBag size={24} className="stroke-[3]" /> INITIALIZE DEPLOYMENT
                 </Link>
              </div>

              {/* Product USPs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-zinc-900 italic">
                 <div className="flex items-center gap-4">
                    <Truck size={24} className="text-brand stroke-[3]" />
                    <p className="text-[8px] font-black uppercase tracking-[0.2em] leading-tight text-zinc-400">GLOBAL RAPID <br />DISPATCH</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <RefreshCcw size={24} className="text-brand stroke-[3]" />
                    <p className="text-[8px] font-black uppercase tracking-[0.2em] leading-tight text-zinc-400">30-DAY STATUS <br />REVERSION</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <ShieldCheck size={24} className="text-brand stroke-[3]" />
                    <p className="text-[8px] font-black uppercase tracking-[0.2em] leading-tight text-zinc-400">ENCRYPTED CORE <br />TRANSACTION</p>
                 </div>
              </div>
              
              {/* Description etc */}
              <div className="pt-12 space-y-10">
                <div>
                   <h3 className="text-2xl font-black italic mb-6 uppercase tracking-tight">KINETIC BREAKDOWN</h3>
                   <p className="text-zinc-500 font-medium leading-relaxed italic">
                     {product.description} Built with our proprietary Infinity-Tech fabric, this {product.category.toLowerCase()} offers unprecedented breathability and moisture control.
                   </p>
                </div>
                <ul className="text-[10px] space-y-4 text-zinc-400 font-black uppercase tracking-[0.2em] italic">
                   <li className="flex items-center gap-3"><div className="w-1 h-1 bg-brand rounded-full"></div> SWEAT-WICKING TECHNOLOGY</li>
                   <li className="flex items-center gap-3"><div className="w-1 h-1 bg-brand rounded-full"></div> 4-WAY STRETCH COMPRESSION</li>
                   <li className="flex items-center gap-3"><div className="w-1 h-1 bg-brand rounded-full"></div> REINFORCED SEAMS FOR DURABILITY</li>
                   <li className="flex items-center gap-3"><div className="w-1 h-1 bg-brand rounded-full"></div> REFLECTIVE LOGO FOR NIGHT TRAINING</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32 pt-24 border-t border-zinc-900">
           <span className="text-brand font-black text-xs uppercase tracking-widest mb-4 block italic">Suggested Loadout</span>
           <h2 className="text-5xl md:text-6xl mb-12 italic">EQUIPMENT SYNERGY</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.length > 0 ? relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              )) : PRODUCTS.slice(0, 4).map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
