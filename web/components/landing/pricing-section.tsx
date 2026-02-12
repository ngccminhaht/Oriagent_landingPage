'use client'
import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Mail,
  PhoneCall,
  Check,
  BadgeCheckIcon,
  ChevronDown,
  Calendar,
  CheckCircle,
  MessageSquare,
  Clock,
  Zap,
  Star, Phone, Settings, Rocket, Pencil, Timer, Link 
} from "lucide-react";

export function PricingSection() {
  // --- LOGIC ANIMATION CHỮ (Faster/Better) ---
  const [displayText, setDisplayText] = useState("Faster");
  const [fadeOut, setFadeOut] = useState(false);
  const words = ["Быстрее", "Лучше"]; // EN: Faster, Better

  useEffect(() => {
    let currentIndex = 0; // Khai báo bên trong để closure của interval nắm giữ đúng giá trị
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        setDisplayText(words[currentIndex]);
        setFadeOut(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []); // Dependency array rỗng vì words là hằng số

  // --- LOGIC TESTIMONIALS ---
  const testimonials = [
    {
      id: 1,
      name: 'Charlie',
      rating: 5,
      // EN: The integration capabilities with my existing tools made adoption seamless. Every update brings new valuable features.
      text: 'Возможности интеграции с моими существующими инструментами сделали внедрение плавным. Каждое обновление приносит новые ценные функции.',
      image: 'person1.png'
    },
    {
      id: 2,
      name: 'Sarah',
      rating: 5,
      // EN: This platform has transformed how we handle our workflows. The AI agents are incredibly smart and responsive.
      text: 'Эта платформа изменила наш подход к рабочим процессам. ИИ-агенты невероятно умные и отзывчивые.',
      image: 'person2.png'
    },
    {
      id: 3,
      name: 'Marcus',
      rating: 5,
      // EN: Outstanding support team and continuous improvements. Worth every penny for the time savings alone.
      text: 'Отличная команда поддержки и постоянные улучшения. Стоит каждого рубля только за экономию времени.',
      image: 'person3.png'
    }
  ];

  const [activeTab, setActiveTab] = useState('basic')
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const currentTestimonial = testimonials[testimonialIndex]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {/* EN: Plans to suit */}
          <Badge className="mb-4 bg-lime-200 text-gray-900 hover:bg-lime-300">Подходящие планы</Badge>
          {/* EN: Choose your plan */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Выберите свой план</h2>
          {/* EN: Our AI automation Done For You plans, are designed to help you get the most out of your AI agent. We offer two plans to suit your needs. */}
          <p className="text-gray-600 max-w-2xl mx-auto">
            Наши планы ИИ-автоматизации «Под ключ» разработаны, чтобы помочь вам максимально эффективно использовать ИИ-агента. Мы предлагаем два плана под ваши потребности.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">

            <TabsList className="grid w-full grid-cols-2 max-w-xl mx-auto mb-8">
              <TabsTrigger value="basic">{/* EN: Basic */}Базовый</TabsTrigger>
              <TabsTrigger value="advanced">{/* EN: Advanced */}Продвинутый</TabsTrigger>
            </TabsList>

            {/* 2. Tabs Content - BASIC */}
            <TabsContent value="basic" className="mt-0">
              <div
                className="grid md:grid-cols-2 gap-6 items-stretch rounded-2xl border-0 shadow-xl p-3"
                style={{ background: 'linear-gradient(to right, #F3F5D4 0%, #D9F9C3 100%)' }}
              >
                {/* Pricing Card - Left (Basic) */}
                <Card className="md:col-span-1  w-full h-full overflow-hidden bg-transparent border-0 shadow-none">
                  <div className="p-8 text-black flex flex-col h-full">
                    {/* Badges */}
                    <div className="flex gap-2 mb-6">
                      {/* EN: Custom Solution */}
                      <Badge className="bg-black text-white hover:bg-gray-900">Индивидуальное решение</Badge>
                      {/* EN: Core Automation */}
                      <Badge className="bg-green-400 text-black hover:bg-green-500">Базовая автоматизация</Badge>
                    </div>

                    {/* Title & Description */}
                    {/* EN: Essential AI Workflow */}
                    <h3 className="text-3xl font-bold mb-2">Основной ИИ-процесс</h3>
                    {/* EN: For Growing Teams */}
                    <p className="text-lg mb-6 leading-relaxed">Для растущих команд</p>
                    {/* EN: Perfect for businesses ready to automate 1-3 core processes. Get a custom AI solution built by experts in 30-60 days. */}
                    <p className="text-sm mb-6 opacity-90">
                      Идеально для бизнеса, готового автоматизировать 1–3 ключевых процесса. Получите индивидуальное ИИ-решение от экспертов за 30–60 дней.
                    </p>

                    {/* Features */}
                    <div className="space-y-4 mb-8 flex-grow">
                      <div className="flex items-start gap-3">
                        <PhoneCall className="w-5 h-5 text-green-600" />
                        {/* EN: 30-min strategy call */}
                        <span className="text-sm">Стратегический звонок 30 мин</span>
                      </div>

                      <div className="flex items-start gap-3">
                        <Settings className="w-5 h-5 text-blue-600" />
                        {/* EN: 1 custom workflow per month */}
                        <span className="text-sm">1 индивидуальный процесс в месяц</span>
                      </div>

                      <div className="flex items-start gap-3">
                        <Rocket className="w-5 h-5 text-purple-600" />
                        {/* EN: Launch + team training session */}
                        <span className="text-sm">Запуск + обучение команды</span>
                      </div>

                      <div className="flex items-start gap-3">
                        <Pencil className="w-5 h-5 text-orange-600" />
                        {/* EN: 2 revision rounds included */}
                        <span className="text-sm">2 раунда правок включены</span>
                      </div>

                      <div className="flex items-start gap-3">
                        <Timer className="w-5 h-5 text-red-600" />
                        {/* EN: 48-hour response time */}
                        <span className="text-sm">Время ответа 48 часов</span>
                      </div>

                      <div className="flex items-start gap-3">
                        <Link className="w-5 h-5 text-indigo-600" />
                        {/* EN: Standard API integrations */}
                        <span className="text-sm">Стандартные API-интеграции</span>
                      </div>

                    </div>

                    {/* Pricing */}
                    <div className="mb-6 mt-auto">
                      <p className="text-5xl font-bold">$1,999</p>
                      <p className="text-sm opacity-75">/месяц</p> {/* EN: /month */}
                      <p className="text-xs mt-2 opacity-75">
                        <span className="line-through">$2,999</span> <span className="text-green-200">{/* EN: 50% OFF */}Скидка 50%</span>
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-3">

                      {/* BOOK A CALL */}
                      <a
                        href="https://www.arrowhitech.com/contact-us/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full gap-2 bg-black text-white hover:bg-gray-900 rounded-full relative flex items-center justify-center">
                          <PhoneCall className="w-4 h-4 " />
                          {/* EN: Book a call */}
                          <span>Записаться на звонок</span>
                        </Button>
                      </a>

                      {/* EMAIL US */}
                      <a
                        href="https://www.arrowhitech.com/contact-us/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="ghost"
                          className="w-full bg-white text-black hover:bg-gray-900 hover:bg-opacity-20 rounded-full flex items-center justify-center gap-2"
                        >
                          <Mail className="h-4 w-4" />
                          {/* EN: Email us */}
                          <span>Напишите нам</span>
                        </Button>
                      </a>

                    </div>

                    {/* Limited Offer */}
                    {/* <div className="mt-6 p-3 bg-green-400 text-white bg-opacity-30 rounded-lg text-xs text-center">
                      Limited time offer: Only accepting 5 businesses at this rate
                    </div> */}
                  </div>
                </Card>

                {/* Features & Testimonials Card - Right (Basic) */}
                <Card className="md:col-span-1 rounded-2xl border-0 shadow-xl p-8 h-full flex flex-col">
                  {/* EN: Core AI Automation Features */}
                  <h4 className="text-2xl font-bold mb-6 text-gray-900">Основные функции ИИ-автоматизации</h4>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-lg">⏱️</span>
                        <div>
                          <p className="text-xs text-gray-500">{/* EN: Save */}Экономия</p>
                          <p className="font-semibold text-sm">{/* EN: 10-15 hrs/employee/week */}10–15 ч/сотрудник/неделю</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-lg">📊</span>
                        <div>
                          <p className="text-xs text-gray-500">{/* EN: Reduce */}Сокращение</p>
                          <p className="font-semibold text-sm">{/* EN: manual tasks by 40% */}ручных задач на 40%</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-lg">🔗</span>
                        <div>
                          <p className="text-xs text-gray-500">{/* EN: Integration */}Интеграция</p>
                          <p className="font-semibold text-sm">{/* EN: 3-5 app integrations */}3–5 интеграций приложений</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-lg">⚙️</span>
                        <div>
                          <p className="text-xs text-gray-500">{/* EN: Workflow */}Процесс</p>
                          <p className="font-semibold text-sm">{/* EN: 1-3 core automation */}1–3 базовых автоматизации</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-lg">📈</span>
                        <div>
                          <p className="text-xs text-gray-500">{/* EN: Data */}Данные</p>
                          <p className="font-semibold text-sm">{/* EN: Standard processing */}Стандартная обработка</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-lg">🧠</span>
                        <div>
                          <p className="text-xs text-gray-500">{/* EN: Intelligence */}Интеллект</p>
                          <p className="font-semibold text-sm">{/* EN: Multi-model */}Мульти-модель</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonials Section */}
                  <div className="border-t pt-6 mt-auto">
                    {/* EN: What our customers say */}
                    <h5 className="text-lg font-semibold mb-4 text-gray-900">Что говорят наши клиенты</h5>

                    {/* Đã fix: Hiển thị nội dung thật từ mảng testimonials */}
                    <div className="bg-gray-50 rounded-lg p-6 mb-4 min-h-[140px] flex flex-col justify-between">
                      <p className="text-sm text-gray-700 mb-4 italic">"{currentTestimonial.text}"</p>
                      <div className="flex items-center gap-3">
                        {/* Nếu muốn hiển thị ảnh, bỏ comment dòng dưới */}
                        <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-8 h-8 rounded-full object-cover" /> 
                        <div className="flex flex-col">
                          <span className="font-semibold text-sm text-gray-900">{currentTestimonial.name}</span>
                          <div className="flex text-yellow-400">
                            {[...Array(currentTestimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Nút điều hướng testimonial */}
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={handlePrevTestimonial}>
                        <ChevronDown className="h-4 w-4 rotate-90" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={handleNextTestimonial}>
                        <ChevronDown className="h-4 w-4 -rotate-90" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* 3. Tabs Content - ADVANCED */}
            <TabsContent value="advanced" className="mt-0">
              <div className="w-full max-w-6xl">
                <div className="rounded-3xl border-2 border-amber-400 bg-slate-950 overflow-hidden shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-between">
                      {/* Badge */}
                      <div className="inline-flex w-fit mb-8">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
                          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                          {/* EN: White Glove Service */}
                          <span className="text-sm text-slate-300">Премиум-сервис</span>
                        </div>
                      </div>

                      {/* Heading */}
                      <div className="mb-8">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                          {/* EN: Enterprise AI Ecosystem. Built Around Your Workflow. */}
                          Корпоративная ИИ-экосистема.
                          <br />
                          Построена под ваш процесс.
                        </h1>
                        {/* EN: For fast-moving teams that need sophisticated automation across 5-15 processes... */}
                        <p className="text-slate-300 text-lg leading-relaxed">
                          Для динамичных команд, которым нужна сложная автоматизация 5–15 процессов. Мы проектируем, создаём и развёртываем интеллектуальных агентов, заменяющих целые операционные процессы — с точностью и масштабом.
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                          <Plus className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                          {/* EN: Everything in Basic plan */}
                          <span className="text-slate-300">Всё из Базового плана</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                          {/* EN: 60-min deep-dive audit + roadmap */}
                          <span className="text-slate-300">Глубокий аудит 60 мин + дорожная карта</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Zap className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                          {/* EN: 2 complex workflows per month */}
                          <span className="text-slate-300">2 сложных процесса в месяц</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <MessageSquare className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                          {/* EN: Weekly strategy & optimization calls */}
                          <span className="text-slate-300">Еженедельные стратегические звонки</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                          {/* EN: Unlimited revision rounds */}
                          <span className="text-slate-300">Безлимитные правки</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                          {/* EN: 24-hour response time */}
                          <span className="text-slate-300">Время ответа 24 часа</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Zap className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                          {/* EN: 15+ enterprise integrations */}
                          <span className="text-slate-300">15+ корпоративных интеграций</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                          {/* EN: Dedicated AI engineer & PM team */}
                          <span className="text-slate-300">Выделенный ИИ-инженер и PM-команда</span>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="mb-8">
                        {/* EN: Starting at */}
                        <p className="text-slate-400 text-sm mb-2">От</p>
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-5xl font-bold text-white">$59,99</span>
                          <span className="text-slate-400">/месяц</span> {/* EN: /month */}
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-500 line-through">$7,999</span>
                          <span className="text-amber-400 font-semibold">{/* EN: 25% Off */}Скидка 25%</span>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href="https://www.arrowhitech.com/contact-us/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                          >
                          <button className="w-full px-2 py-3 rounded-full bg-amber-400 text-slate-950 font-semibold hover:bg-amber-300 transition-colors flex items-center justify-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {/* EN: Book a call */}
                            Записаться на звонок
                          </button>
                        </a>

                        <a
                          href="https://www.arrowhitech.com/contact-us/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                          >
                          <button className="flex-1 px-6 py-3 rounded-full border border-slate-700 text-slate-300 font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                            <Mail className="w-4 h-4" />
                            {/* EN: Email us */}
                            Напишите нам
                          </button>

                          </a>
                      </div>

                      {/* EN: Priority onboarding • 1 agent per week • Cancel anytime */}
                      <p className="text-xs text-slate-500 mt-4">
                        Приоритетный онбординг • 1 агент в неделю • Отмена в любое время
                      </p>
                    </div>

                    {/* Right Content - Animated Text */}
                    <div className="hidden lg:flex items-center justify-center p-12 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
                      {/* Diagonal stripe pattern background */}
                      <div className="absolute inset-0 opacity-10">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <pattern
                              id="diagonalStripes"
                              x="0"
                              y="0"
                              width="10"
                              height="10"
                              patternUnits="userSpaceOnUse"
                              patternTransform="rotate(-45)"
                            >
                              <line
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="10"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            </pattern>
                          </defs>
                          <rect width="100" height="100" fill="url(#diagonalStripes)" />
                        </svg>
                      </div>

                      {/* Animated text */}
                      <div className="relative z-10 text-center">
                        <div className="text-7xl lg:text-8xl font-bold h-32 flex items-center justify-center">
                          <div
                            className={`transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"
                              }`}
                          >
                            <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                              {displayText}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

function Plus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}