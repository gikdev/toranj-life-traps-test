import Card from "../components/card"

export default function AdultIntro() {
  return (
    <div className="grow shrink flex flex-col items-center justify-center p-2">
      <Card
        title="بخش وضعیت فعلی زندگی (دوران بزرگسالی)"
        btn={{
          text: "ادامه",
          url: "/test/adulthood",
        }}
      />
    </div>
  )
}
