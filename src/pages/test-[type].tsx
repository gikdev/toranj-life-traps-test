import { useAtom } from "jotai"
import { type ChangeEvent, useState } from "react"
import { useParams } from "react-router"
import Card from "../components/card"
import {
  type AnswerCode,
  type QuestionCateg,
  type Question as QuestionType,
  answerAtom,
  answers,
  questions,
} from "../test"

export default function TestType() {
  const { type: testType } = useParams()
  const isAdulthoodMode = testType === "adulthood"
  const isChildhoodMode = testType === "childhood"
  const [currentQuestionId, setCurrentQuestionId] = useState(testType === "adulthood" ? 22 : 0)
  const isFirstQuestion = currentQuestionId === (isAdulthoodMode ? 22 : 0)
  const isLastQuestion = currentQuestionId === (isAdulthoodMode ? 43 : 21)

  const handlePrev = () => {
    if (isFirstQuestion) {
      location.assign(isAdulthoodMode ? "/adult-intro" : "/kid-intro")
      return
    }

    setCurrentQuestionId(c => {
      if (isAdulthoodMode) return c <= 22 ? 22 : c - 1
      if (isChildhoodMode) return c <= 0 ? 0 : c - 1
      return c
    })
  }

  const handleNext = () => {
    if (isLastQuestion) {
      location.assign(isAdulthoodMode ? "/result" : "/adult-intro")
      return
    }

    setCurrentQuestionId(c => {
      if (isAdulthoodMode) return c >= 43 ? 43 : c + 1
      if (isChildhoodMode) return c >= 21 ? 21 : c + 1
      return c
    })
  }

  if (typeof testType !== "string") return <p className="p-10">پیدا نشد!</p>

  return (
    <div className="grow shrink flex flex-col items-center justify-center p-2">
      <Question
        question={questions[testType as QuestionCateg].find(q => q.id === currentQuestionId)}
        questionId={currentQuestionId}
        handlePrev={handlePrev}
        handleNext={handleNext}
        isFirstQuestion={isFirstQuestion}
        isLastQuestion={isLastQuestion}
      />
    </div>
  )
}

interface QuestionProps {
  question: QuestionType | undefined
  questionId: number
  handlePrev: () => void
  handleNext: () => void
  isFirstQuestion: boolean
  isLastQuestion: boolean
}

function Question({
  question,
  questionId,
  handleNext,
  handlePrev,
  isFirstQuestion,
  isLastQuestion,
}: QuestionProps) {
  const [answersHolder, setAnswersHolder] = useAtom(answerAtom)

  if (!question) return null

  const onRadioChange = (_: ChangeEvent<HTMLInputElement>, code: AnswerCode) => {
    setAnswersHolder(an => {
      const clone = [...an]
      clone[questionId] = code
      setTimeout(() => handleNext(), 200)
      return clone
    })
  }

  return (
    <div className="flex flex-col gap-5">
      <Card
        title={`${question.id + 1}. ${question.query}`}
        prevOrNextBtns={{ handlePrev, handleNext }}
        isFirstQuestion={isFirstQuestion}
        isLastQuestion={isLastQuestion}
      >
        <div className="flex flex-col gap-2">
          {answers.map(a => (
            <label
              key={a.id}
              className={`flex p-1 rounded-full gap-2 items-center ${answersHolder[questionId] === a.code ? "bg-neutral-200" : ""}`}
            >
              <input
                type="radio"
                className="radio"
                name="answer"
                value={a.code}
                checked={answersHolder[questionId] === a.code}
                onChange={e => onRadioChange(e, a.code)}
              />

              <span>{a.text}</span>
            </label>
          ))}
        </div>
      </Card>
    </div>
  )
}
