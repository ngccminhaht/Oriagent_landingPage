// file: data.ts
import {
    Sparkles, Users2, Calendar,
    Megaphone, PenTool, BarChart3,
    Target, Mail, Search,
    MessageSquare, Bot, FileText
} from 'lucide-react'

export const AGENT_TABS = [
    { id: 'custom', label: 'Свой ИИ-агент', description: 'Полностью настраиваемый ИИ-агент' }, // EN: Custom AI Agent / Your fully customizable AI agent
    { id: 'marketing', label: 'Маркетинг', description: 'SEO • Контент • Соцсети' }, // EN: Marketing / SEO • Content • Social
    { id: 'sales', label: 'Продажи', description: 'Поиск • Обогащение • Охват' }, // EN: Sales / Prospect • Enrichment • Outreach
    { id: 'chat', label: 'Чат', description: 'Всё остальное, что вам нужно' }, // EN: Chat / Anything else you need help with
] as const;

export type TabId = typeof AGENT_TABS[number]['id'];

export const ROTATING_CONTENT = [
    { agent: '@SEO-специалист', useCase: '#МатрицаПерсон', goal: 'план соцсетей' }, // EN: @SEOSpecialist / #PersonaPainMatrix / social media plan
    { agent: '@Трудоголик', useCase: '#КонтентСтратегия', goal: 'маркетинг кампания' }, // EN: @WorkingHard / #ContentStrategy / marketing campaign
    { agent: '@МаркетологПро', useCase: '#ГолосБренда', goal: 'цепочка писем' }, // EN: @MarketingPro / #BrandVoice / email sequence
    { agent: '@МастерПродаж', useCase: '#КвалификацияЛидов', goal: 'список проспектов' }, // EN: @SalesWizard / #LeadQualification / prospect list
    { agent: '@АналитикДанных', useCase: '#ГенерацияИнсайтов', goal: 'отчёт о результатах' }, // EN: @DataAnalyst / #InsightGeneration / performance report
];

