"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function AboutPage() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

        document.querySelectorAll('.reveal-element, .shutter-reveal-wrapper, .cinematic-zoom-wrapper').forEach(el => {
            observer.observe(el);
        });

        const handleScroll = () => {
            const scrolled = window.scrollY;
            const windowHeight = window.innerHeight;

            const parallaxHero = document.querySelector('.parallax-bg') as HTMLElement;
            if (parallaxHero) {
                parallaxHero.style.transform = `translateY(${scrolled * 0.4}px)`;
            }

            const variableTexts = document.querySelectorAll('.variable-weight-text');
            variableTexts.forEach(text => {
                const rect = text.getBoundingClientRect();
                const center = windowHeight / 2;
                const dist = Math.abs(rect.top + rect.height / 2 - center);
                const maxDist = windowHeight / 1.5;

                let weight = 300;
                if (dist < maxDist) {
                    const progress = 1 - (dist / maxDist);
                    weight = 300 + (progress * 400); // Scales up to 700
                }
                (text as HTMLElement).style.fontVariationSettings = `'wght' ${Math.round(weight)}`;
            });

            const timelineSection = document.querySelector('.timeline-section') as HTMLElement;
            const svgPath = document.getElementById('timeline-svg-path') as unknown as SVGPathElement;
            const timelineDots = document.querySelectorAll('.timeline-dot');

            if (timelineSection && svgPath) {
                const rect = timelineSection.getBoundingClientRect();
                const sectionTop = rect.top + scrolled;
                const sectionHeight = timelineSection.offsetHeight;
                const startDraw = sectionTop - windowHeight / 1.5;
                const totalDrawDistance = sectionHeight * 0.8;

                if (scrolled > startDraw) {
                    let progress = (scrolled - startDraw) / totalDrawDistance;
                    progress = Math.max(0, Math.min(1, progress));
                    const length = svgPath.getTotalLength();
                    const drawLength = length * progress;
                    svgPath.style.strokeDashoffset = String(length - drawLength);

                    timelineDots.forEach((dot) => {
                        const dotRelativeTop = ((dot as HTMLElement).offsetTop / timelineSection.offsetHeight);
                        if (progress > dotRelativeTop) {
                            dot.classList.add('active');
                        } else {
                            dot.classList.remove('active');
                        }
                    });
                }
            }
        };

        const svgPath = document.getElementById('timeline-svg-path') as unknown as SVGPathElement;
        if (svgPath) {
            const length = svgPath.getTotalLength();
            svgPath.style.strokeDasharray = String(length);
            svgPath.style.strokeDashoffset = String(length);
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <div className="bg-[#0a060e] text-white font-display overflow-x-hidden selection:bg-primary selection:text-white">
            <header className="fixed top-0 w-full z-[100] border-b border-white/5 bg-[#0f0518]/80 backdrop-blur-md transition-all duration-500">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                            <span className="material-symbols-outlined text-white text-2xl">cyclone</span>
                        </div>
                        <span className="text-xl font-extrabold tracking-tighter uppercase text-white">Cultivate</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-10">
                        <Link className="text-sm font-bold tracking-wider hover:text-primary transition-colors text-white" href="/">HOME</Link>
                        <Link className="text-sm font-bold tracking-wider text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" href="/about">ABOUT</Link>
                        <Link className="text-sm font-bold tracking-wider hover:text-primary transition-colors text-white" href="/programs">CLASSES</Link>
                        <Link className="text-sm font-bold tracking-wider hover:text-primary transition-colors text-white" href="/schedule">SCHEDULE</Link>
                        <Link className="text-sm font-bold tracking-wider hover:text-primary transition-colors text-white" href="#">CONTACT</Link>
                    </nav>
                    <button className="bg-primary hover:bg-white hover:text-primary-dark text-white px-8 py-2.5 text-sm font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-primary hover:border-white">
                        JOIN NOW
                    </button>
                </div>
            </header>

            <main>
                <section className="relative h-[110vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="parallax-bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNnAsNgUKbJOtuHSz-rCK5vvrvfVdYIyYUIiOAv6L1IuE8_nzpFTo0TAhKsrhiUwDhMGlq4huiRZl79HplaZudlUrcG2a4yV781R1lEDdCBhTU6bOXwIki8D-hwU3bu40ldq8A2DmcKnaAgNRzlQELurjFQG3h0eXlnsjYV3aA-H51klbLMc_ywpuEGPPZZu2TVGDz96v8U-p39n-t6ez_K6RfEuTF5htWoqLglqKv0JPgaZgoRDGvEMPixatBU-R-WyWyKbwGOhfN')", height: "130%", top: "-15%" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-[#2e1065]/80 via-[#4c1d95]/40 to-[#0a060e] mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-[#2e1065]/30 mix-blend-overlay"></div>
                    </div>
                    <div className="relative z-10 text-center px-6 max-w-6xl w-full">
                        <div className="inline-flex items-center gap-4 px-6 py-2 border border-primary/50 rounded-full bg-black/40 backdrop-blur-sm mb-12 reveal-element">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <span className="text-primary-light text-xs font-bold tracking-[0.3em] uppercase">
                                The Purple World
                            </span>
                        </div>
                        <h1 className="relative font-black uppercase tracking-tighter leading-[0.8] mb-8">
                            <span className="block text-6xl md:text-8xl lg:text-[11rem] text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-200 drop-shadow-2xl reveal-element stagger-1 variable-weight-text">About</span>
                            <span className="block text-6xl md:text-8xl lg:text-[11rem] text-stroke-purple absolute top-1 left-1 -z-10 opacity-50 blur-[1px] reveal-element stagger-1">About</span>
                            <span className="block text-6xl md:text-8xl lg:text-[11rem] text-primary italic relative z-10 reveal-element stagger-2 variable-weight-text">Cultivate</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white font-light max-w-2xl mx-auto reveal-element stagger-3 mt-12 leading-relaxed drop-shadow-md">
                            Immerse yourself in a sanctuary where neon dreams meet classical discipline.
                        </p>
                    </div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 reveal-element stagger-4">
                        <div className="flex flex-col items-center gap-3">
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary animate-pulse">Explore</span>
                            <div className="w-[1px] h-24 bg-gradient-to-b from-primary via-purple-400 to-transparent"></div>
                        </div>
                    </div>
                </section>

                <section className="relative py-40 overflow-hidden bg-[#2e1065]">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="absolute inset-0 z-0">
                        <div className="w-full h-full opacity-30 mix-blend-overlay fixed-bg-section" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNnAsNgUKbJOtuHSz-rCK5vvrvfVdYIyYUIiOAv6L1IuE8_nzpFTo0TAhKsrhiUwDhMGlq4huiRZl79HplaZudlUrcG2a4yV781R1lEDdCBhTU6bOXwIki8D-hwU3bu40ldq8A2DmcKnaAgNRzlQELurjFQG3h0eXlnsjYV3aA-H51klbLMc_ywpuEGPPZZu2TVGDz96v8U-p39n-t6ez_K6RfEuTF5htWoqLglqKv0JPgaZgoRDGvEMPixatBU-R-WyWyKbwGOhfN')" }}></div>
                    </div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="bg-black/40 backdrop-blur-xl p-12 md:p-16 border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.15)] reveal-element">
                            <h2 className="text-primary-light font-bold text-sm tracking-[0.4em] uppercase mb-8 flex items-center gap-4">
                                <span className="w-12 h-[1px] bg-primary"></span>
                                Our Story
                            </h2>
                            <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-10 leading-[0.9] text-white variable-weight-text">
                                Designed for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white italic">Evolution</span>
                            </h3>
                            <div className="space-y-6 text-lg text-purple-100 font-light leading-relaxed">
                                <p>
                                    Cultivate isn&apos;t just a studio; it is a movement. Born from the neon-lit streets of the artistic district, we created a space that vibrates with creative energy.
                                </p>
                                <p>
                                    We stripped away the grey and the mundane, replacing them with a vivid atmosphere that demands attention and inspires greatness. Here, the environment itself pushes you to perform.
                                </p>
                            </div>
                        </div>
                        <div className="hidden lg:block relative h-[600px] reveal-element stagger-2">
                            <div className="absolute top-0 right-0 w-full h-full border border-primary/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                            <div className="absolute top-10 right-10 w-[80%] h-[80%] border border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-[200px] text-white/5 font-black select-none">01</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-40 px-6 bg-[#050208] relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8 reveal-element">
                            <div className="max-w-2xl">
                                <h2 className="text-primary font-bold text-sm tracking-[0.4em] uppercase mb-4">The Faculty</h2>
                                <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-white variable-weight-text">
                                    Architects of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Motion</span>
                                </h3>
                            </div>
                            <div className="hidden md:block w-32 h-32 border border-white/10 rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-4xl text-white animate-bounce">arrow_downward</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="group cinematic-zoom-wrapper relative h-[400px] md:h-[600px] overflow-hidden rounded-xl border border-white/5 bg-[#160e1f] stagger-1 shutter-reveal-wrapper">
                                <div className="absolute inset-0 overflow-hidden">
                                    <img alt="Sarah Jenkins" className="lazy-parallax-img w-full h-[120%] -mt-[10%] object-cover duotone-filter" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx3iVHL6r2PI4HML_2OITQBESMft9Qdd3l5ghNebgJfIvFk02fngN_zMcPIWMg6y8pfUCHtgtj5xjpFViTx1rN4bzg6jolmPJWxVF29OFYVq5f-uz6YWx4_DkQ51FEC8yL6EVdAHiQsL5DCblfcg_zS34yN7YQ-ixo_gT36uMaTw9SbvbHVQ8507CPp7kdho_JPY85CUG--qFG9ZWRG2xYLX3LG6ejIq3JjS2izzr3Cl68rwzbU2VKbjqL1ptIPoLUnqZqPAFRX5Hy" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a060e] via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-60"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="h-[2px] bg-primary mb-4 w-0 group-hover:w-10 transition-all duration-300"></div>
                                    <h4 className="text-3xl font-black uppercase tracking-tight text-white mb-2 name-slide-reveal">Sarah <br />Jenkins</h4>
                                    <p className="text-primary font-bold text-xs tracking-widest uppercase mb-4 name-slide-reveal delay-100">Director</p>
                                    <p className="text-sm text-slate-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Former Principal - NYC Ballet</p>
                                </div>
                            </div>
                            <div className="group cinematic-zoom-wrapper relative h-[400px] md:h-[600px] overflow-hidden rounded-xl border border-white/5 bg-[#160e1f] stagger-2 shutter-reveal-wrapper">
                                <div className="absolute inset-0 overflow-hidden">
                                    <img alt="Marcus Thorne" className="lazy-parallax-img w-full h-[120%] -mt-[10%] object-cover duotone-filter" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMSS5VLQP_U-3-9v1yqbVxbW-T_h186PuhJxC8UYpUzGW2fvZtnREMjWBrSvPUXf37eNyo7Tc3SCKQtyDXPOdOZEGuDtLCG44WztaxWXVyFiFADHR-Q5QN1q-mKmOP62TZIW7uXsMJWZr4Y0Jm5Mmyz5b9UEqrAGIrT7XcnDX8QoZqdi5GF_pMxlJrk-LzqRprdkytErogPGr96anBmqQt-ZmeiBEXfau4UMk0vANJdxX0lJGk_WYYfYdAZLx5dQ-rtGtwJ5bXX1_o" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a060e] via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-60"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="h-[2px] bg-primary mb-4 w-0 group-hover:w-10 transition-all duration-300"></div>
                                    <h4 className="text-3xl font-black uppercase tracking-tight text-white mb-2 name-slide-reveal">Marcus <br />Thorne</h4>
                                    <p className="text-primary font-bold text-xs tracking-widest uppercase mb-4 name-slide-reveal delay-100">Hip Hop Lead</p>
                                    <p className="text-sm text-slate-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Global Tour Choreographer</p>
                                </div>
                            </div>
                            <div className="group cinematic-zoom-wrapper relative h-[400px] md:h-[600px] overflow-hidden rounded-xl border border-white/5 bg-[#160e1f] stagger-3 shutter-reveal-wrapper">
                                <div className="absolute inset-0 overflow-hidden">
                                    <img alt="Elena Rodriguez" className="lazy-parallax-img w-full h-[120%] -mt-[10%] object-cover duotone-filter" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNMnhNKh2i4Prc1XT8SDqSHl99v7Kue8W0haEOWr5ivycZmeOmwJT2OQVV-TDD_HO0l5lJqg48vFadK5UE2bVBDPCxmx1iY6yVa4Tfa_RZHMH8URHYOrzP7FwD9rqufgGVFti5Ct8cFT7Gr_bez0y-50OC0WXe3i7yQ27R1E-87Tpw9o2kFVC3J-ZgQgMlKkCcqVakcq5ODC_W0_eROwmOAARtpYl7vyXG_jcHptUeUliWiwAbCo-JK-rTjkiAVMRwKLN7KCzNWGIt" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a060e] via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-60"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="h-[2px] bg-primary mb-4 w-0 group-hover:w-10 transition-all duration-300"></div>
                                    <h4 className="text-3xl font-black uppercase tracking-tight text-white mb-2 name-slide-reveal">Elena <br />Rodriguez</h4>
                                    <p className="text-primary font-bold text-xs tracking-widest uppercase mb-4 name-slide-reveal delay-100">Technique</p>
                                    <p className="text-sm text-slate-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Masters in Dance Pedagogy</p>
                                </div>
                            </div>
                            <div className="group cinematic-zoom-wrapper relative h-[400px] md:h-[600px] overflow-hidden rounded-xl border border-white/5 bg-[#160e1f] stagger-4 shutter-reveal-wrapper">
                                <div className="absolute inset-0 overflow-hidden">
                                    <img alt="David Chen" className="lazy-parallax-img w-full h-[120%] -mt-[10%] object-cover duotone-filter" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdWIbkkRFvpo7qT1Ok3b2XFtEzO8PZnoA-Q9X4CPgrvbv_0N2PdpNkyRuYWf2Ukmk3I9jIy9yG5DAQXkpdlk5tG4MPC6TrtQOfsAinuoQVjcMDjRPD023tSVB554vChO0rSBNnrSYyNGZCsdRC3uz1b13ym5BLNbHNQxOPsNUieLzaRWjMRm7GARvveFz1vsj5wDxi3fDJs-C4W7yvgU3wKbWT4yDdlYJyR-piXJsTMPHRuxMWdEP_SQ3ryUt7ANAX-r-Xu2Kf9uW7" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a060e] via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-60"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="h-[2px] bg-primary mb-4 w-0 group-hover:w-10 transition-all duration-300"></div>
                                    <h4 className="text-3xl font-black uppercase tracking-tight text-white mb-2 name-slide-reveal">David <br />Chen</h4>
                                    <p className="text-primary font-bold text-xs tracking-widest uppercase mb-4 name-slide-reveal delay-100">Contemporary</p>
                                    <p className="text-sm text-slate-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Performance Artist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-40 px-6 bg-[#0a060e] relative overflow-hidden timeline-section">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),transparent)]"></div>
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="text-center mb-40 reveal-element">
                            <span className="inline-block py-1 px-3 rounded bg-primary/20 text-primary border border-primary/30 text-xs font-bold tracking-[0.3em] uppercase mb-6">Our Path</span>
                            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] variable-weight-text">Evolution</h2>
                        </div>
                        <div className="relative neon-timeline-container h-[1200px] w-full">
                            <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">
                                <svg className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-[100px] overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 100 1200" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50 0 V1200" stroke="rgba(255,255,255,0.1)" strokeLinecap="round" strokeWidth="2"></path>
                                    <path className="svg-timeline-path" d="M50 0 V1200" id="timeline-svg-path" stroke="#a855f7" strokeLinecap="round" strokeWidth="4" style={{ filter: "drop-shadow(0 0 8px #a855f7)" }}></path>
                                </svg>
                                <div className="md:hidden absolute left-[20px] top-0 bottom-0 w-[2px] bg-white/10">
                                    <div className="bg-primary w-full shadow-[0_0_15px_rgba(168,85,247,0.8)]" style={{ height: "100%", transform: "scaleY(0)", transformOrigin: "top", transition: "transform 0.1s linear" }}></div>
                                </div>
                            </div>
                            <div className="relative top-0 flex flex-col md:flex-row items-center justify-between group h-[400px]">
                                <div className="md:w-[45%] text-left md:text-right pl-16 md:pl-0 reveal-element">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 text-7xl font-black mb-2 block">2015</span>
                                    <h4 className="text-2xl font-bold uppercase tracking-widest mb-4 text-primary">The Genesis</h4>
                                    <p className="text-[#e9d5ff] font-light leading-relaxed text-lg">
                                        Cultivate opened its doors in a repurposed industrial loft. 12 students. One vision. No compromises.
                                    </p>
                                </div>
                                <div className="absolute left-[20px] md:left-1/2 top-10 w-4 h-4 bg-background-dark border-2 border-slate-700 rounded-full z-10 timeline-dot md:-translate-x-1/2 -translate-x-1/2"></div>
                                <div className="hidden md:block md:w-[45%]"></div>
                            </div>
                            <div className="relative flex flex-col md:flex-row items-center justify-between group h-[400px]">
                                <div className="hidden md:block md:w-[45%]"></div>
                                <div className="absolute left-[20px] md:left-1/2 top-10 w-4 h-4 bg-background-dark border-2 border-slate-700 rounded-full z-10 timeline-dot md:-translate-x-1/2 -translate-x-1/2"></div>
                                <div className="md:w-[45%] text-left pl-16 reveal-element stagger-1">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 text-7xl font-black mb-2 block">2018</span>
                                    <h4 className="text-2xl font-bold uppercase tracking-widest mb-4 text-primary">Mainstage Debut</h4>
                                    <p className="text-[#e9d5ff] font-light leading-relaxed text-lg">
                                        &apos;Cultivate Collective&apos; sold out the Grand Theater residency. Critics called it &quot;The new purple standard of modern ballet.&quot;
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex flex-col md:flex-row items-center justify-between group h-[400px]">
                                <div className="md:w-[45%] text-left md:text-right pl-16 md:pl-0 reveal-element stagger-2">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 text-7xl font-black mb-2 block">2024</span>
                                    <h4 className="text-2xl font-bold uppercase tracking-widest mb-4 text-primary">Digital Frontiers</h4>
                                    <p className="text-[#e9d5ff] font-light leading-relaxed text-lg">
                                        We integrated real-time bio-feedback into our studios, merging the physical and digital for optimal performance.
                                    </p>
                                </div>
                                <div className="absolute left-[20px] md:left-1/2 top-10 w-4 h-4 bg-background-dark border-2 border-slate-700 rounded-full z-10 timeline-dot md:-translate-x-1/2 -translate-x-1/2"></div>
                                <div className="hidden md:block md:w-[45%]"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative py-48 px-6 bg-gradient-to-br from-primary via-primary-dark to-[#2e1065] overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 mix-blend-color-dodge pointer-events-none">
                        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-white rounded-full blur-[150px]"></div>
                        <div className="absolute bottom-[0%] right-[0%] w-[50%] h-[50%] bg-purple-300 rounded-full blur-[120px]"></div>
                    </div>
                    <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
                        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.85] text-white variable-weight-text">
                            Join The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">Collective</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-medium text-white/90 max-w-2xl mb-16 reveal-element stagger-1">
                            Your evolution is waiting. Step into the light.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 reveal-element stagger-2">
                            <button className="bg-white text-primary-dark px-12 py-5 font-black uppercase tracking-[0.2em] text-lg hover:bg-black hover:text-white transition-all hover:scale-105 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                                Schedule Audition
                            </button>
                            <button className="border-2 border-white text-white px-12 py-5 font-black uppercase tracking-[0.2em] text-lg hover:bg-white hover:text-primary-dark transition-all hover:scale-105 bg-white/10 backdrop-blur-sm">
                                Studio Tour
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-black py-20 px-6 border-t border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                        <div className="md:col-span-1">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                                    <span className="material-symbols-outlined text-black text-lg">cyclone</span>
                                </div>
                                <span className="text-lg font-extrabold tracking-tighter uppercase text-white">Cultivate</span>
                            </div>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8">
                                The intersection of technical precision and artistic expression.
                            </p>
                            <div className="flex gap-4">
                                <Link className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-primary hover:border-primary transition-all group" href="#">
                                    <span className="material-symbols-outlined text-sm text-slate-400 group-hover:text-white transition-colors">social_distance</span>
                                </Link>
                                <Link className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-primary hover:border-primary transition-all group" href="#">
                                    <span className="material-symbols-outlined text-sm text-slate-400 group-hover:text-white transition-colors">public</span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h4 className="font-bold uppercase tracking-widest text-xs text-primary">Studio</h4>
                            <nav className="flex flex-col gap-4 text-sm text-slate-400 font-medium">
                                <Link className="hover:text-white transition-colors uppercase hover:translate-x-2 transition-transform duration-300" href="#">Our Mission</Link>
                                <Link className="hover:text-white transition-colors uppercase hover:translate-x-2 transition-transform duration-300" href="#">Faculty</Link>
                                <Link className="hover:text-white transition-colors uppercase hover:translate-x-2 transition-transform duration-300" href="#">Careers</Link>
                                <Link className="hover:text-white transition-colors uppercase hover:translate-x-2 transition-transform duration-300" href="#">Press</Link>
                            </nav>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h4 className="font-bold uppercase tracking-widest text-xs text-primary">Programs</h4>
                            <nav className="flex flex-col gap-4 text-sm text-slate-400 font-medium">
                                <Link className="hover:text-white transition-colors uppercase hover:translate-x-2 transition-transform duration-300" href="#">Classical</Link>
                                <Link className="hover:text-white transition-colors uppercase hover:translate-x-2 transition-transform duration-300" href="#">Contemporary</Link>
                                <Link className="hover:text-white transition-colors uppercase hover:translate-x-2 transition-transform duration-300" href="#">Commercial</Link>
                                <Link className="hover:text-white transition-colors uppercase hover:translate-x-2 transition-transform duration-300" href="#">Intensives</Link>
                            </nav>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h4 className="font-bold uppercase tracking-widest text-xs text-primary">Visit</h4>
                            <div className="text-sm text-slate-400 font-medium leading-loose uppercase">
                                402 Dance Plaza, Suite 100<br />
                                Arts District, NY 10012<br />
                                Mon - Sat: 8am - 10pm
                            </div>
                        </div>
                    </div>
                    <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                        <p>© 2024 Cultivate Dance Studio. All rights reserved.</p>
                        <div className="flex gap-10">
                            <Link className="hover:text-primary transition-colors" href="#">Privacy</Link>
                            <Link className="hover:text-primary transition-colors" href="#">Terms</Link>
                            <Link className="hover:text-primary transition-colors" href="#">Portal</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
