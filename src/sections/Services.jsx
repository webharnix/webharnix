import { motion } from "framer-motion"

const services = [
    {
        number: "01",
        title: "Web Development",
        shortTitle: "Web",
        description:
            "Fast, responsive and modern websites designed around your business and built to convert visitors into customers.",
        tags: ["React", "Responsive", "Modern UI"],
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-7 w-7"
            >
                <rect x="3" y="4" width="18" height="16" rx="2.5" />
                <path d="M3 8h18" />
                <path d="m8 13-2 2 2 2" />
                <path d="m16 13 2 2-2 2" />
                <path d="m13.5 12-3 6" />
            </svg>
        ),
    },

    {
        number: "02",
        title: "SEO",
        shortTitle: "SEO",
        description:
            "Improve your search visibility, reach the right audience and build a stronger online presence.",
        tags: ["Google", "Visibility", "Growth"],
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-7 w-7"
            >
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="m16 16 5 5" />
                <path d="M8 12l2-2 1.5 1.5L14 9" />
            </svg>
        ),
    },

    {
        number: "03",
        title: "E-Commerce",
        shortTitle: "Store",
        description:
            "Build powerful online stores with a smooth shopping experience designed to turn visitors into customers.",
        tags: ["Online Store", "Payments", "Products"],
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-7 w-7"
            >
                <path d="M4 9h16l-1 11H5L4 9Z" />
                <path d="M8 9a4 4 0 0 1 8 0" />
                <path d="M9 13v3" />
                <path d="M15 13v3" />
            </svg>
        ),
    },

    {
        number: "04",
        title: "Software Development",
        shortTitle: "Software",
        description:
            "Custom software and business systems built around your workflow, requirements and long-term goals.",
        tags: ["Custom", "Business", "Scalable"],
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-7 w-7"
            >
                <rect x="3" y="4" width="18" height="16" rx="2.5" />
                <path d="M3 8h18" />
                <path d="m8 13-2 2 2 2" />
                <path d="m16 13 2 2-2 2" />
            </svg>
        ),
    },

    {
        number: "05",
        title: "App Development",
        shortTitle: "Apps",
        description:
            "Modern mobile applications designed to provide smooth experiences across Android and future platforms.",
        tags: ["Mobile", "Android", "Modern"],
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-7 w-7"
            >
                <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
                <path d="M10 5h4" />
                <circle cx="12" cy="18.5" r=".8" fill="currentColor" />
            </svg>
        ),
    },

    {
        number: "06",
        title: "AI & Automation",
        shortTitle: "AI",
        description:
            "Smart automation and AI-powered solutions that help businesses save time, reduce repetitive work and grow.",
        tags: ["AI", "Automation", "Smart"],
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-7 w-7"
            >
                <rect x="6" y="6" width="12" height="12" rx="3" />
                <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                <circle cx="10" cy="11" r="1" />
                <circle cx="14" cy="11" r="1" />
                <path d="M9.5 14h5" />
            </svg>
        ),
    },
]


const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}


const cardVariants = {
    hidden: {
        opacity: 0,
        y: 45,
        scale: 0.96,
    },

    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}


