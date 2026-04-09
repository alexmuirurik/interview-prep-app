"use client"

import { ArrowRight, BookOpen, RotateCcw } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import Link from "next/link"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Blog", href: "/blog" },
]

const Navbar = () => {
    const [formData, setFormData] = useState<FormData | null>(null)
    const handleReset = async () => {}

    return (
        <header className="sticky top-0 z-10 w-full border-b border-neutral-500/25 bg-linear-to-l from-[#1A3C6D]/70 to-[#2b536a]/70 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-accent" />
                    <span className="text-lg text-foreground font-mono font-bold font-display">
                        <span className="text-teal-200">Interview</span>
                        <span className="text-neutral-100">Prep</span>
                    </span>
                </Link>
                <nav className="flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            className="text-sm text-neutral-100 transition-colors hover:text-foreground"
                            key={item.name}
                            href={item.href}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link href="/practice">
                        <Button className="bg-teal-700 gap-2 py-4" >
                            Start Practicing{" "}
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Button>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
