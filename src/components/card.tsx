import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react"
import type { ReactNode } from "react"
import { Link } from "react-router"

interface CardProps {
  title: string
  children?: ReactNode
  prevOrNextBtns?: {
    handlePrev: () => void
    handleNext: () => void
  }
  btn?: {
    text: string
    url: string
  }
  isFirstQuestion?: boolean
  isLastQuestion?: boolean
  actionSection?: ReactNode
}

export default function Card({
  btn,
  children,
  actionSection,
  title,
  prevOrNextBtns,
  isFirstQuestion = false,
  isLastQuestion = false,
}: CardProps) {
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title mb-3">{title}</h2>

        {children}

        {btn && (
          <div className="card-actions justify-end mt-3">
            <Link to={btn.url} className="btn btn-primary">
              {btn.text}
            </Link>
          </div>
        )}

        {prevOrNextBtns && (
          <div className="card-actions justify-between mt-3">
            <button type="button" onClick={prevOrNextBtns.handlePrev} className="btn btn-secondary">
              <ArrowRightIcon size={20} />
              <span>{isFirstQuestion ? "بازگشت" : "قبلی"}</span>
            </button>

            <button type="button" onClick={prevOrNextBtns.handleNext} className="btn btn-primary">
              <span>{isLastQuestion ? "اتمام" : "بعدی"}</span>
              <ArrowLeftIcon size={20} />
            </button>
          </div>
        )}

        {actionSection}
      </div>
    </div>
  )
}
