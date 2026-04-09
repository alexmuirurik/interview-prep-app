import Link from "next/link"
import { Button } from "../../ui/button"
import { ArrowRight } from "lucide-react"

const CTA = () => {
    return (
        <section className="bg-sky-900/80 border-t border-border px-6 py-48">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display mb-4 text-3xl text-primary-foreground">
                    Ready to Start Preparing?
                </h2>
                <p className="mb-8 text-primary-foreground/70">
                    Join thousands of candidates who landed their dream jobs.
                </p>
                <Link href="/practice">
                    <Button
                        size="lg"
                        variant="secondary"
                        className="gap-2 px-8"
                    >
                        <span>Start Practicing Now</span>
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export default CTA
