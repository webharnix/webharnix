import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const ease = [0.22, 1, 0.36, 1]

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease,
        },
    },
}

function Hero() {
    const heroRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    })

    const heroY = useTransform(scrollYProgress, [0, 1], [0, -90])
    const visualY = useTransform(scrollYProgress, [0, 1], [0, -45])
    const glowY = useTransform(scrollYProgress, [0, 1], [0, 100])
    const heroOpacity = useTransform(
        scrollYProgress,
        [0, 0.7, 1],
        [1, 0.95, 0]
    )

    return (
        <section
            ref={heroRef}
            id="home"
            className="relative isolate overflow-hidden pt-32 sm:pt-36"
        >

            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <motion.div
                style={{ y: glowY }}
                className="pointer-events-none absolute left-1/2 top-[-240px] -z-20 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[150px]"
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.55, 0.8, 0.55],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, -25, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute -left-[250px] top-[350px] -z-10 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[130px]"
            />

            <motion.div
                animate={{
                    x: [0, -25, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-[250px] top-[550px] -z-10 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[130px]"
            />

            {/* Animated Grid */}

            <motion.div
                animate={{
                    backgroundPosition: ["0px 0px", "40px 40px"],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="pointer-events-none absolute inset-0 -z-20 opacity-[0.15]"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            rgba(34,211,238,0.08) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(34,211,238,0.08) 1px,
                            transparent 1px
                        )
                    `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Decorative Lines */}

            <motion.div
                animate={{
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-[-120px] top-[220px] -z-10 h-[500px] w-[55px] rotate-[35deg] bg-blue-600/10 blur-sm"
            />

            <motion.div
                animate={{
                    opacity: [0.15, 0.45, 0.15],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-[-70px] top-[200px] -z-10 h-[500px] w-[8px] rotate-[35deg] bg-cyan-400/15"
            />

            <motion.div
                animate={{
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="pointer-events-none absolute right-[-120px] top-[320px] -z-10 h-[500px] w-[55px] rotate-[35deg] bg-blue-600/10 blur-sm"
            />

            <motion.div
                animate={{
                    opacity: [0.15, 0.45, 0.15],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="pointer-events-none absolute right-[-70px] top-[300px] -z-10 h-[500px] w-[8px] rotate-[35deg] bg-cyan-400/15"
            />

            {/* =====================================================
                MAIN CONTENT
            ===================================================== */}

            <motion.div
                style={{
                    y: heroY,
                    opacity: heroOpacity,
                }}
                className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
            >

                <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

                    {/* =================================================
                        LEFT SIDE
                    ================================================= */}

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="relative text-center lg:text-left"
                    >

                        {/* Badge */}

                        <motion.div
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 25,
                                    scale: 0.92,
                                },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        duration: 0.7,
                                        ease,
                                    },
                                },
                            }}
                            whileHover={{
                                scale: 1.04,
                            }}
                            className="mb-7 inline-flex cursor-default items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-semibold tracking-wide text-cyan-300 backdrop-blur-md"
                        >
                            <span className="relative flex h-2 w-2">
                                <motion.span
                                    animate={{
                                        scale: [1, 1.8, 1],
                                        opacity: [0.8, 0, 0.8],
                                    }}
                                    transition={{
                                        duration: 1.8,
                                        repeat: Infinity,
                                        ease: "easeOut",
                                    }}
                                    className="absolute inset-0 rounded-full bg-cyan-400"
                                />

                                <span className="relative h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                            </span>

                            WEB DEVELOPMENT • SEO • DIGITAL SOLUTIONS
                        </motion.div>


                        {/* Heading */}

                        <motion.h1
                            variants={containerVariants}
                            className="max-w-4xl text-5xl font-black leading-[1.04] tracking-[-0.04em] text-white sm:text-6xl lg:text-[72px] xl:text-[78px]"
                        >

                            <motion.span
                                variants={itemVariants}
                                className="block"
                            >
                                We Build Digital
                            </motion.span>

                            <motion.span
                                variants={itemVariants}
                                className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent"
                            >
                                Experiences That Grow.
                            </motion.span>

                        </motion.h1>


                        {/* Description */}

                        <motion.p
                            variants={itemVariants}
                            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
                        >
                            WebHarnix helps businesses build powerful
                            websites, improve their online visibility,
                            and grow with modern digital solutions.
                        </motion.p>


                        {/* Buttons */}

                        <motion.div
                            variants={itemVariants}
                            className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
                        >

                            {/* Primary Button */}

                            <motion.a
                                href="#contact"
                                whileHover={{
                                    y: -5,
                                    scale: 1.025,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#087CF0] to-[#16BCEB] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_35px_rgba(14,165,233,0.25)]"
                            >

                                <motion.span
                                    animate={{
                                        x: ["-120%", "120%"],
                                    }}
                                    transition={{
                                        duration: 2.8,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                                />

                                <span className="relative">
                                    Start Your Project
                                </span>

                                <motion.span
                                    animate={{
                                        x: [0, 4, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="relative text-lg"
                                >
                                    →
                                </motion.span>

                            </motion.a>


                            {/* Secondary Button */}

                            <motion.a
                                href="#work"
                                whileHover={{
                                    y: -5,
                                    scale: 1.025,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-7 py-4 text-sm font-semibold text-white backdrop-blur-md"
                            >
                                View Our Work

                                <motion.span
                                    animate={{
                                        x: [0, 4, 0],
                                        y: [0, -3, 0],
                                    }}
                                    transition={{
                                        duration: 1.7,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="text-base"
                                >
                                    ↗
                                </motion.span>

                            </motion.a>

                        </motion.div>


                        {/* Trust Points */}

                        <motion.div
                            variants={{
                                hidden: {},
                                show: {
                                    transition: {
                                        staggerChildren: 0.12,
                                    },
                                },
                            }}
                            initial="hidden"
                            animate="show"
                            className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-slate-500 lg:justify-start"
                        >

                            {[
                                "Modern Design",
                                "SEO Friendly",
                                "Mobile Ready",
                            ].map((item) => (
                                <motion.span
                                    key={item}
                                    variants={itemVariants}
                                    className="flex items-center gap-2"
                                >
                                    <motion.span
                                        animate={{
                                            scale: [1, 1.25, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="text-cyan-400"
                                    >
                                        ✓
                                    </motion.span>

                                    {item}
                                </motion.span>
                            ))}

                        </motion.div>

                    </motion.div>


                    {/* =================================================
                        RIGHT SIDE VISUAL
                    ================================================= */}

                    <motion.div
                        style={{ y: visualY }}
                        initial={{
                            opacity: 0,
                            x: 80,
                            scale: 0.88,
                            rotateY: 10,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            rotateY: 0,
                        }}
                        transition={{
                            duration: 1.1,
                            delay: 0.25,
                            ease,
                        }}
                        className="relative mx-auto w-full max-w-[560px]"
                    >

                        {/* Big Glow */}

                        <motion.div
                            animate={{
                                scale: [1, 1.15, 1],
                                opacity: [0.35, 0.65, 0.35],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[110px]"
                        />


                        {/* Orbit */}

                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 22,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_#22d3ee]"
                            />
                        </motion.div>


                        {/* Main Card */}

                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            whileHover={{
                                rotateX: 2,
                                rotateY: -3,
                                scale: 1.015,
                            }}
                            style={{
                                transformPerspective: 1200,
                            }}
                            className="relative overflow-hidden rounded-[30px] border border-blue-400/20 bg-[#071A45]/65 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-5"
                        >

                            {/* Card Glow */}

                            <motion.div
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute left-1/2 top-0 h-32 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"
                            />

                            <div className="absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />


                            {/* Browser */}

                            <div className="relative flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#050B1C]/80 px-4 py-3">

                                <div className="flex gap-1.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                                </div>

                                <motion.div
                                    animate={{
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                    className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-5 py-1.5 text-[10px] text-slate-500"
                                >
                                    webharnix.com
                                </motion.div>

                                <div className="w-8" />

                            </div>


                            {/* Dashboard */}

                            <div className="relative mt-4 rounded-2xl border border-white/[0.07] bg-[#050B1C] p-5">

                                <motion.div
                                    animate={{
                                        x: [0, -20, 0],
                                        y: [0, 15, 0],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute right-[-80px] top-[-80px] h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl"
                                />

                                <div className="relative">

                                    {/* Header */}

                                    <div className="flex items-start justify-between">

                                        <div>

                                            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                                                Digital Growth
                                            </div>

                                            <div className="mt-2 text-xl font-bold text-white">
                                                Build. Grow.
                                            </div>

                                            <div className="text-xl font-bold text-slate-500">
                                                Go Digital.
                                            </div>

                                        </div>

                                        <motion.div
                                            animate={{
                                                rotate: [0, 8, -8, 0],
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                            }}
                                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                                        >
                                            ✦
                                        </motion.div>

                                    </div>


                                    {/* Graph */}

                                    <div className="mt-8 flex h-32 items-end gap-2">

                                        {[
                                            "28%",
                                            "38%",
                                            "48%",
                                            "58%",
                                            "72%",
                                            "90%",
                                        ].map((height, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{
                                                    height: "5%",
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    height,
                                                    opacity: 1,
                                                }}
                                                transition={{
                                                    duration: 0.8,
                                                    delay: 0.9 + index * 0.12,
                                                    ease,
                                                }}
                                                whileHover={{
                                                    scaleY: 1.08,
                                                }}
                                                className={`w-full origin-bottom rounded-t-lg ${
                                                    index === 5
                                                        ? "bg-gradient-to-t from-blue-600 to-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                                                        : index >= 3
                                                          ? "bg-cyan-400/40"
                                                          : "bg-blue-500/25"
                                                }`}
                                            />
                                        ))}

                                    </div>


                                    {/* Bottom Cards */}

                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="show"
                                        className="mt-4 grid grid-cols-2 gap-3"
                                    >

                                        <motion.div
                                            variants={itemVariants}
                                            whileHover={{
                                                y: -4,
                                            }}
                                            className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
                                        >
                                            <div className="text-[10px] text-slate-500">
                                                WEBSITE
                                            </div>

                                            <div className="mt-1 text-sm font-semibold text-white">
                                                High Performance
                                            </div>
                                        </motion.div>


                                        <motion.div
                                            variants={itemVariants}
                                            whileHover={{
                                                y: -4,
                                            }}
                                            className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
                                        >
                                            <div className="text-[10px] text-slate-500">
                                                VISIBILITY
                                            </div>

                                            <div className="mt-1 text-sm font-semibold text-white">
                                                SEO Focused
                                            </div>
                                        </motion.div>

                                    </motion.div>

                                </div>

                            </div>


                            {/* Service Tags */}

                            <div className="mt-3 flex flex-wrap gap-2">

                                {[
                                    "Web Development",
                                    "SEO",
                                    "AI & Automation",
                                ].map((tag, index) => (
                                    <motion.span
                                        key={tag}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.8,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        transition={{
                                            delay: 1.4 + index * 0.1,
                                            duration: 0.5,
                                        }}
                                        whileHover={{
                                            y: -3,
                                            scale: 1.04,
                                        }}
                                        className={`rounded-full border px-3 py-1.5 text-[10px] font-medium ${
                                            index === 0
                                                ? "border-blue-400/10 bg-blue-500/[0.06] text-blue-300"
                                                : index === 1
                                                  ? "border-cyan-400/10 bg-cyan-500/[0.06] text-cyan-300"
                                                  : "border-white/[0.08] bg-white/[0.03] text-slate-400"
                                        }`}
                                    >
                                        {tag}
                                    </motion.span>
                                ))}

                            </div>

                        </motion.div>


                        {/* =================================================
                            FLOATING CARD 1
                        ================================================= */}

                        <motion.div
                            animate={{
                                y: [0, -12, 0],
                                rotate: [0, 1, 0],
                            }}
                            transition={{
                                duration: 4.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            whileHover={{
                                scale: 1.05,
                                y: -8,
                            }}
                            className="absolute -left-4 bottom-8 hidden rounded-2xl border border-cyan-400/20 bg-[#071A45]/90 px-4 py-3 shadow-2xl shadow-blue-950/50 backdrop-blur-xl sm:block"
                        >

                            <div className="flex items-center gap-3">

                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold">
                                    ✓
                                </div>

                                <div>
                                    <div className="text-xs font-bold text-white">
                                        Ready to Grow?
                                    </div>

                                    <div className="mt-0.5 text-[10px] text-slate-500">
                                        Let's build it.
                                    </div>
                                </div>

                            </div>

                        </motion.div>


                        {/* =================================================
                            FLOATING CARD 2
                        ================================================= */}

                        <motion.div
                            animate={{
                                y: [0, 10, 0],
                                rotate: [0, -1, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                            whileHover={{
                                scale: 1.05,
                                y: 6,
                            }}
                            className="absolute -right-3 top-12 hidden rounded-2xl border border-blue-400/20 bg-[#071A45]/90 px-4 py-3 shadow-2xl shadow-blue-950/50 backdrop-blur-xl sm:block"
                        >

                            <div className="flex items-center gap-2.5">

                                <motion.div
                                    animate={{
                                        scale: [1, 1.5, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                    className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
                                />

                                <div>

                                    <div className="text-xs font-bold text-white">
                                        Digital Solutions
                                    </div>

                                    <div className="text-[10px] text-slate-500">
                                        Built for growth
                                    </div>

                                </div>

                            </div>

                        </motion.div>

                    </motion.div>

                </div>

            </motion.div>


            {/* Bottom Fade */}

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050B1C] to-transparent" />

        </section>
    )
}

export default Hero