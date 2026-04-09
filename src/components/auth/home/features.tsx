"use client"

import { motion } from "framer-motion"
import { Brain, Mic, Target } from "lucide-react"

const features = [
    {
        icon: Target,
        title: "Tailored Questions",
        description:
            "Get questions customized to your role, company, and experience level.",
    },
    {
        icon: Mic,
        title: "Practice Recording",
        description:
            "Record audio responses or type out your answers for each question.",
    },
    {
        icon: Brain,
        title: "Smart Difficulty",
        description:
            "Questions adapt to your expertise — from junior to director level.",
    },
]

const Features = () => {
    return (
        <section className="border-t border-border px-6 py-48">
            <div className="mx-auto max-w-7xl">
                <h2 className="font-display mb-12 text-center text-3xl text-foreground font-bold">
                    Everything You Need to Prepare
                </h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="rounded-xl border border-amber-500 bg-card p-6"
                        >
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                                <feature.icon className="text-amber-500 h-8 w-8 border rounded-full border-amber-500 p-2" />
                            </div>
                            <h3 className="font-display mb-2 text-lg text-amber-950 font-bold">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
