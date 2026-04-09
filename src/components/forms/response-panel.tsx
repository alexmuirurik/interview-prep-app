import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mic, Square, Keyboard, Trash2, Play, Pause } from "lucide-react"
import { Textarea } from "@/src/components/ui/textarea"
import { Button } from "@/src/components/ui/button"

interface ResponsePanelProps {
    questionIndex: number
    responses: Record<
        number,
        { type: "text" | "audio"; text?: string; audioUrl?: string }
    >
    onSaveResponse: (
        index: number,
        response: { type: "text" | "audio"; text?: string; audioUrl?: string }
    ) => void
}

const ResponsePanel = ({
    questionIndex,
    responses,
    onSaveResponse,
}: ResponsePanelProps) => {
    const [mode, setMode] = useState<
        "idle" | "text" | "recording" | "recorded"
    >("idle")
    const [text, setText] = useState("")
    const [isRecording, setIsRecording] = useState(false)
    const [audioUrl, setAudioUrl] = useState<string | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [recordingTime, setRecordingTime] = useState(0)

    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const chunksRef = useRef<Blob[]>([])
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const existing = responses[questionIndex]

    // Restore saved response when switching questions
    useEffect(() => {
        if (existing) {
            if (existing.type === "text") {
                setMode("text")
                setText(existing.text || "")
                setAudioUrl(null)
            } else if (existing.type === "audio") {
                setMode("recorded")
                setAudioUrl(existing.audioUrl || null)
                setText("")
            }
        } else {
            setMode("idle")
            setText("")
            setAudioUrl(null)
        }
        setIsRecording(false)
        setIsPlaying(false)
        setRecordingTime(0)
    }, [questionIndex])

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
            })
            const mediaRecorder = new MediaRecorder(stream)
            mediaRecorderRef.current = mediaRecorder
            chunksRef.current = []

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) chunksRef.current.push(e.data)
            }

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: "audio/webm" })
                const url = URL.createObjectURL(blob)
                setAudioUrl(url)
                setMode("recorded")
                onSaveResponse(questionIndex, { type: "audio", audioUrl: url })
                stream.getTracks().forEach((t) => t.stop())
            }

            mediaRecorder.start()
            setIsRecording(true)
            setMode("recording")
            setRecordingTime(0)
            timerRef.current = setInterval(
                () => setRecordingTime((t) => t + 1),
                1000
            )
        } catch {
            console.error("Microphone access denied")
        }
    }

    const stopRecording = () => {
        mediaRecorderRef.current?.stop()
        setIsRecording(false)
        if (timerRef.current) clearInterval(timerRef.current)
    }

    const playAudio = () => {
        if (!audioUrl) return
        const audio = new Audio(audioUrl)
        audioRef.current = audio
        audio.onended = () => setIsPlaying(false)
        audio.play()
        setIsPlaying(true)
    }

    const pauseAudio = () => {
        audioRef.current?.pause()
        setIsPlaying(false)
    }

    const clearResponse = () => {
        setMode("idle")
        setText("")
        setAudioUrl(null)
        setIsRecording(false)
        setIsPlaying(false)
        onSaveResponse(questionIndex, { type: "text", text: "" })
    }

    const handleTextChange = (value: string) => {
        setText(value)
        onSaveResponse(questionIndex, { type: "text", text: value })
    }

    const formatTime = (s: number) =>
        `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-sm"
        >
            <div className="mb-4 flex items-center justify-between">
                <h4 className="text-sm font-semibold text-foreground">
                    Your Response
                </h4>
                {mode !== "idle" && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearResponse}
                        className="h-7 gap-1.5 text-xs text-muted-foreground"
                    >
                        <Trash2 className="h-3 w-3" /> Clear
                    </Button>
                )}
            </div>

            <AnimatePresence mode="wait">
                {mode === "idle" && (
                    <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex gap-3"
                    >
                        <button
                            onClick={() => setMode("text")}
                            className="flex flex-1 flex-col items-center gap-2 rounded-xl border border-border p-5 transition-all hover:border-accent/50 hover:bg-muted/50"
                        >
                            <Keyboard className="h-5 w-5 text-accent" />
                            <span className="text-sm font-medium text-foreground">
                                Type Response
                            </span>
                            <span className="text-xs text-muted-foreground">
                                Write out your answer
                            </span>
                        </button>
                        <button
                            onClick={startRecording}
                            className="flex flex-1 flex-col items-center gap-2 rounded-xl border border-border p-5 transition-all hover:border-accent/50 hover:bg-muted/50"
                        >
                            <Mic className="h-5 w-5 text-accent" />
                            <span className="text-sm font-medium text-foreground">
                                Record Audio
                            </span>
                            <span className="text-xs text-muted-foreground">
                                Practice speaking aloud
                            </span>
                        </button>
                    </motion.div>
                )}

                {mode === "text" && (
                    <motion.div
                        key="text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Textarea
                            value={text}
                            onChange={(e) => handleTextChange(e.target.value)}
                            placeholder="Type your answer here... Practice structuring your response clearly."
                            className="min-h-30 resize-none border-border bg-muted/30 text-sm focus:border-accent"
                            autoFocus
                        />
                        <p className="mt-2 text-xs text-muted-foreground">
                            {text.length > 0
                                ? `${text.split(/\s+/).filter(Boolean).length} words`
                                : "Start typing your response..."}
                        </p>
                    </motion.div>
                )}

                {mode === "recording" && (
                    <motion.div
                        key="recording"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-4 py-4"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/15"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/25">
                                    <Mic className="h-5 w-5 text-destructive" />
                                </div>
                            </motion.div>
                        </div>
                        <div>
                            <p className="text-center text-sm font-medium text-foreground">
                                Recording...
                            </p>
                            <p className="text-center font-mono text-xs text-muted-foreground">
                                {formatTime(recordingTime)}
                            </p>
                        </div>
                        <Button
                            onClick={stopRecording}
                            size="sm"
                            variant="outline"
                            className="gap-2"
                        >
                            <Square className="h-3 w-3" /> Stop Recording
                        </Button>
                    </motion.div>
                )}

                {mode === "recorded" && audioUrl && (
                    <motion.div
                        key="recorded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-4 rounded-xl bg-muted/30 p-4"
                    >
                        <button
                            onClick={isPlaying ? pauseAudio : playAudio}
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent"
                        >
                            {isPlaying ? (
                                <Pause className="h-4 w-4 text-accent-foreground" />
                            ) : (
                                <Play className="ml-0.5 h-4 w-4 text-accent-foreground" />
                            )}
                        </button>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">
                                Audio recorded
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Click play to review your response
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default ResponsePanel
