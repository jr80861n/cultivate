"use client";
import React, { useState } from 'react';

export default function Footer() {
  const [showMapOptions, setShowMapOptions] = useState(false);
  const [showEmailOptions, setShowEmailOptions] = useState(false);

  return (
        <footer className="bg-black/90 border-t border-white/5 py-24 relative z-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 mb-32">
              <div className="lg:col-span-5 flex flex-col gap-10">
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-primary flex items-center justify-center rounded-sm shadow-[0_0_20px_rgba(16, 185, 129,0.4)]">
                    <span className="material-symbols-outlined !text-2xl">spa</span>
                  </div>
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter">Cultivate</h3>
                </div>
                <p className="text-slate-400 text-lg max-w-sm leading-relaxed font-medium">
                  Redefining the boundaries of movement through elite technical training and unapologetic artistic vision.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <a className="size-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-primary hover:border-primary hover:shadow-[0_0_20px_rgba(16, 185, 129,0.5)] transition-all text-slate-400 hover:text-white group magnetic-btn interactive-hover" href="#">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>
                  <a className="size-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-primary hover:border-primary hover:shadow-[0_0_20px_rgba(16, 185, 129,0.5)] transition-all text-slate-400 hover:text-white group magnetic-btn interactive-hover" href="#">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-2">
                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-10 text-glow">Studio</h4>
                <nav className="flex flex-col gap-5 text-xs font-black uppercase tracking-[0.2em]">
                  <a className="text-slate-500 hover:text-white transition-colors hover:translate-x-2 duration-300 interactive-hover" href="#">Classes</a>
                  <a className="text-slate-500 hover:text-white transition-colors hover:translate-x-2 duration-300 interactive-hover" href="#">Faculty</a>
                  <a className="text-slate-500 hover:text-white transition-colors hover:translate-x-2 duration-300 interactive-hover" href="#">Intensives</a>
                  <a className="text-slate-500 hover:text-white transition-colors hover:translate-x-2 duration-300 interactive-hover" href="#">Archives</a>
                </nav>
              </div>
              <div className="lg:col-span-2">
                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-10 text-glow">Resources</h4>
                <nav className="flex flex-col gap-5 text-xs font-black uppercase tracking-[0.2em]">
                  <a className="text-slate-500 hover:text-white transition-colors hover:translate-x-2 duration-300 interactive-hover" href="#">Member Portal</a>
                  <a className="text-slate-500 hover:text-white transition-colors hover:translate-x-2 duration-300 interactive-hover" href="#">Safety Protocols</a>
                  <a className="text-slate-500 hover:text-white transition-colors hover:translate-x-2 duration-300 interactive-hover" href="#">Studio Rental</a>
                  <a className="text-slate-500 hover:text-white transition-colors hover:translate-x-2 duration-300 interactive-hover" href="#">Policy</a>
                </nav>
              </div>
              <div className="lg:col-span-3">
                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-10 text-glow">Visit</h4>
                <div className="flex flex-col gap-8 text-slate-500">
                  <div className="relative flex items-start gap-4 group cursor-pointer" onClick={() => setShowMapOptions(!showMapOptions)}>
                    <span className="material-symbols-outlined text-primary !text-2xl group-hover:drop-shadow-[0_0_10px_rgba(16, 185, 129,0.6)] transition-all">location_on</span>
                    <span className="text-xs font-black uppercase tracking-[0.2em] leading-loose group-hover:text-white transition-colors">
                      123 Poplar Pointe Dr Units A & B<br />
                      Mooresville, NC 28117
                    </span>
                    
                    {showMapOptions && (
                      <div className="absolute top-full left-10 mt-2 bg-[#020617] border border-primary/50 rounded-lg p-2 shadow-[0_10px_30px_rgba(16, 185, 129,0.3)] z-50 flex flex-col gap-1 min-w-[200px]" onClick={(e) => e.stopPropagation()}>
                        <a 
                          href="https://www.google.com/maps/search/?api=1&query=123+Poplar+Pointe+Dr,+Mooresville,+NC+28117" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-3 text-xs font-bold text-white hover:bg-primary/80 hover:text-white rounded transition-colors flex items-center gap-3 uppercase tracking-widest"
                        >
                          <span className="material-symbols-outlined !text-base">map</span>
                          Google Maps
                        </a>
                        <a 
                          href="http://maps.apple.com/?q=123+Poplar+Pointe+Dr,+Mooresville,+NC+28117" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-3 text-xs font-bold text-white hover:bg-primary/80 hover:text-white rounded transition-colors flex items-center gap-3 uppercase tracking-widest"
                        >
                          <span className="material-symbols-outlined !text-base">explore</span>
                          Apple Maps
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="relative flex items-center gap-4 group cursor-pointer" onClick={() => setShowEmailOptions(!showEmailOptions)}>
                    <span className="material-symbols-outlined text-primary !text-2xl group-hover:drop-shadow-[0_0_10px_rgba(16, 185, 129,0.6)] transition-all">mail</span>
                    <span className="text-xs font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors">cultivatedancenc@gmail.com</span>
                    
                    {showEmailOptions && (
                      <div className="absolute bottom-full left-10 mb-2 bg-[#020617] border border-primary/50 rounded-lg p-2 shadow-[0_10px_30px_rgba(16, 185, 129,0.3)] z-50 flex flex-col gap-1 min-w-[200px]" onClick={(e) => e.stopPropagation()}>
                        <a 
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=cultivatedancenc@gmail.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-3 text-xs font-bold text-white hover:bg-primary/80 hover:text-white rounded transition-colors flex items-center gap-3 uppercase tracking-widest"
                        >
                          <span className="material-symbols-outlined !text-base">mail</span>
                          Gmail
                        </a>
                        <a 
                          href="mailto:cultivatedancenc@gmail.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-3 text-xs font-bold text-white hover:bg-primary/80 hover:text-white rounded transition-colors flex items-center gap-3 uppercase tracking-widest"
                        >
                          <span className="material-symbols-outlined !text-base">send</span>
                          Apple Mail
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
              <p className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-600">© 2024 CULTIVATE CORE STUDIO. BUILT FOR THE BOLD.</p>
              <div className="flex gap-12 text-[9px] font-black uppercase tracking-[0.5em] text-slate-600">
                <a className="hover:text-primary transition-colors interactive-hover" href="#">Privacy Policy</a>
                <a className="hover:text-primary transition-colors interactive-hover" href="#">Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>
  );
}
