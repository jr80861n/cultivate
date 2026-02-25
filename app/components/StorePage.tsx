"use client";
import { useState } from "react";
import Link from "next/link";

export default function StorePage() {
    const [activeAccordion, setActiveAccordion] = useState<string | null>("price");
    const [cartCount, setCartCount] = useState(2);

    const toggleAccordion = (id: string) => {
        setActiveAccordion(prev => prev === id ? null : id);
    };

    const handleAddToCart = () => {
        setTimeout(() => {
            setCartCount(prev => prev + 1);
        }, 800);
    };

    return (
        <div className="rich-gradient-bg text-purple-50 min-h-screen flex flex-col font-display antialiased overflow-x-hidden selection:bg-primary selection:text-white">
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-primary/20 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary-dark/30 rounded-full blur-[120px] mix-blend-screen"></div>
                <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-indigo-900/20 rounded-full blur-[100px] mix-blend-overlay"></div>
            </div>

            <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-primary/20 bg-[#0a0512]/80 backdrop-blur-xl px-6 py-4 lg:px-12 transition-all duration-500 shadow-glow-sm">
                <div className="flex items-center gap-12">
                    <Link href="/" className="flex items-center gap-4 text-primary group cursor-pointer">
                        <div className="size-11 flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl text-white shadow-lg shadow-primary/30 group-hover:rotate-12 group-hover:shadow-primary/50 transition-all duration-500 border border-white/10">
                            <span className="material-icons text-2xl font-light">diamond</span>
                        </div>
                        <h2 className="text-white text-2xl font-black leading-tight tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]">Cultivate</h2>
                    </Link>
                    <nav className="hidden lg:flex items-center gap-10">
                        <Link className="text-purple-300/70 hover:text-white text-xs font-black uppercase tracking-[0.2em] transition-colors hover:drop-shadow-[0_0_8px_rgba(167,139,250,0.6)]" href="/programs">Classes</Link>
                        <Link className="text-primary-light text-xs font-black uppercase tracking-[0.2em] relative after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-primary after:shadow-[0_0_8px_currentColor]" href="/store">Store</Link>
                        <Link className="text-purple-300/70 hover:text-white text-xs font-black uppercase tracking-[0.2em] transition-colors hover:drop-shadow-[0_0_8px_rgba(167,139,250,0.6)]" href="#">About</Link>
                    </nav>
                </div>
                <div className="flex flex-1 justify-end gap-6 md:gap-10">
                    <label className="hidden md:flex flex-col min-w-40 !h-11 max-w-72 w-full group">
                        <div className="flex w-full flex-1 items-stretch rounded-full h-full border border-primary/30 bg-surface-dark/50 overflow-hidden focus-within:ring-2 focus-within:ring-primary/60 focus-within:border-primary transition-all shadow-inner shadow-black/40">
                            <div className="text-primary flex items-center justify-center pl-5 pr-2">
                                <span className="material-icons text-[20px] group-focus-within:text-white transition-colors">search</span>
                            </div>
                            <input className="w-full min-w-0 flex-1 border-none bg-transparent text-white placeholder:text-purple-400/50 px-0 text-sm focus:ring-0 outline-none" placeholder="Search the collection..."/>
                        </div>
                    </label>
                    <div className="flex items-center gap-4">
                        <button className="relative flex items-center justify-center rounded-full h-11 w-11 bg-surface-dark/80 border border-primary/30 hover:border-primary hover:bg-primary/20 text-primary-light hover:text-white transition-all group shadow-[0_0_15px_-3px_rgba(124,58,237,0.15)] z-20" id="cart-btn">
                            <span className="material-icons group-hover:scale-110 transition-transform font-light">shopping_bag</span>
                            <span key={cartCount} className="animate-shake absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white font-black ring-4 ring-[#0a0512] shadow-lg shadow-primary/40">
                                {cartCount}
                            </span>
                        </button>
                        <button className="lg:hidden flex items-center justify-center rounded-xl h-11 w-11 border border-primary/20 hover:bg-primary/20 text-white transition-colors">
                            <span className="material-icons">menu</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex flex-col md:flex-row max-w-[1800px] mx-auto w-full relative z-10 pt-8">
                <aside className="w-full md:w-72 lg:w-80 shrink-0 border-r border-primary/10 p-6 lg:p-10 hidden md:block h-[calc(100vh-120px)] sticky top-[100px] glass-panel rounded-r-3xl mr-8">
                    <div className="flex items-center justify-between mb-12">
                        <h3 className="text-xs font-black text-primary-light uppercase tracking-[0.3em] drop-shadow-sm">Marketplace</h3>
                        <button className="text-[10px] font-black text-purple-400 hover:text-white transition-colors uppercase tracking-widest border-b border-purple-400/20 hover:border-white pb-0.5" onClick={() => setActiveAccordion(null)}>Reset Filters</button>
                    </div>
                    
                    <div className="space-y-10">
                        <div className={`accordion-wrapper group/acc ${activeAccordion === 'categories' ? 'active' : ''}`}>
                            <h4 className="text-sm font-bold text-white mb-4 flex items-center justify-between cursor-pointer hover:text-primary-light transition-colors" onClick={() => toggleAccordion('categories')}>
                                <span className="flex items-center gap-2"><span className="w-1 h-4 bg-primary rounded-full"></span>Categories</span>
                                <span className="material-icons text-primary accordion-icon">chevron_right</span>
                            </h4>
                            <div className="accordion-content">
                                <div className="space-y-3 pb-4">
                                    <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-primary/20 border border-primary/40 text-white text-xs font-black uppercase tracking-wider shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                                        All Products <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_currentColor]"></span>
                                    </button>
                                    <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary/10 text-purple-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all border border-transparent hover:border-primary/20 group">
                                        Apparel <span className="material-icons text-[14px] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary">chevron_right</span>
                                    </button>
                                    <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary/10 text-purple-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all border border-transparent hover:border-primary/20 group">
                                        Class Packs <span className="material-icons text-[14px] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary">chevron_right</span>
                                    </button>
                                    <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary/10 text-purple-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all border border-transparent hover:border-primary/20 group">
                                        Accessories <span className="material-icons text-[14px] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={`accordion-wrapper group/acc ${activeAccordion === 'size' ? 'active' : ''}`}>
                            <h4 className="text-sm font-bold text-white mb-4 flex items-center justify-between cursor-pointer hover:text-primary-light transition-colors" onClick={() => toggleAccordion('size')}>
                                <span className="flex items-center gap-2"><span className="w-1 h-4 bg-primary/60 rounded-full"></span>Size Preference</span>
                                <span className="material-icons text-primary accordion-icon">chevron_right</span>
                            </h4>
                            <div className="accordion-content">
                                <div className="grid grid-cols-3 gap-2 pb-4">
                                    <button className="h-10 rounded-lg border border-primary/20 hover:border-primary/60 bg-surface-dark/40 text-purple-300 text-[10px] font-black hover:text-white transition-all hover:shadow-[0_0_10px_rgba(124,58,237,0.2)]">XS</button>
                                    <button className="h-10 rounded-lg bg-primary text-white text-[10px] font-black shadow-lg shadow-primary/30 border border-primary ring-2 ring-primary/20">S</button>
                                    <button className="h-10 rounded-lg border border-primary/20 hover:border-primary/60 bg-surface-dark/40 text-purple-300 text-[10px] font-black hover:text-white transition-all hover:shadow-[0_0_10px_rgba(124,58,237,0.2)]">M</button>
                                    <button className="h-10 rounded-lg border border-primary/20 hover:border-primary/60 bg-surface-dark/40 text-purple-300 text-[10px] font-black hover:text-white transition-all hover:shadow-[0_0_10px_rgba(124,58,237,0.2)]">L</button>
                                    <button className="h-10 rounded-lg border border-primary/20 hover:border-primary/60 bg-surface-dark/40 text-purple-300 text-[10px] font-black hover:text-white transition-all hover:shadow-[0_0_10px_rgba(124,58,237,0.2)]">XL</button>
                                </div>
                            </div>
                        </div>

                        <div className={`accordion-wrapper group/acc ${activeAccordion === 'price' ? 'active' : ''}`}>
                            <h4 className="text-sm font-bold text-white mb-4 flex items-center justify-between cursor-pointer hover:text-primary-light transition-colors" onClick={() => toggleAccordion('price')}>
                                <span className="flex items-center gap-2"><span className="w-1 h-4 bg-primary/40 rounded-full"></span>Price Point</span>
                                <span className="material-icons text-primary accordion-icon rotate-90">chevron_right</span>
                            </h4>
                            <div className="accordion-content">
                                <div className="px-2 pb-4">
                                    <div className="relative h-1 bg-surface-dark rounded-full mb-6 ring-1 ring-white/5">
                                        <div className="absolute left-0 right-[25%] top-0 bottom-0 bg-gradient-to-r from-primary-dark to-primary rounded-full shadow-[0_0_10px_rgba(124,58,237,0.5)]"></div>
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 bg-white border-2 border-primary rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
                                        <div className="absolute right-[25%] top-1/2 -translate-y-1/2 h-4 w-4 bg-white border-2 border-primary rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
                                    </div>
                                    <div className="flex items-center justify-between text-[10px] font-black text-purple-300 uppercase tracking-widest">
                                        <span>Min: $0</span>
                                        <span>Max: $150</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="flex-1 p-6 md:p-8 lg:p-12 xl:pr-16">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 animate-elastic-pop">
                        <div className="relative pl-6 lg:pl-10">
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-transparent rounded-full hidden lg:block shadow-[0_0_15px_rgba(124,58,237,0.6)]"></div>
                            <h1 className="text-5xl lg:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-4 uppercase drop-shadow-2xl">
                                Curated<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-white italic pr-4">Essentials</span>
                            </h1>
                            <p className="text-purple-300 font-medium text-lg tracking-tight max-w-xl">Precision engineered for the studio &amp; stage. Immerse yourself in the aesthetic.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-4 px-8 h-14 rounded-2xl bg-surface-dark/50 border border-primary/30 text-white text-xs font-black uppercase tracking-widest transition-all hover:border-primary hover:bg-primary/10 hover:shadow-glow-sm group">
                                <span>Sort By: Popularity</span>
                                <span className="material-icons text-primary group-hover:text-white transition-colors text-[20px]">expand_more</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-12 lg:gap-x-10 lg:gap-y-16">
                        
                        <div className="group flex flex-col animate-elastic-pop stagger-1 magnetic-card">
                            <div className="magnetic-inner relative aspect-[4/5] overflow-hidden rounded-[2rem] store-glass-card mb-6 shadow-2xl">
                                <img alt="Cultivate Cropped Tee" className="product-image-zoom h-full w-full object-cover object-center transform transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGEmWIJwuazRGC5WIOizgwjMoYID9AMbowt6QrJ2auOj4htUrV838Cm3WtBCqmomzZtfPbg5ICwgALLvSIdyw-Y3qdIv4Xaex-hBRlksKt96cKzHfzMgwxSpPjJUoJ7OQUtKHz1rduKTUPmx8mAigSEgq6F3C_LMKNHm4UmcrL0A_EyA5lq09SFymJX_IEnBsnlry_Vk-RfkYLBnJIjX67k_XteNKqnzRmJpKagbLUBpKu7ZS_gJ6VKZq9vWfjdMGorrZV707DRvQh"/>
                                <div className="absolute top-5 left-5 z-10 translate-z-10">
                                    <span className="px-4 py-1.5 bg-primary/90 backdrop-blur-md text-white border border-white/20 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/40">New Drop</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2e1065] via-primary/10 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
                                <button className="quick-view-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center opacity-0 z-20 hover:bg-white hover:text-primary transition-colors text-white shadow-xl">
                                    <span className="material-icons text-2xl">visibility</span>
                                </button>
                                <button onClick={handleAddToCart} className="btn-loading-bar flying-item-trigger absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] py-4 bg-white text-primary-dark rounded-xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95">
                                    <span className="material-icons text-[18px]">add_shopping_cart</span>
                                    Secure Item
                                    <span className="fly-animation-target hidden absolute left-1/2 top-1/2 w-8 h-8 bg-primary rounded-full z-50 pointer-events-none"></span>
                                </button>
                            </div>
                            <div className="px-2">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-black text-white tracking-tight leading-tight group-hover:text-primary-light transition-colors">Cropped Motion Tee</h3>
                                    <span className="text-lg font-black text-primary-light text-shadow-glow">$35</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Performance Apparel</span>
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_5px_currentColor]"></div>
                                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">In Stock</span>
                                </div>
                            </div>
                        </div>

                        <div className="group flex flex-col animate-elastic-pop stagger-2 magnetic-card">
                            <div className="magnetic-inner relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-dark via-purple-900 to-black mb-6 shadow-2xl border border-primary/30">
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10 product-image-zoom">
                                    <div className="size-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md shadow-[0_0_30px_rgba(124,58,237,0.3)] group-hover:scale-110 transition-transform duration-500">
                                        <span className="material-icons text-5xl text-accent-purple drop-shadow-[0_0_10px_currentColor]">auto_awesome</span>
                                    </div>
                                    <h4 className="text-4xl font-black text-white mb-2 leading-[0.9] tracking-tighter uppercase drop-shadow-md">Unlimited<br/>Pass</h4>
                                    <p className="text-accent-purple/80 text-[10px] font-black uppercase tracking-[0.3em] mt-2 border border-accent-purple/30 px-3 py-1 rounded-full">Full Studio Access</p>
                                </div>
                                <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.8),transparent)] mix-blend-overlay"></div>
                                <button className="quick-view-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center opacity-0 z-20 hover:bg-white hover:text-primary transition-colors text-white shadow-xl">
                                    <span className="material-icons text-2xl">visibility</span>
                                </button>
                                <button onClick={handleAddToCart} className="btn-loading-bar flying-item-trigger absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] py-4 bg-primary text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-glow border border-white/20 hover:bg-primary-light active:scale-95">
                                    Select Membership
                                    <span className="fly-animation-target hidden absolute left-1/2 top-1/2 w-8 h-8 bg-primary-light rounded-full z-50 pointer-events-none"></span>
                                </button>
                            </div>
                            <div className="px-2">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-black text-white tracking-tight leading-tight group-hover:text-primary-light transition-colors">Monthly Unlimited</h3>
                                    <span className="text-lg font-black text-primary-light">$180</span>
                                </div>
                                <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Membership Plans</p>
                            </div>
                        </div>

                        <div className="group flex flex-col animate-elastic-pop stagger-3 magnetic-card">
                            <div className="magnetic-inner relative aspect-[4/5] overflow-hidden rounded-[2rem] store-glass-card mb-6 shadow-2xl">
                                <img alt="Contemporary Jazz Workshop" className="product-image-zoom h-full w-full object-cover object-center brightness-90 group-hover:brightness-100 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd9yNaWgv6t691EHuagJsLnQ7q7aVs1ftYF66qRkSJfSljhWskg4TvJk6ev5e0kzZBz702VANWzuYs4VVC72tA6lmzw-OfdoROwBE2wxuC4boblL74HL-sgzUtg52MXcMf-3yOzV46-6LooOZMTza1Y6kUpCyOQaKkqkvD7VoCx6YpaStdmvIyVBauslYvMW-xXgxn-goOQcB7lMyDddgrf6CRFFfTNFv94y9dZzjhWEY1euRtvm4bFIzKMzUj1Mhbdm-rsoqTBn_o"/>
                                <div className="absolute top-5 left-5 z-10 translate-z-10">
                                    <span className="px-4 py-1.5 bg-white text-primary-dark rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-xl border border-primary/20">Limited Entry</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2e1065] via-primary/10 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
                                <button className="quick-view-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center opacity-0 z-20 hover:bg-white hover:text-primary transition-colors text-white shadow-xl">
                                    <span className="material-icons text-2xl">visibility</span>
                                </button>
                                <button onClick={handleAddToCart} className="btn-loading-bar flying-item-trigger absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] py-4 bg-primary-dark text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-glow border border-white/10 hover:bg-primary hover:border-white/30 active:scale-95">
                                    Reserve Spot
                                    <span className="fly-animation-target hidden absolute left-1/2 top-1/2 w-8 h-8 bg-white rounded-full z-50 pointer-events-none"></span>
                                </button>
                            </div>
                            <div className="px-2">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-black text-white tracking-tight leading-tight group-hover:text-primary-light transition-colors">Contemporary Lab</h3>
                                    <span className="text-lg font-black text-primary-light">$45</span>
                                </div>
                                <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Masterclass • Sept 24</p>
                            </div>
                        </div>

                        <div className="group flex flex-col animate-elastic-pop stagger-4 magnetic-card">
                            <div className="magnetic-inner relative aspect-[4/5] overflow-hidden rounded-[2rem] store-glass-card mb-6 shadow-2xl">
                                <img alt="Studio Matte Bottle" className="product-image-zoom h-full w-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaAiTcC5ITlvaBUSr14P2dkGEnsS18WUpGqzaTQ1iPS4ttalLRebbaKtgqNE2mTX7KOE81LxB3witLWjFIwGPmvgsYOvMHvLR3BzvU_o3K2PkhbcItfW8-9QOXgtCUTMg1-imvcumt1vpf0UkyItHJpCJbv50JKlJ59ctcUKH9hCb56WzvzIQxZ4XOPp1tFzUhoVLohsG9uR6-B9G2UkFXugdnCnP3Qk9SIoEtpchoIaLdzIb64Ws6QcuO5a3ibHrHt_UKV3Jo4Ef8"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2e1065] via-primary/10 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
                                <button className="quick-view-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center opacity-0 z-20 hover:bg-white hover:text-primary transition-colors text-white shadow-xl">
                                    <span className="material-icons text-2xl">visibility</span>
                                </button>
                                <button onClick={handleAddToCart} className="btn-loading-bar flying-item-trigger absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] py-4 bg-white text-primary-dark rounded-xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95">
                                    Add to Bag
                                    <span className="fly-animation-target hidden absolute left-1/2 top-1/2 w-8 h-8 bg-primary rounded-full z-50 pointer-events-none"></span>
                                </button>
                            </div>
                            <div className="px-2">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-black text-white tracking-tight leading-tight group-hover:text-primary-light transition-colors">Matte Hydration Cell</h3>
                                    <span className="text-lg font-black text-primary-light">$24</span>
                                </div>
                                <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Studio Accessories</p>
                            </div>
                        </div>

                        <div className="group flex flex-col animate-elastic-pop stagger-5 magnetic-card">
                            <div className="magnetic-inner relative aspect-[4/5] overflow-hidden rounded-[2rem] store-glass-card mb-6 border border-primary/10 hover:border-primary/40 transition-colors">
                                <img alt="Movement Joggers" className="product-image-zoom h-full w-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAif6zcgqJvksz9fC8wpAyKmUdpPLPkYjKit00fTdOnBB9mty4NUgJI7MyHCeK7RQ_iMhMSy1jptk4eO70DTdda1-PG4u6Km1fjRhEgq2-jbXd5etm4AmTmRjHT4K-AWSFQzKMKM6pcVVA8JXVrvgmMxbpzLQQMRN9MceKsMZ3Ud4sZbY_lU4N8D8Hm1BcOIv5WPJOunGxHEXyV0hZKPPBIJSLeK9_NcQ3A5lP-cZYt8rGY8s-c2IGhanNi-xMh1ExiN9s-shFopUB1"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2e1065] via-primary/10 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
                                <button className="quick-view-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center opacity-0 z-20 hover:bg-white hover:text-primary transition-colors text-white shadow-xl">
                                    <span className="material-icons text-2xl">visibility</span>
                                </button>
                                <button onClick={handleAddToCart} className="btn-loading-bar flying-item-trigger absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] py-4 bg-primary text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-glow hover:bg-primary-light active:scale-95">
                                    Secure Item
                                    <span className="fly-animation-target hidden absolute left-1/2 top-1/2 w-8 h-8 bg-primary-light rounded-full z-50 pointer-events-none"></span>
                                </button>
                            </div>
                            <div className="px-2">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-black text-white tracking-tight leading-tight group-hover:text-primary-light transition-colors">Flowstate Joggers</h3>
                                    <span className="text-lg font-black text-primary-light">$68</span>
                                </div>
                                <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Apparel</p>
                            </div>
                        </div>

                        <div className="group flex flex-col animate-elastic-pop stagger-6 magnetic-card">
                            <div className="magnetic-inner relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface-dark mb-6 border border-primary/20 group-hover:border-primary transition-colors shadow-2xl">
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10 product-image-zoom">
                                    <span className="material-icons text-6xl text-primary mb-6 font-thin drop-shadow-[0_0_15px_rgba(124,58,237,0.8)] animate-pulse">confirmation_number</span>
                                    <h4 className="text-4xl font-black text-white leading-none uppercase tracking-tighter drop-shadow-lg">Single<br/>Session</h4>
                                </div>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.4),transparent)] mix-blend-screen"></div>
                                <button className="quick-view-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center opacity-0 z-20 hover:bg-white hover:text-primary transition-colors text-white shadow-xl">
                                    <span className="material-icons text-2xl">visibility</span>
                                </button>
                                <button onClick={handleAddToCart} className="btn-loading-bar flying-item-trigger absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] py-4 bg-primary-dark text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-glow border border-primary/40 hover:bg-primary active:scale-95">
                                    Purchase Session
                                    <span className="fly-animation-target hidden absolute left-1/2 top-1/2 w-8 h-8 bg-white rounded-full z-50 pointer-events-none"></span>
                                </button>
                            </div>
                            <div className="px-2">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-black text-white tracking-tight leading-tight group-hover:text-primary-light transition-colors">Drop-In Credit</h3>
                                    <span className="text-lg font-black text-primary-light">$28</span>
                                </div>
                                <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Class Packs</p>
                            </div>
                        </div>

                        <div className="group flex flex-col animate-elastic-pop stagger-7 magnetic-card">
                            <div className="magnetic-inner relative aspect-[4/5] overflow-hidden rounded-[2rem] store-glass-card mb-6 shadow-2xl">
                                <img alt="Core Logo Tee" className="product-image-zoom h-full w-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8akC0d94uenOuGdujI7uS8fqofVsC7gnpSlWFoPKLJFMJIaohj5PePsF2-z_WnH9Id56zvIUW-37e_6NElbX3xQyGswma5spWClPfi0VDBSt8QCMQaZ0mPYvDas73nvx5FPOuJSl1qJBPKbDg4xMZT4oNmAKs_cSGGYEFbAJQO7k3P3FGTLhJ2T6Hg1g3JNuhukRUBLOROm6awUaQL6D0G6Ab5FE4Bd4044ARVHFBNlEYzkhlxBQJV9DwJrEFprkA9ayN18rjG7o0"/>
                                <div className="absolute top-5 left-5 z-10 translate-z-10">
                                    <span className="px-4 py-1.5 bg-rose-600/90 text-white rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-xl shadow-rose-900/40 backdrop-blur-sm border border-rose-400/30">Archive Sale</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2e1065] via-primary/10 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
                                <button className="quick-view-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center opacity-0 z-20 hover:bg-white hover:text-primary transition-colors text-white shadow-xl">
                                    <span className="material-icons text-2xl">visibility</span>
                                </button>
                                <button onClick={handleAddToCart} className="btn-loading-bar flying-item-trigger absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] py-4 bg-white text-primary-dark rounded-xl font-black text-[10px] uppercase tracking-[0.2em] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95">
                                    Add to Bag
                                    <span className="fly-animation-target hidden absolute left-1/2 top-1/2 w-8 h-8 bg-rose-500 rounded-full z-50 pointer-events-none"></span>
                                </button>
                            </div>
                            <div className="px-2">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-black text-white tracking-tight leading-tight group-hover:text-primary-light transition-colors">Legacy Signature Tee</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-black text-rose-400 drop-shadow-sm">$20</span>
                                        <span className="text-xs text-purple-400/60 line-through font-bold decoration-2">$30</span>
                                    </div>
                                </div>
                                <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Apparel</p>
                            </div>
                        </div>

                        <div className="group flex flex-col animate-elastic-pop stagger-8 magnetic-card">
                            <div className="magnetic-inner relative aspect-[4/5] overflow-hidden rounded-[2rem] store-glass-card mb-6 shadow-2xl">
                                <img alt="Pro Grip Socks" className="product-image-zoom h-full w-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDADhjEo0tu9heeyQeh7KBIlX1Ln4njkkklGlYKqotcEUvOi5ERPEnI35HYqjDsVwfd9kx1boxtJDi-3lB_9WyeXp5OMy--pciRut3IWEVWudvbt64JlEPxIcmoDB_NJl6hrEMcvHQlv30utqoIfddHthk-Uf88khoT0mxFZk1NQPVwqtq8uCjfjG7tix-3DkYW4zRjLwsacPq2rogqJyZdrPCl9eoMzvHQTxhcIqmDaVIp1iCWV1EUebfqys-DYPsJ_GL3QR26p6bU"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2e1065] via-primary/10 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
                                <button className="quick-view-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center opacity-0 z-20 hover:bg-white hover:text-primary transition-colors text-white shadow-xl">
                                    <span className="material-icons text-2xl">visibility</span>
                                </button>
                                <button onClick={handleAddToCart} className="btn-loading-bar flying-item-trigger absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] py-4 bg-primary text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-glow hover:bg-primary-light active:scale-95">
                                    Add to Bag
                                    <span className="fly-animation-target hidden absolute left-1/2 top-1/2 w-8 h-8 bg-primary-light rounded-full z-50 pointer-events-none"></span>
                                </button>
                            </div>
                            <div className="px-2">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-black text-white tracking-tight leading-tight group-hover:text-primary-light transition-colors">Pro Studio Grips</h3>
                                    <span className="text-lg font-black text-primary-light">$18</span>
                                </div>
                                <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Accessories</p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-32 mb-12 flex flex-col items-center justify-center gap-10 animate-elastic-pop stagger-4">
                        <div className="flex items-center gap-6 w-full max-w-xl">
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_8px_rgba(124,58,237,0.8)]"></div>
                            <p className="text-[10px] font-black text-purple-300 tracking-[0.4em] uppercase whitespace-nowrap drop-shadow-sm">End of Archive</p>
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_8px_rgba(124,58,237,0.8)]"></div>
                        </div>
                        <button className="group relative px-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white font-black text-[11px] tracking-[0.3em] uppercase transition-all hover:scale-105 active:scale-95 shadow-glow overflow-hidden ring-1 ring-white/20">
                            <span className="relative z-10 flex items-center gap-4">
                                Explore More
                                <span className="material-icons text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </span>
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 backdrop-blur-sm"></div>
                        </button>
                    </div>
                </div>
            </main>

            <footer className="border-t border-primary/20 bg-[#0a0512]/90 backdrop-blur-xl py-20 px-10 z-10 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                <div className="max-w-[1536px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 text-primary group">
                            <div className="p-2 rounded-xl border border-primary/30 group-hover:border-primary transition-colors bg-surface-dark/50">
                                <span className="material-icons text-4xl group-hover:scale-110 transition-transform duration-500">diamond</span>
                            </div>
                            <h2 className="text-2xl font-black uppercase tracking-tighter text-white leading-none drop-shadow-lg">Cultivate</h2>
                        </div>
                        <p className="max-w-xs text-purple-300/70 font-medium leading-relaxed text-sm">
                            The intersection of technical precision and artistic expression. Outfitting the next generation of modern movement.
                        </p>
                    </div>
                    
                    <div className="space-y-6">
                        <h5 className="text-[11px] font-black uppercase tracking-[0.4em] text-primary-light">Dimensions</h5>
                        <ul className="space-y-3 text-sm font-bold text-purple-100">
                            <li><Link className="hover:text-primary-light transition-colors flex items-center gap-2 group" href="#"><span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300 shadow-[0_0_5px_currentColor]"></span>Studio Schedule</Link></li>
                            <li><Link className="hover:text-primary-light transition-colors flex items-center gap-2 group" href="#"><span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300 shadow-[0_0_5px_currentColor]"></span>New Arrivals</Link></li>
                            <li><Link className="hover:text-primary-light transition-colors flex items-center gap-2 group" href="#"><span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300 shadow-[0_0_5px_currentColor]"></span>Workshops</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h5 className="text-[11px] font-black uppercase tracking-[0.4em] text-primary-light">Service</h5>
                        <ul className="space-y-3 text-sm font-bold text-purple-100">
                            <li><Link className="hover:text-primary-light transition-colors flex items-center gap-2 group" href="#"><span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300 shadow-[0_0_5px_currentColor]"></span>Logistics</Link></li>
                            <li><Link className="hover:text-primary-light transition-colors flex items-center gap-2 group" href="#"><span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300 shadow-[0_0_5px_currentColor]"></span>Terms</Link></li>
                            <li><Link className="hover:text-primary-light transition-colors flex items-center gap-2 group" href="#"><span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300 shadow-[0_0_5px_currentColor]"></span>Contact</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h5 className="text-[11px] font-black uppercase tracking-[0.4em] text-primary-light">Sync</h5>
                        <div className="relative group">
                            <input className="bg-surface-dark border border-primary/20 rounded-xl text-xs font-bold px-6 py-4 w-full flex focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-purple-500/50 text-white shadow-inner outline-none" placeholder="Identity@Email.com"/>
                            <button className="absolute right-2 top-2 bottom-2 aspect-square bg-primary text-white rounded-lg hover:bg-primary-light transition-colors flex items-center justify-center shadow-lg shadow-primary/30">
                                <span className="material-icons text-[20px]">arrow_forward</span>
                            </button>
                        </div>
                        <div className="flex gap-6 text-purple-400">
                            <Link className="hover:text-white hover:scale-110 transition-all" href="#"><span className="material-icons font-light">public</span></Link>
                            <Link className="hover:text-white hover:scale-110 transition-all" href="#"><span className="material-icons font-light">groups</span></Link>
                            <Link className="hover:text-white hover:scale-110 transition-all" href="#"><span className="material-icons font-light">language</span></Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1536px] mx-auto pt-16 mt-16 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-purple-500">
                    <div>Cultivate Motion Studio © MMXXIV</div>
                    <div className="flex gap-10">
                        <Link className="hover:text-primary-light transition-colors" href="#">Privacy Protocol</Link>
                        <Link className="hover:text-primary-light transition-colors" href="#">Terms of Access</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
