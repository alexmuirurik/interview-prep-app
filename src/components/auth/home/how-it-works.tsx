"use client"

import { motion } from "framer-motion"

const steps = [
    "Select your target role and company",
    "Choose your experience level",
    "Get tailored practice questions",
    "Record or type your responses",
    "Review and refine your answers",
]

const HowItWorks = () => {
    return (
        <section className="bg-violet-200 border-t border-border px-6 py-20">
            <div className="mx-auto max-w-5xl">
                <h2 className="font-display mb-12 text-center text-3xl font-bold">
                    How It Works
                </h2>
                <div className="space-y-4">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="flex items-center gap-4 rounded-lg border border-teal-700 bg-background p-4"
                        >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                                <span className="text-sm font-semibold text-accent">
                                    {i + 1}
                                </span>
                            </div>
                            <span className="text-sm text-foreground">
                                {step}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
