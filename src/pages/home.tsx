import { Link } from "react-router"

export default function Home() {
  return (
    <div className="grow shrink flex flex-col items-center justify-center p-2">
      <div className="bg-nitro-br text-white p-5 w-full max-w-96 rounded-lg text-center flex flex-col gap-2">
        <h1 className="font-black text-3xl">پرسشنامه تله های زندگی</h1>
        <p>
          این پرسشنامه به شما کمک می‌کنه تا تله‌های پنهانی‌ای که از کودکی در ذهن شما شکل گرفته‌اند و
          امروز زندگی‌تون رو هدایت می‌کنن، شناسایی کنین.
        </p>
        <Link to="/intro" className="btn btn-block">
          شروع
        </Link>
        <p>v3</p>
      </div>
    </div>
  )
}
