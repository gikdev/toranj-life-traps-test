import { useAtomValue } from "jotai"
import Card from "../components/card"
import { type AnswerCode, answerAtom } from "../test"

export default function Result() {
  const answers = useAtomValue(answerAtom)
  const result = calcResult(answers)

  return (
    <div className="grow shrink flex flex-col items-center justify-center p-2">
      <Card title="نتیجه">
        <p className="text-justify">
          با تشکر از شما بابت تکمیل پرسشنامه؛ لطفا از صفحه عکس گرفته و برای تحلیل دقیق‌تر، برای ما
          بفرستید
        </p>
        <hr />
        <h2 className="font-bold">تله‌های شما:</h2>
        {result.length === 0 ? (
          <p>تبریک؛ شما هیچ تله‌ای ندارید!</p>
        ) : (
          <ul className="list-disc ps-4">
            {result.map(r => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  )
}

function calcResult(_answers: Array<AnswerCode | undefined>): string[] {
  if (_answers.some(a => a === undefined)) return []

  const answers = _answers as unknown as AnswerCode[]
  const traps: string[] = []

  const trap1 = Math.max(answers[0], answers[1], answers[22], answers[23])
  const trap2 = Math.max(answers[2], answers[3], answers[24], answers[25])
  const trap3 = Math.max(answers[4], answers[5], answers[26], answers[27])
  const trap4 = Math.max(answers[6], answers[7], answers[28], answers[29])
  const trap5 = Math.max(answers[8], answers[9], answers[30], answers[31])
  const trap6 = Math.max(answers[10], answers[11], answers[32], answers[33])
  const trap7 = Math.max(answers[12], answers[13], answers[34], answers[35])
  const trap8 = Math.max(answers[14], answers[15], answers[36], answers[37])
  const trap9 = Math.max(answers[16], answers[17], answers[38], answers[39])
  const trap10 = Math.max(answers[18], answers[19], answers[40], answers[41])
  const trap11 = Math.max(answers[20], answers[21], answers[42], answers[43])

  if (trap1 > 3) traps.push("رها شدگی")
  if (trap2 > 3) traps.push("بی اعتمادی/بد رفتاری")
  if (trap3 > 3) traps.push("آسیب‌پذیری")
  if (trap4 > 3) traps.push("وابستگی")
  if (trap5 > 3) traps.push("محرومیت هیجانی")
  if (trap6 > 3) traps.push("طرد اجتماعی")
  if (trap7 > 3) traps.push("نقص/شرم")
  if (trap8 > 3) traps.push("شکست")
  if (trap9 > 3) traps.push("اطاعت")
  if (trap10 > 3) traps.push("معیارهای سختگیرانه")
  if (trap11 > 3) traps.push("استحقاق")

  return traps
}
