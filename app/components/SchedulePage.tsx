"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SchedulePage() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isInstructorModalOpen, setIsInstructorModalOpen] = useState(false);
    const [activeView, setActiveView] = useState<"month" | "week" | "day">("day");
    const [activeFilters, setActiveFilters] = useState<string[]>(['Hip Hop']);
    const [animateClass, setAnimateClass] = useState('translate-x-0 opacity-100');
    const [showNotifications, setShowNotifications] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const monthScrollRef = useRef<HTMLDivElement>(null);

    const monthsList = useMemo(() => {
        const list = [];
        const baseDate = new Date();
        for (let i = -12; i <= 12; i++) {
            list.push(new Date(baseDate.getFullYear(), baseDate.getMonth() + i, 1));
        }
        return list;
    }, []);

    useEffect(() => {
        if (activeView === 'month' && monthScrollRef.current) {
            // center month is at index 12
            monthScrollRef.current.scrollLeft = monthScrollRef.current.clientWidth * 12;
        }
    }, [activeView]);

    const handleNavigation = (direction: 'next' | 'prev') => {
        // Animate out
        setAnimateClass(direction === 'next' ? '-translate-x-8 opacity-0 transition-all duration-200' : 'translate-x-8 opacity-0 transition-all duration-200');
        setTimeout(() => {
            // Change date
            setCurrentDate(prev => {
                const next = new Date(prev);
                if (activeView === 'month' || activeView === 'week') {
                    next.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
                } else if (activeView === 'day') {
                    next.setDate(prev.getDate() + (direction === 'next' ? 1 : -1));
                }
                return next;
            });
            // Snap to opposite side with no transition
            setAnimateClass('transition-none opacity-0 ' + (direction === 'next' ? 'translate-x-8' : '-translate-x-8'));
            setTimeout(() => {
                // Animate in to center
                setAnimateClass('translate-x-0 opacity-100 transition-all duration-300 ease-out');
            }, 50);
        }, 200);
    };

    const toggleFilter = (filter: string) => {
        setActiveFilters(prev => 
            prev.includes(filter) 
                ? prev.filter(f => f !== filter) 
                : [...prev, filter]
        );
    };

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
                    <div className="flex items-center gap-3 pl-4">
                        <div className="relative">
                            <button 
                                onClick={() => setShowNotifications(!showNotifications)}
                                aria-label="Notifications" 
                                className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors relative text-gray-400 hover:text-white btn-physics"
                            >
                                <span className="material-icons-outlined text-[20px]">notifications</span>
                                <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-primary rounded-full ring-2 ring-surface-dark"></span>
                            </button>
                            
                            {/* Notification Dropdown */}
                            {showNotifications && (
                                <div className="absolute right-0 mt-2 w-80 bg-surface-darker border border-surface-border rounded-xl shadow-2xl z-50 overflow-hidden backdrop-blur-xl">
                                    <div className="p-4 border-b border-surface-border flex justify-between items-center">
                                        <h3 className="text-sm font-bold text-white">Notifications</h3>
                                        <span className="text-xs text-primary cursor-pointer hover:underline">Mark all read</span>
                                    </div>
                                    <div className="flex flex-col max-h-96 overflow-y-auto">
                                        <div className="p-4 border-b border-surface-border/50 hover:bg-surface-dark cursor-pointer transition-colors relative">
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                                            <div className="flex gap-3">
                                                <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                                                    <span className="material-icons text-[16px]">check_circle</span>
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
                                                    <span className="material-icons text-[16px]">cancel</span>
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
                                                    <span className="material-icons text-[16px]">fiber_new</span>
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
                <aside className={`bg-surface-darker border-r border-surface-border flex-col hidden lg:flex shrink-0 z-20 transition-all duration-300 ${isSidebarCollapsed ? 'w-16 items-center' : 'w-72'}`}>
                    {isSidebarCollapsed ? (
                        <div className="p-4 flex flex-col items-center pt-6 gap-6 w-full">
                            <button onClick={() => setIsSidebarCollapsed(false)} className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-surface-border text-gray-400" title="Expand Filters">
                                <span className="material-icons text-[20px]">filter_list</span>
                            </button>
                            <div style={{ writingMode: 'vertical-rl' }} className="text-xs font-bold text-gray-500 uppercase tracking-wider rotate-180 mt-4">
                                Smart Filters
                            </div>
                        </div>
                    ) : (
                    <>
                        <div className="p-4 flex items-center justify-between border-b border-surface-border shrink-0">
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Smart Filters</h3>
                            <div className="flex gap-2">
                                <span className="text-[10px] text-primary cursor-pointer hover:underline pt-0.5">Reset</span>
                                <button onClick={() => setIsSidebarCollapsed(true)} className="h-6 w-6 flex items-center justify-center rounded-lg hover:bg-surface-border text-gray-400 transition-colors">
                                    <span className="material-icons text-[18px]">chevron_left</span>
                                </button>
                            </div>
                        </div>
                        <div className="p-6 flex-1 overflow-y-auto custom-scrollbar pt-4">
                            <div className="space-y-5">
                            <div>
                                <label className="text-xs text-gray-400 mb-2 block font-medium">Style</label>
                                <div className="flex flex-wrap gap-2">
                                    {['Hip Hop', 'Contemporary', 'Jazz', 'Ballet'].map(filter => (
                                        <button 
                                            key={filter}
                                            onClick={() => toggleFilter(filter)}
                                            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${activeFilters.includes(filter) ? 'bg-primary/20 text-primary-light border border-primary/30 hover:bg-primary/30' : 'bg-surface-dark text-gray-400 border border-surface-border hover:text-gray-200 hover:border-gray-600'}`}
                                        >
                                            {filter}
                                        </button>
                                    ))}
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
                </>
                )}
            </aside>

                <div className="flex-1 flex flex-col min-w-0 bg-background-dark relative">
                    <div className="h-14 border-b border-surface-border flex items-center justify-between px-6 shrink-0 bg-surface-dark/80 backdrop-blur-md z-10 sticky top-0">
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <h1 className="text-lg font-bold text-white leading-none">
                                        {activeView === 'month' 
                                            ? currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) 
                                            : activeView === 'day' 
                                                ? currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })
                                                : `${currentDate.toLocaleDateString('en-US', { month: 'short' })} Week`}
                                    </h1>
                                </div>
                                <span className="text-[10px] text-gray-500 font-mono mt-0.5 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
                                    Real-time Sync Active
                                </span>
                            </div>
                            <div className="h-6 w-px bg-surface-border"></div>
                            <div className="flex bg-surface-darker p-1 rounded-lg border border-surface-border">
                                <button onClick={() => setActiveView("month")} className={`px-3 py-1 text-xs font-bold rounded transition-all ${activeView === "month" ? "bg-primary text-white shadow-sm" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>Month</button>
                                <button onClick={() => setActiveView("week")} className={`px-3 py-1 text-xs font-bold rounded transition-all ${activeView === "week" ? "bg-primary text-white shadow-sm" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>Week</button>
                                <button onClick={() => setActiveView("day")} className={`px-3 py-1 text-xs font-bold rounded transition-all ${activeView === "day" ? "bg-primary text-white shadow-sm" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>Day</button>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3 hover:space-x-1 transition-all duration-300">
                                <img alt="Instructor" className="w-8 h-8 rounded-full border-2 border-surface-dark object-cover ring-2 ring-transparent hover:ring-primary transition-all cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfDHLiuu0Tigoxy8V0KyDHa8M0zdFlLTYjX2WdE8D6u8tX_UhgjmJOaxesjtfHnDhjN__fTTbY2BxetUyJ14wprD3TwgJ2IGHbwdM6_m_5YH5MHVt5B5DX43Izsx1YdnO81VKTu4Cj1w5ECCe1kGh70IvAs2tHPYlt4Pd6qr8c00e0NYuz-wpPqworBwPKKejkaqW6ViW1ycIudnF8Qs83TrkEPBL2bMEHsi_gi_ZG3yGSiry52hTTW2DH1xJ4tl-sD1pmue08NWci" title="Active Instructors"/>
                                <img alt="Instructor" className="w-8 h-8 rounded-full border-2 border-surface-dark object-cover ring-2 ring-transparent hover:ring-primary transition-all cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeanCY27GHbnIBPJHighsKJ3MuNSP39tEmAwJJCIK0ty2zSkhyGFh_aNyxdWauvpyq6QDyeO9tBaHlLletNYGUDHVgsHmy_cuFLE0cTSitibOhKf8c3qeJOJ3PHpgxYsT4Q8BgNSwS5himhDzNv-CCXdspeE-rVPz41VDPhcnn2fNqLqRJb9ULkWJ7dg0RiP8ri6N2NZgX3IhCSKEEm9rff1pbux3Zba-bzIKzSGwy7CWwuuGIVIR_RUux-np_pCffc-nWyRfKYLpC"/>
                                <img alt="Instructor" className="w-8 h-8 rounded-full border-2 border-surface-dark object-cover ring-2 ring-transparent hover:ring-primary transition-all cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3XLI-QFzmu4oeDgWFzFe7SJ7CvHzJPjMIw6WioPaMhK1v1xCcFoS4ZJlnrjsAPLnb5TMbWlbuuiuVZJgMSAsXyKeiG2YoqRjPlHrGnkIW7_7w90M6mOQuIDqQyuF6ADaau8DBwALbt5qH9WWvDXxK8drLDnnygqnOumsVDKAEVlYq7My4mr8EqMGdB2YN636qeHE77_m0KBbnXRa3buk-Y2RtsWb-rFKroX1wiGdyYAeak1JJPgP8M4Pcok357MqLkxe9VLLyfboK"/>
                                <div className="w-8 h-8 rounded-full border-2 border-surface-dark bg-surface-border flex items-center justify-center text-xs font-bold text-gray-400">+5</div>
                            </div>

                        </div>
                    </div>

                    <div className={`flex-1 flex flex-col relative bg-surface-darker/50 ${activeView === 'day' ? 'overflow-x-auto overflow-y-auto custom-scrollbar' : 'overflow-hidden p-6'}`}>
                        
                        {activeView === "month" || activeView === "week" ? (() => {
                            const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
                            const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
                            const prevMonthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
                            
                            const daysForMonth = [];
                            // pad prev month
                            for (let i = firstDayOfMonth - 1; i >= 0; i--) {
                                daysForMonth.push({ type: 'prev', day: prevMonthDays - i });
                            }
                            // curr month
                            for (let i = 1; i <= daysInMonth; i++) {
                                daysForMonth.push({ type: 'curr', day: i });
                            }
                            // pad next month to complete weeks
                            const remaining = (daysForMonth.length % 7 === 0) ? 0 : 7 - (daysForMonth.length % 7);
                            for (let i = 1; i <= remaining; i++) {
                                daysForMonth.push({ type: 'next', day: i });
                            }

                            // chunk into weeks
                            const weeks = [];
                            for (let i = 0; i < daysForMonth.length; i += 7) {
                                weeks.push(daysForMonth.slice(i, i + 7));
                            }

                            const renderDaySlot = (slot: any, isTodayOverride: boolean = false, monthDate?: Date) => {
                                if (slot.type === 'prev' || slot.type === 'next') {
                                    return (
                                        <div key={`${slot.type}-${slot.day}-${Math.random()}`} className="bg-surface-darker p-2 opacity-50 relative pointer-events-none">
                                            <span className="text-gray-600 font-bold">{slot.day}</span>
                                        </div>
                                    );
                                }

                                const day = slot.day;
                                const isToday = isTodayOverride; // Keep dummy highlights
                                const hasClasses = [2, 4, 7, 10, 14, 15, 18, 22, 25, 29].includes(day);
                                
                                return (
                                    <div key={`curr-${day}-${Math.random()}`} className={`bg-surface-darker p-2 relative hover:bg-surface-dark transition-colors cursor-pointer group flex flex-col ${isToday ? 'ring-1 ring-inset ring-primary shadow-inner shadow-primary/20' : ''}`}>
                                        <div className="flex justify-between items-start mb-1 shrink-0">
                                            <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${isToday ? 'bg-primary text-white shadow-glow' : 'text-gray-300'}`}>{day}</span>
                                            {hasClasses && <span className="flex h-2 w-2 rounded-full bg-primary-light"></span>}
                                        </div>
                                        
                                        <div className="flex-1 overflow-hidden hover:overflow-y-auto space-y-1 disabled-scrollbar min-h-0 pt-1">
                                            {day === 4 && (!isTodayOverride || monthDate?.getMonth() === new Date().getMonth()) && (
                                                <>
                                                    <div className="text-[10px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded truncate border border-blue-500/30 font-medium">10a Morning Flow</div>
                                                    <div onClick={(e) => { e.stopPropagation(); setIsDrawerOpen(true); }} className="text-[10px] bg-primary/20 text-primary-light px-1.5 py-0.5 rounded truncate border border-primary/40 font-bold shadow-[0_0_10px_rgba(127,19,236,0.2)]">11:45a Adv. Hip Hop</div>
                                                    <div className="text-[10px] bg-orange-500/20 text-orange-300 px-1.5 py-0.5 rounded truncate border border-orange-500/30 font-medium">2p Kids Ballet</div>
                                                </>
                                            )}
                                            {day === 14 && (!isTodayOverride || monthDate?.getMonth() === new Date().getMonth()) && (
                                                <>
                                                    <div className="text-[10px] bg-teal-500/20 text-teal-300 px-1.5 py-0.5 rounded truncate border border-teal-500/30 font-medium">12:15p Contemp Fusion</div>
                                                    <div className="text-[10px] bg-gray-500/20 text-gray-300 px-1.5 py-0.5 rounded truncate border border-gray-500/30 font-medium text-center">Open Floor Available</div>
                                                </>
                                            )}
                                            {(day === 2 || day === 7 || day === 18 || day === 22 || day === 29) && (!isTodayOverride || monthDate?.getMonth() === new Date().getMonth()) && (
                                                <div className="text-[10px] bg-white/5 text-gray-400 px-1.5 py-0.5 rounded truncate border border-white/10">{day % 2 === 0 ? 'Evening Classes' : 'Morning Classes'}</div>
                                            )}
                                        </div>
                                    </div>
                                );
                            };

                            if (activeView === 'month') {
                                return (
                                <div className={`flex-1 flex flex-col min-h-0 ${animateClass}`}>
                                    <div className="bg-surface-darker border border-surface-border rounded-xl flex-1 flex flex-col min-h-0 shadow-xl overflow-hidden">
                                        <div className="grid grid-cols-7 border-b border-surface-border bg-surface-dark/50 p-2 shrink-0">
                                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                                <div key={day} className="text-center text-xs font-bold text-gray-400 uppercase tracking-wider">{day}</div>
                                            ))}
                                        </div>
                                        <div 
                                            ref={monthScrollRef}
                                            className="flex-1 flex overflow-x-auto snap-x snap-mandatory disabled-scrollbar items-stretch h-full"
                                            onScroll={(e) => {
                                                const MathRound = Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth);
                                                if (monthsList[MathRound] && monthsList[MathRound].getMonth() !== currentDate.getMonth()) {
                                                    setCurrentDate(monthsList[MathRound]);
                                                }
                                            }}
                                        >
                                            {monthsList.map((monthDate, idx) => {
                                                const daysInMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0).getDate();
                                                const firstDayOfMonth = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1).getDay();
                                                const prevMonthDays = new Date(monthDate.getFullYear(), monthDate.getMonth(), 0).getDate();
                                                
                                                const daysForMonth = [];
                                                for (let i = firstDayOfMonth - 1; i >= 0; i--) {
                                                    daysForMonth.push({ type: 'prev', day: prevMonthDays - i });
                                                }
                                                for (let i = 1; i <= daysInMonth; i++) {
                                                    daysForMonth.push({ type: 'curr', day: i });
                                                }
                                                const remaining = (daysForMonth.length % 7 === 0) ? 0 : 7 - (daysForMonth.length % 7);
                                                for (let i = 1; i <= remaining; i++) {
                                                    daysForMonth.push({ type: 'next', day: i });
                                                }
                                                
                                                const rowCount = daysForMonth.length / 7;

                                                return (
                                                    <div key={`month-${idx}`} className="grid grid-cols-7 bg-surface-border gap-px min-w-full flex-1 snap-start h-full" style={{ gridTemplateRows: `repeat(${rowCount}, minmax(0, 1fr))` }}>
                                                        {daysForMonth.map((slot) => {
                                                            const isTodayOverride = slot.day === new Date().getDate() && monthDate.getMonth() === new Date().getMonth() && monthDate.getFullYear() === new Date().getFullYear() && slot.type === 'curr';
                                                            return renderDaySlot(slot, isTodayOverride, monthDate);
                                                        })}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                );
                            } else {
                                // Week view with horizontal scrolling
                                return (
                                    <div className={`bg-surface-darker border border-surface-border rounded-xl flex-1 flex flex-col shadow-xl min-h-0 ${animateClass}`}>
                                        <div className="grid grid-cols-7 border-b border-surface-border bg-surface-dark/50 p-2 shrink-0">
                                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                                <div key={day} className="text-center text-xs font-bold text-gray-400 uppercase tracking-wider">{day}</div>
                                            ))}
                                        </div>
                                        <div className="flex-1 flex overflow-x-auto snap-x snap-mandatory disabled-scrollbar items-stretch h-full">
                                            {weeks.map((week, idx) => (
                                                <div key={`week-${idx}`} className={`grid grid-cols-7 bg-surface-border gap-px min-w-full flex-1 snap-start h-full`}>
                                                    {week.map(slot => renderDaySlot(slot, slot.day === 4, currentDate))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }
                        })() : (
                        <div className="relative min-w-max h-full flex flex-col">
                            <div className="h-10 border-b border-surface-border flex items-center bg-surface-darker/90 shrink-0 pl-40 pr-4 overflow-hidden select-none z-30 sticky top-0 backdrop-blur-md">
                                <div className="flex w-full relative">
                                    <div className="flex w-full text-xs text-gray-500 font-mono tracking-wider">
                                        <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2 text-primary font-bold">01:00 PM</div>
                                        <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2">02:00 PM</div>
                                        <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2">03:00 PM</div>
                                        <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2">04:00 PM</div>
                                        <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2">05:00 PM</div>
                                        <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2">06:00 PM</div>
                                        <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2">07:00 PM</div>
                                        <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2">08:00 PM</div>
                                        <div className="w-[140px] shrink-0 border-l border-surface-border/50 pl-2">09:00 PM</div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-10 bottom-0 left-[245px] w-px bg-red-500 z-20 shadow-[0_0_15px_rgba(239,68,68,0.5)] pointer-events-none opacity-80 mix-blend-screen">
                                <div className="sticky top-10 z-30">
                                    <div className="absolute -top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 now-indicator-pulse"></div>
                                    <div className="absolute top-2 left-2 text-[10px] font-bold text-white bg-red-600 px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap transform -translate-x-1/2 translate-y-1">
                                        1:45 PM
                                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-red-600"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Studio A */}
                            <div className="flex flex-1 min-h-[12rem] border-b border-surface-border group relative">
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
                                    <div className="absolute left-[35px] w-[200px] top-6 bottom-6 glass-card rounded-xl p-3 flex flex-col justify-between group/card overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                                        <div>
                                            <div className="flex justify-between items-start">
                                                <h4 className="text-xs font-bold text-white truncate w-32">Afternoon Flow</h4>
                                                <span className="material-icons text-[12px] text-gray-500">lock_clock</span>
                                            </div>
                                            <div className="text-[10px] text-gray-400 mt-1 font-mono">01:15 - 02:45 PM</div>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex -space-x-2">
                                                <img alt="Instructor" className="w-6 h-6 rounded-full border border-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXef-MeCCZpdqQQa_rYxlRFsdVljTbFuGGlsNiUo8iLob9mmXixhIVcLR_f8bnUVFAOAGP1_kUzRD1invmLtnZfFS3Xi-f5CacFTa-1qUjxGGnDIFR0M0G8TiU8kUcbVijTfMiyLBbAM9qYsF7aOCVg9nxW-wQjRyVBjNXRssZerSWB1DxjsYhzHm8MYM46HXtF1YDOMGUvUAmdGl6f0acIYj-_pLxDVvH7sy2QsgejF5r1jr6nL3FBi3zCHXl5803FZowToPbjwcE"/>
                                            </div>
                                            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wide">In Progress</span>
                                        </div>
                                    </div>
                                    
                                    {/* Class Block 2 (Clickable to open drawer) */}
                                    <button 
                                        className="absolute left-[280px] w-[180px] top-4 bottom-4 bg-primary/10 border border-primary/50 rounded-xl p-0 hover:bg-primary/20 hover:border-primary/80 hover:shadow-glow hover:-translate-y-1 transition-all text-left flex flex-col group/card overflow-hidden z-10 cursor-pointer btn-physics backdrop-blur-md" 
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
                                                <div className="text-[10px] text-primary-light mt-1 font-mono">03:00 - 04:15 PM</div>
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
                                    <div className="absolute left-[490px] w-[210px] top-6 bottom-6 glass-card rounded-xl p-3 flex flex-col justify-between group/card overflow-hidden cursor-pointer hover:border-orange-500/50 transition-colors opacity-70 hover:opacity-100">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
                                        <div>
                                            <h4 className="text-xs font-bold text-white truncate">Kids Ballet</h4>
                                            <div className="text-[10px] text-gray-400 mt-1 font-mono">04:30 - 06:30 PM</div>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="px-1.5 py-0.5 bg-surface-border rounded text-[9px] text-gray-300 border border-white/5">Kids</span>
                                            <span className="px-1.5 py-0.5 bg-surface-border rounded text-[9px] text-gray-300 border border-white/5">Beg</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Studio C  */}
                            <div className="flex flex-1 min-h-[12rem] border-b border-surface-border group relative">
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
                                    <div className="absolute left-[105px] w-[210px] top-6 bottom-6 glass-card rounded-xl p-3 flex flex-col justify-between group/card overflow-hidden hover:border-teal-500/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.1)] transition-all cursor-pointer">
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
                                                <div className="text-[10px] text-gray-400 mt-0.5 font-mono">01:45 - 03:15 PM</div>
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

                        </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Slide-over Drawer */}
            <div aria-labelledby="slide-over-title" aria-modal="true" className={`fixed inset-0 z-50 overflow-hidden ${isDrawerOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} role="dialog">
                <div 
                    aria-hidden="true" 
                    className={`absolute inset-0 bg-background-dark/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
                    onClick={() => setIsDrawerOpen(false)}
                ></div>
                <div className={`absolute right-0 h-full w-screen max-w-md transform transition duration-500 ease-in-out sm:duration-700 drawer-slide ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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
                                                    <button 
                                                        className="text-xs text-primary hover:text-white font-medium transition-colors"
                                                        onClick={(e) => { e.stopPropagation(); setIsInstructorModalOpen(true); }}
                                                    >
                                                        View Profile
                                                    </button>
                                                </div>
                                                <p className="text-xs text-gray-400 mt-2 leading-relaxed">High-energy choreography focusing on musicality. 10 years LA industry experience.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-surface-darker border border-surface-border rounded-xl p-4">
                                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5"><span className="material-icons text-[14px]">check_circle</span> Preparation</h3>
                                        <ul className="text-sm text-gray-300 space-y-1.5 list-disc pl-4">
                                            <li>Clean indoor sneakers required</li>
                                            <li>Bring water & sweat towel</li>
                                            <li>Basic rhythm coordination recommended</li>
                                        </ul>
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

            {/* Instructor Profile Modal */}
            <div aria-labelledby="instructor-modal-title" aria-modal="true" className={`fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 overflow-hidden ${isInstructorModalOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} role="dialog">
                <div 
                    aria-hidden="true" 
                    className={`absolute inset-0 bg-background-dark/80 backdrop-blur-md transition-opacity duration-300 ease-in-out ${isInstructorModalOpen ? 'opacity-100' : 'opacity-0'}`} 
                    onClick={() => setIsInstructorModalOpen(false)}
                ></div>
                
                <div className={`relative max-w-lg w-full bg-surface-darker border border-surface-border rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-out ${isInstructorModalOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-400 to-primary"></div>
                    
                    {/* Header Image Area */}
                    <div className="relative h-48 bg-surface-dark">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaxO1ejHNsmNaF4m4B0ku43SeveyFVcpoWotzQTFIbAjpVKwkLXuJ2tQkyr8EfriMa0BFX1omCOYdXS9u5fckiBM-f0_91cCRjWrmXjvENfM9ncLy6THw7f-0B3DpTOFc5yTrhSiwC6Ms1GCymet19pOQB-KROcaXq5R1cog_XpD6HLfLMfJNfHmZbE-aqnIR3YxA0KrW-wHr3YKLN6cO3CWSFW6BlGq1BOaymNOSsKu99It-NX3GRHt720djxcOuIASSuEmgWLCfN"
                            alt="Sarah Jenkins Header"
                            layout="fill"
                            objectFit="cover"
                            className="opacity-50 blur-sm"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-darker to-transparent"></div>
                        <button 
                            className="absolute top-4 right-4 rounded-full p-1.5 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 text-white transition-colors z-10" 
                            onClick={() => setIsInstructorModalOpen(false)} 
                            type="button"
                        >
                            <span className="sr-only">Close modal</span>
                            <span className="material-icons text-[20px]">close</span>
                        </button>
                    </div>

                    {/* Profile Details */}
                    <div className="relative px-6 pb-8 pt-0">
                        <div className="flex justify-center -mt-16 mb-4 relative z-10">
                            <div className="relative">
                                <Image
                                    width={120}
                                    height={120}
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaxO1ejHNsmNaF4m4B0ku43SeveyFVcpoWotzQTFIbAjpVKwkLXuJ2tQkyr8EfriMa0BFX1omCOYdXS9u5fckiBM-f0_91cCRjWrmXjvENfM9ncLy6THw7f-0B3DpTOFc5yTrhSiwC6Ms1GCymet19pOQB-KROcaXq5R1cog_XpD6HLfLMfJNfHmZbE-aqnIR3YxA0KrW-wHr3YKLN6cO3CWSFW6BlGq1BOaymNOSsKu99It-NX3GRHt720djxcOuIASSuEmgWLCfN"
                                    alt="Sarah Jenkins"
                                    className="h-32 w-32 rounded-full object-cover ring-4 ring-surface-darker shadow-2xl"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement!.innerHTML = '<div class="h-32 w-32 rounded-full ring-4 ring-surface-darker shadow-2xl bg-surface-dark flex items-center justify-center"><span class="material-icons text-[40px] text-primary">person</span></div>';
                                    }}
                                />
                                <div className="absolute bottom-0 right-0 bg-primary text-white text-xs px-2 py-0.5 rounded-full border-2 border-surface-darker font-bold shadow-lg">PRO</div>
                            </div>
                        </div>

                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-white tracking-tight" id="instructor-modal-title">Sarah Jenkins</h2>
                            <p className="text-primary-light font-medium mt-1">Lead Choreographer & Hip Hop Instructor</p>
                            <div className="flex justify-center items-center gap-4 mt-3">
                                <div className="flex items-center text-sm text-gray-300">
                                    <span className="material-icons text-[16px] text-yellow-500 mr-1">star</span>
                                    4.9 <span className="text-gray-500 ml-1">(120 reviews)</span>
                                </div>
                                <div className="w-1 h-1 rounded-full bg-surface-border"></div>
                                <div className="flex items-center text-sm text-gray-300">
                                    <span className="material-icons text-[16px] text-gray-400 mr-1">history</span>
                                    5+ Years
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Biography</h3>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    Sarah brings 10 years of LA industry experience right to your studio. Known for her high-energy choreography focusing heavily on musicality and intricate textures. She has danced alongside top-tier artists and brings a commercial edge to every class while maintaining a supportive, growth-focused environment.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-surface-dark rounded-xl p-4 border border-surface-border">
                                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Styles</h3>
                                    <p className="text-sm text-white font-medium">Advanced Hip Hop, Jazz Funk, Commercial</p>
                                </div>
                                <div className="bg-surface-dark rounded-xl p-4 border border-surface-border">
                                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Vibe</h3>
                                    <p className="text-sm text-white font-medium">High Energy, Technical, Encouraging</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-8">
                            <button 
                                className="w-full bg-surface-dark hover:bg-surface-border text-white border border-surface-border font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                                onClick={() => setIsInstructorModalOpen(false)}
                            >
                                <span>Back to Class Details</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Instructor Profile Modal */}
            <div aria-labelledby="instructor-modal-title" aria-modal="true" className={`fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 overflow-hidden ${isInstructorModalOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} role="dialog">
                <div 
                    aria-hidden="true" 
                    className={`absolute inset-0 bg-background-dark/80 backdrop-blur-md transition-opacity duration-300 ease-in-out ${isInstructorModalOpen ? 'opacity-100' : 'opacity-0'}`} 
                    onClick={() => setIsInstructorModalOpen(false)}
                ></div>
                
                <div className={`relative max-w-lg w-full bg-surface-darker border border-surface-border rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-out ${isInstructorModalOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-400 to-primary"></div>
                    
                    {/* Header Image Area */}
                    <div className="relative h-48 bg-surface-dark">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaxO1ejHNsmNaF4m4B0ku43SeveyFVcpoWotzQTFIbAjpVKwkLXuJ2tQkyr8EfriMa0BFX1omCOYdXS9u5fckiBM-f0_91cCRjWrmXjvENfM9ncLy6THw7f-0B3DpTOFc5yTrhSiwC6Ms1GCymet19pOQB-KROcaXq5R1cog_XpD6HLfLMfJNfHmZbE-aqnIR3YxA0KrW-wHr3YKLN6cO3CWSFW6BlGq1BOaymNOSsKu99It-NX3GRHt720djxcOuIASSuEmgWLCfN"
                            alt="Sarah Jenkins Header"
                            layout="fill"
                            objectFit="cover"
                            className="opacity-50 blur-sm"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-darker to-transparent"></div>
                        <button 
                            className="absolute top-4 right-4 rounded-full p-1.5 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 text-white transition-colors z-10" 
                            onClick={() => setIsInstructorModalOpen(false)} 
                            type="button"
                        >
                            <span className="sr-only">Close modal</span>
                            <span className="material-icons text-[20px]">close</span>
                        </button>
                    </div>

                    {/* Profile Details */}
                    <div className="relative px-6 pb-8 pt-0">
                        <div className="flex justify-center -mt-16 mb-4 relative z-10">
                            <div className="relative">
                                <Image
                                    width={120}
                                    height={120}
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaxO1ejHNsmNaF4m4B0ku43SeveyFVcpoWotzQTFIbAjpVKwkLXuJ2tQkyr8EfriMa0BFX1omCOYdXS9u5fckiBM-f0_91cCRjWrmXjvENfM9ncLy6THw7f-0B3DpTOFc5yTrhSiwC6Ms1GCymet19pOQB-KROcaXq5R1cog_XpD6HLfLMfJNfHmZbE-aqnIR3YxA0KrW-wHr3YKLN6cO3CWSFW6BlGq1BOaymNOSsKu99It-NX3GRHt720djxcOuIASSuEmgWLCfN"
                                    alt="Sarah Jenkins"
                                    className="h-32 w-32 rounded-full object-cover ring-4 ring-surface-darker shadow-2xl"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement!.innerHTML = '<div class="h-32 w-32 rounded-full ring-4 ring-surface-darker shadow-2xl bg-surface-dark flex items-center justify-center"><span class="material-icons text-[40px] text-primary">person</span></div>';
                                    }}
                                />
                                <div className="absolute bottom-0 right-0 bg-primary text-white text-xs px-2 py-0.5 rounded-full border-2 border-surface-darker font-bold shadow-lg">PRO</div>
                            </div>
                        </div>

                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-white tracking-tight" id="instructor-modal-title">Sarah Jenkins</h2>
                            <p className="text-primary-light font-medium mt-1">Lead Choreographer & Hip Hop Instructor</p>
                            <div className="flex justify-center items-center gap-4 mt-3">
                                <div className="flex items-center text-sm text-gray-300">
                                    <span className="material-icons text-[16px] text-yellow-500 mr-1">star</span>
                                    4.9 <span className="text-gray-500 ml-1">(120 reviews)</span>
                                </div>
                                <div className="w-1 h-1 rounded-full bg-surface-border"></div>
                                <div className="flex items-center text-sm text-gray-300">
                                    <span className="material-icons text-[16px] text-gray-400 mr-1">history</span>
                                    5+ Years
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Biography</h3>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    Sarah brings 10 years of LA industry experience right to your studio. Known for her high-energy choreography focusing heavily on musicality and intricate textures. She has danced alongside top-tier artists and brings a commercial edge to every class while maintaining a supportive, growth-focused environment.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-surface-dark rounded-xl p-4 border border-surface-border">
                                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Styles</h3>
                                    <p className="text-sm text-white font-medium">Advanced Hip Hop, Jazz Funk, Commercial</p>
                                </div>
                                <div className="bg-surface-dark rounded-xl p-4 border border-surface-border">
                                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Vibe</h3>
                                    <p className="text-sm text-white font-medium">High Energy, Technical, Encouraging</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-8">
                            <button 
                                className="w-full bg-surface-dark hover:bg-surface-border text-white border border-surface-border font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                                onClick={() => setIsInstructorModalOpen(false)}
                            >
                                <span>Back to Class Details</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
