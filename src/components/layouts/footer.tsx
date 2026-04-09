import { BookOpen } from "lucide-react"
import Link from "next/link"

const Footer = () => {
    return ( <footer className="bg-sky-950/80 border-t border-sky-500 px-6 py-8">
                <div className="mx-auto flex max-w-7xl items-center justify-between text-sm text-neutral-100">
                    <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-accent" />
                        <span>InterviewPrep</span>
                    </div>
                    <div className="flex gap-6">
                        <Link
                            href="/blog"
                            className="transition-colors hover:text-neutral-200"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/practice"
                            className="transition-colors hover:text-neutral-200"
                        >
                            Practice
                        </Link>
                    </div>
                </div>
            </footer>
    )
}

export default Footer