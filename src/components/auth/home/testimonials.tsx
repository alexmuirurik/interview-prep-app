"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
    {
        name: "Sarah K.",
        role: "Software Engineer at Google",
        quote: "InterviewPrep helped me structure my behavioral answers. Got the offer on my first try!",
        rating: 5,
    },
    {
        name: "Marcus T.",
        role: "Product Manager at Stripe",
        quote: "The role-specific questions were exactly what I needed. Highly recommend.",
        rating: 5,
    },
    {
        name: "Priya R.",
        role: "Data Scientist at Meta",
        quote: "Being able to record myself and play it back was a game changer for my preparation.",
        rating: 5,
    },
]

const Testimonials = () => {
    return (
        <section className="border-t border-border px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <h2 className="font-display mb-12 text-center text-3xl text-foreground">
                    What Candidates Say
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="rounded-xl border border-amber-500 bg-card p-6"
                        >
                            <div className="mb-3 flex gap-0.5">
                                {Array.from({ length: t.rating }).map(
                                    (_, j) => (
                                        <Star
                                            key={j}
                                            className="h-4 w-4 fill-amber-500 text-amber-500"
                                        />
                                    )
                                )}
                            </div>
                            <p className="mb-4 text-sm text-foreground italic">
                                "{t.quote}"
                            </p>
                            <div>
                                <p className="text-sm font-medium text-foreground">
                                    {t.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {t.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
