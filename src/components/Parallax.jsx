import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

function Parallax({
    children,
    distance = 60,
    className = "",
}) {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [distance, -distance]
    )

    return (
        <motion.div
            ref={ref}
            style={{ y }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default Parallax