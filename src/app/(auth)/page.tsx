import Footer from "@/src/components/layouts/footer"
import CTA from "@/src/components/auth/home/cta"
import Testimonials from "@/src/components/auth/home/testimonials"
import HowItWorks from "@/src/components/auth/home/how-it-works"
import Features from "@/src/components/auth/home/features"
import Hero from "@/src/components/auth/home/hero"
import Navbar from "@/src/components/layouts/navbar"

const HomePage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    )
}

export default HomePage
