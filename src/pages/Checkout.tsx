/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CreditCard, Truck, MapPin, Eye, Lock } from 'lucide-react';

const Checkout = () => {
  return (
    <div className="bg-dark-pure min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center mb-16">
           <Link to="/" className="text-4xl font-black italic text-white tracking-tighter">
              G<span className="text-brand">.</span>
           </Link>
           <div className="flex items-center gap-3 text-[10px] font-black uppercase italic tracking-widest text-zinc-600">
              <Lock size={14} className="stroke-[3]" /> PROTOCOL ENCRYPTED // ACTIVE
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Form */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-12">
            {/* Step 1: Shipping */}
            <section className="card-premium glass p-10 border-zinc-800/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <div className="text-[40px] font-black italic text-zinc-800/20 leading-none">01</div>
                </div>
                <div className="flex items-center gap-6 mb-10 pb-6 border-b border-zinc-800/30">
                   <div className="w-10 h-10 bg-brand text-black rounded-xl flex items-center justify-center font-black italic text-sm shadow-[0_0_30px_rgba(204,255,0,0.2)]">ST-1</div>
                   <h2 className="text-3xl font-black italic tracking-tight flex items-center gap-3 uppercase">
                     <MapPin size={24} className="text-brand stroke-[3]" /> DISPATCH VECTOR
                   </h2>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                   <div className="col-span-1">
                      <label className="block text-[10px] font-black text-zinc-600 uppercase italic tracking-widest mb-4">SPEC designation / FIRST</label>
                      <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 outline-none focus:border-brand italic font-bold" />
                   </div>
                   <div className="col-span-1">
                      <label className="block text-[10px] font-black text-zinc-600 uppercase italic tracking-widest mb-4">SPEC designation / LAST</label>
                      <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 outline-none focus:border-brand italic font-bold" />
                   </div>
                   <div className="col-span-2">
                      <label className="block text-[10px] font-black text-zinc-600 uppercase italic tracking-widest mb-4">LOGISTIC COORDINATES / ADDRESS</label>
                      <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 outline-none focus:border-brand italic font-bold" />
                   </div>
                   <div className="col-span-1">
                      <label className="block text-[10px] font-black text-zinc-600 uppercase italic tracking-widest mb-4">ZONE / CITY</label>
                      <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 outline-none focus:border-brand italic font-bold" />
                   </div>
                   <div className="col-span-1">
                      <label className="block text-[10px] font-black text-zinc-600 uppercase italic tracking-widest mb-4">ZIP CODE</label>
                      <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 outline-none focus:border-brand italic font-bold" />
                   </div>
                </div>
            </section>

            {/* Step 2: Shipping Method */}
            <section className="card-premium glass p-10 border-zinc-800/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <div className="text-[40px] font-black italic text-zinc-800/20 leading-none">02</div>
                </div>
                <div className="flex items-center gap-6 mb-10 pb-6 border-b border-zinc-800/30">
                   <div className="w-10 h-10 bg-brand text-black rounded-xl flex items-center justify-center font-black italic text-sm shadow-[0_0_30px_rgba(204,255,0,0.2)]">ST-2</div>
                   <h2 className="text-3xl font-black italic tracking-tight flex items-center gap-3 uppercase">
                     <Truck size={24} className="text-brand stroke-[3]" /> LOGISTIC TRANSIT
                   </h2>
                </div>
                
                <div className="space-y-6">
                   <label className="flex items-center justify-between p-6 border-2 border-brand bg-brand/5 cursor-pointer rounded-2xl shadow-xl shadow-brand/5 group transition-all">
                      <div className="flex items-center gap-6">
                         <div className="w-6 h-6 rounded-full border-2 border-brand flex items-center justify-center p-1">
                            <div className="w-full h-full bg-brand rounded-full"></div>
                         </div>
                         <div>
                            <p className="font-black text-lg uppercase italic tracking-tighter">RAPID GLOBAL TRANSIT</p>
                            <p className="text-[9px] text-zinc-500 font-black uppercase tracking-widest italic">3-5 CYCLES</p>
                         </div>
                      </div>
                      <span className="font-black text-lg italic text-brand">CREDIT ZERO / FREE</span>
                   </label>
                   <label className="flex items-center justify-between p-6 border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-all rounded-2xl group">
                      <div className="flex items-center gap-6">
                         <div className="w-6 h-6 rounded-full border-2 border-zinc-800 group-hover:border-zinc-700 transition-colors"></div>
                         <div>
                            <p className="font-black text-lg uppercase italic tracking-tighter text-zinc-400 group-hover:text-white transition-colors">KINETIC OVERDRIVE DISPATCH</p>
                            <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest italic">NEXT CYCLE BY 1200HRS</p>
                         </div>
                      </div>
                      <span className="font-black text-lg italic text-zinc-500 group-hover:text-white transition-colors">$15.00</span>
                   </label>
                </div>
            </section>

            {/* Step 3: Payment */}
            <section className="card-premium glass p-10 border-zinc-800/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <div className="text-[40px] font-black italic text-zinc-800/20 leading-none">03</div>
                </div>
                <div className="flex items-center gap-6 mb-10 pb-6 border-b border-zinc-800/30">
                   <div className="w-10 h-10 bg-brand text-black rounded-xl flex items-center justify-center font-black italic text-sm shadow-[0_0_30px_rgba(204,255,0,0.2)]">ST-3</div>
                   <h2 className="text-3xl font-black italic tracking-tight flex items-center gap-3 uppercase">
                     <CreditCard size={24} className="text-brand stroke-[3]" /> RESOURCE TRANSFER
                   </h2>
                </div>
                
                <div className="space-y-8">
                   <div>
                      <label className="block text-[10px] font-black text-zinc-600 uppercase italic tracking-widest mb-4">CARD IDENTITY NUMBER</label>
                      <div className="relative">
                         <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 pl-14 outline-none focus:border-brand italic font-bold placeholder:text-zinc-800" />
                         <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-800 stroke-[2.5]" size={22} />
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-8">
                      <div>
                         <label className="block text-[10px] font-black text-zinc-600 uppercase italic tracking-widest mb-4">TERMINATION TIMESTAMP</label>
                         <input type="text" placeholder="MM / YY" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 outline-none focus:border-brand italic font-bold placeholder:text-zinc-800" />
                      </div>
                      <div>
                         <label className="block text-[10px] font-black text-zinc-600 uppercase italic tracking-widest mb-4">SECURE CVC UNIT</label>
                         <input type="password" placeholder="XXX" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 outline-none focus:border-brand italic font-bold placeholder:text-zinc-800" />
                      </div>
                   </div>
                </div>
            </section>

            <button className="btn-primary w-full h-20 text-xl italic tracking-tighter hidden lg:flex rounded-3xl shadow-[0_0_80px_rgba(204,255,0,0.15)]">
              EXECUTE ACQUISITION PROTOCOL
            </button>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-12 xl:col-span-5">
             <div className="card-premium glass p-10 xl:sticky xl:top-12 border-zinc-800 shadow-2xl relative">
                <div className="absolute -top-4 -right-4">
                  <div className="bg-brand text-black px-4 py-2 font-black italic text-[10px] uppercase rounded-xl shadow-xl">LIVE TELEMETRY</div>
                </div>
                <div className="flex justify-between items-center mb-12 pb-6 border-b border-zinc-900">
                   <h3 className="text-3xl font-black italic tracking-tight uppercase">MANIFEST</h3>
                   <Link to="/cart" className="text-[10px] font-black uppercase italic underline decoration-2 underline-offset-4 text-brand">MODIFY LOADOUT</Link>
                </div>
                
                <div className="space-y-10 mb-12">
                   {[
                      { name: 'Apex Seamless Tee', spec: 'BLACK OPS', price: 45, image: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=200' },
                      { name: 'Core Hooded Vest', spec: 'SLATE CORE', price: 65, image: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&q=80&w=200' }
                   ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-center">
                         <div className="w-20 h-24 bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden flex-shrink-0">
                            <img src={item.image} className="w-full h-full object-cover grayscale opacity-60" />
                         </div>
                         <div className="flex-1">
                            <p className="text-lg font-black uppercase italic tracking-tighter mb-1">{item.name}</p>
                            <p className="text-[9px] text-zinc-600 uppercase font-black tracking-widest italic">SPEC: {item.spec}</p>
                         </div>
                         <p className="font-black text-xl italic tracking-tighter text-brand">${item.price}</p>
                      </div>
                   ))}
                </div>

                <div className="space-y-6 pt-10 border-t border-zinc-900 italic">
                   <div className="flex justify-between text-[10px] font-black uppercase italic tracking-widest text-zinc-600">
                      <span>BASELINE VALUE</span>
                      <span className="text-white">$110.00</span>
                   </div>
                   <div className="flex justify-between text-[10px] font-black uppercase italic tracking-widest text-zinc-600">
                      <span>LOGISTIC OVERHEAD</span>
                      <span className="text-brand">SECURED / FREE</span>
                   </div>
                   <div className="flex justify-between pt-8 items-center">
                      <span className="text-xl font-black uppercase italic leading-none">GRAND TOTAL</span>
                      <span className="text-4xl font-black italic tracking-tighter text-brand shadow-brand/20 shadow-xl">$110.00</span>
                   </div>
                </div>

                <div className="mt-12 flex items-center justify-center gap-4 text-[8px] font-black uppercase italic tracking-[0.3em] text-zinc-700">
                   <ShieldCheck size={16} className="text-brand stroke-[3]" /> ENCRYPTED CORE TRANSACTION
                </div>

                <button className="btn-primary w-full h-20 mt-12 lg:hidden rounded-3xl">
                  EXECUTE ACQUISITION
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
