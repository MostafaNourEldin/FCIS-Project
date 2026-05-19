/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { User, Package, Settings, LogOut, Heart, CreditCard, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';

const Profile = () => {
  const user = {
    name: 'Alex Ironhand',
    email: 'alex.grit@performance.com',
    memberSince: 'Oct 2023',
    ordersCount: 4,
    points: 1250,
  };

  const recentOrders = [
    { id: '#ORD-9912', date: '2026-04-12', status: 'SHIPPED', total: 110.00 },
    { id: '#ORD-8823', date: '2026-02-01', status: 'DELIVERED', total: 85.50 },
  ];

  return (
    <div className="bg-dark-pure min-h-screen">
      <div className="section-container">
        <div className="flex flex-col lg:row gap-16">
          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
             <div className="card-premium glass p-10 text-center shadow-2xl border-zinc-800/50">
                <div className="w-24 h-24 bg-zinc-950 text-white mx-auto mb-8 flex items-center justify-center rounded-3xl border border-zinc-800 rotate-3 shadow-[0_0_40px_rgba(204,255,0,0.1)]">
                   <User size={48} className="text-zinc-600" />
                </div>
                <h3 className="text-3xl font-black italic tracking-tight uppercase mb-2">{user.name}</h3>
                <p className="text-[10px] font-black text-zinc-500 uppercase mb-8 italic tracking-widest leading-none">{user.email}</p>
                <div className="bg-brand h-10 flex items-center justify-center text-black font-black text-[10px] uppercase tracking-widest italic mb-10 rounded-xl">
                   ELITE OPERATIVE
                </div>
                
                <nav className="space-y-4 text-left">
                   <button className="flex items-center justify-between w-full p-4 rounded-xl bg-zinc-900 border border-brand/20 text-white font-black uppercase text-[10px] italic tracking-widest shadow-xl">
                      <span className="flex items-center gap-3"><Package size={16} className="text-brand" /> DEPLOYMENT HISTORY</span>
                      <ChevronRight size={14} />
                   </button>
                   <button className="flex items-center justify-between w-full p-4 rounded-xl hover:bg-zinc-950 text-zinc-500 hover:text-white font-black uppercase text-[10px] italic tracking-widest transition-all">
                      <span className="flex items-center gap-3"><Heart size={16} /> WISH-LIST DATA</span>
                      <ChevronRight size={14} />
                   </button>
                   <button className="flex items-center justify-between w-full p-4 rounded-xl hover:bg-zinc-950 text-zinc-500 hover:text-white font-black uppercase text-[10px] italic tracking-widest transition-all">
                      <span className="flex items-center gap-3"><CreditCard size={16} /> ASSET TRANSFERS</span>
                      <ChevronRight size={14} />
                   </button>
                   <button className="flex items-center justify-between w-full p-4 rounded-xl hover:bg-zinc-950 text-zinc-500 hover:text-white font-black uppercase text-[10px] italic tracking-widest transition-all border-t border-zinc-900 mt-10 pt-10">
                      <span className="flex items-center gap-3 text-red-500/50 hover:text-red-500"><LogOut size={16} /> TERMINATE SESSION</span>
                   </button>
                </nav>
             </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-16">
             {/* Stats Row */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="stat-card group">
                   <p className="text-[10px] font-black text-zinc-500 uppercase mb-4 italic group-hover:text-brand transition-colors">GRIT REWARDS</p>
                   <div className="flex items-baseline gap-2">
                      <p className="text-5xl font-black italic tracking-tighter text-brand">{user.points}</p>
                      <span className="text-[10px] font-bold text-zinc-700 italic">XP</span>
                   </div>
                   <p className="text-[8px] font-black uppercase mt-4 text-zinc-600 tracking-widest italic leading-none">$25.00 CREDIT OPERATIONAL</p>
                </div>
                <div className="stat-card group">
                   <p className="text-[10px] font-black text-zinc-500 uppercase mb-4 italic group-hover:text-white transition-colors">ACTIVE DEPLOYMENTS</p>
                   <p className="text-5xl font-black italic tracking-tighter">{user.ordersCount}</p>
                   <p className="text-[8px] font-black uppercase mt-4 text-zinc-600 tracking-widest italic leading-none">PHASE IV ATHLETE STATUS</p>
                </div>
                <div className="stat-card group">
                   <p className="text-[10px] font-black text-zinc-500 uppercase mb-4 italic group-hover:text-white transition-colors">ENLISTMENT DATE</p>
                   <p className="text-3xl font-black italic tracking-tighter uppercase">{user.memberSince}</p>
                   <p className="text-[8px] font-black uppercase mt-4 text-zinc-600 tracking-widest italic leading-none">LOYALTY CORE VERIFIED</p>
                </div>
             </div>

             {/* Recent Orders */}
             <section className="card-premium glass p-10 border-zinc-800/50">
                <div className="flex justify-between items-center mb-10 pb-6 border-b border-zinc-900">
                   <h2 className="text-3xl font-black italic tracking-tight uppercase">Recent Telemetry</h2>
                   <span className="text-[8px] font-black uppercase text-zinc-700 italic border border-zinc-900 px-3 py-1 rounded-full">Historical Log</span>
                </div>
                <div className="overflow-x-auto">
                   <table className="w-full text-left">
                      <thead>
                         <tr className="text-[10px] font-black uppercase text-zinc-600 tracking-[0.2em] italic">
                            <th className="pb-6 px-4">Designation</th>
                            <th className="pb-6 px-4">Timestamp</th>
                            <th className="pb-6 px-4">Status</th>
                            <th className="pb-6 px-4">Value</th>
                            <th className="pb-6 px-4"></th>
                         </tr>
                      </thead>
                      <tbody className="text-[11px] font-black divide-y divide-zinc-900">
                         {recentOrders.map((order) => (
                            <tr key={order.id} className="group hover:bg-white/5 transition-all">
                               <td className="py-6 px-4 uppercase tracking-tighter italic text-zinc-300">{order.id}</td>
                               <td className="py-6 px-4 font-mono text-zinc-600 italic uppercase">{order.date}</td>
                               <td className="py-6 px-4">
                                  <span className={`text-[8px] px-3 py-1 rounded bg-zinc-950 border border-zinc-800 tracking-widest shadow-inner ${order.status === 'SHIPPED' ? 'text-brand' : 'text-zinc-600'}`}>
                                     {order.status}
                                  </span>
                                </td>
                               <td className="py-6 px-4 font-black italic tracking-tighter text-white">${order.total}.00</td>
                               <td className="py-6 px-4 text-right">
                                  <button className="text-[8px] font-black uppercase italic tracking-widest text-zinc-700 hover:text-brand underline decoration-2 underline-offset-4 transition-all">TRACK LINK</button>
                               </td>
                            </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
             </section>

             {/* Recommended for you */}
             <section>
                <div className="flex justify-between items-end mb-10">
                   <div>
                      <span className="text-brand font-black text-xs uppercase tracking-widest mb-2 block italic">Neural Match</span>
                      <h2 className="text-4xl font-black italic tracking-tight uppercase">Personalized Gear</h2>
                   </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                   {PRODUCTS.slice(3, 6).map(p => (
                      <div key={p.id} className="card-premium glass p-4 group border-zinc-800/30">
                          <img src={p.image} className="aspect-[4/5] object-cover mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 cursor-pointer rounded-2xl" />
                          <div className="flex justify-between items-start gap-4">
                             <h4 className="font-black text-[10px] uppercase italic leading-tight group-hover:text-brand transition-colors">{p.name}</h4>
                             <p className="text-[12px] font-black italic tracking-tighter text-white">${p.price}.00</p>
                          </div>
                      </div>
                   ))}
                </div>
             </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
