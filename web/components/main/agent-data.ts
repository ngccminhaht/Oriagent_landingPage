import {
    Bot, Megaphone, DollarSign, Smartphone,
    Lightbulb, Database, Settings, Play,
    Search, FileText, Globe, Users, Mail, Phone,
    Zap, Share2, Users2, BarChart3, PenTool
} from 'lucide-react'

// --- TYPES ---
export interface Step {
    label: string
    icon: any
}

export interface Feature {
    title: string
    description: string
    badge?: string
    steps: Step[]
    cta: string
}

export interface TabConfig {
    id: string
    label: string
    description: string
    icon: any
    color: string       // Text color main
    bgColor: string     // Background nhạt
    borderColor: string // Border
    activeBg: string    // Background khi active
    barColor: string    // Thanh line trên đầu
    theme: string       // Dùng để map style logic nếu cần
}

// --- 1. CONFIG TABS (4 Nút) ---
export const agentTabs: TabConfig[] = [
    {
        id: 'custom',
        label: 'Свой ИИ-агент', // EN: Custom AI Agent
        description: 'Создайте свою логику', // EN: Build your own logic
        icon: Bot,
        color: 'text-lime-600',
        bgColor: 'bg-lime-100',
        borderColor: 'border-lime-200',
        activeBg: 'bg-[#f7fee7]',
        barColor: 'bg-lime-500',
        theme: 'lime'
    },
    {
        id: 'marketing',
        label: 'Маркетинг', // EN: Marketing
        description: 'SEO и рост контента', // EN: SEO & Content Growth
        icon: Megaphone,
        color: 'text-blue-600',
        bgColor: 'bg-blue-100',
        borderColor: 'border-blue-200',
        activeBg: 'bg-blue-50',
        barColor: 'bg-blue-500',
        theme: 'blue'
    },
    {
        id: 'sales',
        label: 'Продажи', // EN: Sales
        description: 'Охват и закрытие сделок', // EN: Outreach & Closing
        icon: DollarSign,
        color: 'text-orange-600',
        bgColor: 'bg-orange-100',
        borderColor: 'border-orange-200',
        activeBg: 'bg-orange-50',
        barColor: 'bg-orange-500',
        theme: 'orange'
    },
    {
        id: 'chat',
        label: 'Чат с клиентами', // EN: Customer Chat
        description: 'Поддержка 24/7', // EN: 24/7 Support
        icon: Smartphone,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-100',
        borderColor: 'border-yellow-200',
        activeBg: 'bg-yellow-50',
        barColor: 'bg-yellow-500',
        theme: 'yellow'
    },
]

