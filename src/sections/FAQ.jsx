import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
    {
        question: "What services does WebHarnix provide?",
        answer:
            "WebHarnix provides web development, SEO, e-commerce development, software development, app development, AI and automation solutions.",
    },
    {
        question: "How much does a website cost?",
        answer:
            "The cost depends on the type of website, features, design and integrations required. We offer flexible packages as well as completely custom solutions.",
    },
    {
        question: "How long does it take to build a website?",
        answer:
            "A basic business website can usually be completed quickly, while larger websites and custom software may require more time. The exact timeline is decided after understanding your requirements.",
    },
    {
        question: "Can you redesign my existing website?",
        answer:
            "Yes. We can redesign an existing website with a modern UI, better performance, responsive design and improved user experience.",
    },
    {
        question: "Do you provide SEO services?",
        answer:
            "Yes. We can help improve your website's technical SEO, structure, performance and search visibility.",
    },
    {
        question: "Can you build custom software for my business?",
        answer:
            "Yes. WebHarnix can build custom dashboards, business systems, automation tools and other software based on your workflow.",
    },
    {
        question: "Do you provide support after the project is completed?",
        answer:
            "Yes. Support and maintenance options can be discussed depending on the project and your requirements.",
    },
    {
        question: "How can I start a project with WebHarnix?",
        answer:
            "Simply contact us through the contact section and tell us about your idea, business and requirements. We'll discuss the project with you and decide the next steps.",
    },
]

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section
            id="faq"
            className="relative overflow-hidden bg-[#050B1C] py-24 sm:py-32"
        >
            {/* Background Glow */}

            <motion.div
                animate={{
                    y: [0, -40, 0],
                    opacity: [0.08, 0.16, 0.08],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]"
            />

            <div className="relative mx-auto max-w-4xl px-5 sm:px-6">

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
                    className="text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                        FAQ
                    </div>

                    <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Questions?
                        <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                            We've got answers.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                        Everything you need to know before starting your
                        project with WebHarnix.
                    </p>
                </motion.div>


                {/* FAQ LIST */}

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
                                staggerChildren: 0.08,
                            },
                        },
                    }}
                    className="mt-14 space-y-3"
                >

                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index

                        return (
                            <motion.div
                                key={faq.question}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 25,
                                    },
                                    show: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5,
                                        },
                                    },
                                }}
                                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                                    isOpen
                                        ? "border-cyan-400/25 bg-[#071A3B]"
                                        : "border-white/[0.07] bg-[#07142F]/60 hover:border-white/15"
                                }`}
                            >

                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(index)}
                                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                                >

                                    <span
                                        className={`text-sm font-semibold transition-colors duration-300 sm:text-base ${
                                            isOpen
                                                ? "text-cyan-300"
                                                : "text-white"
                                        }`}
                                    >
                                        {faq.question}
                                    </span>

                                    <motion.span
                                        animate={{
                                            rotate: isOpen ? 45 : 0,
                                        }}
                                        transition={{
                                            duration: 0.25,
                                        }}
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg ${
                                            isOpen
                                                ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                                                : "border-white/10 bg-white/[0.03] text-slate-400"
                                        }`}
                                    >
                                        +
                                    </motion.span>

                                </button>


                                <AnimatePresence initial={false}>
                                    {isOpen && (
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
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <div className="border-t border-white/[0.06] px-5 pb-5 pt-4 sm:px-6">
                                                <p className="text-sm leading-7 text-slate-400">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </motion.div>
                        )
                    })}

                </motion.div>


                {/* BOTTOM CTA */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="mt-12 text-center"
                >
                    <p className="text-sm text-slate-500">
                        Still have a question?
                    </p>

                    <a
                        href="#contact"
                        className="mt-2 inline-block font-semibold text-cyan-300 transition hover:text-cyan-200"
                    >
                        Talk to WebHarnix →
                    </a>
                </motion.div>

            </div>
        </section>
    )
}

export default FAQ