import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../assets/logo.png"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const links = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#work" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-8">

            {/* ================= NAVBAR ================= */}

            <motion.nav
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mx-auto max-w-7xl"
            >

                {/* Outer Glow */}

                <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-400/10 to-blue-500/20 blur-sm" />


                {/* Main Navbar */}

                <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#071329]/85 shadow-2xl shadow-black/20 backdrop-blur-xl">

                    {/* Subtle Background Glow */}

                    <div className="pointer-events-none absolute inset-0">

                        <div className="absolute left-[-100px] top-[-120px] h-64 w-64 rounded-full bg-blue-600/[0.08] blur-[90px]" />

                        <div className="absolute right-[-100px] top-[-100px] h-56 w-56 rounded-full bg-cyan-400/[0.06] blur-[90px]" />

                    </div>


                    {/* ================= NAV CONTENT ================= */}

                    <div className="relative flex h-[72px] items-center justify-between px-4 sm:h-[78px] sm:px-6 lg:px-7">


                        {/* ================= LOGO ================= */}

                        <a
                            href="#home"
                            onClick={() => setMenuOpen(false)}
                            className="group relative z-10 flex shrink-0 items-center"
                        >

                            <motion.img
                                src={logo}
                                alt="WebHarnix"
                                whileHover={{
                                    scale: 1.03,
                                }}
                                transition={{
                                    duration: 0.25,
                                }}
                                className="h-11 w-auto object-contain sm:h-12"
                            />

                        </a>


                        {/* ================= DESKTOP NAV ================= */}

                        <div className="hidden items-center lg:flex">

                            <div className="flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.025] px-2 py-1.5">

                                {links.map((link) => (

                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="group relative rounded-full px-4 py-2 text-[13px] font-medium text-slate-300 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
                                    >

                                        {link.name}

                                        {/* Hover line */}

                                        <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 group-hover:w-4/5" />

                                    </a>

                                ))}

                            </div>

                        </div>


                        {/* ================= CTA ================= */}

                        <motion.a
                            href="#contact"
                            whileHover={{
                                scale: 1.03,
                                y: -1,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-shadow duration-300 hover:shadow-cyan-400/20 lg:flex"
                        >

                            <span className="relative z-10">
                                Get a Quote
                            </span>

                            <span className="relative z-10 text-lg leading-none transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>

                            {/* Shine */}

                            <span className="absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/20 transition-all duration-500 group-hover:left-[120%]" />

                        </motion.a>


                        {/* ================= MOBILE BUTTON ================= */}

                        <button
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-300 lg:hidden"
                        >

                            <div className="relative h-5 w-5">

                                <motion.span
                                    animate={{
                                        rotate: menuOpen ? 45 : 0,
                                        y: menuOpen ? 8 : 0,
                                    }}
                                    className="absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current"
                                />

                                <motion.span
                                    animate={{
                                        opacity: menuOpen ? 0 : 1,
                                        x: menuOpen ? 8 : 0,
                                    }}
                                    className="absolute left-0 top-2 h-[2px] w-5 rounded-full bg-current"
                                />

                                <motion.span
                                    animate={{
                                        rotate: menuOpen ? -45 : 0,
                                        y: menuOpen ? -8 : 0,
                                    }}
                                    className="absolute left-0 top-4 h-[2px] w-5 rounded-full bg-current"
                                />

                            </div>

                        </button>

                    </div>


                    {/* ================= MOBILE MENU ================= */}

                    <AnimatePresence>

                        {menuOpen && (

                            <motion.div
                                initial={{
                                    height: 0,
                                    opacity: 0,
                                }}
                                animate={{
                                    height: "auto",
                                    opacity: 1,
                                }}
                                exit={{
                                    height: 0,
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="overflow-hidden border-t border-white/[0.07] lg:hidden"
                            >

                                <div className="p-4">

                                    <div className="space-y-1">

                                        {links.map((link, index) => (

                                            <motion.a
                                                key={link.name}
                                                href={link.href}
                                                onClick={() => setMenuOpen(false)}
                                                initial={{
                                                    opacity: 0,
                                                    x: -15,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay: index * 0.04,
                                                }}
                                                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                                            >

                                                <span>
                                                    {link.name}
                                                </span>

                                                <span className="text-slate-600 transition-transform duration-300 group-hover:translate-x-1">
                                                    →
                                                </span>

                                            </motion.a>

                                        ))}

                                    </div>


                                    {/* Mobile CTA */}

                                    <motion.a
                                        href="#contact"
                                        onClick={() => setMenuOpen(false)}
                                        whileTap={{
                                            scale: 0.98,
                                        }}
                                        className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20"
                                    >

                                        Get a Quote

                                        <span className="text-lg">
                                            →
                                        </span>

                                    </motion.a>

                                </div>

                            </motion.div>

                        )}

                    </AnimatePresence>

                </div>

            </motion.nav>

        </header>
    )
}

export default Navbar