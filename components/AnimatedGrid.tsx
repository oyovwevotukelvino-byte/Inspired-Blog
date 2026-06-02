'use client'
import { motion } from 'framer-motion'

export default function AnimatedGrid({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {Array.isArray(children) &&
        children.map((child, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
          >
            {child}
          </motion.div>
        ))}
    </motion.div>
  )
}