export const AGENT_CONTENT = {
    custom: [
        {
            icon: Sparkles,
            title: 'Свой ИИ-агент', // EN: Custom AI Agent
            description: 'Создайте специализированного ИИ-агента с пользовательскими инструкциями, знаниями и инструментами для выполнения конкретных задач вашего бизнеса.', // EN: Create your own specialized AI agent...
            steps: ['Определить цель', 'Задать инструкции', 'Добавить знания', 'Настроить инструменты', 'Развернуть'], // EN: Define Purpose, Set Instructions, Add Knowledge, Configure Tools, Deploy & Use
            cta: 'Создать агента', // EN: Create Agent
        },
        {
            icon: Users2,
            title: 'Мультиагентные команды', // EN: Multi-agent Teams
            description: 'Создавайте команды специализированных ИИ-агентов, которые совместно решают сложные задачи.', // EN: Build teams of specialized AI agents...
            steps: ['Определить роли', 'Настроить процессы', 'Создать задачи', 'Отслеживать', 'Проверить'], // EN: Define Roles, Set Workflows, Create Tasks, Monitor Progress, Review Output
            badge: 'Скоро', // EN: Coming soon
        },
        {
            icon: Calendar,
            title: 'Планировщик агентов', // EN: Agent Scheduler
            description: 'Планируйте автоматический запуск задач ваших ИИ-агентов в определённое время.', // EN: Schedule your AI agents to run tasks automatically at specific times.
            steps: ['Определить задачу', 'Установить расписание', 'Выбрать агента', 'Настроить вывод', 'Активировать'], // EN: Define Task, Set Schedule, Select Agent, Configure Output, Activate
            badge: 'Скоро', // EN: Coming soon
        },
    ],
    marketing: [
        {
            icon: Megaphone,
            title: 'Менеджер соцсетей', // EN: Social Media Manager
            description: 'Автоматически создавайте и планируйте публикации в LinkedIn, Twitter и Instagram на основе вашего стиля бренда.', // EN: Auto-generate and schedule engaging posts...
            steps: ['Подключить аккаунты', 'Загрузить бренд-кит', 'Установить темы', 'Проверить календарь', 'Авто-публикация'], // EN: Connect Accounts, Upload Brand Kit, Set Topics, Review Calendar, Auto-Publish
            cta: 'Запустить кампанию', // EN: Start Campaign
        },
        {
            icon: PenTool,
            title: 'SEO-копирайтер', // EN: SEO Content Writer
            description: 'Исследуйте ключевые слова и пишите полные SEO-оптимизированные статьи для блога, которые занимают высокие позиции в Google.', // EN: Research keywords and write full SEO-optimized blog posts...
            steps: ['Исслед. ключ. слов', 'Создание плана', 'Написание', 'SEO-оптимизация', 'Публикация в CMS'], // EN: Keyword Research, Outline Generation, Drafting, SEO Optimization, Publish to CMS
        },
        {
            icon: BarChart3,
            title: 'Аналитик рекламы', // EN: Ad Performance Analyst
            description: 'Анализируйте расходы на рекламу и эффективность для получения действенных рекомендаций для лучшего ROI.', // EN: Analyze your ad spend and performance...
            steps: ['Подкл. рекл. кабинет', 'Анализ данных', 'Найти тренды', 'Предложить изменения', 'Оптимизировать'], // EN: Connect Ads Mgr, Analyze Data, Identify Trends, Suggest Changes, Optimize
            badge: 'Бета', // EN: Beta
        },
    ],
    sales: [
        {
            icon: Search,
            title: 'Исследователь лидов', // EN: Lead Researcher
            description: 'Автоматически находите и обогащайте потенциальных клиентов из LinkedIn и веба, соответствующих вашему ICP.', // EN: Automatically find and enrich potential leads...
            steps: ['Определить ICP', 'Сбор источников', 'Обогащение данных', 'Проверка email', 'Экспорт списка'], // EN: Define ICP, Scrape Sources, Enrich Data, Verify Emails, Export List
            cta: 'Найти лидов', // EN: Find Leads
        },
        {
            icon: Mail,
            title: 'Специалист по охвату', // EN: Outreach Specialist
            description: 'Отправляйте персонализированные холодные письма, которые действительно получают ответы.', // EN: Send personalized cold email sequences...
            steps: ['Загрузить лидов', 'Шаблоны', 'Персонализация', 'Планировать отправку', 'Отслеж. ответы'], // EN: Upload Leads, Draft Templates, Personalize, Schedule Send, Track Replies
        },
        {
            icon: Target,
            title: 'Агент синхронизации CRM', // EN: CRM Sync Agent
            description: 'Автоматически обновляйте CRM, регистрируя звонки, письма и заметки со встреч.', // EN: Keep your CRM updated by automatically logging calls, emails, and meeting notes.
            steps: ['Подкл. CRM', 'Мониторинг связи', 'Извлечь инфо', 'Обновить записи', 'Уведомить команду'], // EN: Connect CRM, Monitor Comms, Extract Info, Update Records, Notify Team
            badge: 'Популярный', // EN: Popular
        },
    ],
    chat: [
        {
            icon: Bot,
            title: 'Бот поддержки клиентов', // EN: Customer Support Bot
            description: 'Обрабатывайте 80% запросов клиентов мгновенно 24/7 с помощью бота, обученного на ваших документах.', // EN: Handle 80% of customer queries instantly 24/7...
            steps: ['Загрузить документы', 'Обучить модель', 'Встроить виджет', 'Отвечать на запросы', 'Передать человеку'], // EN: Upload Docs, Train Model, Embed Widget, Answer Queries, Escalate to Human
            cta: 'Создать бота', // EN: Build Bot
        },
        {
            icon: FileText,
            title: 'Аналитик документов', // EN: Document Analyst
            description: 'Общайтесь с вашими PDF, CSV или Notion-документами для мгновенного извлечения инсайтов.', // EN: Chat with your PDF, CSV, or Notion docs...
            steps: ['Загрузить файлы', 'Индексировать', 'Задать вопросы', 'Получить цитаты', 'Резюмировать'], // EN: Upload Files, Index Content, Ask Questions, Get Citations, Summarize
        },
        {
            icon: MessageSquare,
            title: 'Внутренний помощник', // EN: Internal Assistant
            description: 'Универсальный помощник для вашей команды: планирование встреч и поиск внутренней информации.', // EN: An all-in-one assistant for your team...
            steps: ['Интеграция Slack', 'Подкл. календарь', 'Настр. доступ', 'Приём команд', 'Выполнить'], // EN: Integrate Slack, Connect Calendar, Set Permissions, Receive Commands, Execute
            badge: 'Скоро', // EN: Coming soon
        },
    ],
};