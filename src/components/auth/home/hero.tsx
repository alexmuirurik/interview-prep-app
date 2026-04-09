"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "../../ui/button"

const Hero = () => {
    const heroBgVideo = "/videos/hero-bg.mp4"
    return (
        <section className="relative bg-blue-950/10 px-6 py-48">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 aspect-video h-full w-full object-fill"
                src={heroBgVideo}
            />
            <div className="sticky mx-auto max-w-7xl text-center">
                <motion.div
                    className=""
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="mb-6 inline-block rounded-full bg-sky-900 px-3 py-1 text-xs font-medium text-amber-50">
                        Free Interview Preparation Tool
                    </span>
                    <h1 className="mb-6 text-5xl leading-tight font-bold text-white md:text-6xl">
                        Ace Your Next Interview
                    </h1>
                    <p className="mx-auto mb-10 max-w-xl font-mono text-teal-100">
                        Get tailored practice questions based on your role,
                        target company, and experience level. Practice answering
                        with text or voice recording.
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
    )
}

export default Hero
