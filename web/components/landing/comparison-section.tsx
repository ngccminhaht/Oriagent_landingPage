import { CheckCheck, X } from "lucide-react"

export function ComparisonSection() {
  const comparisonData = [
    {
      feature: 'Настройка', // EN: Setup
      generic: 'Универсальная, запутанная конфигурация', // EN: One-size, confusing configuration
      aiagent: 'Полностью управляется нашей командой — просто покажите ваш процесс', // EN: Fully managed by our team...
    },
    {
      feature: 'Кастомизация', // EN: Customization
      generic: 'Универсальные шаблоны', // EN: One-size-fits-all templates
      aiagent: 'Агенты, обученные под ваши уникальные процессы', // EN: Tailored agents trained on your unique workflows
    },
    {
      feature: 'Экономия времени', // EN: Time Savings
      generic: 'Недели на настройку и доводку', // EN: Takes weeks to configure and fine-tune
      aiagent: 'Готово к работе менее чем за 7 дней', // EN: Ready-to-run in under 7 days
    },
    {
      feature: 'Интеграция', // EN: Integration
      generic: 'Ограниченные подключения', // EN: Limited app connections
      aiagent: 'Интеграция в ваши существующие инструменты и стек', // EN: Integrated into your existing tools + stack
    },
    {
      feature: 'Поддержка', // EN: Maintenance
      generic: 'Вы предоставлены сами себе', // EN: You're on your own
      aiagent: 'Постоянный мониторинг, обновления и оптимизация', // EN: Ongoing monitoring, updates, and optimization
    },
    {
      feature: 'Экспертиза', // EN: Expertise
      generic: 'Никакого стратегического вклада', // EN: No strategic input
      aiagent: 'Консультанты по ИИ помогут найти идеальное решение', // EN: AI consultants help define the ideal solution
    },
    {
      feature: 'Масштабируемость', // EN: Scalability
      generic: 'Создано для одиночных пользователей', // EN: Built for individuals
      aiagent: 'Спроектировано для масштабирования команд и процессов', // EN: Designed for scaling teams + workflows
    },
    {
      feature: 'Экономичность', // EN: Cost Efficiency
      generic: 'Своими руками = скрытые затраты времени и ресурсов', // EN: DIY = hidden time and talent costs
      aiagent: 'Прозрачные цены. Без найма. Без накладных.', // EN: Clear pricing. No hiring. No overhead.
    },
    {
      feature: 'Качество результатов', // EN: Output Quality
      generic: 'Нестабильные результаты', // EN: Inconsistent results
      aiagent: 'Доработка до идеальной работы агента', // EN: Iterated until your agent works perfectly
    },
    {
      feature: 'Владение', // EN: Ownership
      generic: 'Процессы принадлежат платформе', // EN: Platform-owned workflows
      aiagent: 'Вы полностью владеете кодом и интеллектуальной собственностью', // EN: You fully own the code and IP
    },
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              {/* EN: Compares */}
              Сравнение
            </span>
          </div>
          {/* EN: Off-the-Shelf AI Tools Waste Time. We Build Agents That Save It. */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Готовые ИИ-инструменты тратят время.
            <br />
            <span className="text-black">Мы создаём агентов, которые его экономят.</span>
          </h2>
          {/* EN: Generic tools give you features. We give you outcomes — by designing, building, and optimizing AI agents tailored to workflow. */}
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Готовые инструменты дают функции. Мы даём результаты — проектируя, создавая и
            оптимизируя ИИ-агентов под ваш рабочий процесс.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">

                <th className="px-6 py-4  font-semibold bg-gray-50">
                  <span className="text-black text-xl font-bold flex justify-center items-center gap-2">
                    {/* EN: Feature */}
                    Функция
                  </span>
                </th>
                <th className="px-6 py-4  font-semibold bg-orange-100">
                  <span className="text-black text-xl font-bold flex justify-center items-center gap-2">
                    {/* EN: Generic AI Tools */}
                    Готовые ИИ-инструменты
                  </span>
                </th>
                <th className="px-6 py-4 text-center font-semibold bg-yellow-50  ">
                  <span className="text-black text-xl font-bold flex justify-center items-center gap-2">
                    {/* EN: OriAgent (Done-For-You) */}
                    OriAgent (под ключ)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-left text-gray-900">{row.feature}</td>
                  <td className="px-6 py-4 bg-orange-100 text-center text-gray-600">{row.generic}</td>
                  <td className="px-6 py-4 bg-yellow-50 text-center text-gray-700">{row.aiagent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
