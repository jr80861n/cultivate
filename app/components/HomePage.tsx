"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-surface-dark/40 via-background-deep to-background-deep opacity-80"></div>
        <div className="parallax-bg-deep absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary-dark/20 rounded-full blur-[120px] animate-float-bounce"></div>
        <div className="parallax-bg-mid absolute top-[40%] right-[-20%] w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen animate-float-bounce" style={{ animationDelay: "-2s" }}></div>
        <div className="parallax-bg-deep absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-primary-dark/20 rounded-full blur-[100px] animate-float-bounce" style={{ animationDelay: "-4s" }}></div>
        <div className="parallax-bg-front absolute top-[20%] left-[10%] opacity-20 shard-float">
          <div className="w-32 h-32 border border-primary/30 transform rotate-45 backdrop-blur-sm hover:scale-110 transition-transform duration-700"></div>
        </div>
        <div className="parallax-bg-front absolute top-[60%] right-[15%] opacity-20 shard-float-rev">
          <div className="w-48 h-48 border-2 border-primary/20 transform rotate-12 backdrop-blur-md hover:scale-110 transition-transform duration-700"></div>
        </div>
        <div className="parallax-bg-front absolute top-[80%] left-[5%] opacity-10 shard-float">
          <div className="w-24 h-24 bg-primary/20 transform rotate-45 blur-xl"></div>
        </div>
        <div className="absolute inset-0 opacity-[0.03] bg-noise"></div>
      </div>
      <div className="relative flex min-h-screen w-full flex-col">
        <header className="flex items-center justify-between px-6 py-5 lg:px-12 sticky top-0 z-[100] bg-background-deep/10 border-b border-white/5 transition-all duration-300">
          <div className="flex items-center gap-3 group cursor-pointer interactive-hover">
            <div className="size-10 flex items-center justify-center rounded-lg bg-primary text-white shadow-[0_0_25px_rgba(188,19,254,0.6)] group-hover:shadow-[0_0_40px_rgba(188,19,254,0.9)] transition-all duration-500 magnetic-btn">
              <span className="material-symbols-outlined !text-[28px]">spa</span>
            </div>
            <h2 className="text-2xl font-black leading-tight tracking-tighter uppercase italic group-hover:text-primary-light transition-colors duration-300">Cultivate</h2>
          </div>
          <div className="hidden lg:flex flex-1 justify-end gap-10 items-center">
            <nav className="flex items-center gap-10">
              <a className="text-xs font-black uppercase tracking-[0.2em] text-purple-200/80 hover:text-white hover:text-glow transition-all relative group interactive-hover" href="#">
                Classes
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full box-shadow-[0_0_10px_#bc13fe]"></span>
              </a>
              <a className="text-xs font-black uppercase tracking-[0.2em] text-purple-200/80 hover:text-white hover:text-glow transition-all relative group interactive-hover" href="#">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full box-shadow-[0_0_10px_#bc13fe]"></span>
              </a>
              <a className="text-xs font-black uppercase tracking-[0.2em] text-purple-200/80 hover:text-white hover:text-glow transition-all relative group interactive-hover" href="#">
                Faculty
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full box-shadow-[0_0_10px_#bc13fe]"></span>
              </a>
              <a className="text-xs font-black uppercase tracking-[0.2em] text-purple-200/80 hover:text-white hover:text-glow transition-all relative group interactive-hover" href="#">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full box-shadow-[0_0_10px_#bc13fe]"></span>
              </a>
            </nav>
            <button className="flex items-center justify-center rounded-none h-12 px-8 bg-primary hover:bg-white hover:text-black transition-all duration-500 text-white text-xs font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(188,19,254,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] translate-x-[-4px] translate-y-[-4px] active:translate-x-0 active:translate-y-0 border border-transparent hover:border-primary magnetic-btn interactive-hover">
              Register
            </button>
          </div>
          <button className="lg:hidden text-white hover:text-primary transition-colors interactive-hover">
            <span className="material-symbols-outlined !text-3xl">menu</span>
          </button>
        </header>
        <main className="relative z-10">
          <section className="hero-timeline relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 scale-105 parallax-bg-mid">
              <div className="w-full h-full image-loader">
                <img alt="High action dance footage" className="w-full h-full object-cover opacity-60 mix-blend-overlay" loading="eager" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWe61ePQ0cvNYkGpX-RJ-f_icSKdXEmoBlrLjZAkFT3mZh1I1aGhNtxSopvOI6Qvoh71_EJPZxRdqrXQL9pW-7KremtUtEKqjWjaSLrKUuL7H-ojI8clOnpNeGLigNCqUOduf9C98c13K3BGmAhiXSviV2KwYCbqG9rj7RsKLxTHy79RRffE7Sc6Kn6mBZNpjoDcYUxMxK7jtr3ZirTBR_Poz_klubQ0yqyPXyvixJbDHpdSevi477mXTIrsVQxMqUt9s-2dxaFkn1" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-background-deep via-background-deep/80 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-transparent to-background-deep/50"></div>
              <div className="absolute inset-0 bg-primary/10 mix-blend-color-dodge"></div>
            </div>
            <div className="absolute top-[15%] right-[20%] w-40 h-40 border-t-2 border-r-2 border-primary/30 rotate-12 shard-float opacity-40 z-0 velocity-item-right"></div>
            <div className="absolute bottom-[20%] left-[10%] w-60 h-60 border-b-2 border-l-2 border-primary/20 -rotate-6 shard-float-rev opacity-30 z-0 velocity-item-left"></div>
            <div className="container mx-auto px-6 lg:px-12 relative z-10 hero-exit-anim">
              <div className="max-w-6xl">
                <div className="inline-flex items-center gap-4 bg-primary/10 border border-primary/40 px-5 py-2 rounded-full backdrop-blur-xl mb-10 shadow-[0_0_30px_rgba(188,19,254,0.2)]">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary-light">Audition Window: Fall 2024</span>
                </div>
                <div className="parallax-hero-text">
                  <h1 className="text-7xl md:text-9xl lg:text-[13rem] font-black leading-[0.8] tracking-tighter uppercase italic text-glow mb-8 drop-shadow-2xl scroll-mask-text">
                    Move<br /><span className="shimmer-text-effect">Beyond.</span>
                  </h1>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
                  <p className="text-purple-200 text-lg md:text-2xl font-light max-w-xl leading-relaxed border-l-4 border-primary pl-8 shadow-[-20px_0_40px_-10px_rgba(188,19,254,0.1)]">
                    Engineered for the elite. A sanctuary where technical mastery meets the raw edge of modern movement.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <button className="h-16 px-12 bg-primary hover:bg-white hover:text-black text-white font-black uppercase tracking-[0.3em] text-xs transition-all duration-500 neon-border hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] magnetic-btn interactive-hover">
                      Start Training
                    </button>
                    <button className="h-16 px-12 border border-white/30 hover:border-primary hover:text-primary text-white font-black uppercase tracking-[0.3em] text-xs transition-all duration-500 flex items-center gap-4 backdrop-blur-sm group magnetic-btn interactive-hover">
                      <span className="material-symbols-outlined !text-xl group-hover:scale-125 transition-transform">play_circle</span>
                      The Film
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 hidden xl:block parallax-bg-front pointer-events-none">
              <span className="text-[200px] font-black opacity-[0.03] uppercase italic text-transparent stroke-2 stroke-primary tracking-tighter select-none rotate-90 inline-block bg-gradient-to-b from-white to-transparent bg-clip-text">CULTIVATE</span>
            </div>
          </section>
          <section className="py-32 relative z-20 bg-background-deep border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 velocity-grid">
                <div className="group p-12 bg-surface-dark/30 border border-white/5 hover:border-primary/50 transition-all duration-500 relative overflow-hidden card-fade-up stagger-delay-1 interactive-hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 rotate-12 group-hover:rotate-0">
                    <span className="material-symbols-outlined !text-9xl text-primary">bolt</span>
                  </div>
                  <div className="text-primary mb-8 relative z-10">
                    <span className="material-symbols-outlined !text-6xl drop-shadow-[0_0_15px_rgba(188,19,254,0.6)]">bolt</span>
                  </div>
                  <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tight text-white group-hover:text-primary-light transition-colors">High Intensity</h3>
                  <p className="text-slate-400 group-hover:text-purple-200 leading-relaxed text-lg transition-colors">Elite training protocols designed to shatter physical limits and rebuild your athletic foundation.</p>
                  <div className="mt-8 w-12 h-1 bg-primary group-hover:w-full transition-all duration-700 shadow-[0_0_10px_#bc13fe]"></div>
                </div>
                <div className="group p-12 bg-surface-dark/30 border border-white/5 hover:border-primary/50 transition-all duration-500 relative overflow-hidden card-fade-up stagger-delay-2 interactive-hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 rotate-12 group-hover:rotate-0">
                    <span className="material-symbols-outlined !text-9xl text-primary">psychology</span>
                  </div>
                  <div className="text-primary mb-8 relative z-10">
                    <span className="material-symbols-outlined !text-6xl drop-shadow-[0_0_15px_rgba(188,19,254,0.6)]">psychology</span>
                  </div>
                  <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tight text-white group-hover:text-primary-light transition-colors">Pure Vision</h3>
                  <p className="text-slate-400 group-hover:text-purple-200 leading-relaxed text-lg transition-colors">Curated mentorship from global industry leaders focusing on the evolution of your artistic identity.</p>
                  <div className="mt-8 w-12 h-1 bg-primary group-hover:w-full transition-all duration-700 shadow-[0_0_10px_#bc13fe]"></div>
                </div>
                <div className="group p-12 bg-surface-dark/30 border border-white/5 hover:border-primary/50 transition-all duration-500 relative overflow-hidden card-fade-up stagger-delay-3 interactive-hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 rotate-12 group-hover:rotate-0">
                    <span className="material-symbols-outlined !text-9xl text-primary">all_inclusive</span>
                  </div>
                  <div className="text-primary mb-8 relative z-10">
                    <span className="material-symbols-outlined !text-6xl drop-shadow-[0_0_15px_rgba(188,19,254,0.6)]">all_inclusive</span>
                  </div>
                  <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tight text-white group-hover:text-primary-light transition-colors">Global Reach</h3>
                  <p className="text-slate-400 group-hover:text-purple-200 leading-relaxed text-lg transition-colors">Direct pipelines to international agencies and major performance opportunities worldwide.</p>
                  <div className="mt-8 w-12 h-1 bg-primary group-hover:w-full transition-all duration-700 shadow-[0_0_10px_#bc13fe]"></div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-40 bg-background-dark text-white relative overflow-hidden section-unfold">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background-deep to-transparent z-10"></div>
            <div className="absolute -top-24 -right-24 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] parallax-bg-mid pointer-events-none animate-float-bounce"></div>
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
                <div className="max-w-3xl card-entry-3d">
                  <span className="text-primary font-black uppercase tracking-[0.5em] text-xs mb-6 block drop-shadow-[0_0_10px_rgba(188,19,254,0.5)]">Our Curriculum</span>
                  <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none scroll-mask-text">
                    Forging<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-300 to-primary">The Future</span>
                  </h2>
                </div>
                <a className="inline-flex items-center gap-4 group font-black uppercase tracking-[0.3em] text-[10px] border-b-2 border-primary pb-3 transition-all hover:gap-8 hover:text-primary hover:shadow-[0_20px_20px_-10px_rgba(188,19,254,0.3)] interactive-hover" href="#">
                  Explore All Pathways <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start velocity-grid">
                <div className="card-opacity-fade group relative bg-surface-dark/50 border border-white/10 overflow-hidden shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_80px_-20px_rgba(188,19,254,0.3)] transition-all duration-700 glitch-hover-effect cursor-pointer interactive-hover">
                  <div className="relative h-[600px] img-parallax-container image-loader">
                    <Image
                        width={800}
                        height={600}
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdWIbkkRFvpo7qT1Ok3b2XFtEzO8PZnoA-Q9X4CPgrvbv_0N2PdpNkyRuYWf2Ukmk3I9jIy9yG5DAQXkpdlk5tG4MPC6TrtQOfsAinuoQVjcMDjRPD023tSVB554vChO0rSBNnrSYyNGZCsdRC3uz1b13ym5BLNbHNQxOPsNUieLzaRWjMRm7GARvveFz1vsj5wDxi3fDJs-C4W7yvgU3wKbWT4yDdlJjyR-piXJsTMPHRuxMWdEP_SQ3ryUt7ANAX-r-Xu2Kf9uW7" 
                        alt="Studio preview 3" 
                        className="img-parallax-target w-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-1000 ease-out" 
                    />
                    <div className="absolute inset-0 bg-primary/40 opacity-20 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute top-10 left-10 pointer-events-none z-10">
                      <span className="bg-black/80 backdrop-blur border border-primary/30 text-white px-6 py-3 text-[11px] font-black uppercase tracking-[0.3em] shadow-[0_0_15px_rgba(0,0,0,0.5)]">Audition Req.</span>
                    </div>
                  </div>
                  <div className="p-12 relative bg-surface-dark border-t border-white/5">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-5xl font-black italic uppercase tracking-tighter text-white group-hover:text-primary transition-colors">NXTLVL</h3>
                      <span className="text-white/10 text-6xl font-black absolute -top-8 right-8 z-0 select-none">01</span>
                    </div>
                    <p className="text-slate-400 group-hover:text-purple-200 text-xl mb-10 leading-relaxed font-light relative z-10 transition-colors">
                      The industry gold standard. A 9-month immersive technical residency designed for professional conversion.
                    </p>
                    <button className="group/btn relative w-full h-20 bg-background-deep text-white font-black uppercase tracking-[0.4em] text-xs overflow-hidden transition-colors border border-white/10 hover:border-primary magnetic-btn">
                      <span className="relative z-10">Apply Program</span>
                      <div className="absolute inset-0 bg-primary translate-y-full group-[hover]/btn:translate-y-0 transition-transform duration-500"></div>
                    </button>
                  </div>
                </div>
                <div className="card-opacity-fade stagger-2 group relative bg-surface-dark/50 border border-white/10 overflow-hidden shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_80px_-20px_rgba(188,19,254,0.3)] transition-all duration-700 lg:mt-32 interactive-hover">
                  <div className="relative h-[600px] img-parallax-container image-loader">
                    <Image
                        width={800}
                        height={600}
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuByNPxzlG__LrNnMPRv3Nzjn24zjB3KCfULoVM3mAQfagVo_aqMf5i2nqzjVDX-yHHe4sXqcqYyIw781z2cprYg6Hsc_fgOY08rdi7Mt1yJgOJlvkxxbFc_bixWmx3IU3pqDHfdE9ZmavDImgoquKmCZ4g1y_2oyQgeCF_k3P6JdMcNNAkPuEgHL9627WLInc20adO_Gv9T2xnLNBuIHbtWhZX2LEG3eVgu-qTWvo8npELeNn35ELTcDtGd57vyIowqH1esDRVjnn49" 
                        alt="Studio preview 1" 
                        className="img-parallax-target w-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-1000 ease-out" 
                    />
                    <div className="absolute inset-0 bg-primary/40 opacity-20 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute top-10 left-10 pointer-events-none z-10">
                      <span className="bg-primary text-white px-6 py-3 text-[11px] font-black uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(188,19,254,0.4)]">Open Enrollment</span>
                    </div>
                  </div>
                  <div className="p-12 relative bg-surface-dark border-t border-white/5">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-5xl font-black italic uppercase tracking-tighter text-white group-hover:text-primary transition-colors">Summer</h3>
                      <span className="text-white/10 text-6xl font-black absolute -top-8 right-8 z-0 select-none">02</span>
                    </div>
                    <p className="text-slate-400 group-hover:text-purple-200 text-xl mb-10 leading-relaxed font-light relative z-10 transition-colors">
                      High-impact bursts of creative energy. Weekly intensives with rotating global guest choreographers.
                    </p>
                    <button className="group/btn relative w-full h-20 bg-background-deep text-white font-black uppercase tracking-[0.4em] text-xs overflow-hidden transition-colors border border-white/10 hover:border-primary magnetic-btn">
                      <span className="relative z-10">Book Session</span>
                      <div className="absolute inset-0 bg-primary translate-y-full group-[hover]/btn:translate-y-0 transition-transform duration-500"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-32 relative bg-background-deep border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
                <div className="max-w-2xl section-unfold">
                  <span className="text-primary font-black uppercase tracking-[0.5em] text-xs mb-6 block drop-shadow-[0_0_10px_rgba(188,19,254,0.5)]">Success Stories</span>
                  <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] scroll-mask-text">
                    Voices From<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary">The Studio</span>
                  </h2>
                </div>
                <div className="flex gap-4">
                  <button className="size-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-primary transition-all magnetic-btn interactive-hover group" onClick={() => document.getElementById("reviews-scroller")?.scrollBy({ left: -400, behavior: "smooth" })}>
                    <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">arrow_back</span>
                  </button>
                  <button className="size-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-primary transition-all magnetic-btn interactive-hover group" onClick={() => document.getElementById("reviews-scroller")?.scrollBy({ left: 400, behavior: "smooth" })}>
                    <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">arrow_forward</span>
                  </button>
                </div>
              </div>
              <div className="flex overflow-x-auto gap-8 pb-10 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0" id="reviews-scroller">
                <div className="min-w-[85vw] md:min-w-[450px] snap-center">
                  <div className="h-full bg-surface-dark/20 backdrop-blur-md border border-white/5 p-10 rounded-sm relative group review-card-hover card-fade-up stagger-delay-1 interactive-hover hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(188,19,254,0.15)] flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-8">
                        <div className="review-quote-icon">
                          <span className="material-symbols-outlined text-6xl text-primary opacity-80 drop-shadow-[0_0_15px_rgba(188,19,254,0.6)]">format_quote</span>
                        </div>
                        <div className="flex gap-1 text-primary text-sm">
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                        </div>
                      </div>
                      <p className="text-xl md:text-2xl font-light text-slate-300 italic leading-relaxed mb-8">
                        &quot;Cultivate didn&apos;t just teach me dance; they reconstructed my entire approach to movement. The intensity here is unmatched.&quot;
                      </p>
                    </div>
                    <div className="flex items-center gap-5 mt-auto border-t border-white/5 pt-6">
                      <div className="size-14 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-all duration-500 shadow-[0_0_20px_rgba(188,19,254,0.2)]">
                        <Image
                            width={56}
                            height={56}
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMSS5VLQP_U-3-9v1yqbVxbW-T_h186PuhJxC8UYpUzGW2fvZtnREMjWBrSvPUXf37eNyo7Tc3SCKQtyDXPOdOZEGuDtLCG44WztaxWXVyFiFADHR-Q5QN1q-mKmOP62TZIW7uXsMJWZr4Y0Jm5Mmyz5b9UEqrAGIrT7XcnDX8QoZqdi5GF_pMxlJrk-LzqRprdkytErogPGr96anBmqQt-ZmeiBEXfau4UMk0vANJdxX0lJGk_WYYfYdAZLx5dQ-rtGtwJ5bXX1_o" 
                            alt="Contemporary dancer in dark studio with dramatic lighting" 
                            className="w-full h-full object-cover review-img transition-transform duration-700 ease-out" 
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-black uppercase tracking-wider text-sm">Sarah Jenkins</h4>
                        <p className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold">Professional Artist</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-w-[85vw] md:min-w-[450px] snap-center">
                  <div className="h-full bg-surface-dark/20 backdrop-blur-md border border-white/5 p-10 rounded-sm relative group review-card-hover card-fade-up stagger-delay-2 interactive-hover hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(188,19,254,0.15)] flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-8">
                        <div className="review-quote-icon">
                          <span className="material-symbols-outlined text-6xl text-primary opacity-80 drop-shadow-[0_0_15px_rgba(188,19,254,0.6)]">format_quote</span>
                        </div>
                        <div className="flex gap-1 text-primary text-sm">
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                        </div>
                      </div>
                      <p className="text-xl md:text-2xl font-light text-slate-300 italic leading-relaxed mb-8">
                        &quot;The faculty pushes you to find your own voice. I walked in a technician and walked out an artist ready for the world stage.&quot;
                      </p>
                    </div>
                    <div className="flex items-center gap-5 mt-auto border-t border-white/5 pt-6">
                      <div className="size-14 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-all duration-500 shadow-[0_0_20px_rgba(188,19,254,0.2)]">
                        <Image
                            width={56}
                            height={56}
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx3iVHL6r2PI4HML_2OITQBESMft9Qdd3l5ghNebgJfIvFk02fngN_zMcPIWMg6y8pfUCHtgtj5xjpFViTx1rN4bzg6jolmPJWxVF29OFYVq5f-uz6YWx4_DkQ51FEC8yL6EVdAHiQsL5DCblfcg_zS34yN7YQ-ixo_gT36uMaTw9SbvbHVQ8507CPp7kdho_JPY85CUG--qFG9ZWRG2xYLX3LG6ejIq3JjS2izzr3Cl68rwzbU2VKbjqL1ptIPoLUnqZqPAFRX5Hy" 
                            alt="Hip hop dancers performing a routine" 
                            className="w-full h-full object-cover review-img transition-transform duration-700 ease-out opacity-80" 
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-black uppercase tracking-wider text-sm">Marcus Thorne</h4>
                        <p className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold">NXTLVL Graduate</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-w-[85vw] md:min-w-[450px] snap-center">
                  <div className="h-full bg-surface-dark/20 backdrop-blur-md border border-white/5 p-10 rounded-sm relative group review-card-hover card-fade-up stagger-delay-3 interactive-hover hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(188,19,254,0.15)] flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-8">
                        <div className="review-quote-icon">
                          <span className="material-symbols-outlined text-6xl text-primary opacity-80 drop-shadow-[0_0_15px_rgba(188,19,254,0.6)]">format_quote</span>
                        </div>
                        <div className="flex gap-1 text-primary text-sm">
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                        </div>
                      </div>
                      <p className="text-xl md:text-2xl font-light text-slate-300 italic leading-relaxed mb-8">
                        &quot;A deeply immersive experience. The studio culture is demanding yet incredibly supportive. It&apos;s truly elite training.&quot;
                      </p>
                    </div>
                    <div className="flex items-center gap-5 mt-auto border-t border-white/5 pt-6">
                      <div className="size-14 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-all duration-500 shadow-[0_0_20px_rgba(188,19,254,0.2)]">
                         <Image
                            width={56}
                            height={56}
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNnAsNgUKbJOtuHSz-rCK5vvrvfVdYIyYUIiOAv6L1IuE8_nzpFTo0TAhKsrhiUwDhMGlq4huiRZl79HplaZudlUrcG2a4yV781R1lEDdCBhTU6bOXwIki8D-hwU3bu40ldq8A2DmcKnaAgNRzlQELurjFQG3h0eXlnsjYV3aA-H51klbLMc_ywpuEGPPZZu2TVGDz96v8U-p39n-t6ez_K6RfEuTF1htWoqLglqKv0JPgaZgoRDGvEMPixatBU-R-WyWyKbwGOhfN" 
                            alt="Ballet dancer in motion blur" 
                            className="w-full h-full object-cover review-img transition-transform duration-700 ease-out" 
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-black uppercase tracking-wider text-sm">Elena Rodriguez</h4>
                        <p className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold">Choreographer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-w-[85vw] md:min-w-[450px] snap-center">
                  <div className="h-full bg-surface-dark/20 backdrop-blur-md border border-white/5 p-10 rounded-sm relative group review-card-hover card-fade-up stagger-delay-1 interactive-hover hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(188,19,254,0.15)] flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-8">
                        <div className="review-quote-icon">
                          <span className="material-symbols-outlined text-6xl text-primary opacity-80 drop-shadow-[0_0_15px_rgba(188,19,254,0.6)]">format_quote</span>
                        </div>
                        <div className="flex gap-1 text-primary text-sm">
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                          <span className="material-symbols-outlined fill-current text-sm">star</span>
                        </div>
                      </div>
                      <p className="text-xl md:text-2xl font-light text-slate-300 italic leading-relaxed mb-8">
                        &quot;From the warm-up to the final cooldown, every second is purposeful. Cultivate respects the art form like no other.&quot;
                      </p>
                    </div>
                    <div className="flex items-center gap-5 mt-auto border-t border-white/5 pt-6">
                      <div className="size-14 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-all duration-500 shadow-[0_0_20px_rgba(188,19,254,0.2)]">
                        <img alt="Davon L." className="w-full h-full object-cover review-img transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCATw6KfMPvLuWU5dSBVt2ra_05vYe2gRQLWG0yYLYpmRux7DaWs7IpKSOsF3pYUnUme-usppww85dmuu6uQ_vWoW2TtPfr2PK2Be2GPtWdp-9Gi9RB5a4Ngo7V7Xw--THW7MaaoBi6VGjD5QbkjFNYoJ9_1eosTUrsq7TLT1LZjZBF3XGOd9chIHE6KFcefu6M6NN6ROzkwKXkTxxD60K_KyHeWcWZsrE21l2YdZvXddvkuzTmHnk9XLwJtg6pFnCIzMMC0m6vaFf5" />
                      </div>
                      <div>
                        <h4 className="text-white font-black uppercase tracking-wider text-sm">Davon Lewis</h4>
                        <p className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold">Company Member</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-40 relative overflow-hidden bg-background-deep section-unfold">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/20 to-background-deep"></div>
            <div className="absolute inset-0 opacity-30 parallax-bg-deep animate-float-bounce" style={{ animationDuration: "8s" }}>
              <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background-deep to-background-deep"></div>
            </div>
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="max-w-5xl mx-auto text-center card-entry-3d">
                <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-10 leading-tight scroll-mask-text">
                  Enter the<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary animate-pulse shimmer-text-effect">Frequency</span>
                </h2>
                <p className="text-2xl text-purple-200/70 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                  Join our inner circle for priority audition dates, masterclass drops, and exclusive performance insight.
                </p>
                <form className="flex flex-col md:flex-row gap-0 max-w-3xl mx-auto border border-white/20 p-2 glass-panel group focus-within:border-primary focus-within:shadow-[0_0_30px_rgba(188,19,254,0.3)] transition-all duration-300 rounded-sm">
                  <input className="flex-grow h-20 bg-transparent px-10 text-xl text-white placeholder-purple-300/30 focus:outline-none border-none uppercase tracking-[0.2em] font-bold interactive-hover" placeholder="Email Address" type="email" />
                  <button className="h-20 px-16 bg-white text-black font-black uppercase tracking-[0.3em] text-sm hover:bg-primary hover:text-white transition-all duration-500 magnetic-btn interactive-hover">
                    Connect
                  </button>
                </form>
              </div>
            </div>
            <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-full text-center opacity-[0.05] select-none pointer-events-none parallax-bg-front">
              <span className="text-[300px] font-black uppercase italic tracking-tighter leading-none whitespace-nowrap text-stroke-primary">MOVEMENT IS LIFE</span>
            </div>
          </section>
        </main>
        <footer className="bg-black/90 border-t border-white/5 py-24 relative z-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 mb-32">
              <div className="lg:col-span-5 flex flex-col gap-10">
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-primary flex items-center justify-center rounded-sm shadow-[0_0_20px_rgba(188,19,254,0.4)]">
                    <span className="material-symbols-outlined !text-2xl">spa</span>
                  </div>
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter">Cultivate</h3>
                </div>
                <p className="text-slate-400 text-lg max-w-sm leading-relaxed font-medium">
                  Redefining the boundaries of movement through elite technical training and unapologetic artistic vision.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <a className="size-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-primary hover:border-primary hover:shadow-[0_0_20px_rgba(188,19,254,0.5)] transition-all text-slate-400 hover:text-white group magnetic-btn interactive-hover" href="#">
                    <span className="material-symbols-outlined !text-xl group-hover:scale-110 transition-transform">social_leaderboard</span>
                  </a>
                  <a className="size-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-primary hover:border-primary hover:shadow-[0_0_20px_rgba(188,19,254,0.5)] transition-all text-slate-400 hover:text-white group magnetic-btn interactive-hover" href="#">
                    <span className="material-symbols-outlined !text-xl group-hover:scale-110 transition-transform">photo_camera</span>
                  </a>
                  <a className="size-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-primary hover:border-primary hover:shadow-[0_0_20px_rgba(188,19,254,0.5)] transition-all text-slate-400 hover:text-white group magnetic-btn interactive-hover" href="#">
                    <span className="material-symbols-outlined !text-xl group-hover:scale-110 transition-transform">smart_display</span>
                  </a>
                  <a className="size-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-primary hover:border-primary hover:shadow-[0_0_20px_rgba(188,19,254,0.5)] transition-all text-slate-400 hover:text-white group magnetic-btn interactive-hover" href="#">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>
                  <a className="size-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-primary hover:border-primary hover:shadow-[0_0_20px_rgba(188,19,254,0.5)] transition-all text-slate-400 hover:text-white group magnetic-btn interactive-hover" href="#">
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
                  <div className="flex items-start gap-4 group">
                    <span className="material-symbols-outlined text-primary !text-2xl group-hover:drop-shadow-[0_0_10px_rgba(188,19,254,0.6)] transition-all">location_on</span>
                    <span className="text-xs font-black uppercase tracking-[0.2em] leading-loose group-hover:text-white transition-colors">
                      4820 Creative Arts Way<br />
                      Floor 4, Metro Arts District<br />
                      Los Angeles, CA 90013
                    </span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <span className="material-symbols-outlined text-primary !text-2xl group-hover:drop-shadow-[0_0_10px_rgba(188,19,254,0.6)] transition-all">mail</span>
                    <span className="text-xs font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors">connect@cultivate.studio</span>
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
      </div>
    </>
  );
}
