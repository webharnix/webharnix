import { motion } from "framer-motion"

const reasons = [
    {
        number: "01",
        title: "Business First",
        text: "We understand your business goals first, then build the right digital solution around them.",
        label: "Strategy",
    },
    {
        number: "02",
        title: "Modern Technology",
        text: "We use modern technologies to create fast, scalable and reliable digital experiences.",
        label: "Technology",
    },
    {
        number: "03",
        title: "Clean Design",
        text: "Every interface is designed to look professional, feel simple and work beautifully.",
        label: "Design",
    },
    {
        number: "04",
        title: "Long-Term Growth",
        text: "Our goal isn't just to launch a website. We build digital foundations that can grow with your business.",
        label: "Growth",
    },
]

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 45,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

function WhyUs() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#050B1C] py-24 sm:py-32"
        >

            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <div className="pointer-events-none absolute inset-0">

                <motion.div
                    animate={{
                        scale: [1, 1.18, 1],
                        opacity: [0.08, 0.18, 0.08],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -left-56 top-[20%] h-[550px] w-[550px] rounded-full bg-blue-600 blur-[150px]"
                />

                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -right-56 bottom-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.07] blur-[150px]"
                />

                {/* subtle grid */}

                <div
                    className="absolute inset-0 opacity-[0.10]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)
                        `,
                        backgroundSize: "55px 55px",
                    }}
                />

            </div>


            {/* =====================================================
                CONTENT
            ===================================================== */}

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">


                {/* =================================================
                    HEADER
                ================================================= */}

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
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 0.75,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto max-w-3xl text-center"
                >

                    {/* Badge */}

                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-md">

                        <span className="relative flex h-2 w-2">

                            <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />

                            <span className="relative h-2 w-2 rounded-full bg-cyan-400" />

                        </span>

                        Why WebHarnix

                    </div>


                    {/* Heading */}

                    <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">

                        We don't just build.

                        <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                            We build for growth.
                        </span>

                    </h2>


                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                        Your digital presence should do more than look good.
                        It should help your business move forward.
                    </p>

                </motion.div>


                {/* =================================================
                    MAIN CONTENT
                ================================================= */}

                <div className="mt-16 grid gap-6 lg:grid-cols-12">


                    {/* =================================================
                        FEATURE CARD
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                            y: -5,
                        }}
                        className="group relative overflow-hidden rounded-[30px] border border-white/[0.07] bg-[#071329]/80 p-8 shadow-2xl shadow-black/10 backdrop-blur-xl lg:col-span-5 lg:p-10"
                    >

                        {/* Card glow */}

                        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/[0.08] blur-[90px] transition-all duration-700 group-hover:bg-cyan-400/[0.14]" />

                        <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-blue-600/[0.08] blur-[90px]" />


                        <div className="relative">


                            {/* top */}

                            <div className="flex items-center justify-between">

                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                                    WebHarnix
                                </span>

                                <span className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-[10px] font-medium text-slate-500">
                                    2026
                                </span>

                            </div>


                            {/* Main */}

                            <div className="mt-20">

                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                                    Our approach
                                </p>

                                <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">

                                    Digital work that

                                    <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                                        actually matters.
                                    </span>

                                </h3>

                                <p className="mt-5 text-sm leading-7 text-slate-400">
                                    We combine strategy, design and technology
                                    to create digital experiences that are
                                    built around real business goals.
                                </p>

                            </div>


                            {/* Growth visual */}

                            <div className="mt-10">

                                <div className="mb-3 flex items-center justify-between">

                                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600">
                                        Digital Growth
                                    </span>

                                    <span className="text-[10px] font-bold text-cyan-400">
                                        +100%
                                    </span>

                                </div>


                                <div className="flex h-28 items-end gap-2">

                                    {[25, 38, 32, 51, 45, 70, 62, 86, 100].map(
                                        (height, index) => (

                                            <motion.div
                                                key={index}
                                                initial={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                whileInView={{
                                                    height: `${height}%`,
                                                    opacity: 1,
                                                }}
                                                viewport={{
                                                    once: true,
                                                }}
                                                transition={{
                                                    duration: 0.65,
                                                    delay: index * 0.07,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                                className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600/20 via-blue-500/50 to-cyan-300/90"
                                            />

                                        )
                                    )}

                                </div>


                                <div className="mt-3 flex justify-between text-[9px] font-medium uppercase tracking-[0.18em] text-slate-700">
                                    <span>Start</span>
                                    <span>Growth</span>
                                </div>

                            </div>


                            {/* bottom */}

                            <div className="mt-8 flex items-center gap-3 border-t border-white/[0.06] pt-6">

                                <div className="flex -space-x-2">

                                    <span className="h-7 w-7 rounded-full border-2 border-[#071329] bg-blue-500" />

                                    <span className="h-7 w-7 rounded-full border-2 border-[#071329] bg-cyan-400" />

                                    <span className="h-7 w-7 rounded-full border-2 border-[#071329] bg-indigo-500" />

                                </div>

                                <span className="text-xs text-slate-500">
                                    Built for ambitious businesses
                                </span>

                            </div>

                        </div>

                    </motion.div>


                    {/* =================================================
                        REASONS
                    ================================================= */}

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
                        whileInView="show"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        className="grid gap-4 sm:grid-cols-2 lg:col-span-7"
                    >

                        {reasons.map((reason) => (

                            <motion.div
                                key={reason.number}
                                variants={cardVariants}
                                whileHover={{
                                    y: -7,
                                }}
                                className="group relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#071329]/70 p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/20 hover:bg-[#091A38]/90 hover:shadow-xl hover:shadow-blue-950/20"
                            >

                                {/* hover glow */}

                                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/[0.07] blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />


                                {/* top */}

                                <div className="relative flex items-center justify-between">

                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/10 bg-cyan-400/[0.05] text-[10px] font-bold text-cyan-400">
                                        {reason.number}
                                    </span>

                                    <span className="text-xs uppercase tracking-[0.15em] text-slate-700 transition-colors duration-300 group-hover:text-cyan-400/60">
                                        {reason.label}
                                    </span>

                                </div>


                                {/* content */}

                                <div className="relative">

                                    <h3 className="mt-8 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-200">
                                        {reason.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                                        {reason.text}
                                    </p>

                                </div>


                                {/* arrow */}

                                <div className="relative mt-6 flex items-center justify-between">

                                    <div className="h-px w-10 bg-cyan-400/20 transition-all duration-500 group-hover:w-24 group-hover:bg-cyan-400/60" />

                                    <span className="text-lg text-slate-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
                                        →
                                    </span>

                                </div>

                            </motion.div>

                        ))}

                    </motion.div>

                </div>


                {/* =================================================
                    STATS
                ================================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="mt-16 grid overflow-hidden rounded-[26px] border border-white/[0.07] bg-white/[0.02] backdrop-blur-xl sm:grid-cols-3"
                >

                    <Stat
                        value="10+"
                        label="Projects"
                    />

                    <Stat
                        value="24/7"
                        label="Support"
                        border
                    />

                    <Stat
                        value="100%"
                        label="Digital Focus"
                    />

                </motion.div>

            </div>

        </section>
    )
}


/* =========================================================
   STAT COMPONENT
========================================================= */

function Stat({ value, label, border }) {
    return (
        <motion.div
            whileHover={{
                backgroundColor: "rgba(34,211,238,0.025)",
            }}
            className={`group relative p-7 text-center transition-colors duration-300 ${
                border
                    ? "border-b border-white/[0.07] sm:border-b-0 sm:border-r"
                    : ""
            }`}
        >

            <div className="text-3xl font-black text-white transition-all duration-300 group-hover:text-cyan-300 sm:text-4xl">
                {value}
            </div>

            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600 transition-colors duration-300 group-hover:text-slate-500">
                {label}
            </p>

        </motion.div>
    )
}

export default WhyUs