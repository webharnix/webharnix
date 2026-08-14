import { motion } from "framer-motion"

const points = [
    {
        number: "01",
        title: "Clear Communication",
        text: "We keep the project process simple, transparent and easy to understand.",
    },
    {
        number: "02",
        title: "Modern Technology",
        text: "We use modern tools and technologies to build fast, scalable digital products.",
    },
    {
        number: "03",
        title: "Business Focus",
        text: "Every solution is designed around your business goals, customers and growth.",
    },
]

const cardVariants = {
    hidden: {
        opacity: 0,
        x: 60,
        scale: 0.96,
    },
    show: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

function Testimonials() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#050B1C] py-24 sm:py-32"
        >
            {/* Ambient background */}

            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -60, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]"
            />

            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute -left-40 bottom-10 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[130px]"
            />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                {/* HEADER */}

                <motion.div
                    initial={{ opacity: 0, y: 45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-md"
                    >
                        <motion.span
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.5, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                            className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee]"
                        />

                        Why WebHarnix
                    </motion.div>

                    <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Built around your

                        <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                            success.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                        We don't just build digital products. We focus on
                        creating solutions that make your business better.
                    </p>
                </motion.div>


                {/* MAIN CARD */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 70,
                        scale: 0.96,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#07142F]/70 p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10 lg:p-12"
                >

                    {/* Moving glow */}

                    <motion.div
                        animate={{
                            x: ["-30%", "30%", "-30%"],
                            opacity: [0.15, 0.3, 0.15],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute left-1/2 top-0 h-40 w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[90px]"
                    />

                    {/* Top shine */}

                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

                    <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

                        {/* LEFT */}

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >

                            <motion.div
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="text-7xl font-black leading-none text-cyan-400/20 sm:text-8xl"
                            >
                                “
                            </motion.div>

                            <h3 className="-mt-5 text-2xl font-bold leading-snug text-white sm:text-3xl">
                                Your idea deserves more than just a website.
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-slate-400">
                                It deserves a digital experience that looks
                                professional, works smoothly and helps your
                                business move forward.
                            </p>

                            {/* Brand */}

                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.25 }}
                                className="mt-8 flex w-fit items-center gap-3"
                            >
                                <motion.div
                                    whileHover={{
                                        rotate: 8,
                                        scale: 1.08,
                                    }}
                                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-black text-white shadow-lg shadow-cyan-500/20"
                                >
                                    W
                                </motion.div>

                                <div>
                                    <div className="text-sm font-bold text-white">
                                        WebHarnix
                                    </div>

                                    <div className="text-xs text-slate-500">
                                        Digital Solutions
                                    </div>
                                </div>
                            </motion.div>

                        </motion.div>


                        {/* RIGHT */}

                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            variants={{
                                hidden: {},
                                show: {
                                    transition: {
                                        staggerChildren: 0.18,
                                    },
                                },
                            }}
                            className="space-y-4"
                        >

                            {points.map((point) => (
                                <motion.div
                                    key={point.number}
                                    variants={cardVariants}
                                    whileHover={{
                                        x: 8,
                                        scale: 1.015,
                                    }}
                                    transition={{
                                        duration: 0.25,
                                    }}
                                    className="group/item relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5 backdrop-blur-sm transition duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.04]"
                                >

                                    {/* Hover glow */}

                                    <div className="pointer-events-none absolute -right-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-cyan-400/10 opacity-0 blur-2xl transition duration-500 group-hover/item:opacity-100" />

                                    <div className="relative flex gap-4">

                                        {/* Number */}

                                        <motion.div
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 5,
                                            }}
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 text-xs font-bold text-cyan-300"
                                        >
                                            {point.number}
                                        </motion.div>

                                        <div>
                                            <h4 className="font-bold text-white transition duration-300 group-hover/item:text-cyan-300">
                                                {point.title}
                                            </h4>

                                            <p className="mt-1.5 text-sm leading-6 text-slate-500">
                                                {point.text}
                                            </p>
                                        </div>

                                    </div>

                                    {/* Bottom progress line */}

                                    <div className="mt-4 h-px w-0 bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-500 group-hover/item:w-full" />

                                </motion.div>
                            ))}

                        </motion.div>

                    </div>
                </motion.div>


                {/* STATS */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 35,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                    }}
                    className="mx-auto mt-10 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-md sm:grid-cols-4"
                >

                    {[
                        ["Fast", "Development"],
                        ["Modern", "Technology"],
                        ["Flexible", "Solutions"],
                        ["Long-Term", "Support"],
                    ].map(([top, bottom], index) => (

                        <motion.div
                            key={top}
                            whileHover={{
                                backgroundColor: "rgba(34,211,238,0.04)",
                            }}
                            className={`group px-4 py-7 text-center transition duration-300 ${
                                index !== 0
                                    ? "border-l border-white/[0.07]"
                                    : ""
                            }`}
                        >
                            <motion.div
                                whileHover={{ y: -2 }}
                                className="text-sm font-bold text-cyan-300"
                            >
                                {top}
                            </motion.div>

                            <div className="mt-1 text-xs text-slate-500">
                                {bottom}
                            </div>

                            <div className="mx-auto mt-3 h-px w-5 bg-cyan-400/20 transition-all duration-500 group-hover:w-10 group-hover:bg-cyan-400/60" />
                        </motion.div>

                    ))}

                </motion.div>

            </div>
        </section>
    )
}

export default Testimonials
