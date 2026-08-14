
import { motion } from "framer-motion"

const projects = [
    {
        number: "01",
        category: "Web Development",
        title: "Modern Business Website",
        description:
            "A fast, responsive and conversion-focused website designed for a modern business.",
        tech: ["React", "Tailwind", "Vite"],
        accent: "cyan",
    },
    {
        number: "02",
        category: "SaaS / Web App",
        title: "Restaurant Management",
        description:
            "A digital restaurant solution with menu management, QR ordering and a smooth customer experience.",
        tech: ["React", "Node.js", "MongoDB"],
        accent: "blue",
    },
    {
        number: "03",
        category: "Business Software",
        title: "Invoice & Business System",
        description:
            "A practical business system designed to simplify invoices, records and everyday operations.",
        tech: ["React", "Express", "MongoDB"],
        accent: "cyan",
    },
    {
        number: "04",
        category: "Digital Product",
        title: "Resume Builder",
        description:
            "A clean and easy-to-use resume creation platform for building professional resumes.",
        tech: ["React", "Tailwind", "PDF"],
        accent: "blue",
    },
]

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.13,
        },
    },
}

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 55,
        scale: 0.96,
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

function Portfolio() {
    return (
        <section
            id="work"
            className="relative overflow-hidden bg-[#050B1C] py-24 sm:py-32"
        >

            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <div className="pointer-events-none absolute inset-0">

                <motion.div
                    animate={{
                        x: [0, 80, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.12, 1],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-[15%] top-[15%] h-[450px] w-[450px] rounded-full bg-blue-600/[0.09] blur-[140px]"
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
                    className="absolute right-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.06] blur-[140px]"
                />

                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(34,211,238,0.12) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34,211,238,0.12) 1px, transparent 1px)
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
                        y: 40,
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
                    className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
                >

                    <div className="max-w-3xl">

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

                            Selected Work

                        </motion.div>


                        {/* Heading */}

                        <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">

                            Work that speaks

                            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                                for itself.
                            </span>

                        </h2>


                        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                            A selection of digital experiences, websites and
                            business solutions built with modern technology.
                        </p>

                    </div>


                    {/* CTA */}

                    <motion.a
                        href="#contact"
                        whileHover={{
                            y: -3,
                        }}
                        whileTap={{
                            scale: 0.97,
                        }}
                        className="group inline-flex w-fit items-center gap-3 rounded-full border border-cyan-400/15 bg-white/[0.025] px-5 py-3 text-sm font-semibold text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
                    >

                        Start a project

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>

                    </motion.a>

                </motion.div>


                {/* =====================================================
                    PROJECT GRID
                ===================================================== */}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.08,
                    }}
                    className="mt-16 grid gap-6 lg:grid-cols-2"
                >

                    {projects.map((project) => (

                        <motion.article
                            key={project.number}
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                            }}
                            className="group relative overflow-hidden rounded-[30px] border border-white/[0.07] bg-[#071329]/75 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/20 hover:shadow-blue-950/30 sm:p-7"
                        >

                            {/* =================================================
                                CARD GLOW
                            ================================================= */}

                            <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-cyan-400/[0.07] blur-[100px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

                            <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-blue-600/[0.08] blur-[100px] opacity-0 transition-all duration-700 group-hover:opacity-100" />


                            {/* =================================================
                                TOP
                            ================================================= */}

                            <div className="relative flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400/70">
                                        {project.category}
                                    </span>

                                </div>


                                <span className="text-5xl font-black leading-none text-white/[0.035] transition-all duration-500 group-hover:text-cyan-300/[0.08]">
                                    {project.number}
                                </span>

                            </div>


                            {/* =================================================
                                PROJECT VISUAL
                            ================================================= */}

                            <div className="relative mt-6 h-56 overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#061536] via-[#071A45] to-[#061C2E]">

                                {/* grid */}

                                <div
                                    className="absolute inset-0 opacity-[0.16]"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
                                        backgroundSize: "34px 34px",
                                    }}
                                />


                                {/* animated light */}

                                <motion.div
                                    animate={{
                                        x: ["-100%", "200%"],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                        ease: "linear",
                                    }}
                                    className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-cyan-300/[0.06] to-transparent blur-xl"
                                />


                                {/* browser */}

                                <motion.div
                                    initial={{
                                        rotateX: 0,
                                        rotateY: 0,
                                    }}
                                    whileHover={{
                                        rotateX: 5,
                                        rotateY: -6,
                                        scale: 1.045,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-cyan-300/10 bg-[#081A3B]/95 shadow-2xl shadow-blue-950/70"
                                >

                                    {/* browser header */}

                                    <div className="flex h-7 items-center justify-between border-b border-white/[0.05] px-3">

                                        <div className="flex gap-1.5">

                                            <span className="h-1.5 w-1.5 rounded-full bg-red-400/50" />

                                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/50" />

                                            <span className="h-1.5 w-1.5 rounded-full bg-green-400/50" />

                                        </div>

                                        <div className="h-1.5 w-16 rounded-full bg-white/[0.06]" />

                                    </div>


                                    {/* browser content */}

                                    <div className="space-y-3 p-5">

                                        <div className="flex items-center justify-between">

                                            <div className="h-2.5 w-[32%] rounded-full bg-cyan-400/40" />

                                            <div className="h-2 w-12 rounded-full bg-white/[0.07]" />

                                        </div>


                                        <div className="grid grid-cols-3 gap-2">

                                            <motion.div
                                                animate={{
                                                    opacity: [0.35, 0.7, 0.35],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                }}
                                                className="h-16 rounded-lg bg-blue-500/15"
                                            />

                                            <div className="h-16 rounded-lg bg-cyan-400/10" />

                                            <motion.div
                                                animate={{
                                                    opacity: [0.3, 0.6, 0.3],
                                                }}
                                                transition={{
                                                    duration: 2.4,
                                                    repeat: Infinity,
                                                }}
                                                className="h-16 rounded-lg bg-blue-400/10"
                                            />

                                        </div>


                                        <div className="h-2 w-2/3 rounded-full bg-white/[0.08]" />

                                        <div className="h-2 w-1/2 rounded-full bg-white/[0.05]" />

                                    </div>

                                </motion.div>


                                {/* center glow */}

                                <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[60px]" />

                            </div>


                            {/* =================================================
                                CONTENT
                            ================================================= */}

                            <div className="relative mt-7">

                                <div className="flex items-start justify-between gap-5">

                                    <h3 className="text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-2xl">
                                        {project.title}
                                    </h3>

                                    <span className="mt-1 hidden rounded-full border border-cyan-400/10 bg-cyan-400/[0.04] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-cyan-400/60 sm:block">
                                        Project
                                    </span>

                                </div>


                                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                                    {project.description}
                                </p>

                            </div>


                            {/* =================================================
                                TECHNOLOGY
                            ================================================= */}

                            <div className="relative mt-6 flex flex-wrap gap-2">

                                {project.tech.map((item, index) => (

                                    <motion.span
                                        key={item}
                                        whileHover={{
                                            y: -2,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                        className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium text-slate-500 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04] hover:text-cyan-300"
                                    >
                                        {item}
                                    </motion.span>

                                ))}

                            </div>


                            {/* =================================================
                                FOOTER
                            ================================================= */}

                            <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">

                                <div className="flex items-center gap-2">

                                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/50" />

                                    <span className="text-[10px] uppercase tracking-[0.15em] text-slate-700">
                                        WebHarnix
                                    </span>

                                </div>


                                <motion.a
                                    href="#contact"
                                    whileHover={{
                                        x: 5,
                                    }}
                                    className="group/link flex items-center gap-2 text-xs font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                                >

                                    View Project

                                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                                        →
                                    </span>

                                </motion.a>

                            </div>

                        </motion.article>

                    ))}

                </motion.div>


                {/* =====================================================
                    BOTTOM CTA
                ===================================================== */}

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
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="mt-16 text-center"
                >

                    <p className="text-xs uppercase tracking-[0.18em] text-slate-700">
                        Have a project in mind?
                    </p>


                    <motion.a
                        href="#contact"
                        whileHover={{
                            scale: 1.02,
                        }}
                        className="mt-3 inline-block text-lg font-bold text-cyan-300 transition-colors duration-300 hover:text-cyan-200"
                    >
                        Let's create something remarkable
                        <span className="ml-2 inline-block transition-transform duration-300 hover:translate-x-1">
                            →
                        </span>
                    </motion.a>

                </motion.div>

            </div>

        </section>
    )
}

export default Portfolio