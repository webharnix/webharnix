import { motion } from "framer-motion"
import { useState } from "react"

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        message: "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const text = `Hello WebHarnix 👋

Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}

Project Details:
${formData.message}`

        const whatsappUrl = `https://wa.me/919813970731?text=${encodeURIComponent(
            text
        )}`

        window.open(whatsappUrl, "_blank")
    }

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#050B1C] py-24 sm:py-32"
        >
            {/* ================= BACKGROUND ================= */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 80, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]"
                />

                <motion.div
                    animate={{
                        x: [0, -70, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[130px]"
                />

                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
                        backgroundSize: "55px 55px",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                {/* ================= HEADER ================= */}

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
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto max-w-3xl text-center"
                >
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
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                            <span className="relative h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                        </span>

                        Get In Touch
                    </motion.div>

                    <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Let's build something
                        <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                            great together.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                        Have an idea, business or project in mind?
                        Tell us what you're building and let's turn it
                        into a powerful digital experience.
                    </p>
                </motion.div>

                {/* ================= CONTACT GRID ================= */}

                <div className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                    {/* ================= LEFT CARD ================= */}

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
                        className="group relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#07142F]/75 p-7 backdrop-blur-xl sm:p-8"
                    >

                        {/* Card Glow */}

                        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-[90px] transition duration-700 group-hover:bg-cyan-400/15" />

                        <div className="relative">

                            <div className="mb-6 flex items-center gap-3">

                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-black text-white shadow-lg shadow-cyan-500/20">
                                    W
                                </div>

                                <div>
                                    <div className="font-bold text-white">
                                        WebHarnix
                                    </div>

                                    <div className="text-xs text-slate-500">
                                        Digital Solutions
                                    </div>
                                </div>

                            </div>

                            <h3 className="text-2xl font-bold text-white">
                                Let's talk about your idea.
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                Whether you need a website, software,
                                mobile app, SEO or automation solution,
                                we're ready to help you build it.
                            </p>

                            {/* WhatsApp */}

                            <motion.a
                                href="https://wa.me/919813970731"
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{
                                    y: -4,
                                    scale: 1.01,
                                }}
                                whileTap={{
                                    scale: 0.98,
                                }}
                                className="group/link mt-8 flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
                            >

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                                    💬
                                </div>

                                <div className="min-w-0">
                                    <div className="text-xs text-slate-500">
                                        WhatsApp
                                    </div>

                                    <div className="mt-1 text-sm font-semibold text-white transition group-hover/link:text-cyan-300">
                                        Chat with us →
                                    </div>
                                </div>

                            </motion.a>

                            {/* Email */}

                            <motion.a
                                href="mailto:hello@webharnix.com"
                                whileHover={{
                                    y: -4,
                                    scale: 1.01,
                                }}
                                whileTap={{
                                    scale: 0.98,
                                }}
                                className="group/link mt-3 flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition duration-300 hover:border-blue-400/30 hover:bg-blue-400/[0.04]"
                            >

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-400/10 text-xl">
                                    ✉
                                </div>

                                <div className="min-w-0">
                                    <div className="text-xs text-slate-500">
                                        Email
                                    </div>

                                    <div className="mt-1 break-all text-sm font-semibold text-white transition group-hover/link:text-cyan-300">
                                        hello@webharnix.com
                                    </div>
                                </div>

                            </motion.a>

                            {/* Response Card */}

                            <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.05] to-blue-500/[0.05] p-5">

                                <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">

                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                                        <span className="relative h-2 w-2 rounded-full bg-cyan-400" />
                                    </span>

                                    Usually responds quickly
                                </div>

                                <p className="mt-2 text-xs leading-6 text-slate-500">
                                    Send your requirements and we'll
                                    get back to you with the next steps.
                                </p>

                            </div>

                        </div>
                    </motion.div>

                    {/* ================= FORM ================= */}

                    <motion.form
                        initial={{
                            opacity: 0,
                            x: 50,
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
                        onSubmit={handleSubmit}
                        className="group relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#07142F]/75 p-7 backdrop-blur-xl sm:p-8"
                    >

                        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-[90px]" />

                        <div className="relative">

                            <div className="mb-7">

                                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                                    Project Enquiry
                                </div>

                                <h3 className="mt-2 text-2xl font-bold text-white">
                                    Tell us what you're building.
                                </h3>

                            </div>

                            <div className="grid gap-5">

                                {/* NAME + EMAIL */}

                                <div className="grid gap-5 sm:grid-cols-2">

                                    <div>
                                        <label className="mb-2 block text-xs font-semibold text-slate-400">
                                            Your Name
                                        </label>

                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your name"
                                            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-cyan-400/[0.03] focus:ring-2 focus:ring-cyan-400/10"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-xs font-semibold text-slate-400">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="you@example.com"
                                            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-cyan-400/[0.03] focus:ring-2 focus:ring-cyan-400/10"
                                        />
                                    </div>

                                </div>

                                {/* SERVICE */}

                                <div>

                                    <label className="mb-2 block text-xs font-semibold text-slate-400">
                                        What do you need?
                                    </label>

                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-[#07142F] px-4 py-3.5 text-sm text-slate-300 outline-none transition duration-300 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                                    >
                                        <option value="">
                                            Select a service
                                        </option>

                                        <option value="Web Development">
                                            Web Development
                                        </option>

                                        <option value="SEO">
                                            SEO
                                        </option>

                                        <option value="E-Commerce">
                                            E-Commerce
                                        </option>

                                        <option value="Software Development">
                                            Software Development
                                        </option>

                                        <option value="App Development">
                                            App Development
                                        </option>

                                        <option value="AI & Automation">
                                            AI & Automation
                                        </option>
                                    </select>

                                </div>

                                {/* MESSAGE */}

                                <div>

                                    <label className="mb-2 block text-xs font-semibold text-slate-400">
                                        Project Details
                                    </label>

                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        placeholder="Tell us about your project..."
                                        className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-cyan-400/[0.03] focus:ring-2 focus:ring-cyan-400/10"
                                    />

                                </div>

                                {/* BUTTON */}

                                <motion.button
                                    type="submit"
                                    whileHover={{
                                        y: -3,
                                        scale: 1.01,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    className="relative mt-1 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:shadow-xl hover:shadow-cyan-400/20"
                                >
                                    <span className="relative z-10">
                                        Send Project Enquiry
                                    </span>

                                    <span className="relative z-10 text-lg">
                                        →
                                    </span>

                                    <motion.span
                                        animate={{
                                            x: ["-120%", "120%"],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        className="absolute inset-y-0 w-20 bg-white/20 blur-xl"
                                    />

                                </motion.button>

                                <p className="text-center text-[11px] text-slate-600">
                                    Your enquiry will open directly in WhatsApp.
                                </p>

                            </div>
                        </div>
                    </motion.form>

                </div>

                {/* ================= BOTTOM CTA ================= */}

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
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="mx-auto mt-10 max-w-6xl rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-5 text-center"
                >
                    <p className="text-sm text-slate-500">
                        Ready to take your business online?
                        <span className="ml-2 font-semibold text-cyan-300">
                            Let's build it together.
                        </span>
                    </p>
                </motion.div>

            </div>
        </section>
    )
}

export default Contact