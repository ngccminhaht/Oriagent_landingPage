export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <article className="container mx-auto px-4 max-w-3xl">
        <div className="mb-12">
          {/* EN: Privacy Policy */}
          <span className="text-lg text-gray-600 block mb-2">Политика конфиденциальности</span>
          {/* EN: Last updated: April 01, 2023 */}
          <span className="text-sm text-gray-400 block">Последнее обновление: 1 апреля 2023 г.</span>
        </div>

        {/* EN: PRIVACY POLICY */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tight">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h1>

        {/* EN: Last updated April 01, 2023 */}
        <p className="text-lg font-bold text-gray-900 mb-16">Последнее обновление: 1 апреля 2023 г.</p>

        <div className="prose prose-lg max-w-none text-gray-600">
          {/* EN: PRIVACY NOTICE */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase">УВЕДОМЛЕНИЕ О КОНФИДЕНЦИАЛЬНОСТИ</h2>

          {/* EN: This privacy notice for oriagent.com describes how and why... */}
          <p className="mb-6">
            Настоящее уведомление о конфиденциальности для <span className="font-bold text-gray-900">oriagent.com</span> («
            <span className="font-bold text-gray-900">Компания</span>», «
            <span className="font-bold text-gray-900">мы</span>», «<span className="font-bold text-gray-900">нас</span>»
            или «<span className="font-bold text-gray-900">наш</span>») описывает, как и почему мы можем собирать, хранить,
            использовать и/или передавать («<span className="font-bold text-gray-900">обрабатывать</span>») вашу информацию при использовании
            наших сервисов («<span className="font-bold text-gray-900">Сервисы</span>»), например, когда вы:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            {/* EN: Visit our website at oriagent.com... */}
            <li>
              Посещаете наш веб-сайт{" "}
              <a href="#" className="text-blue-500 hover:underline">
                oriagent.com
              </a>
               или любой другой наш веб-сайт, ссылающийся на настоящее уведомление о конфиденциальности
            </li>
            {/* EN: Engage with us in other related ways... */}
            <li>Взаимодействуете с нами другими способами, включая продажи, маркетинг или мероприятия</li>
          </ul>

          {/* EN: Questions or concerns? ... */}
          <p className="mb-6">
            <span className="font-bold text-gray-900">Вопросы или проблемы?</span> Прочтение настоящего уведомления о конфиденциальности
            поможет вам понять ваши права и возможности выбора в отношении конфиденциальности. Если вы не согласны с нашей политикой и практикой,
            пожалуйста, не используйте наши Сервисы. Если у вас остались вопросы, свяжитесь с нами по адресу{" "}
            <a href="mailto:hello@oriagent.com" className="text-blue-500 hover:underline">
              hello@oriagent.com
            </a>
            .
          </p>
        </div>
      </article>
    </div>
  )
}