// --- 2. CONTENT FEATURES ---
export const tabContentData: Record<string, Feature[]> = {
    // Tab 1: Custom
    custom: [
        {
            title: 'Создайте своего агента', // EN: Build Your Own Agent
            description: 'Создайте специализированную команду ИИ, точно под потребности вашего бизнеса с пользовательскими инструкциями и базами знаний.', // EN: Create a specialized AI workforce...
            badge: 'Гибкий', // EN: Flexible
            steps: [
                { label: 'Определить цель', icon: Lightbulb }, // EN: Define Purpose
                { label: 'Загрузить знания', icon: Database }, // EN: Upload Knowledge
                { label: 'Настроить инструменты', icon: Settings }, // EN: Set Tools
                { label: 'Развернуть', icon: Play } // EN: Deploy
            ],
            cta: 'Начать создание' // EN: Start Building
        },
        {
            title: 'Мультиагентная оркестрация', // EN: Multi-agent Orchestration
            description: 'Соединяйте несколько агентов для решения сложных задач автономно. Пример: Исследовательский агент передаёт данные агенту-писателю.', // EN: Connect multiple agents...
            badge: 'Продвинутый', // EN: Advanced
            steps: [
                { label: 'Назначить роли', icon: Users2 }, // EN: Assign Roles
                { label: 'Карта процессов', icon: Share2 }, // EN: Workflow Map
                { label: 'Запустить', icon: Zap } // EN: Execute
            ],
            cta: 'Изучить команды' // EN: Explore Teams
        }
    ],

    // Tab 2: Marketing
    marketing: [
        {
            title: 'Генератор SEO-контента', // EN: SEO Content Generator
            description: 'Автоматически исследуйте ключевые слова, составляйте планы блогов, пишите статьи и публикуйте в CMS для привлечения органического трафика.', // EN: Automatically research keywords...
            badge: 'Рост трафика', // EN: Traffic Booster
            steps: [
                { label: 'Исследование ключевых слов', icon: Search }, // EN: Keyword Research
                { label: 'Написание', icon: FileText }, // EN: Drafting
                { label: 'Публикация', icon: Globe } // EN: Publishing
            ],
            cta: 'Создать кампанию' // EN: Create Campaign
        },
        {
            title: 'Менеджер социальных сетей', // EN: Social Media Manager
            description: 'Генерируйте вирусные посты для Twitter/LinkedIn из ваших блогов и планируйте их автоматически.', // EN: Generate viral posts...
            badge: 'Вирусный', // EN: Viral
            steps: [
                { label: 'Переработка контента', icon: Share2 }, // EN: Repurpose Content
                { label: 'Генерация изображений', icon: PenTool }, // EN: Generate Image
                { label: 'Планирование', icon: BarChart3 } // EN: Schedule
            ],
            cta: 'Авто-публикация' // EN: Auto-Post
        }
    ],

    // Tab 3: Sales
    sales: [
        {
            title: 'Бот исходящих продаж', // EN: Outbound Sales Bot
            description: 'Находите потенциальных клиентов, обогащайте их данные и отправляйте персонализированные письма в масштабе.', // EN: Identify potential leads...
            badge: 'Лидогенерация', // EN: Lead Gen
            steps: [
                { label: 'Сбор лидов', icon: Users }, // EN: Scrape Leads
                { label: 'Обогащение данных', icon: Database }, // EN: Enrich Data
                { label: 'Цепочка писем', icon: Mail } // EN: Email Sequence
            ],
            cta: 'Найти лидов' // EN: Find Leads
        },
        {
            title: 'Запись на встречи', // EN: Meeting Booker
            description: 'Агент, который квалифицирует лидов по электронной почте и автоматически записывает встречи в ваш календарь.', // EN: An agent that qualifies leads...
            badge: 'Закрытие сделок', // EN: Closer
            steps: [
                { label: 'Квалификация', icon: Check }, // EN: Qualify
                { label: 'Предложить время', icon: CalendarDays }, // EN: Propose Time
                { label: 'Забронировать', icon: Check } // EN: Book Slot
            ],
            cta: 'Подключить календарь' // EN: Connect Calendar
        }
    ],

    // Tab 4: Chat
    chat: [
        {
            title: 'Автопилот поддержки', // EN: Support Auto-Pilot
            description: 'Обрабатывайте 80% запросов клиентов мгновенно с помощью ИИ, обученного на вашей документации и прошлых тикетах.', // EN: Handle 80% of customer queries...
            badge: 'Активен 24/7', // EN: 24/7 Active
            steps: [
                { label: 'Загрузить документы', icon: FileText }, // EN: Ingest Docs
                { label: 'Авто-ответ', icon: Smartphone }, // EN: Auto-Reply
                { label: 'Передать человеку', icon: Phone } // EN: Escalate Human
            ],
            cta: 'Настроить чат-бот' // EN: Setup Chatbot
        },
        {
            title: 'Рекомендации товаров', // EN: Product Recommender
            description: 'Направляйте посетителей к нужному продукту через диалоговый интерфейс.', // EN: Guide visitors to the right product...
            badge: 'Э-коммерция', // EN: E-commerce
            steps: [
                { label: 'Выяснить потребности', icon: Search }, // EN: Ask Needs
                { label: 'Фильтрация БД', icon: Database }, // EN: Filter DB
                { label: 'Предложить', icon: Zap } // EN: Suggest
            ],
            cta: 'Создать гид' // EN: Create Guide
        }
    ]
}

// --- 3. ROTATING TEXT DATA ---
// EN: @ContentWriter/#PersonaPainMatrix/SEO content, @SalesBot/#LeadScoring/qualified leads...
export const rotatingContent = [
    { agent: '@Копирайтер', useCase: '#МатрицаПерсон', goal: 'SEO-контент' },
    { agent: '@БотПродаж', useCase: '#ОценкаЛидов', goal: 'квалиф. лиды' },
    { agent: '@ДжинПоддержки', useCase: '#АвтоОтвет', goal: 'довольные клиенты' },
    { agent: '@АналитикДанных', useCase: '#ТрендыРынка', goal: 'стратегич. инсайты' },
]

// Import thêm icon còn thiếu cho Data file nếu cần để tránh lỗi
import { Check, CalendarDays } from 'lucide-react'