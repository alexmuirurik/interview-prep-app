const NotFound = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="font-display mb-6 text-5xl leading-tight text-foreground md:text-6xl">
                    404 - Page Not Found
                </h1>
                <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
                    The page you are looking for does not exist.
                </p>
                <div className="flex items-center justify-center gap-4">
                    <a href="/">
                        <button className="rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-foreground transition-all hover:bg-primary/90">
                            Go Home
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NotFound