export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <article className="container mx-auto px-4 max-w-3xl">
        <div className="mb-12">
          {/* EN: Terms of Use */}
          <span className="text-lg text-gray-600 block mb-2">Условия использования</span>
          {/* EN: Last updated: April 01, 2023 */}
          <span className="text-sm text-gray-400 block">Последнее обновление: 1 апреля 2023 г.</span>
        </div>

        {/* EN: TERMS OF USE */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tight">УСЛОВИЯ ИСПОЛЬЗОВАНИЯ</h1>

        {/* EN: Last updated April 01, 2023 */}
        <p className="text-lg font-bold text-gray-900 mb-16">Последнее обновление: 1 апреля 2023 г.</p>

        <div className="prose prose-lg max-w-none text-gray-600">
          {/* EN: AGREEMENT TO OUR LEGAL TERMS */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase">СОГЛАСИЕ С НАШИМИ ЮРИДИЧЕСКИМИ УСЛОВИЯМИ</h2>

          {/* EN: We are BIG CORP LIMITED, doing business as oriagent.com... */}
          <p className="mb-6">
            Мы — <span className="font-bold text-gray-900">BIG CORP LIMITED</span>, ведущая деятельность как{" "}
            <span className="font-bold text-gray-900">oriagent.com</span> («
            <span className="font-bold text-gray-900">Компания</span>», «
            <span className="font-bold text-gray-900">мы</span>», «<span className="font-bold text-gray-900">нас</span>»
            или «<span className="font-bold text-gray-900">наш</span>»), компания, зарегистрированная в{" "}
            <span className="font-bold text-gray-900">Англии</span> по адресу{" "}
            <span className="font-bold text-gray-900">7 Navarre Road, London, SW9 7RU</span>.
          </p>

          {/* EN: We operate the website oriagent.com... */}
          <p className="mb-6">
            Мы управляем веб-сайтом{" "}
            <a href="#" className="text-blue-500 hover:underline">
              oriagent.com
            </a>{" "}
            («<span className="font-bold text-gray-900">Сайт</span>»), а также любыми другими связанными продуктами и
            сервисами, которые ссылаются на настоящие юридические условия («
            <span className="font-bold text-gray-900">Юридические условия</span>») (совместно — «
            <span className="font-bold text-gray-900">Сервисы</span>»).
          </p>

          {/* EN: You can contact us by email... */}
          <p className="mb-6">
            Вы можете связаться с нами по электронной почте{" "}
            <a href="mailto:hello@oriagent.com" className="text-blue-500 hover:underline">
              hello@oriagent.com
            </a>{" "}
            или по почтовому адресу <span className="font-bold text-gray-900">7 Navarre Road, London, SW9 7RU, England</span>.
          </p>

          {/* EN: These Legal Terms constitute a legally binding agreement... */}
          <p className="mb-6">
            Настоящие Юридические условия представляют собой юридически обязывающее соглашение между вами, лично или от
            имени юридического лица («<span className="font-bold text-gray-900">вы</span>»), и BIG CORP LIMITED относительно вашего
            доступа к Сервисам и их использования. Вы соглашаетесь с тем, что, получая доступ к Сервисам, вы прочитали, поняли и
            согласились соблюдать все настоящие Юридические условия. ЕСЛИ ВЫ НЕ СОГЛАСНЫ СО ВСЕМИ НАСТОЯЩИМИ ЮРИДИЧЕСКИМИ УСЛОВИЯМИ,
            ВАМ ЗАПРЕЩЕНО ИСПОЛЬЗОВАТЬ СЕРВИСЫ, И ВЫ ДОЛЖНЫ НЕМЕДЛЕННО ПРЕКРАТИТЬ ИХ ИСПОЛЬЗОВАНИЕ.
          </p>
        </div>
      </article>
    </div>
  )
}
