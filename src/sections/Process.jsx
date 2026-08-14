import { motion } from "framer-motion"

const steps = [
    {
        number: "01",
        title: "Discover",
        description:
            "We understand your business, goals, audience and requirements before starting the project.",
    },
    {
        number: "02",
        title: "Plan",
        description:
            "We create the structure, user experience and technology plan needed to turn your idea into reality.",
    },
    {
        number: "03",
        title: "Build",
        description:
            "Our team designs and develops your digital product with modern technology and attention to detail.",
    },
    {
        number: "04",
        title: "Launch & Grow",
        description:
            "After testing and optimization, we launch your project and help you continue improving it.",
    },
]

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.16,
        },
    },
}

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 55,
        scale: 0.95,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

function Process() {
    return (
        <section
            id="process"
            className="relative overflow-hidden bg-[#050B1C] py-24 sm:py-32"
        >

            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <div className="pointer-events-none absolute inset-0">

                <motion.div
                    animate={{
                        x: [0, 70, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.12, 1],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-[10%] top-[15%] h-[430px] w-[430px] rounded-full bg-blue-600/[0.08] blur-[130px]"
                />

                <motion.div
                    animate={{
                        x: [0, -70, 0],
                        y: [0, 40, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-[5%] bottom-[10%] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.06] blur-[130px]"
                />

                {/* Subtle grid */}

                <div
                    className="absolute inset-0 opacity-[0.045]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(34,211,238,0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34,211,238,0.15) 1px, transparent 1px)
                        `,
                        backgroundSize: "60px 60px",
                    }}
                />

            </div>


            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">


                {/* =====================================================
                    HEADER
                ===================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 45,
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
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto max-w-3xl text-center"
                >

                    {/* Badge */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-md"
                    >

                        <span className="relative flex h-2 w-2">

                            <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />

                            <span className="relative h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee]" />

                        </span>

                        How We Work

                    </motion.div>


                    {/* Heading */}

                    <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">

                        From idea to

                        <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                            digital reality.
                        </span>

                    </h2>


                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                        A simple and transparent process designed to turn
                        your ideas into digital products that actually work.
                    </p>

                </motion.div>


                {/* =====================================================
                    PROCESS TIMELINE
                ===================================================== */}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.1,
                    }}
                    className="relative mt-20"
                >

                    {/* Desktop timeline base */}

                    <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[39px] hidden h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent lg:block" />


                    {/* Animated line */}

                    <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[39px] hidden h-px overflow-hidden lg:block">

                        <motion.div
                            animate={{
                                x: ["-100%", "400%"],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                                repeatDelay: 1,
                            }}
                            className="h-full w-1/4 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-70 blur-[1px]"
                        />

                    </div>


                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                        {steps.map((step, index) => (

                            <motion.div
                                key={step.number}
                                variants={cardVariants}
                                className="group relative"
                            >

                                {/* =================================================
                                    NUMBER CIRCLE
                                ================================================= */}

                                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center">

                                    {/* Outer pulse */}

                                    <motion.div
                                        animate={{
                                            scale: [1, 1.12, 1],
                                            opacity: [0.25, 0.08, 0.25],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: index * 0.35,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute inset-0 rounded-full border border-cyan-400/30 bg-cyan-400/[0.04]"
                                    />


                                    {/* Main circle */}

                                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/20 bg-[#07142F] shadow-[0_0_35px_rgba(34,211,238,0.07)] transition-all duration-500 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_50px_rgba(34,211,238,0.18)]">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 text-sm font-black text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:from-blue-500/30 group-hover:to-cyan-400/30">
                                            {step.number}
                                        </div>

                                    </div>

                                </div>


                                {/* =================================================
                                    CARD
                                ================================================= */}

                                <motion.div
                                    whileHover={{
                                        y: -9,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="relative mt-7 overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#07142F]/65 p-6 text-center backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-400/20 group-hover:bg-[#081A3B]/80 group-hover:shadow-2xl group-hover:shadow-blue-950/20"
                                >

                                    {/* Card glow */}

                                    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/[0.08] blur-[60px] opacity-0 transition duration-500 group-hover:opacity-100" />


                                    {/* Step label */}

                                    <div className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400/50">
                                        Step {index + 1}
                                    </div>


                                    {/* Title */}

                                    <h3 className="relative mt-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                                        {step.title}
                                    </h3>


                                    {/* Description */}

                                    <p className="relative mt-3 text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                                        {step.description}
                                    </p>


                                    {/* Bottom indicator */}

                                    <div className="relative mx-auto mt-6 h-px w-8 bg-cyan-400/30 transition-all duration-500 group-hover:w-20 group-hover:bg-cyan-400/70" />

                                </motion.div>

                            </motion.div>

                        ))}

                    </div>

                </motion.div>


                {/* =====================================================
                    CTA
                ===================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 35,
                        scale: 0.97,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative mt-16 overflow-hidden rounded-[28px] border border-cyan-400/10 bg-gradient-to-r from-blue-500/[0.08] via-cyan-400/[0.05] to-blue-500/[0.08] px-6 py-9 text-center backdrop-blur-xl sm:px-10"
                >

                    {/* CTA glow */}

                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[80px]"
                    />


                    <div className="relative">

                        <div className="mx-auto mb-4 flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />


                        <h3 className="text-2xl font-bold text-white sm:text-3xl">
                            Have an idea?
                        </h3>


                        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
                            Let's turn your idea into something people
                            actually want to use.
                        </p>


                        <motion.a
                            href="#contact"
                            whileHover={{
                                y: -4,
                                scale: 1.02,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-shadow duration-300 hover:shadow-cyan-400/20"
                        >

                            Start Your Project

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>

                        </motion.a>

                    </div>

                </motion.div>

            </div>

        </section>
    )
}

export default Process
