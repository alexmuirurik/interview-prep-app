import { motion } from "framer-motion"
import { Badge } from "@/src/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Question {
    question: string
    category: string
    difficulty: "Easy" | "Medium" | "Hard"
    tip: string
}

interface QuestionCardProps {
    question: Question
    index: number
    total: number
    onNext: () => void
    onPrev: () => void
}

const difficultyColors: Record<string, string> = {
    Easy: "bg-step-complete/15 text-step-complete border-step-complete/30",
    Medium: "bg-accent/15 text-accent border-accent/30",
    Hard: "bg-destructive/15 text-destructive border-destructive/30",
}

const QuestionCard = ({
    question,
    index,
    total,
    onNext,
    onPrev,
}: QuestionCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 shadow-sm"
        >
            <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">
                    Question {index + 1} of {total}
                </span>
                <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs font-medium">
                        {question.category}
                    </Badge>
                    <Badge
                        variant="outline"
                        className={`text-xs font-medium ${difficultyColors[question.difficulty]}`}
                    >
                        {question.difficulty}
                    </Badge>
                </div>
            </div>

            <h3 className="font-display mb-6 text-xl leading-relaxed text-foreground">
                "{question.question}"
            </h3>

            <div className="mb-6 rounded-xl bg-muted/50 p-4">
                <p className="mb-1 text-xs font-semibold text-accent">💡 Tip</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    {question.tip}
                </p>
            </div>

            <div className="flex items-center justify-between">
                <button
                    onClick={onPrev}
                    disabled={index === 0}
                    className="rounded-lg border border-border p-2 transition-colors hover:bg-muted disabled:opacity-30"
                >
                    <ChevronLeft className="h-5 w-5 text-foreground" />
                </button>

                <div className="flex gap-1">
                    {Array.from({ length: total }).map((_, i) => (
                        <div
                            key={i}
                            className={`h-2 w-2 rounded-full transition-colors ${
                                i === index ? "bg-accent" : "bg-border"
                            }`}
                        />
                    ))}
                </div>

                <button
                    onClick={onNext}
                    disabled={index === total - 1}
                    className="rounded-lg border border-border p-2 transition-colors hover:bg-muted disabled:opacity-30"
                >
                    <ChevronRight className="h-5 w-5 text-foreground" />
                </button>
            </div>
        </motion.div>
    )
}

export default QuestionCard
