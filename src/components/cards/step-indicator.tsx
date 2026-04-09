import { Check } from "lucide-react"
import { motion } from "framer-motion"

interface StepIndicatorProps {
    steps: string[]
    currentStep: number
}

const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
    return (
        <div className="mb-10 flex items-center justify-center gap-2">
            {steps.map((label, i) => {
                const isComplete = i < currentStep
                const isActive = i === currentStep
                return (
                    <div key={label} className="flex items-center gap-2">
                        <div className="flex flex-col items-center gap-1.5">
                            <motion.div
                                initial={false}
                                animate={{
                                    scale: isActive ? 1.15 : 1,
                                    backgroundColor: isComplete
                                        ? "hsl(160 60% 45%)"
                                        : isActive
                                          ? "hsl(40 80% 56%)"
                                          : "hsl(220 14% 85%)",
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 25,
                                }}
                                className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold"
                            >
                                {isComplete ? (
                                    <Check className="h-4 w-4 text-primary-foreground" />
                                ) : (
                                    <span
                                        className={
                                            isActive
                                                ? "text-accent-foreground"
                                                : "text-muted-foreground"
                                        }
                                    >
                                        {i + 1}
                                    </span>
                                )}
                            </motion.div>
                            <span
                                className={`text-xs font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}
                            >
                                {label}
                            </span>
                        </div>
                        {i < steps.length - 1 && (
                            <div className="mx-1 mb-5 h-0.5 w-12 rounded-full bg-border">
                                <motion.div
                                    initial={false}
                                    animate={{
                                        width: isComplete ? "100%" : "0%",
                                    }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-step-complete h-full rounded-full"
                                />
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default StepIndicator
