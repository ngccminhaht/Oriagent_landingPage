import { Badge } from '@/components/ui/badge'
import { Bot, Zap, Users, Workflow, Database, ChartColumnIncreasing } from 'lucide-react'

export function ToolkitSection() {
  const features = [
    {
      icon: Bot,
      title: 'Свои ИИ-агенты', // EN: Custom AI Agents
      description: 'Мы не даём вам панель управления — мы даём ИИ-агента, который выполняет работу за вас. Создан под ваш процесс. Адаптирован под вашу команду.',
    },
    {
      icon: Zap,
      title: 'Автоматизация процессов', // EN: Workflow Automation
      description: 'От онбординга до многошаговых маркетинговых операций — если это повторяемо, мы автоматизируем. Полностью кастомно. Полностью без участия.',
    },
    {
      icon: Workflow,
      title: 'Бесшовные интеграции', // EN: Seamless Integrations
      description: 'Ваш агент подключается к инструментам, которые вы уже используете — CRM, почтовые платформы, базы данных, документы. Без замены существующего.',
    },
    {
      icon: Database,
      title: 'Автоматический анализ данных', // EN: Data Analysis on Autopilot
      description: 'Пусть ваш агент работает с цифрами. Получайте мгновенные инсайты из каждого источника данных — без таблиц.',
    },
    {
      icon: ChartColumnIncreasing,
      title: 'Оптимизация производительности', // EN: Performance Optimization
      description: 'Мы не просто создаём и уходим. Мы отслеживаем, улучшаем и обновляем ваших агентов для лучшей скорости, точности и ROI.',
    },
    {
      icon: Users,
      title: 'Выделенная поддержка', // EN: Dedicated Support
      description: 'У вас всегда есть человек на связи. Стратегические звонки, помощь во внедрении и постоянное сопровождение от наших экспертов по ИИ-автоматизации.',
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-lime-300 text-lime-900 hover:bg-lime-400">
            {/* EN: AI Toolkit */}
            ИИ-инструменты
          </Badge>
          {/* EN: Your Team of AI Agents, Without the Overhead */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ваша команда ИИ-агентов, без накладных расходов
          </h2>
          {/* EN: Every service in our Done-For-You plan is designed to automate the busywork, amplify your output, and free your team to do what they do best. */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Каждый сервис в нашем плане «под ключ» создан для автоматизации рутины, усиления результатов и освобождения вашей команды для главного.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="flex flex-col gap-3 p-6 rounded-lg border border-gray-200 bg-gray-50 hover:bg-white transition-colors"
              >
                <Icon className="w-8 h-8 text-gray-800" />
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
