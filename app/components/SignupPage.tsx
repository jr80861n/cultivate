"use client";
import React, { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const checkStrength = (pw: string) => {
        if (pw.length === 0) return { width: "0%", text: "", color: "bg-slate-200", textColor: "text-slate-500" };
        if (pw.length < 5) return { width: "25%", text: "Weak", color: "bg-red-500", textColor: "text-red-500" };
        if (pw.length < 8) return { width: "50%", text: "Fair", color: "bg-yellow-500", textColor: "text-yellow-500" };
        if (pw.length < 12) return { width: "75%", text: "Good", color: "bg-[#9d4af2]", textColor: "text-[#9d4af2]" };
        return { width: "100%", text: "Strong", color: "bg-emerald-500", textColor: "text-emerald-500" };
    };

    const strength = checkStrength(password);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setTimeout(() => setStatus("success"), 1500);
    };

    return (
        <div className="bg-[#f7f6f8] dark:bg-[#191022] text-slate-800 dark:text-slate-200 font-display min-h-screen flex items-center justify-center overflow-hidden">
            <div className="w-full h-screen flex relative overflow-hidden">
                <div className="hidden lg:flex lg:w-1/2 relative bg-[#231830] overflow-hidden items-center justify-center group">
                    <div className="absolute inset-0 z-0">
                        <img alt="Dancers moving dynamically in purple light" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-[20s] ease-linear" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdE0XU07kcfLCMr6QTTqgJGR-vD0_AHrLFdqlC2clY4mNmaY0CzZrY7e8jjE4Tc6RAa1QjVJWL5kskguHXWM6XD_ii3dFKi5TWIDZzNOvd4RSSqH4C0w8BCm-W7TUikhxEVvNMp2GnURUlYVF1kYh0slQCtCTgty8Je-UgCD-GlV_09EjeT5Yto7WUOAHYDBBmVVPmuo78D-hi0ONXLcKm_aypMvYLC3JLuEYJ7GENT8VMlRoPLRDzHVgGFeWatNp4OuUGJsRN31R_" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#191022] via-[#7f13ec]/30 to-[#191022] mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-[#7f13ec]/20 mix-blend-multiply"></div>
                    </div>
                    <div className="relative z-10 p-12 max-w-xl">
                        <div className="mb-6 inline-flex items-center space-x-2 text-[#9d4af2]/80 border border-[#7f13ec]/30 rounded-full px-4 py-1.5 backdrop-blur-sm bg-[#191022]/30">
                            <span className="w-2 h-2 rounded-full bg-[#7f13ec] animate-pulse"></span>
                            <span className="text-xs uppercase tracking-widest font-semibold">Join The Movement</span>
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                            Unlock your full <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9d4af2]">potential.</span>
                        </h1>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-md">
                            Become a part of the Cultivate community. Create your account to book classes, access exclusive workshops, and track your artistic journey.
                        </p>
                        <div className="mt-12 flex space-x-1 h-8 items-end opacity-50">
                            <div className="w-1 bg-[#7f13ec] h-4 animate-[bounce_1s_infinite]"></div>
                            <div className="w-1 bg-[#7f13ec] h-8 animate-[bounce_1.2s_infinite]"></div>
                            <div className="w-1 bg-[#7f13ec] h-6 animate-[bounce_0.8s_infinite]"></div>
                            <div className="w-1 bg-[#7f13ec] h-3 animate-[bounce_1.5s_infinite]"></div>
                            <div className="w-1 bg-[#7f13ec] h-5 animate-[bounce_1.1s_infinite]"></div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 bg-[#f7f6f8] dark:bg-[#191022] flex flex-col items-center justify-center p-8 lg:p-16 relative overflow-y-auto">
                    <div className="absolute inset-0 lg:hidden z-0">
                        <div className="absolute inset-0 bg-[#191022]/95 z-10"></div>
                        <img alt="Abstract geometric dance background" className="w-full h-full object-cover opacity-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByNPxzlG__LrNnMPRv3Nzjn24zjB3KCfULoVM3mAQfagVo_aqMf5i2nqzjVDX-yHHe4sXqcqYyIw781z2cprYg6Hsc_fgOY08rdi7Mt1yJgOJlvkxxbFc_bixWmx3IU7pqDHfdE9ZmavDImgoquKmCZ4g1y_2oyQgeCF_k3P6JdMcNNAkPuEgHL9627WLInc20adO_Gv9T2xnLNBuIHbtWhZX2LEG3eVgu-qTWvo8npELeNn35ELTcDtGd57vyIowqH1esDRVjnn49" />
                    </div>
                    <div className="w-full max-w-md z-10 relative mt-16 sm:mt-0">
                        <div className="mb-8">
                            <Link href="/" className="flex items-center gap-3 w-fit">
                                <div className="w-10 h-10 bg-gradient-to-br from-[#7f13ec] to-[#5e0eb0] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#7f13ec]/20">
                                    C
                                </div>
                                <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Cultivate</span>
                            </Link>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Create Account</h2>
                            <p className="text-slate-500 dark:text-slate-400">Start your journey with us today.</p>
                        </div>

                        <form className={`space-y-5 ${status}`} onSubmit={handleSubmit}>
                            <div className="float-label-input relative border border-slate-300 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-[#231830] transition-all duration-300 group hover:border-slate-400 dark:hover:border-slate-600">
                                <input autoComplete="name" className="block w-full px-4 pt-6 pb-2 text-slate-900 dark:text-white bg-transparent border-none focus:ring-0 peer placeholder-transparent outline-none h-14" id="fullname" placeholder="Full Name" required type="text" />
                                <label className="absolute text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none uppercase text-xs font-semibold tracking-wider" htmlFor="fullname">
                                    Full Name
                                </label>
                            </div>
                            <div className="float-label-input relative border border-slate-300 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-[#231830] transition-all duration-300 group hover:border-slate-400 dark:hover:border-slate-600">
                                <input autoComplete="email" className="block w-full px-4 pt-6 pb-2 text-slate-900 dark:text-white bg-transparent border-none focus:ring-0 peer placeholder-transparent outline-none h-14" id="email" placeholder="Email Address" required type="email" />
                                <label className="absolute text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none uppercase text-xs font-semibold tracking-wider" htmlFor="email">
                                    Email Address
                                </label>
                                <div className="absolute right-4 top-4 text-emerald-500 opacity-0 peer-valid:opacity-100 transition-opacity duration-300">
                                    <span className="material-icons text-sm">check_circle</span>
                                </div>
                            </div>
                            <div className="float-label-input relative border border-slate-300 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-[#231830] transition-all duration-300 hover:border-slate-400 dark:hover:border-slate-600">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full px-4 pt-6 pb-2 text-slate-900 dark:text-white bg-transparent border-none focus:ring-0 peer placeholder-transparent outline-none h-14 pr-12" id="password" placeholder="Create Password" required type={showPassword ? "text" : "password"} />
                                <label className="absolute text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none uppercase text-xs font-semibold tracking-wider" htmlFor="password">
                                    Password
                                </label>
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-[14px] text-slate-400 hover:text-white transition-colors">
                                    <span className="material-icons text-lg">{showPassword ? "visibility_off" : "visibility"}</span>
                                </button>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold h-4">
                                    <span>Password Strength</span>
                                    <span className={`${strength.textColor}`}>{strength.text}</span>
                                </div>
                                <div className="h-1 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                    <div className={`h-full strength-meter-bar transition-all duration-300 ${strength.color} hover:shadow-[0_0_10px_rgba(127,19,236,0.5)]`} style={{ width: strength.width }}></div>
                                </div>
                                <div className="text-[10px] text-slate-500 pt-1">Must be at least 8 characters.</div>
                            </div>
                            <div className="flex items-start space-x-2 pt-2">
                                <div className="relative flex items-center h-5">
                                    <input className="peer sr-only" id="terms" required type="checkbox" />
                                    <div className="w-4 h-4 border border-slate-600 rounded bg-transparent peer-checked:bg-[#7f13ec] peer-checked:border-[#7f13ec] transition-all duration-200 cursor-pointer"></div>
                                    <span className="material-icons absolute top-[-1px] left-[-1px] text-white text-base opacity-0 peer-checked:opacity-100 pointer-events-none transform scale-75">check</span>
                                </div>
                                <label className="text-sm text-slate-500 dark:text-slate-400 cursor-pointer select-none" htmlFor="terms">
                                    I agree to the <Link className="text-[#7f13ec] hover:text-[#9d4af2] link-underline pb-0.5" href="#">Terms of Service</Link> and <Link className="text-[#7f13ec] hover:text-[#9d4af2] link-underline pb-0.5" href="#">Privacy Policy</Link>.
                                </label>
                            </div>
                            <button type="submit" disabled={status !== "idle"} className="btn-liquid w-full h-14 rounded-lg bg-transparent border border-[#7f13ec] text-[#7f13ec] hover:text-white dark:text-white dark:border-[#7f13ec]/50 dark:bg-[#231830] font-semibold tracking-wide text-sm uppercase transition-all shadow-[0_0_15px_rgba(127,19,236,0.15)] hover:shadow-[#7f13ec]/30 flex items-center justify-center group relative mt-4 disabled:opacity-80 disabled:cursor-not-allowed">
                                {status === "idle" && (
                                    <span className="btn-text relative z-10 flex items-center gap-2">
                                        Create Account
                                        <span className="material-icons text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                                    </span>
                                )}
                                {status === "loading" && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-[#7f13ec] z-20">
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-[loader_1s_infinite_linear]"></span>
                                    </div>
                                )}
                                {status === "success" && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-emerald-600 z-20">
                                        <span className="material-icons text-white animate-bounce">check</span>
                                    </div>
                                )}
                            </button>
                        </form>
                        
                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase tracking-wider">
                                <span className="bg-[#f7f6f8] dark:bg-[#191022] px-4 text-slate-500">Or register with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="magnetic-btn flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-[#231830] hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                                </svg>
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Google</span>
                            </button>
                            <button className="magnetic-btn flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-[#231830] hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                                <svg className="w-5 h-5 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.24.75-.62 1.85-1.16 2.63-.52.74-1.07 1.48-1.37 1.45zM12.02 5.17c-.31-2.07 1.45-3.95 3.19-4.17.29 2.03-1.84 3.82-3.19 4.17z"></path>
                                </svg>
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Apple</span>
                            </button>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Already have an account?
                                <Link className="text-[#7f13ec] hover:text-[#9d4af2] font-medium transition-colors link-underline pb-0.5 ml-1" href="/signin">Sign in</Link>
                            </p>
                        </div>
                    </div>

                    <div className="absolute bottom-6 left-6 hidden xl:block z-20">
                        <div className="text-[10px] text-slate-700 dark:text-slate-600 font-mono space-y-1 opacity-50">
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                <span>SYSTEM_READY</span>
                            </div>
                            <div>REG_MODULE_INIT</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
