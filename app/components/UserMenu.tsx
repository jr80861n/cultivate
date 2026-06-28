"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function UserMenu() {
    const [showNotifications, setShowNotifications] = useState(false);
    const currentDate = new Date();

    return (
        <div className="flex items-center gap-3 pl-4">
            <div className="relative">
                <button 
                    onClick={() => setShowNotifications(!showNotifications)}
                    aria-label="Notifications" 
                    className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors relative text-gray-400 hover:text-white btn-physics"
                >
                    <span className="material-symbols-outlined text-[20px]">notifications</span>
                    <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-primary rounded-full ring-2 ring-surface-dark"></span>
                </button>
                
                {/* Notification Dropdown */}
                {showNotifications && (
                    <div className="absolute right-0 mt-2 w-80 bg-surface-darker border border-surface-border rounded-xl shadow-2xl z-50 overflow-hidden backdrop-blur-xl">
                        <div className="p-4 border-b border-surface-border flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-gray-400 text-[18px]">notifications</span>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary cursor-pointer hover:underline">Mark all read</span>
                        </div>
                        <div className="flex flex-col max-h-96 overflow-y-auto">
                            <div className="p-4 border-b border-surface-border/50 hover:bg-surface-dark cursor-pointer transition-colors relative">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-200">Booking Confirmed</h4>
                                        <p className="text-[11px] text-gray-400 mt-1">You're booked for Adv. Hip Hop with Sarah Jenkins on {currentDate.toLocaleDateString()}.</p>
                                        <span className="text-[9px] text-gray-500 mt-2 inline-block">2 hours ago</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-b border-surface-border/50 hover:bg-surface-dark cursor-pointer transition-colors relative">
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-[16px]">cancel</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-200">Cancelation Confirmed</h4>
                                        <p className="text-[11px] text-gray-400 mt-1">Your reservation for Morning Flow has been successfully canceled.</p>
                                        <span className="text-[9px] text-gray-500 mt-2 inline-block">1 day ago</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-b border-surface-border/50 hover:bg-surface-dark cursor-pointer transition-colors relative">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-[16px]">fiber_new</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-200">New Class Added!</h4>
                                        <p className="text-[11px] text-gray-400 mt-1">Maria K. just added a new Contemporary masterclass next week. Book now!</p>
                                        <span className="text-[9px] text-gray-500 mt-2 inline-block">3 days ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="w-9 h-9 flex items-center justify-center shrink-0">
                <Image
                    width={800}
                    height={600}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZX63nJc4zAdXtqSazpUtffBpJBoGT9RPHZnL6sCAQspylNubUG0qLqtIAl0x87CUvcyhcvg6GimhTINppEcaKd35RY7_y46qb3qqTAkWtBfCgxEd2FOwfPXVBgwjRqZTRRPXnoTMYtiBfAd7-bKZzTVX_cGTwMUubYx4IyNWgbBKUEs9RUELAVigk06PISP9i-tD7PAnqnZk46M95FMPhfeicT2gd0GTK6fRkPtXhGxO2l9klyzSY9hmNiRGuIs2oQtymgk2i9DpN"
                    alt="User Avatar"
                    className="w-full h-full rounded-lg object-cover"
                />
            </div>
        </div>
    );
}
