/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Github, Chrome } from 'lucide-react';

export const SignIn = () => {
  return (
    <div className="min-h-screen bg-dark-pure flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link to="/" className="text-5xl font-black italic text-white tracking-tighter inline-block mb-12">
          G<span className="text-brand">.</span>
        </Link>
        <h2 className="text-4xl font-black italic tracking-wide mb-2 uppercase">RE-AUTHENTICATE</h2>
        <p className="text-[10px] font-black uppercase text-zinc-600 italic tracking-[0.2em] mb-10">Access your tactical performance portal</p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="card-premium glass py-12 px-10 shadow-2xl flex flex-col gap-10">
          <form className="space-y-8">
            <div>
              <label className="block text-[10px] font-black text-zinc-600 uppercase italic tracking-widest mb-4">OPERATIONAL EMAIL</label>
              <div className="relative">
                 <input type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 pl-12 outline-none focus:border-brand text-sm italic font-bold" placeholder="athlete@forge.grit" />
                 <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-800 stroke-[2.5]" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-zinc-600 uppercase italic tracking-widest mb-4">ENCRYPTION KEY</label>
              <div className="relative">
                 <input type="password"  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 pl-12 outline-none focus:border-brand text-sm font-bold" placeholder="••••••••" />
                 <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-800 stroke-[2.5]" />
              </div>
              <div className="flex justify-end mt-4">
                 <button className="text-[9px] font-black italic underline uppercase text-zinc-700 tracking-widest">Lost Credentials?</button>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full h-16 text-lg rounded-2xl shadow-[0_0_50px_rgba(204,255,0,0.1)]">ESTABLISH LINK</button>
          </form>

          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800/50"></div>
              </div>
              <div className="relative flex justify-center text-[8px] uppercase font-black tracking-[0.4em] italic leading-none">
                <span className="px-6 bg-[#0c0c0e] text-zinc-700">EXTERNAL GATEWAYS</span>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <button className="btn-outline py-4 border-zinc-800 flex items-center justify-center gap-3 text-[10px] italic rounded-2xl">
                <Chrome size={18} className="stroke-[2.5]" /> GOOGLE
              </button>
              <button className="btn-outline py-4 border-zinc-800 flex items-center justify-center gap-3 text-[10px] italic rounded-2xl">
                <Github size={18} className="stroke-[2.5]" /> GITHUB
              </button>
            </div>
          </div>
          
          <p className="text-center text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600 italic">
            NEW RECRUIT? <Link to="/signup" className="text-brand underline underline-offset-4 decoration-2 hover:text-white transition-colors ml-2">ENLIST NOW</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export const SignUp = () => {
  return (
    <div className="min-h-screen bg-dark-pure flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link to="/" className="text-5xl font-black italic text-white tracking-tighter inline-block mb-12">
          G<span className="text-brand">.</span>
        </Link>
        <h2 className="text-4xl font-black italic tracking-wide mb-2 uppercase">NEW COMMISSION</h2>
        <p className="text-[10px] font-black uppercase text-zinc-600 italic tracking-[0.2em] mb-10">Create your professional athlete profile</p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="card-premium glass py-12 px-10 shadow-2xl flex flex-col gap-10">
          <form className="space-y-8">
            <div>
              <label className="block text-[10px] font-black text-zinc-600 uppercase italic tracking-widest mb-4">FULL DESIGNATION</label>
              <div className="relative">
                 <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 pl-12 outline-none focus:border-brand text-sm italic font-bold" placeholder="JOHN TRAINING" />
                 <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-800 stroke-[2.5]" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-zinc-600 uppercase italic tracking-widest mb-4">OPERATIONAL EMAIL</label>
              <div className="relative">
                 <input type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 pl-12 outline-none focus:border-brand text-sm italic font-bold" placeholder="athlete@forge.grit" />
                 <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-800 stroke-[2.5]" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-zinc-600 uppercase italic tracking-widest mb-4">NEW ENCRYPTION KEY</label>
              <div className="relative">
                 <input type="password"  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 pl-12 outline-none focus:border-brand text-sm font-bold" placeholder="••••••••" />
                 <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-800 stroke-[2.5]" />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full h-16 text-lg rounded-2xl">INITIATE ENLISTMENT</button>
          </form>

          <p className="text-center text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600 italic">
            ALREADY DEPLOYED? <Link to="/signin" className="text-brand underline underline-offset-4 decoration-2 hover:text-white transition-colors ml-2">LOG IN</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
