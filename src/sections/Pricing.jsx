import { motion } from "framer-motion"

const plans = [
    {
        name: "Starter",
        price: "₹4,999",
        description: "For individuals and small businesses starting online.",
        features: [
            "Professional Website",
            "Responsive Design",
            "Basic SEO",
            "Contact Form",
            "Social Media Integration",
        ],
        popular: false,
    },
    {
        name: "Business",
        price: "₹9,999",
        description: "For businesses that want a stronger digital presence.",
        features: [
            "Everything in Starter",
            "Premium UI/UX Design",
            "Advanced SEO",
            "Performance Optimization",
            "Google Business Setup",
            "Priority Support",
        ],
        popular: true,
    },
    {
        name: "Custom",
        price: "Let's Talk",
        description: "For custom websites, software, apps and advanced solutions.",
        features: [
            "Custom Development",
            "Business Automation",
            "Custom Dashboard",
            "API Integrations",
            "AI & Automation",
            "Dedicated Support",
        ],
        popular: false,
    },
]

function Pricing() {
    return (
        <section
            id="pricing"
            className="relative overflow-hidden bg-[#050B1C] py-24 sm:py-32"
        >
            {/* Background */}

            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.08, 0.18, 0.08],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]"
            />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                {/* HEADER */}

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
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                        Simple Pricing
                    </div>

                    <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Choose the right
                        <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                            way to grow.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                        Flexible solutions for businesses at every stage.
                        Need something different? We can build it for you.
                    </p>
                </motion.div>


                {/* PRICING CARDS */}

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.1,
                    }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                    className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-3"
                >

                    {plans.map((plan) => (

                        <motion.div
                            key={plan.name}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 50,
                                },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.7,
                                        ease: [0.22, 1, 0.36, 1],
                                    },
                                },
                            }}
                            whileHover={{
                                y: plan.popular ? -10 : -7,
                            }}
                            className={`group relative rounded-[30px] ${
                                plan.popular
                                    ? "bg-gradient-to-b from-cyan-400/40 via-blue-500/20 to-transparent p-px"
                                    : "border border-white/[0.08]"
                            }`}
                        >

                            <div
                                className={`relative h-full overflow-hidden rounded-[29px] bg-[#07142F] p-7 sm:p-8 ${
                                    plan.popular
                                        ? "shadow-2xl shadow-cyan-950/30"
                                        : ""
                                }`}
                            >

                                {/* Popular */}

                                {plan.popular && (
                                    <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                                        Most Popular
                                    </div>
                                )}

                                {/* Glow */}

                                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 opacity-0 blur-[80px] transition duration-700 group-hover:opacity-100" />


                                <div className="relative">

                                    <p className="text-sm font-semibold text-cyan-300">
                                        {plan.name}
                                    </p>

                                    <h3 className="mt-5 text-4xl font-black text-white">
                                        {plan.price}
                                    </h3>

                                    <p className="mt-4 min-h-[56px] text-sm leading-7 text-slate-400">
                                        {plan.description}
                                    </p>


                                    {/* Button */}

                                    <motion.a
                                        href="#contact"
                                        whileTap={{
                                            scale: 0.97,
                                        }}
                                        className={`mt-7 flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-bold transition ${
                                            plan.popular
                                                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20 hover:shadow-cyan-400/20"
                                                : "border border-white/10 bg-white/[0.03] text-white hover:border-cyan-400/30 hover:bg-cyan-400/[0.05]"
                                        }`}
                                    >
                                        {plan.name === "Custom"
                                            ? "Discuss Your Project →"
                                            : "Get Started →"}
                                    </motion.a>


                                    {/* Divider */}

                                    <div className="my-7 h-px bg-white/[0.07]" />


                                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                                        What's included
                                    </p>


                                    {/* Features */}

                                    <div className="mt-5 space-y-4">

                                        {plan.features.map((feature) => (

                                            <div
                                                key={feature}
                                                className="flex items-start gap-3 text-sm text-slate-300"
                                            >
                                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs text-cyan-300">
                                                    ✓
                                                </span>

                                                <span>
                                                    {feature}
                                                </span>
                                            </div>

                                        ))}

                                    </div>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </motion.div>


                {/* NOTE */}

                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="mx-auto mt-10 max-w-2xl text-center text-xs leading-6 text-slate-600"
                >
                    Pricing is indicative and may vary depending on project
                    requirements, features and integrations.
                </motion.p>

            </div>
        </section>
    )
}

export default Pricing