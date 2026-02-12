'use client'

import { useState } from 'react'
import { ChevronDown, Plus, Minus } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

// Dữ liệu câu hỏi (Chia làm 2 cột như trong ảnh)
const faqData = [
  // Cột Trái
  [
    {
      // EN: What are AI Agents?
      q: "Что такое ИИ-агенты?",
      // EN: AI Agents are autonomous software programs capable of observing their environment, making decisions, and taking actions to achieve specific goals without constant human intervention.
      a: "ИИ-агенты — это автономные программы, способные наблюдать за окружением, принимать решения и выполнять действия для достижения конкретных целей без постоянного участия человека."
    },
    {
      // EN: What's the difference between AI Agent and ChatGPT?
      q: "В чём разница между ИИ-агентом и ChatGPT?",
      // EN: ChatGPT is a passive chatbot that responds to prompts. AI Agents are active systems that can execute tasks, use tools, and run workflows autonomously based on a goal.
      a: "ChatGPT — это пассивный чат-бот, отвечающий на запросы. ИИ-агенты — это активные системы, которые могут выполнять задачи, использовать инструменты и запускать рабочие процессы автономно на основе цели."
    },
    {
      // EN: What's the difference between AI Agent and AutoGPT?
      q: "В чём разница между ИИ-агентом и AutoGPT?",
      // EN: AutoGPT is an open-source experiment demonstrating the capabilities of the GPT-4 language model. It is one type of AI Agent, but 'AI Agent' is a broader category encompassing many architectures.
      a: "AutoGPT — это эксперимент с открытым кодом, демонстрирующий возможности языковой модели GPT-4. Это один из видов ИИ-агентов, но 'ИИ-агент' — более широкая категория, охватывающая множество архитектур."
    },
    {
      // EN: What's the difference between AI Agent and babyAGI?
      q: "В чём разница между ИИ-агентом и babyAGI?",
      // EN: BabyAGI is a simplified AI agent framework focused on task management and execution loops. It's a specific implementation, whereas AI Agent is the general term.
      a: "BabyAGI — это упрощённый фреймворк ИИ-агентов, ориентированный на управление задачами и циклы выполнения. Это конкретная реализация, тогда как ИИ-агент — общий термин."
    },
    {
      // EN: Is AI Agent free to use?
      q: "ИИ-агент бесплатный?",
      // EN: It depends. Some open-source frameworks are free, but enterprise-grade AI Agents usually require a subscription or usage-based fees for the underlying LLM (like GPT-4) and hosting.
      a: "Зависит от случая. Некоторые фреймворки с открытым кодом бесплатны, но корпоративные ИИ-агенты обычно требуют подписки или оплаты за использование базовой LLM (например, GPT-4) и хостинга."
    },
    {
      // EN: How do AI agents differ from traditional chatbots?
      q: "Чем ИИ-агенты отличаются от традиционных чат-ботов?",
      // EN: Traditional chatbots follow rigid scripts or simple pattern matching. AI Agents use LLMs to understand context, plan complex actions, and interact with external APIs/tools.
      a: "Традиционные чат-боты следуют жёстким сценариям или простому сопоставлению шаблонов. ИИ-агенты используют LLM для понимания контекста, планирования сложных действий и взаимодействия с внешними API и инструментами."
    },
    {
      // EN: What are the common applications of AI agents in business?
      q: "Каковы типичные применения ИИ-агентов в бизнесе?",
      // EN: Common uses include automated customer support, lead generation, market research, data analysis, coding assistance, and personal scheduling.
      a: "Среди типичных применений — автоматическая поддержка клиентов, генерация лидов, маркетинговые исследования, анализ данных, помощь в написании кода и планирование."
    },
    {
      // EN: Are AI agents capable of replacing human employees?
      q: "Способны ли ИИ-агенты заменить сотрудников?",
      // EN: They are designed to augment humans by handling repetitive tasks, not replace them entirely. They act as 'copilots' to increase productivity.
      a: "Они созданы для помощи людям, выполняя рутинные задачи, а не для полной замены. Они выступают в роли 'копилотов' для повышения продуктивности."
    },
    {
      // EN: How do AI agents learn and improve over time?
      q: "Как ИИ-агенты обучаются и совершенствуются со временем?",
      // EN: Through techniques like Reinforcement Learning from Human Feedback (RLHF), memory vector databases, and fine-tuning on specific domain data.
      a: "С помощью таких методов, как обучение с подкреплением на основе обратной связи (RLHF), векторные базы данных памяти и тонкая настройка на данных конкретной области."
    },
    {
      // EN: What are the ethical considerations when deploying AI agents?
      q: "Какие этические аспекты нужно учитывать при развёртывании ИИ-агентов?",
      // EN: Key concerns include data privacy, bias in decision making, accountability for errors, and ensuring transparency in how the agent operates.
      a: "Ключевые вопросы включают конфиденциальность данных, предвзятость при принятии решений, ответственность за ошибки и обеспечение прозрачности работы агента."
    },
    {
      // EN: What types of AI agents are available today?
      q: "Какие типы ИИ-агентов существуют сегодня?",
      // EN: There are single-task agents, general-purpose assistants, and multi-agent swarms designed for complex collaborative problem solving.
      a: "Существуют однозадачные агенты, универсальные помощники и мультиагентные системы, предназначенные для решения сложных задач совместным путём."
    },
  ],
  // Cột Phải
  [
    {
      // EN: Who are the top AI agent providers in 2025?
      q: "Кто является ведущими поставщиками ИИ-агентов в 2025 году?",
      // EN: Leading providers include OpenAI (Assistants API), Google (Vertex AI Agents), Microsoft (Copilot Studio), and specialized platforms like LangChain and AutoGPT-based services.
      a: "Среди ведущих поставщиков — OpenAI (Assistants API), Google (Vertex AI Agents), Microsoft (Copilot Studio) и специализированные платформы, такие как LangChain и сервисы на базе AutoGPT."
    },
    {
      // EN: How do I choose the right AI agent for my needs?
      q: "Как выбрать подходящего ИИ-агента для моих задач?",
      // EN: Identify your specific bottleneck (e.g., support volume, data entry). Look for agents with tools specific to that domain and integration capabilities with your tech stack.
      a: "Определите конкретное узкое место (например, объём поддержки, ввод данных). Ищите агентов с инструментами для вашей области и возможностями интеграции с вашим технологическим стеком."
    },
    {
      // EN: Can AI agents handle complex tasks?
      q: "Могут ли ИИ-агенты справляться со сложными задачами?",
      // EN: Yes, by breaking them down into sub-tasks (Chain-of-Thought) and using external tools (browsing, code execution) to solve each part sequentially.
      a: "Да, разбивая их на подзадачи (цепочка рассуждений) и используя внешние инструменты (поиск, выполнение кода) для последовательного решения каждой части."
    },
    {
      // EN: How do businesses integrate AI agents into their existing systems?
      q: "Как компании интегрируют ИИ-агентов в существующие системы?",
      // EN: Most agents offer APIs or webhooks. Integration usually involves connecting the agent to your CRM, database, or communication channels like Slack/Teams.
      a: "Большинство агентов предлагают API или вебхуки. Интеграция обычно включает подключение агента к вашей CRM, базе данных или каналам связи, таким как Slack/Teams."
    },
    {
      // EN: What are the limitations of AI agents?
      q: "Каковы ограничения ИИ-агентов?",
      // EN: They can hallucinate (make up facts), get stuck in loops, or struggle with highly ambiguous instructions that require human intuition.
      a: "Они могут галлюцинировать (выдумывать факты), зацикливаться или испытывать трудности с неоднозначными инструкциями, требующими человеческой интуиции."
    },
    {
      // EN: How is the future landscape of AI agents evolving?
      q: "Как развивается будущее ИИ-агентов?",
      // EN: We are moving towards multi-modal agents (vision/voice) and 'Agentic Workflows' where teams of agents collaborate to run entire business departments.
      a: "Мы движемся к мультимодальным агентам (зрение/голос) и 'агентным рабочим процессам', где команды агентов сотрудничают для управления целыми отделами бизнеса."
    },
    {
      // EN: How do AI Agents compare to traditional automation tools?
      q: "Как ИИ-агенты сравниваются с традиционными инструментами автоматизации?",
      // EN: Traditional automation (RPA) requires strict rules. AI Agents are flexible and can handle unstructured data and unexpected variations in the workflow.
      a: "Традиционная автоматизация (RPA) требует строгих правил. ИИ-агенты гибки и справляются с неструктурированными данными и неожиданными отклонениями в рабочем процессе."
    },
    {
      // EN: What programming languages are used to build AI Agents?
      q: "Какие языки программирования используются для создания ИИ-агентов?",
      // EN: Python is the dominant language due to its rich AI ecosystem (LangChain, PyTorch), followed by TypeScript/JavaScript for web-based implementations.
      a: "Python — доминирующий язык благодаря богатой экосистеме ИИ (LangChain, PyTorch), за ним следуют TypeScript/JavaScript для веб-реализаций."
    },
    {
      // EN: What's the difference between AI Agents and autonomous agents?
      q: "В чём разница между ИИ-агентами и автономными агентами?",
      // EN: The terms are often used interchangeably, but 'autonomous' emphasizes the ability to operate for long periods without any human prompt after the initial goal setting.
      a: "Эти термины часто используются как синонимы, но 'автономный' подчёркивает способность работать длительное время без вмешательства человека после начальной постановки цели."
    },
    {
      // EN: How secure are AI Agents when handling sensitive data?
      q: "Насколько безопасны ИИ-агенты при работе с конфиденциальными данными?",
      // EN: Security depends on the deployment. Enterprise solutions offer on-premise hosting or SOC2 compliance to ensure data doesn't train public models.
      a: "Безопасность зависит от развёртывания. Корпоративные решения предлагают локальный хостинг или соответствие SOC2, чтобы данные не использовались для обучения публичных моделей."
    },
    {
      // EN: What is agentic AI and how does it relate to AI Agents?
      q: "Что такое агентный ИИ и как он связан с ИИ-агентами?",
      // EN: Agentic AI refers to the broader capability of AI systems to demonstrate agency—making choices and acting in the world—which is the core function of an AI Agent.
      a: "Агентный ИИ — это более широкая способность систем ИИ проявлять самостоятельность — принимать решения и действовать в мире, что является основной функцией ИИ-агента."
    },
  ]
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left transition-all hover:bg-gray-50/50 px-4 sm:px-0"
      >
        <span className={`text-[15px] text-gray-700 ${isOpen ? 'font-semibold text-gray-900' : 'font-medium'}`}>
          {question}
        </span>
        <span className="ml-4 flex-shrink-0 text-gray-400">
          {/* Icon Chevron giống trong ảnh */}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
          }`}
      >
        <div className="overflow-hidden text-sm text-gray-500 leading-relaxed pr-8 pl-4 sm:pl-0">
          {answer}
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6 pt-16  text-left border-x border-b border-gray-200">

        {/* --- HEADER --- */}
        <div className="mx-auto max-w-6xl text-center mb-16">
          {/* Badge FAQ */}
          <div className="mb-6">
            <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200">
              <span className="w-2 h-2 bg-gray-600 rounded-full mr-2 inline-block"></span>
              Faq
            </Badge>
          </div>

          {/* EN: Frequently Asked Questions About AI Agents */}
          <h2 className="text-5xl font-normal text-gray-900 tracking-tight mb-4">
            Часто задаваемые вопросы об{' '}
            <span className="relative inline-block font-bold">
              ИИ-агентах
              {/* Gạch chân màu xanh nõn chuối #bef264 */}
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#bef264] -z-10 transform -rotate-1"></span>
            </span>{' '}

          </h2>

          {/* EN: Everything you need to know about our AI agents and how they can transform your workflow. */}
          <p className="text-gray-500 mt-4 text-lg font-light">
            Всё, что вам нужно знать о наших ИИ-агентах и о том, как они могут преобразить ваш рабочий процесс.
          </p>
        </div>

        {/* --- GRID LAYOUT --- */}
        {/* Chia làm 2 cột riêng biệt trên desktop để giống hệt ảnh */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-0 border-t border-gray-200">

          {/* Cột Trái */}
          <div className="flex flex-col">
            {faqData[0].map((item, index) => (
              <FAQItem key={`left-${index}`} question={item.q} answer={item.a} />
            ))}
          </div>

          {/* Cột Phải */}
          <div className="flex flex-col lg:border-l lg:border-gray-200 lg:pl-12">
            {faqData[1].map((item, index) => (
              <FAQItem key={`right-${index}`} question={item.q} answer={item.a} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}