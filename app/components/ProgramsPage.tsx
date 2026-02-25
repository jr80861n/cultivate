"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProgramsPage() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // --- 3D TILT EFFECT ---
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        const htmlCard = card as HTMLElement;
        htmlCard.addEventListener('mousemove', (e: MouseEvent) => {
            const rect = htmlCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xPct = (x / rect.width - 0.5) * 2;
            const yPct = (y / rect.height - 0.5) * 2;
            const rotation = 8;
            htmlCard.style.transform = `perspective(1000px) rotateX(${-yPct * rotation}deg) rotateY(${xPct * rotation}deg) scale(1.02)`;
        });
        htmlCard.addEventListener('mouseleave', () => {
            htmlCard.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
        });
    });

    // --- MULTI-STAGE BUTTON CLICK ---
    const registerBtns = document.querySelectorAll('.register-btn, .add-class-btn');
    registerBtns.forEach(btn => {
        const button = btn as HTMLElement;
        button.addEventListener('click', function() {
            if(button.classList.contains('btn-state-loading') || button.classList.contains('btn-state-success')) return;
            const textSpan = button.querySelector('.btn-text') || button.querySelector('.material-symbols-outlined');
            const originalContent = textSpan ? textSpan.innerHTML : '';
            
            button.classList.add('btn-state-loading');
            
            setTimeout(() => {
                button.classList.remove('btn-state-loading');
                button.classList.add('btn-state-success');
                if (button.classList.contains('add-class-btn')) {
                     const icon = button.querySelector('.material-symbols-outlined');
                     if(icon) icon.textContent = 'check';
                } else {
                    const text = button.querySelector('.btn-text');
                    if(text) {
                        text.innerHTML = 'REGISTERED!';
                        (text as HTMLElement).style.opacity = '1';
                    }
                }
                setTimeout(() => {
                    button.classList.remove('btn-state-success');
                    if (button.classList.contains('add-class-btn')) {
                         const icon = button.querySelector('.material-symbols-outlined');
                         if(icon) icon.textContent = 'add';
                    } else {
                        const text = button.querySelector('.btn-text');
                        if(text) text.innerHTML = originalContent;
                    }
                }, 2000);
            }, 1500);
        });
    });

    // --- INTERSECTION OBSERVER PARALLAX ---
    const parallaxObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const randomX = (Math.random() - 0.5) * 50;
                const randomY = (Math.random() - 0.5) * 50;
                if(blob1Ref.current) blob1Ref.current.style.transform = `translate(${randomX}px, ${randomY}px)`;
                if(blob2Ref.current) blob2Ref.current.style.transform = `translate(${-randomX}px, ${-randomY}px)`;
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('section').forEach(section => {
        parallaxObserver.observe(section);
    });

    // --- REVEAL ON SCROLL ---
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div ref={blob1Ref} className="blob-bg liquid-blob-1 w-[800px] h-[800px] -top-20 -left-20 mix-blend-screen" data-speed="0.05"></div>
        <div ref={blob2Ref} className="blob-bg liquid-blob-2 w-[600px] h-[600px] top-[40%] -right-32 mix-blend-screen" data-speed="0.08"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-[0.03] mix-blend-overlay pointer-events-none fixed bg-repeat"></div>
      </div>
      <div className="relative z-10 flex h-auto min-h-screen w-full flex-col">
        <header className="sticky top-0 z-[100] flex items-center justify-between border-b border-white/5 bg-[#1a052b]/80 backdrop-blur-xl px-6 md:px-10 py-5 transition-all duration-300">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-light to-primary shadow-[0_0_20px_rgba(127,19,236,0.5)] group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-white !text-[24px]">music_note</span>
            </div>
            <h2 className="text-white text-xl font-black tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:text-primary-light transition-colors">Cultivate</h2>
          </Link>
          <nav className="hidden md:flex flex-1 justify-center gap-10">
            <Link className="relative text-primary-light/70 hover:text-white transition-all text-sm font-bold tracking-wide py-2 group" href="/">
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link className="relative text-white text-sm font-black tracking-wide py-2" href="/programs">
              PROGRAMS
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-light shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
            </Link>
            <Link className="relative text-primary-light/70 hover:text-white transition-all text-sm font-bold tracking-wide py-2 group" href="#">
              SCHEDULE
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link className="relative text-primary-light/70 hover:text-white transition-all text-sm font-bold tracking-wide py-2 group" href="#">
              INSTRUCTORS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link className="relative text-primary-light/70 hover:text-white transition-all text-sm font-bold tracking-wide py-2 group" href="#">
              CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="register-btn hidden sm:flex h-11 px-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-light text-white text-sm font-black transition-all shadow-[0_0_25px_rgba(127,19,236,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:-translate-y-0.5 active:scale-95 relative overflow-hidden group">
              <span className="btn-text relative z-10">REGISTER NOW</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button className="md:hidden text-primary-light p-2 hover:bg-white/5 rounded-lg transition-colors">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </header>

        <main className="flex-1">
          <section className="relative w-full px-6 md:px-10 pt-12 pb-20 max-w-7xl mx-auto perspective-1000">
            <div className="tilt-card relative overflow-hidden rounded-[3rem] border border-white/10 bg-cover bg-center min-h-[600px] flex items-center p-8 md:p-20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] group" style={{ backgroundImage: 'linear-gradient(to right, rgba(26, 5, 43, 0.95) 30%, rgba(127, 19, 236, 0.1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWMKhlMpSOu5CPW0MAlCQ39DTLA0uCpT7M3DdHXyiYMhjqtOxJ-mFDvgA-JVZ8Je5-6GD5_NXYd4dSlHtLA4Qj9S6dT4Anq8Zm7UR2oxs0FAM-9Qh3SirrTJcyXpUmzMQnRyTSJmufg0D--wLy8lCB1FrV3CPvcWo9sYW7Gw47-8hm2FbAFcUo00TqhWljFWRKkJeeCnm6MBX5a3haoRgcola6GXgRM6ra5QGuM9ALH9hF7zlgQX1XTmn-ztgrbYoheVSStX_CJ-Le")', transformStyle: 'preserve-3d' }}>
              <div className="shimmer-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/20 mix-blend-overlay opacity-50"></div>
              <div className="tilt-content relative z-10 max-w-2xl">
                <div className="flex items-center gap-3 mb-8 reveal stagger-1 active">
                  <span className="w-12 h-[2px] bg-primary-light shadow-[0_0_10px_#a855f7]"></span>
                  <span className="text-xs font-black tracking-[0.3em] uppercase text-primary-light drop-shadow-md">The Elite 2024 Collection</span>
                </div>
                <h1 className="reveal stagger-2 active text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-white drop-shadow-2xl">
                  THE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-light to-fuchsia-400 animate-pulse-glow">EVOLUTION</span>
                </h1>
                <p className="reveal stagger-3 active text-xl text-purple-100/80 mb-12 leading-relaxed font-light max-w-lg">
                  Pushing the boundaries of movement through technical mastery and artistic rebellion in a space designed for transcendence.
                </p>
                <div className="flex flex-wrap gap-5 reveal stagger-3 active">
                  <button className="register-btn h-16 px-12 rounded-full bg-white text-primary-dark font-black text-lg hover:bg-purple-50 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)] relative overflow-hidden flex items-center justify-center">
                    <span className="btn-text">EXPLORE DISCIPLINES</span>
                  </button>
                  <button className="h-16 px-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-black text-lg hover:bg-white/10 transition-all hover:border-primary-light/50 flex items-center justify-center group">
                    <span className="group-hover:translate-x-1 transition-transform">VIEW SEASON</span>
                    <span className="material-symbols-outlined ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div className="sticky top-[85px] z-[90] w-full border-b border-white/5 bg-[#1a052b]/95 backdrop-blur-2xl mb-16 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300" id="filter-bar">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
              <div className="flex gap-10 overflow-x-auto no-scrollbar py-6">
                <button className="text-primary-light text-xs font-black tracking-widest whitespace-nowrap border-b-2 border-primary-light pb-6 -mb-6 shadow-[0_5px_15px_rgba(168,85,247,0.4)] transition-all hover:text-white">ALL PROGRAMS</button>
                <button className="text-purple-300/60 hover:text-white transition-all text-xs font-black tracking-widest whitespace-nowrap hover:scale-105">BALLET ACADEMY</button>
                <button className="text-purple-300/60 hover:text-white transition-all text-xs font-black tracking-widest whitespace-nowrap hover:scale-105">URBAN CULTURE</button>
                <button className="text-purple-300/60 hover:text-white transition-all text-xs font-black tracking-widest whitespace-nowrap hover:scale-105">CONTEMPORARY</button>
                <button className="text-purple-300/60 hover:text-white transition-all text-xs font-black tracking-widest whitespace-nowrap hover:scale-105">ELITE SQUAD</button>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-10 pb-32 space-y-32">
            <section className="relative">
              <div className="mb-16 reveal origin-left">
                <div className="inline-flex items-center gap-4 bg-background-layer-1/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                  <div className="w-2 h-12 bg-gradient-to-b from-primary-light to-primary shadow-[0_0_15px_#7f13ec]"></div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white">Recreational Track</h2>
                    <p className="text-purple-300 text-sm font-bold tracking-widest uppercase mt-1">Foundational Excellence • Open Enrollment</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 perspective-1000">
                <div className="tilt-card reveal stagger-1 group flex flex-col bg-card-dark/40 backdrop-blur-sm rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary-light/40 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(127,19,236,0.15)] relative">
                  <div className="shimmer-overlay z-20"></div>
                  <div className="h-80 overflow-hidden relative preserve-3d">
                    <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent opacity-90 z-10"></div>
                    <img alt="Ballet" className="tilt-content w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-luminosity group-hover:mix-blend-normal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgTxoiHe3HjTjEc-HoqN7jaU73jjZnbBlMASkpCRY7IiEd9iDy43zaoNE48thvaiKJXEg8uRu-P7-q1gqELMTz9L4sVx91kFEDxnJOY7tAEmX-EjH8ehVn0zMWZIEmoEIWFGd07z7gJJT15tHFOHDKBJRx5WlFeYG7iI4h5zDuDIdQxJ11hSo2tg2JhDmT44WoRL_ceVmCjhRCTsN3s1orUCoP7GvkqEAmaCCG9Ss16UPk_701t0T9DnAERV2D7Lq3GzfE7vGVbf6t"/>
                    <div className="absolute top-6 left-6 flex gap-2 z-20 tilt-content">
                      <span className="px-4 py-1.5 text-[10px] font-black tracking-tighter uppercase bg-primary-light text-background-dark rounded-full shadow-lg">AGES 5-8</span>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col flex-1 relative bg-gradient-to-b from-transparent to-[#240a3a] tilt-content">
                    <h3 className="text-3xl font-black mb-4 tracking-tighter text-white group-hover:text-primary-light transition-colors transform translate-z-10">BALLET FOUNDATIONS</h3>
                    <p className="text-purple-200/60 text-sm leading-relaxed mb-10 flex-1 transform translate-z-10">Precision meets artistic expression. We focus on posture, French terminology, and building core strength from day one.</p>
                    <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-primary-light text-[10px] uppercase font-black tracking-widest">SCHEDULE</span>
                        <span className="text-white text-sm font-bold">MON &amp; WED • 4:30 PM</span>
                      </div>
                      <button className="add-class-btn size-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all text-white border border-white/10 group-hover:border-primary-light shadow-[0_0_15px_rgba(0,0,0,0.2)] active:scale-90 relative overflow-hidden">
                        <span className="material-symbols-outlined transition-transform duration-300">add</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="tilt-card reveal stagger-2 group flex flex-col bg-card-dark/40 backdrop-blur-sm rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary-light/40 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(127,19,236,0.15)] relative mt-0 md:mt-10 lg:mt-0">
                  <div className="shimmer-overlay z-20"></div>
                  <div className="h-80 overflow-hidden relative preserve-3d">
                    <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent opacity-90 z-10"></div>
                    <img alt="Hip Hop" className="tilt-content w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-luminosity group-hover:mix-blend-normal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhwJx3c59BIwl5Sq6ex7WSZM6QUAG1Drsxg0REKHCzR8OPogvhdYF42n3b7BwRVSknxyTIbpyIxcT1gdi2c7ctC8dXJ7sdUvtnTBbquBndXiz9LiZrcf-wa7doRMx7hXkWzPuLt9ddRtsJIlnLb0bX7P5vKElLXwrNsn0737tq4V4NbxqMeNK---TcwTF0laOpknCvBa4VETD6KMju8ZDXIiHZYAGz9H7wI6MfyZBZnZSDs4ub3ZVP7ABKUVf8fndP4MbzzZ3nuiHL"/>
                    <div className="absolute top-6 left-6 flex gap-2 z-20 tilt-content">
                      <span className="px-4 py-1.5 text-[10px] font-black tracking-tighter uppercase bg-primary-light text-background-dark rounded-full shadow-lg">AGES 9-12</span>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col flex-1 relative bg-gradient-to-b from-transparent to-[#240a3a] tilt-content">
                    <h3 className="text-3xl font-black mb-4 tracking-tighter text-white group-hover:text-primary-light transition-colors">URBAN GROOVES</h3>
                    <p className="text-purple-200/60 text-sm leading-relaxed mb-10 flex-1">High-impact exploration of urban roots. From old school fundamentals to cutting-edge freestyle choreography.</p>
                    <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-primary-light text-[10px] uppercase font-black tracking-widest">SCHEDULE</span>
                        <span className="text-white text-sm font-bold">TUE &amp; THU • 5:00 PM</span>
                      </div>
                      <button className="add-class-btn size-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all text-white border border-white/10 group-hover:border-primary-light shadow-[0_0_15px_rgba(0,0,0,0.2)] active:scale-90 relative overflow-hidden">
                        <span className="material-symbols-outlined transition-transform duration-300">add</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="tilt-card reveal stagger-3 group flex flex-col bg-card-dark/40 backdrop-blur-sm rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary-light/40 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(127,19,236,0.15)] relative mt-0 md:mt-20 lg:mt-0">
                  <div className="shimmer-overlay z-20"></div>
                  <div className="h-80 overflow-hidden relative preserve-3d">
                    <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent opacity-90 z-10"></div>
                    <img alt="Contemporary" className="tilt-content w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-luminosity group-hover:mix-blend-normal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKy_1lNhetb5IEYNVmScS1AfbB7rJYvipvLv0JBswJR9lK4A7g5-bJOGZxM5PzcjAhm7KUXnqro2RK9Ri_Qe0nQiUx2Iqxzy1eTjoezcplbuzhttWT5I6vPIiTnMAYjcivld0lLFMNOpH9lMwS-CnbEFnp3aDgntSnQm9bR0TwXLdERu53j6hqRv_8lAIMHmJ93FSxjKYx22QV3MmatDzNLTYzfwhFiixcGE-T0K14bKNIM-okh2VPk5bJ51uY53LTX0N3sOpsRWnX"/>
                    <div className="absolute top-6 left-6 flex gap-2 z-20 tilt-content">
                      <span className="px-4 py-1.5 text-[10px] font-black tracking-tighter uppercase bg-primary-light text-background-dark rounded-full shadow-lg">TEENS 13+</span>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col flex-1 relative bg-gradient-to-b from-transparent to-[#240a3a] tilt-content">
                    <h3 className="text-3xl font-black mb-4 tracking-tighter text-white group-hover:text-primary-light transition-colors">FUSION LAB</h3>
                    <p className="text-purple-200/60 text-sm leading-relaxed mb-10 flex-1">Blending modern, jazz, and lyrical techniques. Focus on floor work, dynamic shifts, and emotional depth.</p>
                    <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-primary-light text-[10px] uppercase font-black tracking-widest">SCHEDULE</span>
                        <span className="text-white text-sm font-bold">FRI • 6:00 PM</span>
                      </div>
                      <button className="add-class-btn size-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all text-white border border-white/10 group-hover:border-primary-light shadow-[0_0_15px_rgba(0,0,0,0.2)] active:scale-90 relative overflow-hidden">
                        <span className="material-symbols-outlined transition-transform duration-300">add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="reveal">
              <div className="relative overflow-hidden rounded-[4rem] bg-[#240a3a] border border-white/10 p-1 group shadow-[0_0_80px_rgba(127,19,236,0.1)] hover:shadow-[0_0_100px_rgba(127,19,236,0.2)] transition-shadow duration-500">
                <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] group-hover:bg-primary/20 transition-all duration-1000"></div>
                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[120px]"></div>
                <div className="relative bg-card-dark/80 backdrop-blur-3xl rounded-[3.9rem] p-8 md:p-20 flex flex-col lg:flex-row gap-20 items-center overflow-hidden">
                  <div className="lg:w-1/2 space-y-10 z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark border border-primary-light/30 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] animate-bounce-slow">
                        <span className="material-symbols-outlined !text-[36px]">workspace_premium</span>
                      </div>
                      <span className="text-primary-light font-black tracking-[0.4em] uppercase text-xs drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]">Audition Exclusive</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">NXTLVL <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-fuchsia-300 to-white">PRO ELITE</span></h2>
                    <p className="text-xl text-purple-200/80 leading-relaxed font-light">
                      A rigorous professional track program featuring 15+ weekly training hours, world-renowned guest choreographers, and high-stakes performance opportunities.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-primary-light/50 transition-all hover:bg-white/10 cursor-default">
                        <span className="material-symbols-outlined text-primary-light mb-3">military_tech</span>
                        <p className="font-black text-sm uppercase tracking-wider text-white">COMPETITIVE EDGE</p>
                        <p className="text-xs text-purple-300 mt-1">6 National Events Yearly</p>
                      </div>
                      <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-primary-light/50 transition-all hover:bg-white/10 cursor-default">
                        <span className="material-symbols-outlined text-primary-light mb-3">star</span>
                        <p className="font-black text-sm uppercase tracking-wider text-white">INDUSTRY ACCESS</p>
                        <p className="text-xs text-purple-300 mt-1">Monthly Pro Workshops</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-6 pt-4">
                      <button className="register-btn h-16 px-12 rounded-full bg-gradient-to-r from-primary to-primary-light hover:brightness-110 text-white font-black transition-all shadow-[0_0_30px_rgba(127,19,236,0.3)] hover:-translate-y-1 relative overflow-hidden flex items-center justify-center w-full sm:w-auto">
                        <span className="btn-text">REQUEST AUDITION</span>
                      </button>
                      <button className="h-16 px-12 rounded-full bg-white/5 border border-white/20 text-white font-black hover:bg-white/10 transition-all hover:border-white/40 w-full sm:w-auto">PROSPECTUS</button>
                    </div>
                  </div>
                  <div className="lg:w-1/2 w-full h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden relative border border-white/10 shadow-2xl z-10 group-hover:scale-[1.02] transition-transform duration-700 perspective-1000">
                    <div className="tilt-card h-full w-full">
                        <div className="absolute inset-0">
                            <Image
                                width={1200}
                                height={800}
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMSS5VLQP_U-3-9v1yqbVxbW-T_h186PuhJxC8UYpUzGW2fvZtnREMjWBrSvPUXf37eNyo7Tc3SCKQtyDXPOdOZEGuDtLCG44WztaxXXVyFiFADHR-Q5QN1q-mKmOP62TZIW7uXsMJWZr4Y0Jm5Mmyz5b9UEqrAGIrT7XcnDX8QoZqdi5GF_pMxlJrk-LzqRprdkytErogPGr96anBmqQt-ZmeiBEXfau4UMk0vANJdxX0lJGk_WYYfYdAZLx5dQ-rtGtwJ5bXX1_o" 
                                alt="Dancers silhouetted against dramatic purple lighting" 
                                className="w-full h-full object-cover opacity-80 mix-blend-luminosity scale-105" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12] via-[#7f13ec]/20 to-transparent"></div>
                        </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent mix-blend-multiply pointer-events-none"></div>
                      <div className="absolute top-10 right-10 w-24 h-24 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center animate-[spin_10s_linear_infinite] group-hover:animate-none group-hover:border-white/60 transition-colors">
                        <div className="absolute inset-1 rounded-full border border-dashed border-white/40"></div>
                        <span className="text-white text-[10px] font-black tracking-widest">TOP 1%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative">
              <div className="mb-16 reveal origin-left">
                <div className="inline-flex items-center gap-4 bg-background-layer-2/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                  <div className="w-2 h-12 bg-gradient-to-b from-fuchsia-500 to-purple-600 shadow-[0_0_15px_#c026d3]"></div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white">Seasonal Intensives</h2>
                    <p className="text-purple-300 text-sm font-bold tracking-widest uppercase mt-1">Technical Deep Dives • Holiday Series</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 perspective-1000">
                <div className="tilt-card reveal stagger-1 flex flex-col sm:flex-row bg-background-layer-1/60 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary-light/40 transition-all duration-700 group relative">
                  <div className="shimmer-overlay z-20"></div>
                  <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-overlay"></div>
                    <img alt="Summer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZG_n5EEGMVNu3rzas6s3P6v-UyN8YkVIiTmK0ioE-nrAtgRYNOfZEw8k1dazMBuwOJL3hMhVosa-NrNOBJCypjC7-3Mvt2B5ELrgCcCFmTVygRC1Bur0X_EtBGF5mAIK0fXYhvzPW7KWi2wlJDT6MZ1GtRh53l1woAkBUE1ewfWE0DwNaTFswhN18fi5tvOUZrEWgxEQgCsZtzHYr0xmPzTihx29IXrgK7aat93UV8gW8q4Ya6BN8IOzrAdjbF73n_RIeMggy9QhV"/>
                  </div>
                  <div className="p-10 sm:w-3/5 flex flex-col justify-center relative bg-gradient-to-l from-[#2e0f49] to-transparent">
                    <span className="text-[10px] font-black text-primary-light uppercase tracking-[0.3em] mb-4 bg-white/5 inline-block w-fit px-2 py-1 rounded">JULY 15 - AUG 2</span>
                    <h3 className="text-3xl font-black mb-4 tracking-tighter text-white">PERFORMANCE LAB</h3>
                    <p className="text-purple-200/60 text-sm leading-relaxed mb-8">A 3-week immersive experience focusing on creation, collaboration, and final stage production.</p>
                    <Link className="inline-flex items-center gap-2 text-white font-black text-xs tracking-widest uppercase group-hover:text-primary-light transition-colors" href="#">
                      LEARN MORE <span className="material-symbols-outlined text-primary-light transition-transform group-hover:translate-x-2">arrow_right_alt</span>
                    </Link>
                  </div>
                </div>
                <div className="tilt-card reveal stagger-2 flex flex-col sm:flex-row bg-background-layer-1/60 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary-light/40 transition-all duration-700 group relative">
                  <div className="shimmer-overlay z-20"></div>
                  <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-overlay"></div>
                    <img alt="Winter" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVYNUNIX8RaIxZCW1ITx7uU1joSpbZhpR5uubS3zrBQXhOZz7RLI4c3gtNqtuC2B72fcxvuG1Y_Ex70n0wHf9cVcQ7YVRXpa8jeRS09Foe0u7vIy_LsDtcg69qTqVkSkozbqI4vFqW25fIjzbIvAKBTNEXmLVWF5M2VEvJ2ZI9qnOHGGVGcM3XCpViYVuL7Z6EjskAPHfhc-iCXEACs3mhleoQ3a-ovN5Vn2KbDnpKzpimQK6aKK5PdldbjGd_btKij1dHf9mSnRVa"/>
                  </div>
                  <div className="p-10 sm:w-3/5 flex flex-col justify-center relative bg-gradient-to-l from-[#2e0f49] to-transparent">
                    <span className="text-[10px] font-black text-primary-light uppercase tracking-[0.3em] mb-4 bg-white/5 inline-block w-fit px-2 py-1 rounded">DEC 27 - DEC 30</span>
                    <h3 className="text-3xl font-black mb-4 tracking-tighter text-white">NUTCRACKER PREP</h3>
                    <p className="text-purple-200/60 text-sm leading-relaxed mb-8">Classical variations and pointework intensive for aspiring ballet professionals and soloists.</p>
                    <Link className="inline-flex items-center gap-2 text-white font-black text-xs tracking-widest uppercase group-hover:text-primary-light transition-colors" href="#">
                      LEARN MORE <span className="material-symbols-outlined text-primary-light transition-transform group-hover:translate-x-2">arrow_right_alt</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="reveal">
              <div className="relative rounded-[4rem] bg-gradient-to-br from-primary-dark via-primary to-purple-900 p-12 md:p-24 overflow-hidden text-center shadow-[0_20px_60px_rgba(74,0,141,0.5)] border border-white/10 tilt-card">
                <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGq2svkImppsShMnbJXknBe25QfozHsRJaNDcc7RI2gp9i_gjSPJRUqA5kVlLCiqDkvBR_99AlXO476SZ1d0LQ9uoio-7xpHSq7-EHjrDfrzrVReyc0N514evbIOeUo8g4qwLKS4M9cePHfvsY0xMd4U89_u2us4CYfhSd_2-NgUnBGJn4E3SyinpoNE2fBtFRoehIaGCSwc8Dr2XJQeOfDQrrLfLIXEu70DTFJuRIH4ia_zRBddCx_EhFFcVWHwDgMXIxBU5U8cWD')] opacity-20 bg-cover bg-center mix-blend-overlay grayscale"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-500/30 rounded-full blur-[100px] animate-pulse"></div>
                <div className="relative z-10 max-w-4xl mx-auto space-y-10 tilt-content">
                  <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">STAKE YOUR <br/><span className="text-black/40 mix-blend-overlay">CLAIM.</span></h2>
                  <p className="text-xl text-purple-100 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                    The next generation of dance starts here. Secure your spot in the Fall curriculum and join a legacy of movement.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                    <button className="register-btn h-20 px-16 rounded-full bg-white text-primary font-black text-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] relative overflow-hidden flex items-center justify-center">
                      <span className="btn-text">REGISTER NOW</span>
                    </button>
                    <button className="h-20 px-16 rounded-full bg-black/30 border-2 border-white/30 text-white font-black text-xl hover:bg-white/10 transition-all backdrop-blur-sm">BOOK TOUR</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        <footer className="bg-[#0f031b] border-t border-white/10 pt-24 pb-12 px-6 md:px-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
              <div className="md:col-span-1 space-y-8">
                <div className="flex items-center gap-3">
                  <div className="size-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/30">
                    <span className="material-symbols-outlined !text-[24px]">music_note</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tighter uppercase text-white">Cultivate</h3>
                </div>
                <p className="text-purple-300/60 text-sm leading-relaxed">
                  Redefining performance through disciplined training and boundary-pushing artistic direction.
                </p>
                <div className="flex gap-4">
                  <a className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-purple-300 hover:bg-primary hover:text-white transition-all hover:scale-110" href="#"><span className="material-symbols-outlined">photo_camera</span></a>
                  <a className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-purple-300 hover:bg-primary hover:text-white transition-all hover:scale-110" href="#"><span className="material-symbols-outlined">play_circle</span></a>
                  <a className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-purple-300 hover:bg-primary hover:text-white transition-all hover:scale-110" href="#"><span className="material-symbols-outlined">mail</span></a>
                </div>
              </div>
              <div>
                <h4 className="text-primary-light font-black tracking-widest text-xs uppercase mb-8 shadow-primary/50 drop-shadow-sm">PROGRAMS</h4>
                <ul className="space-y-4 text-purple-300/60 text-sm font-bold">
                  <li><Link className="hover:text-primary-light transition-all hover:translate-x-1 inline-block" href="#">BALLET ACADEMY</Link></li>
                  <li><Link className="hover:text-primary-light transition-all hover:translate-x-1 inline-block" href="#">URBAN CULTURE</Link></li>
                  <li><Link className="hover:text-primary-light transition-all hover:translate-x-1 inline-block" href="#">CONTEMPORARY</Link></li>
                  <li><Link className="hover:text-primary-light transition-all hover:translate-x-1 inline-block" href="#">COMPETITIVE TEAM</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-primary-light font-black tracking-widest text-xs uppercase mb-8 shadow-primary/50 drop-shadow-sm">STUDIO</h4>
                <ul className="space-y-4 text-purple-300/60 text-sm font-bold">
                  <li><Link className="hover:text-primary-light transition-all hover:translate-x-1 inline-block" href="#">THE MISSION</Link></li>
                  <li><Link className="hover:text-primary-light transition-all hover:translate-x-1 inline-block" href="#">FACULTY</Link></li>
                  <li><Link className="hover:text-primary-light transition-all hover:translate-x-1 inline-block" href="#">CAREERS</Link></li>
                  <li><Link className="hover:text-primary-light transition-all hover:translate-x-1 inline-block" href="#">PARTNERS</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-primary-light font-black tracking-widest text-xs uppercase mb-8 shadow-primary/50 drop-shadow-sm">LOCATION</h4>
                <ul className="space-y-4 text-purple-300/60 text-sm">
                  <li className="flex items-start gap-3"><span className="material-symbols-outlined !text-[18px] text-primary">location_on</span> 123 Arts District<br/>Creative City, NY 10012</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined !text-[18px] text-primary">phone</span> (555) 012-3456</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-purple-300/40 text-[10px] font-black tracking-[0.2em]">© 2024 CULTIVATE DANCE STUDIO. ALL RIGHTS RESERVED.</p>
              <div className="flex gap-10 text-purple-300/40 text-[10px] font-black tracking-[0.2em] uppercase">
                <Link className="hover:text-white transition-all" href="#">PRIVACY</Link>
                <Link className="hover:text-white transition-all" href="#">TERMS</Link>
                <Link className="hover:text-white transition-all" href="#">STUDENT PORTAL</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
