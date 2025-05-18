import Card from "../components/card"

export default function Intro() {
  return (
    <div className="grow shrink flex flex-col items-center justify-center p-2">
      <Card
        title="نکته"
        btn={{
          text: "ادامه",
          url: "/kid-intro",
        }}
      >
        <p className="text-justify">
          ابتدا به بررسی صحت و سقم این سؤالها در دوران کودکی خود بپردازید. اگر احساس‌های شما در دوران
          مختلف کودکی تان متفاوت بوده است گزینه ای را انتخاب کنید که نمایانگر حال و هوای ذهنی شما تا
          سن دوازده سالگی باشد. سپس این سؤالها را بر حسب زندگی فعلی خود درجه بندی کنید. با این حال
          اگر احساسهای شما در مراحل مختلف دوران بزرگسالی متفاوت بوده است گزینه ای را انتخاب کنید که
          نمایانگر احساسهای شش ماه گذشته شما باشد.
        </p>
      </Card>
    </div>
  )
}
