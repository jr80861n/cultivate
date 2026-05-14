"use client";
import React from 'react';

const REVIEWS = [
    {
        id: 1,
        name: "Sarah M.",
        date: "2 months ago",
        text: "The studio is truly a second home to my daughter. The environment is so nurturing, positive, and feels like a family. We couldn't be happier!",
        rating: 5,
        avatar: "S"
    },
    {
        id: 2,
        name: "Jessica T.",
        date: "5 months ago",
        text: "Cultivate Dance Company has the most professional instruction. We've seen incredible growth in her technique and confidence in just one year.",
        rating: 5,
        avatar: "J"
    },
    {
        id: 3,
        name: "Amanda L.",
        date: "8 months ago",
        text: "Owner Krista and the staff are absolutely amazing. Highly recommend this beautiful studio to any family looking for quality dance education in Mooresville.",
        rating: 5,
        avatar: "A"
    }
];

export default function ReviewsSection() {
    return (
        <section className="relative py-32 px-6 overflow-hidden bg-[#05020a]">
            {/* Background Glow Elements */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

            <div className="max-w-[1536px] mx-auto relative z-10">
                
                {/* Header Section */}
                <div className="flex flex-col items-center justify-center text-center mb-20 animate-fade-in-up">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-glow">
                        <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="text-primary-light">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        <span className="text-white font-bold text-sm tracking-wide">Verified Google Reviews</span>
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 drop-shadow-xl">
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-purple-400">Family</span> Says
                    </h2>
                    
                    <div className="flex items-center gap-4">
                        <h3 className="text-6xl font-black text-white">5.0</h3>
                        <div className="flex flex-col items-start gap-1">
                            <div className="flex text-yellow-400 text-xl">
                                ★★★★★
                            </div>
                            <p className="text-purple-300 text-sm font-bold uppercase tracking-widest">Based on 22 Reviews</p>
                        </div>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {REVIEWS.map((review, i) => (
                        <div 
                            key={review.id} 
                            className={`group relative p-10 rounded-[2rem] bg-surface-dark/40 border border-primary/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(124,58,237,0.4)] hover:bg-surface-dark/60 hover:border-primary/50 animate-fade-in-up stagger-${(i + 1) * 2}`}
                        >
                            <div className="absolute top-0 right-10 -translate-y-1/2 text-8xl text-primary/10 font-serif group-hover:text-primary/20 transition-colors">&quot;</div>
                            
                            <div className="flex items-center gap-2 text-yellow-400 text-sm mb-6">
                                ★★★★★
                            </div>
                            
                            <p className="text-purple-50 text-lg font-medium leading-relaxed mb-10 min-h-[120px]">
                                &quot;{review.text}&quot;
                            </p>
                            
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-black text-xl shadow-lg border border-white/10 group-hover:scale-110 transition-transform">
                                    {review.avatar}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">{review.name}</h4>
                                    <p className="text-purple-400/60 text-xs font-bold uppercase tracking-wider">{review.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
