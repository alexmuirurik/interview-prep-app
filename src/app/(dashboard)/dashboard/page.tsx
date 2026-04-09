'use client'

import { Button } from "@/src/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import InterviewForm from "../../../components/forms/interview-form"
import QuestionCard from "../../../components/cards/question-card"
import ResponsePanel from "../../../components/forms/response-panel"
import { useState } from "react"

const HomePage = () => {
    const [formData, setFormData] = useState<FormData | null>(null)
    const [currentQ, setCurrentQ] = useState(0)
    const [responses, setResponses] = useState<
        Record<
            number,
            { type: "text" | "audio"; text?: string; audioUrl?: string }
        >
    >({})

    const questions = [] as any[]

    const handleReset = () => {
        setFormData(null)
        setCurrentQ(0)
        setResponses({})
    }

    const handleSaveResponse = (
        index: number,
        response: { type: "text" | "audio"; text?: string; audioUrl?: string }
    ) => {
        setResponses((prev) => ({ ...prev, [index]: response }))
    }
    return (
        <div className="flex min-h-svh p-6">
            <main className="mx-auto max-w-3xl px-6 py-12">
                <AnimatePresence mode="wait">
                    {!formData ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="mb-10 text-center">
                                <h1 className="font-display mb-3 text-4xl text-foreground">
                                    Ace Your Next Interview
                                </h1>
                                <p className="mx-auto max-w-md text-muted-foreground">
                                    Get tailored practice questions based on
                                    your role, target company, and experience
                                    level.
                                </p>
                            </div>
                            <InterviewForm onSubmit={() => {}} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="questions"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="mb-8 text-center">
                                <p className="mb-1 text-sm text-muted-foreground">
                                    {'fdfdf'} {'jfdkjfd'} •{" "}
                                    {'company'}
                                </p>
                                <h2 className="font-display text-2xl text-foreground">
                                    Your Practice Questions
                                </h2>
                            </div>

                            <AnimatePresence mode="wait">
                                <QuestionCard
                                    key={currentQ}
                                    question={questions[currentQ]}
                                    index={currentQ}
                                    total={questions.length}
                                    onNext={() =>
                                        setCurrentQ((c) =>
                                            Math.min(
                                                c + 1,
                                                questions.length - 1
                                            )
                                        )
                                    }
                                    onPrev={() =>
                                        setCurrentQ((c) => Math.max(c - 1, 0))
                                    }
                                />
                            </AnimatePresence>

                            <ResponsePanel
                                questionIndex={currentQ}
                                responses={responses}
                                onSaveResponse={handleSaveResponse}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    )
}

export default HomePage
