"use client"

import { BookOpen, RotateCcw } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"

const Navbar = () => {
    const [formData, setFormData] = useState<FormData | null>(null)
    const handleReset = async () => {}

    return (
        <header className="sticky top-0 z-10 border-b border-border bg-card/50 backdrop-blur-sm">
            <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-accent" />
                    <span className="font-display text-lg text-foreground">
                        InterviewPrep
                    </span>
                </div>
                {formData && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleReset}
                        className="gap-2 text-muted-foreground"
                    >
                        <RotateCcw className="h-3.5 w-3.5" /> Start Over
                    </Button>
                )}
            </div>
        </header>
    )
}

export default Navbar
