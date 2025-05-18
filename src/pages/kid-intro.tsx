import Card from "../components/card"

export default function KidIntro() {
  return (
    <div className="grow shrink flex flex-col items-center justify-center p-2">
      <Card
        title="بخش دوران کودکی"
        btn={{
          text: "ادامه",
          url: "/test/childhood",
        }}
      >
        <p className="text-justify">
          این پرسشنامه شامل ۲۲ سؤال است. لطفاً بر اساس احساس واقعی خود در{" "}
          <strong>
            <mark>دوران کودکی</mark>
          </strong>
          ، برای هر عبارت یکی از گزینه‌های «کاملاً غلط» تا «کاملاً درست» را انتخاب کنید.
        </p>
      </Card>
    </div>
  )
}
