import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import StepIndicator from "@/src/components/cards/step-indicator"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react"

const STEPS = ["Role", "Company", "Expertise"]

const ROLES = [
    "Software Engineer",
    "Product Manager",
    "Data Scientist",
    "Designer",
    "DevOps Engineer",
    "Marketing Manager",
    "Sales Executive",
    "Business Analyst",
]

const LEVELS = ["Junior", "Mid-Level", "Senior", "Lead / Staff", "Director+"]

export interface FormData {
    role: string
    company: string
    level: string
}

interface InterviewFormProps {
    onSubmit: (data: FormData) => void
}

const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
}

const InterviewForm = ({ onSubmit }: InterviewFormProps) => {
    const [step, setStep] = useState(0)
    const [direction, setDirection] = useState(1)
    const [formData, setFormData] = useState<FormData>({
        role: "",
        company: "",
        level: "",
    })

    const canProceed =
        (step === 0 && formData.role) ||
        (step === 1 && formData.company.trim()) ||
        (step === 2 && formData.level)

    const next = () => {
        if (step === 2) {
            onSubmit(formData)
            return
        }
        setDirection(1)
        setStep((s) => s + 1)
    }

    const back = () => {
        setDirection(-1)
        setStep((s) => s - 1)
    }

    return (
        <div className="mx-auto w-full max-w-xl">
            <StepIndicator steps={STEPS} currentStep={step} />

            <div className="relative min-h-80 overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={step}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                        className="w-full"
                    >
                        {step === 0 && (
                            <div>
                                <h2 className="font-display mb-2 text-2xl text-foreground">
                                    What role are you interviewing for?
                                </h2>
                                <p className="mb-6 text-sm text-muted-foreground">
                                    Select the position that best matches your
                                    target role.
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {ROLES.map((role) => (
                                        <button
                                            key={role}
                                            onClick={() =>
                                                setFormData({
                                                    ...formData,
                                                    role,
                                                })
                                            }
                                            className={`rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all ${
                                                formData.role === role
                                                    ? "border-accent bg-accent text-accent-foreground shadow-md"
                                                    : "border-border bg-card text-card-foreground hover:border-accent/50"
                                            }`}
                                        >
                                            {role}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 1 && (
                            <div>
                                <h2 className="font-display mb-2 text-2xl text-foreground">
                                    Which company?
                                </h2>
                                <p className="mb-6 text-sm text-muted-foreground">
                                    Enter the company name to tailor your
                                    preparation.
                                </p>
                                <Input
                                    placeholder="e.g. Google, Stripe, Airbnb..."
                                    value={formData.company}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            company: e.target.value,
                                        })
                                    }
                                    className="h-12 text-base"
                                    autoFocus
                                />
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <h2 className="font-display mb-2 text-2xl text-foreground">
                                    What's your experience level?
                                </h2>
                                <p className="mb-6 text-sm text-muted-foreground">
                                    This helps us calibrate question difficulty.
                                </p>
                                <div className="flex flex-col gap-3">
                                    {LEVELS.map((level) => (
                                        <button
                                            key={level}
                                            onClick={() =>
                                                setFormData({
                                                    ...formData,
                                                    level,
                                                })
                                            }
                                            className={`rounded-lg border px-5 py-4 text-left text-sm font-medium transition-all ${
                                                formData.level === level
                                                    ? "border-accent bg-accent text-accent-foreground shadow-md"
                                                    : "border-border bg-card text-card-foreground hover:border-accent/50"
                                            }`}
                                        >
                                            {level}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between">
                {step > 0 ? (
                    <Button variant="ghost" onClick={back} className="gap-2">
                        <ArrowLeft className="h-4 w-4" /> Back
                    </Button>
                ) : (
                    <div />
                )}
                <Button
                    onClick={next}
                    disabled={!canProceed}
                    className="gap-2 bg-primary px-6 text-primary-foreground hover:bg-primary/90"
                >
                    {step === 2 ? (
                        <>
                            Generate Questions <Sparkles className="h-4 w-4" />
                        </>
                    ) : (
                        <>
                            Continue <ArrowRight className="h-4 w-4" />
                        </>
                    )}
                </Button>
            </div>
        </div>
    )
}

export default InterviewForm
