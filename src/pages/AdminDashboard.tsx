/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  List, 
  ShoppingCart as OrderIcon, 
  Users, 
  Settings, 
  ArrowUpRight, 
  ArrowDownRight,
  Plus,
  Search,
  MoreVertical,
  LogOut
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/mockData';

const AdminDashboard = () => {
  const stats = [
    { name: 'Total Sales', value: '$124,592.40', change: '+12.5%', isUp: true },
    { name: 'Active Orders', value: '842', change: '+8.1%', isUp: true },
    { name: 'Elite Members', value: '1,240', change: '+15.2%', isUp: true },
    { name: 'Conversion Rate', value: '4.2%', change: '+0.4%', isUp: true },
  ];

  return (
    <div className="min-h-screen bg-dark-pure flex">
      {/* Sidebar - Desktop */}
      <aside className="w-24 bg-zinc-950 flex flex-col items-center py-8 border-r border-zinc-800 shrink-0">
        <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center mb-12 text-black font-black text-2xl italic shadow-[0_0_20px_rgba(204,255,0,0.3)]">G</div>
        <nav className="flex-1 flex flex-col gap-10 text-zinc-500">
           {[LayoutDashboard, Package, List, OrderIcon, Users, Settings].map((Icon, idx) => (
             <button 
               key={idx} 
               className={`p-3 rounded-2xl transition-all cursor-pointer ${idx === 0 ? 'bg-zinc-900 text-white shadow-xl' : 'hover:text-white hover:bg-zinc-950'}`}
             >
               <Icon size={24} />
             </button>
           ))}
        </nav>
        <div className="mt-auto p-4 text-zinc-700 hover:text-white cursor-pointer transition-colors">
           <LogOut size={24} />
        </div>
      </aside>

      {/* Main Admin Area */}
      <main className="flex-1 overflow-auto bg-dark-pure p-10 flex flex-col gap-10">
        {/* Header */}
        <header className="flex justify-between items-center">
           <div className="flex flex-col">
              <span className="text-zinc-500 text-[10px] font-black tracking-[0.3em] uppercase italic mb-2">Central Operations</span>
              <h1 className="text-4xl font-black italic tracking-tighter">FORGE DASHBOARD.</h1>
           </div>
           <div className="flex items-center gap-6">
              <div className="relative hidden md:block">
                 <input type="text" placeholder="QUERY SYSTEM..." className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-3 pl-12 text-[10px] font-bold uppercase outline-none focus:border-brand w-80 text-white" />
                 <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" />
              </div>
              <div className="flex items-center gap-4 bg-zinc-950 p-2 pr-6 rounded-3xl border border-zinc-800">
                 <div className="w-10 h-10 bg-brand text-dark rounded-2xl flex items-center justify-center font-black italic">A</div>
                 <div className="hidden sm:block">
                    <p className="text-[10px] font-black uppercase italic leading-none">Admin Core</p>
                    <p className="text-[8px] text-zinc-500 font-bold uppercase italic mt-1">Operational Head</p>
                 </div>
              </div>
           </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {stats.map((stat, i) => (
             <div key={i} className="stat-card flex flex-col justify-between group cursor-default hover:bg-zinc-900/50 transition-all">
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-4 italic group-hover:text-brand transition-colors">{stat.name}</p>
                <div className="flex items-end justify-between">
                   <p className="text-3xl font-black tracking-tighter">{stat.value}</p>
                   <div className={`flex items-center gap-1 text-[10px] font-black italic ${stat.isUp ? 'text-brand' : 'text-red-500'}`}>
                      {stat.change}
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
           {/* Products Table Card */}
           <div className="lg:col-span-8 space-y-10">
              <div className="card-premium h-full glass border-zinc-800/30">
                 <div className="p-8 border-b border-zinc-800/50 flex justify-between items-center">
                    <h3 className="text-2xl font-black italic tracking-tight uppercase">Product performance</h3>
                    <button className="btn-primary py-2 px-6 text-[10px]">
                      <Plus size={14} className="stroke-[3]" /> NEW UNIT
                    </button>
                 </div>
                 <div className="overflow-x-auto p-4">
                    <table className="w-full text-left">
                       <thead>
                          <tr className="text-[10px] font-black uppercase text-zinc-500 tracking-widest border-b border-zinc-800/50 italic">
                             <th className="px-6 py-5">System designation</th>
                             <th className="px-6 py-5">Financial value</th>
                             <th className="px-6 py-5">Operational health</th>
                             <th className="px-6 py-5"></th>
                          </tr>
                       </thead>
                       <tbody className="text-[11px] font-bold divide-y divide-zinc-900">
                          {PRODUCTS.map((prod) => (
                             <tr key={prod.id} className="group hover:bg-white/5 transition-all">
                                <td className="px-6 py-5 flex items-center gap-5">
                                   <img src={prod.image} className="w-12 h-14 object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all border border-zinc-800" />
                                   <span className="uppercase tracking-tight text-zinc-300 group-hover:text-white transition-colors">{prod.name}</span>
                                </td>
                                <td className="px-6 py-5 text-zinc-500 font-mono italic">${prod.price}.00</td>
                                <td className="px-6 py-5">
                                   <div className="w-32 bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                                      <div className="bg-brand h-full w-[85%] shadow-[0_0_10px_rgba(204,255,0,0.5)]"></div>
                                   </div>
                                </td>
                                <td className="px-6 py-5 text-right">
                                   <button className="text-zinc-700 hover:text-brand transition-colors"><MoreVertical size={16} /></button>
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>

           {/* Sidebar Info */}
           <div className="lg:col-span-4 space-y-10">
              {/* Recent Activity */}
              <div className="card-premium glass p-8 border-zinc-800/30 flex flex-col h-full">
                 <div className="flex justify-between items-center mb-8 pb-4 border-b border-zinc-800/50">
                    <h3 className="text-xl font-black italic tracking-tight uppercase">Recent Telemetry</h3>
                    <span className="text-[8px] font-black uppercase tracking-widest text-brand animate-pulse">Live</span>
                 </div>
                 <div className="space-y-8">
                    {[
                      { title: 'New Order #9023', detail: '2 mins ago • $149.00', status: 'SHIPPED' },
                      { title: 'Stock Alert: Joggers', detail: '15 mins ago • Limited', status: 'CRITICAL' },
                      { title: 'New User Registered', detail: '42 mins ago • PRO LEVEL', status: 'AUTH' },
                      { title: 'Payout Processed', detail: '2 hours ago • $2,420.00', status: 'FINANCE' },
                    ].map((item, i) => (
                       <div key={i} className="flex items-center gap-6 group cursor-default">
                          <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-600 group-hover:border-brand group-hover:text-brand transition-all">
                             {i === 0 ? <OrderIcon size={18} /> : i === 1 ? <Package size={18} /> : <Users size={18} />}
                          </div>
                          <div className="flex-1">
                             <p className="text-[11px] font-black uppercase italic leading-none mb-1">{item.title}</p>
                             <p className="text-[8px] text-zinc-500 font-bold uppercase italic tracking-tighter">{item.detail}</p>
                          </div>
                          <span className={`text-[7px] font-black px-2 py-1 rounded border ${item.status === 'CRITICAL' ? 'border-red-500/20 text-red-500' : 'border-brand/20 text-brand'}`}>{item.status}</span>
                       </div>
                    ))}
                 </div>
                 
                 <div className="mt-auto pt-10">
                    <button className="btn-secondary w-full text-[10px] italic tracking-[0.2em]">DOWNLOAD FULL AUDIT</button>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
