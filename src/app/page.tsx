'use client'

import { motion } from "framer-motion"
import {
    BookOpen,
    Target,
    Mic,
    Brain,
    ArrowRight,
    CheckCircle,
    Star,
} from "lucide-react"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"

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

const steps = [
    "Select your target role and company",
    "Choose your experience level",
    "Get tailored practice questions",
    "Record or type your responses",
    "Review and refine your answers",
]

const HomePage = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Nav */}
            <header className="sticky top-0 z-10 border-b border-border bg-card/50 backdrop-blur-sm">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                    <Link href="/" className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-accent" />
                        <span className="font-display text-lg text-foreground">
                            InterviewPrep
                        </span>
                    </Link>
                    <nav className="flex items-center gap-6">
                        <Link
                            href="/blog"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Blog
                        </Link>
                        <Link href="/practice">
                            <Button size="sm" className="gap-2">
                                Start Practicing{" "}
                                <ArrowRight className="h-3.5 w-3.5" />
                            </Button>
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="px-6 py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="mb-6 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                            Free Interview Preparation Tool
                        </span>
                        <h1 className="font-display mb-6 text-5xl leading-tight text-foreground md:text-6xl">
                            Ace Your Next Interview
                        </h1>
                        <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
                            Get tailored practice questions based on your role,
                            target company, and experience level. Practice
                            answering with text or voice recording.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <Link href="/practice">
                                <Button size="lg" className="gap-2 px-8">
                                    Start Practicing{" "}
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/blog">
                                <Button variant="outline" size="lg">
                                    Read Our Blog
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="border-t border-border px-6 py-20">
                <div className="mx-auto max-w-4xl">
                    <h2 className="font-display mb-12 text-center text-3xl text-foreground">
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
                                className="rounded-xl border border-border bg-card p-6"
                            >
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                                    <feature.icon className="h-5 w-5 text-accent" />
                                </div>
                                <h3 className="font-display mb-2 text-lg text-foreground">
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

            {/* How It Works */}
            <section className="border-t border-border bg-card px-6 py-20">
                <div className="mx-auto max-w-2xl">
                    <h2 className="font-display mb-12 text-center text-3xl text-foreground">
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
                                className="flex items-center gap-4 rounded-lg border border-border bg-background p-4"
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

            {/* Testimonials */}
            <section className="border-t border-border px-6 py-20">
                <div className="mx-auto max-w-4xl">
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
                                className="rounded-xl border border-border bg-card p-6"
                            >
                                <div className="mb-3 flex gap-0.5">
                                    {Array.from({ length: t.rating }).map(
                                        (_, j) => (
                                            <Star
                                                key={j}
                                                className="h-4 w-4 fill-accent text-accent"
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

            {/* CTA */}
            <section className="border-t border-border bg-primary px-6 py-20">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-display mb-4 text-3xl text-primary-foreground">
                        Ready to Start Preparing?
                    </h2>
                    <p className="mb-8 text-primary-foreground/70">
                        Join thousands of candidates who landed their dream
                        jobs.
                    </p>
                    <Link href="/practice">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="gap-2 px-8"
                        >
                            Start Practicing Now{" "}
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border px-6 py-8">
                <div className="mx-auto flex max-w-5xl items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-accent" />
                        <span>InterviewPrep</span>
                    </div>
                    <div className="flex gap-6">
                        <Link
                            href="/blog"
                            className="transition-colors hover:text-foreground"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/practice"
                            className="transition-colors hover:text-foreground"
                        >
                            Practice
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default HomePage
