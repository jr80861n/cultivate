"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SchedulePage() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        if (isDrawerOpen) {
            document.body.classList.add('drawer-open');
        } else {
            document.body.classList.remove('drawer-open');
        }
        return () => {
             document.body.classList.remove('drawer-open');
        }
    }, [isDrawerOpen]);

    return (
        <div className="bg-background-dark text-gray-100 font-display antialiased overflow-hidden h-screen flex flex-col selection:bg-primary selection:text-white">
            <header className="h-16 border-b border-surface-border bg-surface-dark/95 backdrop-blur supports-[backdrop-filter]:bg-surface-dark/60 flex items-center justify-between px-6 z-30 relative shrink-0">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-xl shadow-glow group-hover:scale-105 transition-transform">C</div>
                        <div className="flex flex-col">
                            <span className="font-bold text-base tracking-tight leading-none">CULTIVATE</span>
                            <span className="text-[10px] text-gray-500 font-mono tracking-wider uppercase">Engineered Flow</span>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-darker border border-surface-border text-xs text-gray-400">
                        <span className="text-gray-500">Dashboard</span>
                        <span className="material-icons text-[12px] text-gray-600">chevron_right</span>
                        <span className="text-white font-medium">Schedule</span>
                        <span className="material-icons text-[12px] text-gray-600">chevron_right</span>
                        <span className="text-primary-light">Week 41</span>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="relative hidden lg:block group">
                        <span className="material-icons text-gray-500 absolute left-3 top-2 text-[18px] group-hover:text-primary transition-colors">search</span>
                        <input className="bg-surface-darker border border-surface-border rounded-lg pl-9 pr-4 py-1.5 text-sm w-64 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-gray-300 placeholder-gray-600" placeholder="Search class or instructor..." type="text"/>
                        <div className="absolute right-2 top-2 flex items-center gap-1">
                            <span className="text-[10px] border border-surface-border rounded px-1.5 text-gray-500 bg-surface-dark">⌘K</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 pl-4 border-l border-surface-border">
                        <button aria-label="Notifications" className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors relative text-gray-400 hover:text-white btn-physics">
                            <span className="material-icons-outlined text-[20px]">notifications</span>
                            <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-primary rounded-full ring-2 ring-surface-dark"></span>
                        </button>
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-gray-700 to-gray-600 p-[1px] cursor-pointer btn-physics">
                            <Image
                                width={800}
                                height={600}
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZX63nJc4zAdXtqSazpUtffBpJBoGT9RPHZnL6sCAQspylNubUG0qLqtIAl0x87CUvcyhcvg6GimhTINppEcaKd35RY7_y46qb3qqTAkWtBfCgxEd2FOwfPXVBgwjRqZTRRPXnoTMYtiBfAd7-bKZzTVX_cGTwMUubYx4IyNWgbBKUEs9RUELAVigk06PISP9i-tD7PAnqnZk46M95FMPhfeicT2gd0GTK6fRkPtXhGxO2l9klyzSY9hmNiRGuIs2oQtymgk2i9DpN"
                                alt="User Avatar"
                                className="w-full h-full rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </header>
            
            <main className="flex-1 flex overflow-hidden relative">
                <aside className="w-72 bg-surface-darker border-r border-surface-border flex-col hidden lg:flex shrink-0 z-20">
                    <div className="p-6 pb-2">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-bold text-gray-200">October 2023</h3>
                            <div className="flex gap-1">
                                <button className="p-1 hover:bg-white/5 rounded text-gray-500 hover:text-white"><span className="material-icons text-[16px]">chevron_left</span></button>
                                <button className="p-1 hover:bg-white/5 rounded text-gray-500 hover:text-white"><span className="material-icons text-[16px]">chevron_right</span></button>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-gray-500 font-medium mb-2 uppercase tracking-wide">
                            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center text-xs">
                            <div className="aspect-square flex items-center justify-center text-gray-600 opacity-40">25</div>
                            <div className="aspect-square flex items-center justify-center text-gray-600 opacity-40">26</div>
                            <div className="aspect-square flex items-center justify-center text-gray-600 opacity-40">27</div>
                            <div className="aspect-square flex items-center justify-center text-gray-600 opacity-40">28</div>
                            <div className="aspect-square flex items-center justify-center text-gray-600 opacity-40">29</div>
                            <div className="aspect-square flex items-center justify-center text-gray-600 opacity-40">30</div>
                            <button className="aspect-square flex items-center justify-center rounded hover:bg-white/5 text-gray-300 transition-colors">1</button>
                            <button className="aspect-square flex items-center justify-center rounded hover:bg-white/5 text-gray-300 transition-colors">2</button>
                            <button className="aspect-square flex items-center justify-center rounded hover:bg-white/5 text-gray-300 transition-colors">3</button>
                            <button className="aspect-square flex items-center justify-center bg-primary text-white rounded font-bold shadow-glow relative z-10">4</button>
                            <button className="aspect-square flex items-center justify-center rounded hover:bg-white/5 text-gray-300 transition-colors">5</button>
                            <button className="aspect-square flex items-center justify-center rounded hover:bg-white/5 text-gray-300 transition-colors">6</button>
                            <button className="aspect-square flex items-center justify-center rounded hover:bg-white/5 text-gray-300 transition-colors">7</button>
                        </div>
                    </div>
                    <div className="h-px bg-surface-border mx-6"></div>
                    <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Smart Filters</h3>
                            <span className="text-[10px] text-primary cursor-pointer hover:underline">Reset</span>
                        </div>
                        <div className="space-y-5">
                            <div>
                                <label className="text-xs text-gray-400 mb-2 block font-medium">Style</label>
                                <div className="flex flex-wrap gap-2">
                                    <button className="px-2.5 py-1 rounded bg-primary/20 text-primary-light border border-primary/30 text-xs font-medium hover:bg-primary/30 transition-colors">Hip Hop</button>
                                    <button className="px-2.5 py-1 rounded bg-surface-dark text-gray-400 border border-surface-border text-xs font-medium hover:text-gray-200 hover:border-gray-600 transition-colors">Contemporary</button>
                                    <button className="px-2.5 py-1 rounded bg-surface-dark text-gray-400 border border-surface-border text-xs font-medium hover:text-gray-200 hover:border-gray-600 transition-colors">Jazz</button>
                                    <button className="px-2.5 py-1 rounded bg-surface-dark text-gray-400 border border-surface-border text-xs font-medium hover:text-gray-200 hover:border-gray-600 transition-colors">Ballet</button>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-xs text-gray-400 font-medium">Level</label>
                                    <span className="text-[10px] text-primary bg-primary/10 px-1.5 rounded">Int - Adv</span>
                                </div>
                                <div className="h-10 flex gap-1 items-end pb-1 px-1 rounded-md bg-surface-dark border border-surface-border relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                                    <div className="flex-1 h-2 bg-gray-700 rounded-sm cursor-pointer hover:bg-gray-500 transition-colors"></div>
                                    <div className="flex-1 h-4 bg-gray-700 rounded-sm cursor-pointer hover:bg-gray-500 transition-colors"></div>
                                    <div className="flex-1 h-6 bg-primary rounded-sm cursor-pointer"></div>
                                    <div className="flex-1 h-8 bg-primary rounded-sm cursor-pointer"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-lg border border-surface-border bg-surface-dark/50">
                                <span className="text-xs text-gray-300">Show Full Classes</span>
                                <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-surface-border transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-darker">
                                    <span className="translate-x-1 inline-block h-3 w-3 transform rounded-full bg-gray-400 transition-transform"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-t border-surface-border bg-gradient-to-b from-surface-darker to-surface-dark">
                        <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary-dark/10 border border-primary/20 p-4 relative overflow-hidden group">
                            <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-1 text-primary-light">
                                    <span className="material-icons text-sm">bolt</span>
                                    <span className="text-xs font-bold uppercase">Power User</span>
                                </div>
                                <p className="text-[10px] text-gray-400 leading-relaxed">
                                    Use <span className="font-mono text-gray-300 bg-black/30 px-1 rounded">Shift + Drag</span> to book recurring slots instantly.
                                </p>
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="flex-1 flex flex-col min-w-0 bg-background-dark relative">
                    <div className="h-14 border-b border-surface-border flex items-center justify-between px-6 shrink-0 bg-surface-dark/80 backdrop-blur-md z-10 sticky top-0">
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col">
                                <h1 className="text-lg font-bold text-white leading-none">Wednesday, Oct 4</h1>
                                <span className="text-[10px] text-gray-500 font-mono mt-0.5 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
                                    Real-time Sync Active
                                </span>
                            </div>
                            <div className="h-6 w-px bg-surface-border"></div>
                            <div className="flex bg-surface-darker p-1 rounded-lg border border-surface-border">
                                <button className="px-3 py-1 text-xs font-bold rounded bg-primary text-white shadow-sm transition-all">Day</button>
                                <button className="px-3 py-1 text-xs font-bold rounded text-gray-400 hover:text-white hover:bg-white/5 transition-all">Week</button>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3 hover:space-x-1 transition-all duration-300">
                                <img alt="Instructor" className="w-8 h-8 rounded-full border-2 border-surface-dark object-cover ring-2 ring-transparent hover:ring-primary transition-all cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfDHLiuu0Tigoxy8V0KyDHa8M0zdFlLTYjX2WdE8D6u8tX_UhgjmJOaxesjtfHnDhjN__fTTbY2BxetUyJ14wprD3TwgJ2IGHbwdM6_m_5YH5MHVt5B5DX43Izsx1YdnO81VKTu4Cj1w5ECCe1kGh70IvAs2tHPYlt4Pd6qr8c00e0NYuz-wpPqworBwPKKejkaqW6ViW1ycIudnF8Qs83TrkEPBL2bMEHsi_gi_ZG3yGSiry52hTTW2DH1xJ4tl-sD1pmue08NWci" title="Active Instructors"/>
                                <img alt="Instructor" className="w-8 h-8 rounded-full border-2 border-surface-dark object-cover ring-2 ring-transparent hover:ring-primary transition-all cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeanCY27GHbnIBPJHighsKJ3MuNSP39tEmAwJJCIK0ty2zSkhyGFh_aNyxdWauvpyq6QDyeO9tBaHlLletNYGUDHVgsHmy_cuFLE0cTSitibOhKf8c3qeJOJ3PHpgxYsT4Q8BgNSwS5himhDzNv-CCXdspeE-rVPz41VDPhcnn2fNqLqRJb9ULkWJ7dg0RiP8ri6N2NZgX3IhCSKEEm9rff1pbux3Zba-bzIKzSGwy7CWwuuGIVIR_RUux-np_pCffc-nWyRfKYLpC"/>
                                <img alt="Instructor" className="w-8 h-8 rounded-full border-2 border-surface-dark object-cover ring-2 ring-transparent hover:ring-primary transition-all cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3XLI-QFzmu4oeDgWFzFe7SJ7CvHzJPjMIw6WioPaMhK1v1xCcFoS4ZJlnrjsAPLnb5TMbWlbuuiuVZJgMSAsXyKeiG2YoqRjPlHrGnkIW7_7w90M6mOQuIDqQyuF6ADaau8DBwALbt5qH9WWvDXxK8drLDnnygqnOumsVDKAEVlYq7My4mr8EqMGdB2YN636qeHE77_m0KBbnXRa3buk-Y2RtsWb-rFKroX1wiGdyYAeak1JJPgP8M4Pcok357MqLkxe9VLLyfboK"/>
                                <div className="w-8 h-8 rounded-full border-2 border-surface-dark bg-surface-border flex items-center justify-center text-xs font-bold text-gray-400">+5</div>
                            </div>
                            <button className="btn-physics flex items-center gap-2 bg-white text-black hover:bg-gray-200 text-xs font-bold py-2 px-4 rounded-lg transition-colors shadow-[0_0_15px_-5px_rgba(255,255,255,0.3)]">
                                <span className="material-icons text-[16px]">add</span>
                                New Booking
                           </button>
                        </div>
                    </div>

                    <div className="h-10 border-b border-surface-border flex items-center bg-surface-darker/90 shrink-0 pl-40 pr-4 overflow-hidden select-none z-10">
                        <div className="flex w-full relative">
                            <div className="flex w-full text-xs text-gray-500 font-mono tracking-wider">
                                <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2">09:00 AM</div>
                                <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2">10:00 AM</div>
                                <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2">11:00 AM</div>
                                <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2 text-primary font-bold">12:00 PM</div>
                                <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2">01:00 PM</div>
                                <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2">02:00 PM</div>
                                <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2">03:00 PM</div>
                                <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2">04:00 PM</div>
                                <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2">05:00 PM</div>
                                <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2">06:00 PM</div>
                                <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2">07:00 PM</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar relative bg-surface-darker/50">
                        <div className="relative min-w-max pb-20">
                            <div className="absolute top-0 bottom-0 left-[485px] w-px bg-red-500 z-30 shadow-[0_0_15px_rgba(239,68,68,0.5)] pointer-events-none opacity-80 mix-blend-screen">
                                <div className="sticky top-0 z-40">
                                    <div className="absolute -top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 now-indicator-pulse"></div>
                                    <div className="absolute top-2 left-2 text-[10px] font-bold text-white bg-red-600 px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap transform -translate-x-1/2 translate-y-1">
                                        11:45 AM
                                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-red-600"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Studio A */}
                            <div className="flex h-32 border-b border-surface-border group relative">
                                <div className="w-40 sticky left-0 bg-surface-darker border-r border-surface-border z-20 flex flex-col justify-center p-4 shadow-[4px_0_24px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-bold text-white">Studio A</span>
                                        <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                                    </div>
                                    <span className="text-[10px] text-gray-500 font-mono mb-2">Capacity: 25</span>
                                    <div className="w-full bg-surface-dark rounded-full h-1 overflow-hidden">
                                        <div className="bg-gradient-to-r from-green-500 to-green-400 w-3/4 h-full rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex-1 relative grid-bg-pattern flex items-center">
                                    {/* Class Block 1 */}
                                    <div className="absolute left-[140px] w-[200px] top-2 bottom-2 glass-card rounded-xl p-3 flex flex-col justify-between group/card overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                                        <div>
                                            <div className="flex justify-between items-start">
                                                <h4 className="text-xs font-bold text-white truncate w-32">Morning Flow</h4>
                                                <span className="material-icons text-[12px] text-gray-500">lock_clock</span>
                                            </div>
                                            <div className="text-[10px] text-gray-400 mt-1 font-mono">10:00 - 11:30 AM</div>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex -space-x-2">
                                                <img alt="Instructor" className="w-6 h-6 rounded-full border border-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXef-MeCCZpdqQQa_rYxlRFsdVljTbFuGGlsNiUo8iLob9mmXixhIVcLR_f8bnUVFAOAGP1_kUzRD1invmLtnZfFS3Xi-f5CacFTa-1qUjxGGnDIFR0M0G8TiU8kUcbVijTfMiyLBbAM9qYsF7aOCVg9nxW-wQjRyVBjNXRssZerSWB1DxjsYhzHm8MYM46HXtF1YDOMGUvUAmdGl6f0acIYj-_pLxDVvH7sy2QsgejF5r1jr6nL3FBi3zCHXl5803FZowToPbjwcE"/>
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Ended</span>
                                        </div>
                                    </div>
                                    
                                    {/* Class Block 2 (Clickable to open drawer) */}
                                    <button 
                                        className="absolute left-[390px] w-[180px] top-1 bottom-1 bg-primary/10 border border-primary/50 rounded-xl p-0 hover:bg-primary/20 hover:border-primary/80 hover:shadow-glow hover:-translate-y-1 transition-all text-left flex flex-col group/card overflow-hidden z-10 cursor-pointer btn-physics backdrop-blur-md" 
                                        onClick={() => setIsDrawerOpen(true)}
                                    >
                                        <div className="absolute bottom-0 left-0 h-1 bg-primary/30 w-full z-0">
                                            <div className="h-full bg-primary w-[45%] animate-[pulse_4s_infinite]"></div>
                                        </div>
                                        <div className="p-3 relative z-10 flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <span className="text-xs font-bold text-white truncate drop-shadow-sm">Adv. Hip Hop</span>
                                                    <div className="flex items-center gap-1 bg-red-500/20 px-1.5 py-0.5 rounded border border-red-500/30">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                                                        <span className="text-[9px] font-bold text-red-200">LIVE</span>
                                                    </div>
                                                </div>
                                                <div className="text-[10px] text-primary-light mt-1 font-mono">11:45 - 1:00 PM</div>
                                            </div>
                                            <div className="mt-2">
                                                <div className="flex justify-between text-[10px] text-gray-300 mb-1 items-end">
                                                    <span className="text-gray-400">Capacity</span>
                                                    <span className="text-white font-bold">22<span className="text-gray-500 font-normal">/25</span></span>
                                                </div>
                                                <div className="flex gap-0.5 h-1.5">
                                                    <div className="flex-1 bg-primary rounded-l-sm"></div>
                                                    <div className="flex-1 bg-primary"></div>
                                                    <div className="flex-1 bg-primary"></div>
                                                    <div className="flex-1 bg-primary"></div>
                                                    <div className="flex-1 bg-surface-darker/50 border border-white/10 rounded-r-sm"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </button>

                                    {/* Class Block 3 */}
                                    <div className="absolute left-[650px] w-[180px] top-2 bottom-2 glass-card rounded-xl p-3 flex flex-col justify-between group/card overflow-hidden cursor-pointer hover:border-orange-500/50 transition-colors opacity-70 hover:opacity-100">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
                                        <div>
                                            <h4 className="text-xs font-bold text-white truncate">Kids Ballet</h4>
                                            <div className="text-[10px] text-gray-400 mt-1 font-mono">02:00 - 3:30 PM</div>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="px-1.5 py-0.5 bg-surface-border rounded text-[9px] text-gray-300 border border-white/5">Kids</span>
                                            <span className="px-1.5 py-0.5 bg-surface-border rounded text-[9px] text-gray-300 border border-white/5">Beg</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Studio B */}
                            <div className="flex h-32 border-b border-surface-border group relative">
                                <div className="w-40 sticky left-0 bg-surface-darker border-r border-surface-border z-20 flex flex-col justify-center p-4 shadow-[4px_0_24px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-bold text-white">The Loft</span>
                                        <span className="w-2 h-2 rounded-full bg-gray-600"></span>
                                    </div>
                                    <span className="text-[10px] text-gray-500 font-mono mb-2">Capacity: 15</span>
                                    <div className="w-full bg-surface-dark rounded-full h-1 overflow-hidden">
                                        <div className="bg-gray-700 w-1/4 h-full rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex-1 relative grid-bg-pattern flex items-center">
                                    <div className="absolute left-[850px] w-[140px] top-2 bottom-2 bg-surface-dark/40 border border-surface-border/50 rounded-xl p-3 animate-pulse flex flex-col justify-between">
                                        <div className="h-3 bg-surface-border rounded w-3/4"></div>
                                        <div className="h-2 bg-surface-border rounded w-1/2"></div>
                                        <div className="flex gap-2 mt-auto">
                                            <div className="w-6 h-6 rounded-full bg-surface-border"></div>
                                        </div>
                                    </div>
                                    <div className="absolute left-[280px] w-[200px] top-2 bottom-2 glass-card rounded-xl p-3 flex flex-col justify-between group/card overflow-hidden hover:-translate-y-1 transition-transform cursor-pointer">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-purple-400"></div>
                                        <div>
                                            <h4 className="text-xs font-bold text-white truncate">Private Session</h4>
                                            <div className="text-[10px] text-gray-400 mt-1 font-mono">11:00 - 12:45 PM</div>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2 bg-surface-darker/50 p-1.5 rounded-lg border border-white/5">
                                            <span className="material-icons text-[12px] text-gray-500">lock</span>
                                            <span className="text-[10px] text-gray-400">Reserved for Member</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Studio C  */}
                            <div className="flex h-32 border-b border-surface-border group relative">
                                <div className="w-40 sticky left-0 bg-surface-darker border-r border-surface-border z-20 flex flex-col justify-center p-4 shadow-[4px_0_24px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-bold text-white">Studio B</span>
                                        <span className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.6)]"></span>
                                    </div>
                                    <span className="text-[10px] text-gray-500 font-mono mb-2">Capacity: 40</span>
                                    <div className="w-full bg-surface-dark rounded-full h-1 overflow-hidden">
                                        <div className="bg-teal-500 w-1/2 h-full rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex-1 relative grid-bg-pattern flex items-center">
                                    <div className="absolute left-[450px] w-[240px] top-2 bottom-2 glass-card rounded-xl p-3 flex flex-col justify-between group/card overflow-hidden hover:border-teal-500/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.1)] transition-all cursor-pointer">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>
                                        <div className="flex gap-3">
                                            <div className="relative">
                                                <Image
                                                    width={400}
                                                    height={400}
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5d4y9g6QO4QxL--xUbV1-c08ONU1xkuwskC--3dH3zRok7_DOZE9cP3o_QU_b0oZLKUFuBd_a7yvkkAP3m7gbSzfWisNS6hwtzbfe71BnRNHBT19VfBqXy9i4JpES7DwzekvcxrIKgGP0i0P3AweDZT_MXeYbp1sNL8uMlWzj-g_iCafkdWsj6QovJ2mQ3P0a0QuthX-OHCq_SSqxAidL9OGa5TZVeWrbCBu5-hILPcUmuWs7NrMaEwWFYVc-KrHWvbjk1OhLqXvikKTLkn-HjwmfdU6LR"
                                                    alt="Instructor"
                                                    className="w-10 h-10 rounded-lg object-cover ring-1 ring-surface-border"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                        e.currentTarget.parentElement!.innerHTML = '<span class="material-icons text-[16px] text-[#2dd4bf]">person</span>';
                                                    }}
                                                />
                                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-surface-dark rounded-full flex items-center justify-center border border-surface-border">
                                                    <span className="material-icons text-[10px] text-teal-400">verified</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-bold text-white truncate">Contemporary Fusion</h4>
                                                <div className="text-[10px] text-gray-400 mt-0.5 font-mono">12:15 - 02:15 PM</div>
                                                <div className="mt-1 flex items-center gap-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                                                    <span className="text-[9px] text-gray-400">Sub: Maria K.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-1 bg-surface-darker rounded-full h-1.5 overflow-hidden w-full flex">
                                            <div className="bg-teal-500 w-1/3 h-full"></div>
                                            <div className="bg-surface-border w-2/3 h-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Open Floor */}
                            <div className="flex h-32 border-b border-surface-border group relative">
                                <div className="w-40 sticky left-0 bg-surface-darker border-r border-surface-border z-20 flex flex-col justify-center p-4 shadow-[4px_0_24px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-bold text-gray-400">Open Floor</span>
                                        <span className="material-icons text-[14px] text-gray-600">visibility_off</span>
                                    </div>
                                    <span className="text-[10px] text-gray-600 font-mono mb-2">Unsupervised</span>
                                </div>
                                <div className="flex-1 relative bg-stripes flex items-center">
                                    <div className="absolute left-[0px] w-[500px] top-4 bottom-4 border border-dashed border-gray-700/50 rounded-xl flex items-center justify-center bg-surface-darker/30 hover:bg-surface-darker/60 transition-colors cursor-crosshair group">
                                        <div className="text-center">
                                            <span className="text-xs text-gray-500 font-medium group-hover:text-gray-300">Open Practice Session</span>
                                            <div className="text-[9px] text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click &amp; Drag to reserve space</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Slide-over Drawer */}
            <div aria-labelledby="slide-over-title" aria-modal="true" className="fixed inset-0 z-50 pointer-events-none overflow-hidden" role="dialog">
                <div 
                    aria-hidden="true" 
                    className="absolute inset-0 bg-background-dark/60 backdrop-blur-sm opacity-0 transition-opacity duration-300 ease-in-out body-[.drawer-open]_&:opacity-100 pointer-events-auto body-[.drawer-open]_&:pointer-events-auto" 
                    onClick={() => setIsDrawerOpen(false)}
                ></div>
                <div className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out translate-x-full sm:duration-700 drawer-slide body-[.drawer-open]_&:translate-x-0">
                        <div className="flex h-full flex-col overflow-y-scroll bg-surface-dark border-l border-surface-border shadow-2xl relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-400 to-primary"></div>
                            <div className="px-6 py-6 border-b border-surface-border bg-surface-darker sticky top-0 z-10 backdrop-blur-md bg-opacity-90">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold text-white tracking-tight" id="slide-over-title">Advanced Hip Hop</h2>
                                        <div className="flex items-center gap-2 mt-1.5">
                                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                            <p className="text-sm text-primary-light font-medium">3 spots left • <span className="text-gray-400 font-normal">Filling fast</span></p>
                                        </div>
                                    </div>
                                    <div className="ml-3 flex h-7 items-center">
                                        <button 
                                            className="rounded-lg p-1 bg-surface-dark border border-surface-border text-gray-400 hover:text-white focus:outline-none transition-colors" 
                                            onClick={() => setIsDrawerOpen(false)} 
                                            type="button"
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <span className="material-icons text-[20px]">close</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center gap-4">
                                    <div className="px-3 py-1.5 rounded-lg bg-surface-dark border border-surface-border flex items-center gap-2 text-xs font-medium text-gray-300">
                                        <span className="material-icons text-[14px] text-gray-500">schedule</span>
                                        11:45 AM - 1:00 PM
                                    </div>
                                    <div className="px-3 py-1.5 rounded-lg bg-surface-dark border border-surface-border flex items-center gap-2 text-xs font-medium text-gray-300">
                                        <span className="material-icons text-[14px] text-gray-500">location_on</span>
                                        Studio A
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex-1 px-6 py-6 space-y-8">
                                <div className="perspective-container">
                                    <div className="card-3d bg-surface-darker border border-surface-border rounded-xl p-5 hover:border-primary/50 cursor-pointer group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 blur-2xl rounded-full group-hover:bg-primary/20 transition-colors"></div>
                                        <div className="flex gap-4 relative z-10">
                                            <div className="relative">
                                                <Image
                                                    width={400}
                                                    height={400}
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaxO1ejHNsmNaF4m4B0ku43SeveyFVcpoWotzQTFIbAjpVKwkLXuJ2tQkyr8EfriMa0BFX1omCOYdXS9u5fckiBM-f0_91cCRjWrmXjvENfM9ncLy6THw7f-0B3DpTOFc5yTrhSiwC6Ms1GCymet19pOQB-KROcaXq5R1cog_XpD6HLfLMfJNfHmZbE-aqnIR3YxA0KrW-wHr3YKLN6cO3CWSFW6BlGq1BOaymNOSsKu99It-NX3GRHt720djxcOuIASSuEmgWLCfN"
                                                    alt="Instructor"
                                                    className="h-14 w-14 rounded-xl object-cover ring-2 ring-surface-border group-hover:ring-primary transition-all"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                        e.currentTarget.parentElement!.innerHTML = '<span class="material-icons text-[16px] text-[#9d4af2]">person</span>';
                                                    }}
                                                />
                                                <div className="absolute -bottom-1 -right-1 bg-primary text-white text-[9px] px-1.5 py-0.5 rounded border border-surface-darker font-bold">PRO</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="text-sm font-bold text-white group-hover:text-primary-light transition-colors">Sarah Jenkins</h4>
                                                        <div className="flex text-[10px] text-gray-400 mt-0.5">
                                                            <span className="material-icons text-[10px] text-yellow-500 mr-0.5">star</span>
                                                            4.9 (120 reviews)
                                                        </div>
                                                    </div>
                                                    <button className="text-xs text-primary hover:text-white font-medium transition-colors">View Profile</button>
                                                </div>
                                                <p className="text-xs text-gray-400 mt-2 leading-relaxed">High-energy choreography focusing on musicality. 10 years LA industry experience.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-4 bg-surface-darker rounded-xl border border-surface-border flex flex-col justify-between hover:bg-surface-darker/80 transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Intensity</span>
                                            <span className="material-icons text-[16px] text-red-400">local_fire_department</span>
                                        </div>
                                        <div>
                                            <div className="flex gap-1 h-1.5 mb-2">
                                                <div className="flex-1 bg-red-500 rounded-sm"></div>
                                                <div className="flex-1 bg-red-500 rounded-sm"></div>
                                                <div className="flex-1 bg-red-500 rounded-sm"></div>
                                                <div className="flex-1 bg-red-500/50 rounded-sm"></div>
                                                <div className="flex-1 bg-surface-border rounded-sm"></div>
                                            </div>
                                            <span className="text-sm font-bold text-white">High Heat</span>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-surface-darker rounded-xl border border-surface-border flex flex-col justify-between hover:bg-surface-darker/80 transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Est. Burn</span>
                                            <span className="material-icons text-[16px] text-orange-400">monitor_heart</span>
                                        </div>
                                        <div className="text-sm font-bold text-white mt-auto">~550 kcal</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Who&apos;s Going</h3>
                                        <span className="text-xs font-mono text-primary-light bg-primary/10 px-2 py-0.5 rounded border border-primary/20">22 / 25</span>
                                    </div>
                                    <div className="flex -space-x-2 overflow-hidden py-2 pl-1">
                                        <Image
                                            width={40}
                                            height={40}
                                            alt="User"
                                            className="inline-block h-10 w-10 rounded-full ring-2 ring-surface-dark object-cover grayscale hover:grayscale-0 hover:z-10 hover:scale-110 transition-all duration-300"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzOCXq59zG_rCtE-OIcH-LvztG09LoF8EdKfnRJSmkawNbp0zPOoH9OXUUXGkcfQFBoHHKsjIp-wwhngePXKWUP8ERfyKEAuvQSxEXJFQgp-Mk4TRXEwI89V-I070a-KKIT62LsG-20ETSP8Msw89eLXbjMcj6d5-ESMFCr21SGNWr0CpbX0oWjjSbQiyv3K2e3xjSmidlJU4t3MkI6Eb7qxGL-bt2l6XE-J5fEyWtr3cU9AwA2susH170KeZkAE5Uk6CKHPTPAqwr"
                                        />
                                        <Image
                                            width={40}
                                            height={40}
                                            alt="User"
                                            className="inline-block h-10 w-10 rounded-full ring-2 ring-surface-dark object-cover grayscale hover:grayscale-0 hover:z-10 hover:scale-110 transition-all duration-300"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjZlmeTF-Cf8N8EWyGHh55y1LZRlEOMJJVdLZnm0QWnN4EUfIVQT3KA6biAMPZ2_vhSb0cgFV9dJBvgaiCgXLqFay737toaA2GNTN60OgBnbYaYuYqJVfGWFF4o8tqHhSDQTpSfDjLuv9el7kgfqUmC2_XfEFPbe0X1q15yDYmrmQNRKi2xjmSxxYivPSybBi2_anrRJHiAQQMYSy2TFsQViDYHqMJkOYjvcUHk6vDn3t5n_NVGMnKW4cO3CWSFW6BlGq1BOaymNOSsKu99It-NX3GRHt720djxcOuIASSuEmgWLCfN"
                                        />
                                        <Image
                                            width={40}
                                            height={40}
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArnKh4ihwygFaM66kmNrUlyYwVWc00939cJ3GhMDPyBQbuJmPPJB0Bn0qIg5GEhLHKY0VbPMxLRt3n2bYLL2dhVFhEWPj9lnU1Oqpa4Eq127-EfL0r8S3VUQ4WU5o3zmRt4w30y-JaWuTeYLKzHmGPrIJJ4K8CM3UrcHj0xEkhWk2Ho041eGsZ9m6_oBfxf4rO4U2qP3GrIpNmaM6E6rwsqQz7hd4Z3JvufI0k37KDcUFl50V56Vb4kCmn8ms4iheJCZTRMXC0iB4"
                                            alt="User"
                                            className="inline-block h-10 w-10 rounded-full ring-2 ring-surface-dark object-cover grayscale hover:grayscale-0 hover:z-10 hover:scale-110 transition-all duration-300"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement!.innerHTML = '<span class="material-icons text-[16px] text-[#f43f5e]">person</span>';
                                            }}
                                        />
                                        <Image
                                            width={40}
                                            height={40}
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEqP2nJtZZTQxAvpfW7QWA26HtK0qOtYiQFZXZ_Zslsog0vOubXT04sddljQHWHpt_Kk8wNild5lhDPWt8lg5NdDXMo9RX_3eIuL67a3mhkuiRNjmG4SRf2Bw0dJtYOd6KB0kqL018YsjoPhWEEUvSO_o_LkagxL1LEaw-Bpbp3FrGdfLAbTKXMCvCf5UFJtuNDh5OI_5gH0UwloUNKYvRlhCTuBaiofB6P5biIAoNhaLjpSIbWGW1oQveNwhVNjM6KXFioLDa-ATJ"
                                            alt="User"
                                            className="inline-block h-10 w-10 rounded-full ring-2 ring-surface-dark object-cover grayscale hover:grayscale-0 hover:z-10 hover:scale-110 transition-all duration-300"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement!.innerHTML = '<span class="material-icons text-[16px] text-[#f43f5e]">person</span>';
                                            }}
                                        />
                                        <div className="h-10 w-10 rounded-full ring-2 ring-surface-dark bg-surface-border flex items-center justify-center text-xs text-white font-bold hover:bg-primary transition-colors cursor-pointer">+18</div>
                                    </div>
                                </div>
                                <div className="bg-surface-darker border border-surface-border rounded-xl p-5 space-y-3 relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
                                    <div className="flex justify-between text-sm relative z-10">
                                        <span className="text-gray-400">Drop-in Rate</span>
                                        <span className="text-white font-mono">$25.00</span>
                                    </div>
                                    <div className="flex justify-between text-sm relative z-10">
                                        <span className="text-gray-400">Service Fee</span>
                                        <span className="text-white font-mono">$1.50</span>
                                    </div>
                                    <div className="h-px bg-surface-border my-2 relative z-10"></div>
                                    <div className="flex justify-between text-base font-bold relative z-10">
                                        <span className="text-white">Total</span>
                                        <span className="text-primary-light font-mono text-lg">$26.50</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border-t border-surface-border bg-surface-darker sticky bottom-0 z-20 pb-8">
                                <button className="w-full bg-gradient-to-r from-primary to-primary-light hover:to-primary text-white font-bold py-4 px-4 rounded-xl shadow-[0_0_20px_rgba(127,19,236,0.4)] hover:shadow-[0_0_30px_rgba(127,19,236,0.6)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 btn-physics group">
                                    <span>Confirm Booking</span>
                                    <span className="material-icons text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                                <p className="text-center text-[10px] text-gray-500 mt-4 flex items-center justify-center gap-1">
                                    <span className="material-icons text-[12px]">info</span>
                                    Cancellation available up to 2 hours before class.
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
