import Navbar from "@/src/components/layouts/navbar"
import { Button } from "@/src/components/ui/button"

const BlogPage = () => {
    return (
        <div className="min-h-screen bg-background space-y-10">
            <Navbar />
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="font-display mb-6 text-5xl leading-tight text-foreground md:text-6xl">
                    Read Our Blog
                </h1>
                <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
                    Get the latest tips and tricks from our team of experts.
                </p>
                <div className="flex items-center justify-center gap-4">
                    <a href="/">
                        <Button className="rounded-lg bg-primary px-8 py-3 text-lg font-semibold transition-all hover:bg-primary/90">
                            Go Home
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BlogPage