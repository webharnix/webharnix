import { motion } from "framer-motion"
import logo from "../assets/logo.png"

function Footer() {
    const year = new Date().getFullYear()

    const companyLinks = [
        { name: "About Us", href: "#about" },
        { name: "Our Work", href: "#work" },
        { name: "Our Process", href: "#process" },
        { name: "Pricing", href: "#pricing" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" },
    ]

    const services = [
        "Web Development",
        "SEO & Digital Marketing",
        "E-Commerce",
        "Software Development",
        "App Development",
        "AI & Automation",
    ]

    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-[#050B1C]">

            {/* ================= BACKGROUND ================= */}

            <div className="pointer-events-none absolute inset-0">

                <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[150px]" />

                <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-400/[0.05] blur-[130px]" />

                <div className="absolute right-[-150px] top-1/3 h-[400px] w-[400px] rounded-full bg-blue-500/[0.05] blur-[130px]" />

                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

            </div>


            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">


                {/* ================= PREMIUM CTA ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative mt-12 overflow-hidden rounded-[32px] border border-cyan-400/10 bg-gradient-to-br from-[#0B255A] via-[#081A3C] to-[#061128] p-7 shadow-2xl shadow-blue-950/40 sm:p-10 lg:p-14"
                >

                    {/* CTA Glow */}

                    <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />

                    <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[110px]" />


                    {/* Decorative Lines */}

                    <div className="pointer-events-none absolute right-8 top-8 hidden opacity-20 lg:block">

                        <div className="h-20 w-20 rotate-45 rounded-2xl border border-cyan-300/30" />

                        <div className="absolute left-8 top-8 h-20 w-20 rotate-45 rounded-2xl border border-blue-400/20" />

                    </div>


                    <div className="relative flex flex-col items-start justify-between gap-9 lg:flex-row lg:items-center">

                        <div className="max-w-2xl">

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                                className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300"
                            >

                                <span className="relative flex h-2 w-2">

                                    <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />

                                    <span className="relative h-2 w-2 rounded-full bg-cyan-400" />

                                </span>

                                Start a Project

                            </motion.div>


                            <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">

                                Have an idea?

                                <span className="mt-1 block bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                                    Let's build it.
                                </span>

                            </h2>


                            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                                From websites and apps to powerful business
                                solutions — let's turn your idea into a
                                digital experience that stands out.
                            </p>

                        </div>


                        <motion.a
                            href="#contact"
                            whileHover={{
                                scale: 1.04,
                                y: -4,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            className="group relative flex shrink-0 items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-4 font-bold text-white shadow-xl shadow-blue-500/20"
                        >

                            <span className="relative z-10">
                                Let's Talk
                            </span>

                            <span className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>

                            <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />

                        </motion.a>

                    </div>

                </motion.div>


                {/* ================= MAIN FOOTER ================= */}

                <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:py-20">


                    {/* ================= BRAND ================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                    >

                        <a
                            href="#home"
                            className="group inline-flex"
                        >

                            <img
                                src={logo}
                                alt="WebHarnix"
                                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                            />

                        </a>


                        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
                            WebHarnix helps businesses build modern websites,
                            powerful software, mobile applications and
                            digital experiences that grow.
                        </p>


                        {/* SOCIAL ICONS */}

                        <div className="mt-7 flex gap-3">


                            {/* INSTAGRAM */}

                            <SocialIcon
                                href="https://instagram.com/webharnix/"
                                label="Instagram"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-[19px] w-[19px]"
                                >
                                    <rect
                                        x="3"
                                        y="3"
                                        width="18"
                                        height="18"
                                        rx="5"
                                    />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle
                                        cx="17.5"
                                        cy="6.5"
                                        r="1"
                                        fill="currentColor"
                                        stroke="none"
                                    />
                                </svg>
                            </SocialIcon>


                            {/* FACEBOOK */}

                            <SocialIcon
                                href="https://facebook.com/webharnix/"
                                label="Facebook"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-[19px] w-[19px]"
                                >
                                    <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1Z" />
                                </svg>
                            </SocialIcon>


                            {/* YOUTUBE */}

                            <SocialIcon
                                href="https://youtube.com/@webharnix/"
                                label="YouTube"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-[20px] w-[20px]"
                                >
                                    <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C1.9 9 1.9 12 1.9 12s0 3 .5 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2c.5-1.8.5-4.8.5-4.8s0-3-.5-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
                                </svg>
                            </SocialIcon>


                            {/* WHATSAPP */}

                            <SocialIcon
                                href="https://wa.me/9813970731/"
                                label="WhatsApp"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-[19px] w-[19px]"
                                >
                                    <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
                                    <path d="M8.5 8.5c.3-.4.7-.4 1-.1l1 1c.3.3.3.6.1.9l-.5.6c.7 1.2 1.7 2.2 3 2.9l.6-.5c.3-.2.6-.2.9.1l1 1c.3.3.3.7-.1 1-1 .8-2.1.6-3.2.1-1.7-.8-3.4-2.5-4.2-4.2-.5-1.1-.7-2.2.4-2.8Z" />
                                </svg>
                            </SocialIcon>

                        </div>


                        {/* MINI CONTACT */}

                        <div className="mt-7 space-y-3">

                            <a
                                href="mailto:hello@webharnix.com"
                                className="group flex w-fit items-center gap-3 text-sm text-slate-500 transition hover:text-cyan-300"
                            >

                                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-xs">
                                    @
                                </span>

                                hello@webharnix.com

                            </a>


                            <a
                                href="#contact"
                                className="group flex w-fit items-center gap-3 text-sm text-slate-500 transition hover:text-cyan-300"
                            >

                                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-xs">
                                    →
                                </span>

                                Get in touch

                            </a>

                        </div>

                    </motion.div>


                    {/* ================= COMPANY ================= */}

                    <FooterColumn
                        title="Company"
                        delay={0.1}
                    >

                        {companyLinks.map((item) => (

                            <FooterLink
                                key={item.name}
                                href={item.href}
                            >
                                {item.name}
                            </FooterLink>

                        ))}

                    </FooterColumn>


                    {/* ================= SERVICES ================= */}

                    <FooterColumn
                        title="Services"
                        delay={0.2}
                    >

                        {services.map((service) => (

                            <FooterLink
                                key={service}
                                href="#services"
                            >
                                {service}
                            </FooterLink>

                        ))}

                    </FooterColumn>


                    {/* ================= CONNECT ================= */}

                    <FooterColumn
                        title="Let's Connect"
                        delay={0.3}
                    >

                        <p className="max-w-xs text-sm leading-7 text-slate-500">
                            Ready to take your business online?
                            Let's create something meaningful together.
                        </p>


                        <motion.a
                            href="#contact"
                            whileHover={{ x: 4 }}
                            className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
                        >

                            Start a conversation

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>

                        </motion.a>


                        {/* Availability */}

                        <div className="mt-7 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">

                            <div className="flex items-center gap-3">

                                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10">

                                    <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-cyan-400/40" />

                                    <span className="relative h-2.5 w-2.5 rounded-full bg-cyan-400" />

                                </div>


                                <div>

                                    <p className="text-xs font-semibold text-white">
                                        Available for projects
                                    </p>

                                    <p className="mt-1 text-[11px] text-slate-600">
                                        Let's build something great.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </FooterColumn>

                </div>


                {/* ================= BOTTOM BAR ================= */}

                <div className="border-t border-white/[0.07] py-6">

                    <div className="flex flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between">

                        <p className="text-slate-600">
                            © {year} WebHarnix. All rights reserved.
                        </p>


                        <div className="flex flex-wrap items-center gap-5">

                            <a
                                href="#home"
                                className="text-slate-600 transition hover:text-slate-300"
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="#home"
                                className="text-slate-600 transition hover:text-slate-300"
                            >
                                Terms
                            </a>

                            <span className="hidden h-3 w-px bg-white/10 sm:block" />

                            <span className="font-medium text-slate-500">
                                Build. Grow. Go Digital.
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    )
}


/* =========================================================
   SOCIAL ICON
========================================================= */

function SocialIcon({ href, label, children }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            whileHover={{
                y: -5,
                scale: 1.06,
            }}
            whileTap={{
                scale: 0.94,
            }}
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-slate-400 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10"
        >

            <span className="transition-transform duration-300 group-hover:scale-110">
                {children}
            </span>

        </motion.a>
    )
}


/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({ title, delay = 0, children }) {
    return (
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
                duration: 0.7,
                delay,
            }}
        >

            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
                {title}
            </h3>

            <div className="mt-6 space-y-4">
                {children}
            </div>

        </motion.div>
    )
}


/* =========================================================
   FOOTER LINK
========================================================= */

function FooterLink({ href, children }) {
    return (
        <a
            href={href}
            className="group flex w-fit items-center gap-2 text-sm text-slate-500 transition-colors duration-300 hover:text-cyan-300"
        >

            <span className="h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-3" />

            <span>
                {children}
            </span>

        </a>
    )
}


export default Footer