function Services() {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#050B1C] py-24 sm:py-28 lg:py-32"
        >

            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <div className="pointer-events-none absolute inset-0">

                {/* Top glow */}

                <div className="absolute left-1/2 top-[-180px] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/[0.10] blur-[150px]" />

                {/* Left glow */}

                <motion.div
                    animate={{
                        x: [0, 35, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -left-60 top-[35%] h-[450px] w-[450px] rounded-full bg-blue-600/[0.06] blur-[130px]"
                />

                {/* Right glow */}

                <motion.div
                    animate={{
                        x: [0, -35, 0],
                        y: [0, 25, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -right-60 bottom-[10%] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.05] blur-[130px]"
                />

                {/* Grid */}

                <div
                    className="absolute inset-0 opacity-[0.13]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(34,211,238,0.07) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34,211,238,0.07) 1px, transparent 1px)
                        `,
                        backgroundSize: "50px 50px",
                    }}
                />

            </div>


            {/* =====================================================
                CONTENT
            ===================================================== */}

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">


                {/* =================================================
                    SECTION HEADING
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
                    className="mx-auto mb-16 max-w-3xl text-center"
                >

                    {/* Badge */}

                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-md">

                        <span className="relative flex h-2 w-2">

                            <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />

                            <span className="relative h-2 w-2 rounded-full bg-cyan-400" />

                        </span>

                        What We Do

                    </div>


                    {/* Heading */}

                    <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">

                        Digital solutions for

                        <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                            modern businesses.
                        </span>

                    </h2>


                    {/* Description */}

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                        From websites and SEO to custom software and
                        AI-powered solutions, we build digital experiences
                        designed to help your business move forward.
                    </p>

                </motion.div>


                {/* =================================================
                    SERVICES GRID
                ================================================= */}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.08,
                    }}
                    className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
                >

                    {services.map((service) => (

                        <ServiceCard
                            key={service.number}
                            service={service}
                        />

                    ))}

                </motion.div>


                {/* =================================================
                    BOTTOM CTA
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
                        duration: 0.7,
                        delay: 0.15,
                    }}
                    className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-6 py-6 sm:flex-row sm:px-8"
                >

                    <div>

                        <p className="text-sm font-semibold text-white">
                            Not sure what your business needs?
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                            Tell us your idea and we'll help you find the right solution.
                        </p>

                    </div>


                    <a
                        href="#contact"
                        className="group flex shrink-0 items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-3 text-sm font-bold text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                    >

                        Let's Talk

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>

                    </a>

                </motion.div>

            </div>

        </section>
    )
}


/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({ service }) {
    return (
        <motion.article
            variants={cardVariants}
            whileHover={{
                y: -8,
                transition: {
                    duration: 0.25,
                },
            }}
            className="group relative"
        >

            {/* Animated border glow */}

            <div className="absolute -inset-[1px] rounded-[24px] bg-gradient-to-br from-blue-500/0 via-cyan-400/0 to-blue-500/0 opacity-0 blur-sm transition-all duration-500 group-hover:from-blue-500/40 group-hover:via-cyan-400/30 group-hover:to-blue-500/20 group-hover:opacity-100" />


            {/* Card */}

            <div className="relative h-full overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#071329]/80 p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-400/20 group-hover:bg-[#091A39]/90 group-hover:shadow-2xl group-hover:shadow-blue-950/30 sm:p-7">


                {/* Hover glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/[0.06] blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />


                {/* Number */}

                <div className="absolute right-6 top-5 select-none text-5xl font-black tracking-tight text-white/[0.035] transition-colors duration-500 group-hover:text-cyan-300/[0.07]">
                    {service.number}
                </div>


                {/* Icon */}

                <motion.div
                    whileHover={{
                        rotate: [0, -5, 5, 0],
                        scale: 1.08,
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                    className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-blue-500/15 to-cyan-400/[0.08] text-cyan-300 shadow-lg shadow-blue-950/20"
                >

                    {/* Icon glow */}

                    <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                    <span className="relative">
                        {service.icon}
                    </span>

                </motion.div>


                {/* Title */}

                <h3 className="relative mt-7 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-200">
                    {service.title}
                </h3>


                {/* Description */}

                <p className="relative mt-3 text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                    {service.description}
                </p>


                {/* Tags */}

                <div className="relative mt-6 flex flex-wrap gap-2">

                    {service.tags.map((tag) => (

                        <span
                            key={tag}
                            className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[10px] font-medium text-slate-500 transition-all duration-300 group-hover:border-cyan-400/10 group-hover:text-slate-400"
                        >
                            {tag}
                        </span>

                    ))}

                </div>


                {/* Bottom */}

                <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">

                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600">
                        {service.shortTitle}
                    </span>


                    <a
                        href="#contact"
                        aria-label={`Learn more about ${service.title}`}
                        className="group/arrow flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-slate-500 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >

                        <span className="transition-transform duration-300 group-hover/arrow:translate-x-0.5">
                            →
                        </span>

                    </a>

                </div>


                {/* Bottom cyan line */}

                <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-1/2" />

            </div>

        </motion.article>
    )
}


export default Services