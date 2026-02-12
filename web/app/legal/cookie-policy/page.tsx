export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <article className="container mx-auto px-4 max-w-3xl">
        <div className="mb-12">
          {/* EN: Cookie Policy */}
          <span className="text-lg text-gray-600 block mb-2">Политика файлов cookie</span>
          {/* EN: Last updated: April 01, 2023 */}
          <span className="text-sm text-gray-400 block">Последнее обновление: 1 апреля 2023 г.</span>
        </div>

        {/* EN: COOKIE POLICY */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tight">ПОЛИТИКА ФАЙЛОВ COOKIE</h1>

        {/* EN: Last updated April 01, 2023 */}
        <p className="text-lg font-bold text-gray-900 mb-16">Последнее обновление: 1 апреля 2023 г.</p>

        <div className="prose prose-lg max-w-none text-gray-600">
          {/* EN: INTRODUCTION */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase">ВВЕДЕНИЕ</h2>

          {/* EN: This Cookie Policy explains how oriagent.com uses cookies... */}
          <p className="mb-6">
            Настоящая Политика файлов cookie объясняет, как <span className="font-bold text-gray-900">oriagent.com</span> («
            <span className="font-bold text-gray-900">Компания</span>», «
            <span className="font-bold text-gray-900">мы</span>», «<span className="font-bold text-gray-900">нас</span>»
            и «<span className="font-bold text-gray-900">наш</span>») использует файлы cookie и аналогичные технологии для
            распознавания вас при посещении нашего веб-сайта{" "}
            <a href="#" className="text-blue-500 hover:underline">
              oriagent.com
            </a>{" "}
            («<span className="font-bold text-gray-900">Веб-сайт</span>»). Она объясняет, что это за технологии и
            зачем мы их используем, а также ваши права на контроль их использования.
          </p>

          {/* EN: In some cases we may use cookies to collect personal information... */}
          <p className="mb-6">
            В некоторых случаях мы можем использовать файлы cookie для сбора персональной информации или информации, которая становится
            персональной при объединении с другими данными.
          </p>

          {/* EN: WHAT ARE COOKIES? */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase">ЧТО ТАКОЕ ФАЙЛЫ COOKIE?</h2>

          {/* EN: Cookies are small data files that are placed on your computer... */}
          <p className="mb-6">
            Файлы cookie — это небольшие файлы данных, которые размещаются на вашем компьютере или мобильном устройстве при посещении веб-сайта.
            Файлы cookie широко используются владельцами веб-сайтов для обеспечения работы сайтов или повышения их эффективности,
            а также для предоставления отчётной информации.
          </p>
        </div>
      </article>
    </div>
  )
}
