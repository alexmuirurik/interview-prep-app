import { Geist, Geist_Mono, Roboto, Nunito_Sans } from "next/font/google"
import { ThemeProvider } from "@/src/components/theme-provider"
import { cn } from "@/src/lib/utils"
import './global.css'

const geist = Roboto({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
})

const nunito = Nunito_Sans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata = {
    title: "InterviewPrep",
    description: "Get tailored practice questions based on your role, target company, and experience level.",
    
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn(
                "antialiased",
                fontMono.variable,
                nunito.variable,
                "font-sans",
                geist.variable
            )}
        >
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    )
}
