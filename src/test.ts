import { atomWithStorage } from "jotai/utils"

export type AnswerCode = 1 | 2 | 3 | 4 | 5 | 6

export const answerAtom = atomWithStorage<Array<undefined | AnswerCode>>("ANSWERS", [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
])

export interface Answer {
  id: number
  text: string
  code: AnswerCode
}

export const answers: Answer[] = [
  { id: 0, code: 1, text: "کاملا غلط" },
  { id: 1, code: 2, text: "تقریبا غلط" },
  { id: 2, code: 3, text: "بیشتر درست است تا غلط" },
  { id: 3, code: 4, text: "اندکی درست" },
  { id: 4, code: 5, text: "تقریبا درست" },
  { id: 5, code: 6, text: "کاملا درست" },
]

export type QuestionCateg = "childhood" | "adulthood"

export interface Question {
  id: number
  category: QuestionCateg
  query: string
}

export const questions: Record<QuestionCateg, Question[]> = {
  childhood: [
    {
      id: 0,
      category: "childhood",
      query: "من نمی‌توانم از نزدیکانم جدا شوم چون می‌ترسم مرا ترک کنند.",
    },
    {
      id: 1,
      category: "childhood",
      query: "اگر افراد مورد علاقه‌ام، فرد دیگری را به من ترجیح دهند، دچار غم و اندوه شدید می‌شوم.",
    },
    {
      id: 2,
      category: "childhood",
      query:
        "معمولاً به دیگران اعتماد ندارم و بیشتر اوقات فکر می‌کنم دیگران نیت‌های پنهان و بدی دارند.",
    },
    {
      id: 3,
      category: "childhood",
      query: "احساس می‌کنم نمی‌توانم جلوی دیگران دست از حالت دفاعی بردارم چون به من صدمه می‌زنند.",
    },
    {
      id: 4,
      category: "childhood",
      query: "نگرانم که مریض شوم یا آسیب ببینم؛ در مقایسه با دیگران نگرانی من بیشتر است.",
    },
    {
      id: 5,
      category: "childhood",
      query: "نگران‌ام که خودم (یا خانواده‌ام) سرمایه‌ام را از دست بدهم و محتاج دیگران شوم.",
    },
    {
      id: 6,
      category: "childhood",
      query: "احساس می‌کنم که تنهایی نمی‌توانم از پس مسائل برآیم و نیاز دارم کسی کمکم کند.",
    },
    {
      id: 7,
      category: "childhood",
      query: "من و والدینم اغلب بیش از حد در زندگی و مسایل یکدیگر درگیر می‌شویم.",
    },
    {
      id: 8,
      category: "childhood",
      query:
        "اغلب در زندگی کسی را نداشته‌ام که از من حمایت کند، به درد دل‌ام گوش بدهد و نگران اتفاقات زندگی من باشد.",
    },
    {
      id: 9,
      category: "childhood",
      query:
        "کسی نبوده که نیازهای عاطفی من (مثل درک شدن، همدلی، راهنمایی و حمایت) را برآورده سازد.",
    },
    {
      id: 10,
      category: "childhood",
      query:
        "احساس می‌کنم به هیچ‌کس یا هیچ گروهی تعلق خاطر ندارم؛ با دیگران خیلی فرق دارم، وصلهٔ ناجور جمع هستم.",
    },
    {
      id: 11,
      category: "childhood",
      query: "آدم کسل‌کننده و خسته‌کننده‌ای هستم؛ در موقعیت‌های اجتماعی حرفی برای گفتن ندارم.",
    },
    {
      id: 12,
      category: "childhood",
      query:
        "آرزو دارم دوستان، اعضای خانواده و آشنایان با تمام عیب‌ها و نقص‌های من مرا دوست داشته باشند، اما متأسفانه چنین فردی در زندگی من وجود ندارد.",
    },
    {
      id: 13,
      category: "childhood",
      query: "از خودم شرمنده هستم، ارزش، احترام، دوستی و محبت دیگران را ندارم.",
    },
    {
      id: 14,
      category: "childhood",
      query: "در محیط‌های شغلی و تحصیلی، به‌اندازه همسالانم باهوش و توانمند نیستم.",
    },
    {
      id: 15,
      category: "childhood",
      query: "به‌دلیل اینکه می‌دانم دیگران موفق و با استعداد هستند، اغلب احساس بی‌کفایتی می‌کنم.",
    },
    {
      id: 16,
      category: "childhood",
      query:
        "اغلب احساس می‌کنم باید خواسته‌های دیگران تن بدهم، چون رهایم می‌کنند یا در صدد تلافی برمی‌آیند.",
    },
    {
      id: 17,
      category: "childhood",
      query:
        "دیگران اعتقاد دارند من برای خوشبختی مردم همه‌کار می‌کنم، ولی برای رفع نیازهای خودم قدمی برنمی‌دارم.",
    },
    {
      id: 18,
      category: "childhood",
      query:
        "تلاش می‌کنم هر کاری را به بهترین نحو انجام دهم، اینکه کار ناقص باشد اصلاً مرا راضی نمی‌کند.",
    },
    {
      id: 19,
      category: "childhood",
      query: "آن‌قدر کار دارم که وقتی برای استراحت و لذت بردن از زندگی ندارم.",
    },
    {
      id: 20,
      category: "childhood",
      query: "احساس می‌کنم نباید از قوانین و قراردادهایی که دیگران تابع آن‌ها هستند، اطاعت کنم.",
    },
    {
      id: 21,
      category: "childhood",
      query:
        "نمی‌توانم کارهای کسالت‌بار یا به‌انجام‌رساندن وظایفم را تحمل کنم؛ از این لحاظ به‌نظر می‌رسد آدم بی‌نظمی هستم.",
    },
  ],
  adulthood: [
    {
      id: 22,
      category: "adulthood",
      query: "در حال حاضر نمی‌توانم از نزدیکانم جدا شوم چون می‌ترسم مرا ترک کنند.",
    },
    {
      id: 23,
      category: "adulthood",
      query:
        "اگر فرد مورد علاقه‌ام به فرد دیگری توجه کند، به‌شدت نگران می‌شوم که دیگر دوستم نداشته باشد.",
    },
    {
      id: 24,
      category: "adulthood",
      query: "معمولاً فکر می‌کنم دیگران نیت‌های پنهانی دارند و به همین دلیل به آن‌ها اعتماد ندارم.",
    },
    {
      id: 25,
      category: "adulthood",
      query:
        "احساس می‌کنم نمی‌توانم جلوی دیگران از خودم دفاع کنم، چون به نظر می‌رسد که صداقت من را نمی‌پذیرند.",
    },
    {
      id: 26,
      category: "adulthood",
      query: "نگرانم که بیمار شوم یا آسیب ببینم؛ در مقایسه با دیگران، نگرانی‌ام بیشتر است.",
    },
    {
      id: 27,
      category: "adulthood",
      query: "نگرانم که اگر خانواده‌ام، سرپناهم را از دست بدهم، محتاج دیگران شوم.",
    },
    {
      id: 28,
      category: "adulthood",
      query:
        "احساس می‌کنم نمی‌توانم به‌تنهایی از پس مسائل زندگی‌ام بربیایم و به کسی نیاز دارم که کمکم کند.",
    },
    {
      id: 29,
      category: "adulthood",
      query: "در روابط صمیمی‌، اغلب نگرانم که به اندازه کافی مورد محبت یا درک قرار نگیرم.",
    },
    {
      id: 30,
      category: "adulthood",
      query: "اغلب احساس می‌کنم کسی را ندارم که واقعاً از من حمایت کند یا مرا بفهمد.",
    },
    {
      id: 31,
      category: "adulthood",
      query:
        "کسی نبوده که در زندگی فعلی‌ام، واقعاً نیازهای عاطفی من را (درک، همدلی، راهنمایی، حمایت) تأمین کند.",
    },
    {
      id: 32,
      category: "adulthood",
      query:
        "احساس می‌کنم به هیچ‌کس تعلق خاطر ندارم و با دیگران خیلی فرق دارم؛ جمع‌ها برایم ناآشنا یا ناپسند هستند.",
    },
    {
      id: 33,
      category: "adulthood",
      query:
        "احساس می‌کنم در موقعیت‌های اجتماعی، فردی کسل‌کننده و خسته‌کننده‌ام و چیزی برای گفتن ندارم.",
    },
    {
      id: 34,
      category: "adulthood",
      query:
        "آرزو دارم دوستان و اعضای خانواده‌ام مرا دوست داشته باشند، اما واقعیت این است که نقش مؤثری در زندگی‌ام ندارند.",
    },
    {
      id: 35,
      category: "adulthood",
      query: "از خودم شرمنده‌ام؛ ارزش احترام یا محبت دیگران را ندارم.",
    },
    {
      id: 36,
      category: "adulthood",
      query: "در شغل یا تحصیل‌، احساس می‌کنم به اندازه بقیه باهوش یا توانمند نیستم.",
    },
    {
      id: 37,
      category: "adulthood",
      query: "به‌دلیل اینکه معمولاً دیگران موفق‌تر از من هستند، اغلب احساس شکست یا کم‌ارزشی می‌کنم.",
    },
    {
      id: 38,
      category: "adulthood",
      query: "احساس می‌کنم باید خواسته‌های دیگران را به‌هر شکل ممکن برآورده کنم، حتی اگر خودم نخواهم.",
    },
    {
      id: 39,
      category: "adulthood",
      query: "دیگران از من انتظار دارند برای رفع نیازهای‌شان فداکاری کنم و خودم را نادیده بگیرم.",
    },
    {
      id: 40,
      category: "adulthood",
      query:
        "علایق یا کارهایی که انجام می‌دهم برای دیگران رضایت‌بخش نیست و مدام احساس ناکافی بودن دارم.",
    },
    {
      id: 41,
      category: "adulthood",
      query: "آن‌قدر کار دارم که برای استراحت یا لذت بردن از زندگی وقت ندارم.",
    },
    {
      id: 42,
      category: "adulthood",
      query: "احساس می‌کنم نباید از قوانین و قراردادهایی که دیگران تعیین کرده‌اند، سرپیچی کنم.",
    },
    {
      id: 43,
      category: "adulthood",
      query:
        "نمی‌توانم کارهایی را که دیگران نیمه‌کاره رها کرده‌اند، کامل انجام دهم یا به نتیجه برسانم؛ از این بابت احساس بی‌کفایتی می‌کنم.",
    },
  ],
}
