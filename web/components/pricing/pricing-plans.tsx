"use client"

import { useState } from "react"
import { CheckCircle, Sparkles, Star, Zap, } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

export function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-50 px-3 py-1 text-xs font-bold tracking-wide text-lime-700 uppercase border border-lime-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
              </span>
              {/* EN: Pricing */}
              Цены
            </span>
          </div>
          {/* EN: Choose the plan that's right for you */}
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Выберите подходящий план</h1>
          {/* EN: We offer a variety of plans to fit from startups to large enterprises. Join 40,000+ users boosting their productivity today. */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Мы предлагаем разнообразные планы для стартапов и крупных компаний. Присоединяйтесь к 40 000+ пользователям, повышающим продуктивность.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            {/* EN: Monthly */}
            <span className={!isYearly ? "font-medium" : "text-muted-foreground"}>Ежемесячно</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            {/* EN: Yearly */}
            <span className={isYearly ? "font-medium" : "text-muted-foreground"}>Ежегодно</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1 text-xs font-bold tracking-wide text-purple-700 uppercase border border-purple-200">
              {/* EN: 2 months free */}
              2 месяца бесплатно
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border rounded-3xl overflow-hidden bg-white shadow-sm">
          {/* Starter Plan */}
          <div className="p-8 flex flex-col h-full">
            <div className="mb-8">
              {/* EN: Starter */}
              <h3 className="text-2xl font-medium mb-2">Стартовый</h3>
              {/* EN: Get started with AI agents that automate your basic tasks and workflows... */}
              <p className="text-muted-foreground text-sm mb-6">
                Начните с ИИ-агентов, которые автоматизируют базовые задачи и процессы,
                экономя часы ручной работы каждую неделю.
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-medium">${isYearly ? "24" : "29"}</span>
                <span className="text-muted-foreground">/ месяц</span> {/* EN: / month */}
              </div>
            </div>
            <a
              href="https://app.oriagent.com/signin"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <Button variant="outline" className="w-full rounded-2xl mb-8 h-12 text-base bg-gray-300 border-0 hover:bg-gray-100">
                {/* EN: Sign In */}
                Войти
              </Button>
            </a>
            
            <div className="space-y-4 flex-1">
              {/* EN: Access */}
              <div className="text-lg font-medium text-muted-foreground mb-4 text-red-600">Доступ</div>
              <div className="flex items-center gap-3 text-sm">
                <Zap className="w-4 h-4 text-muted-foreground" />
                {/* EN: Fast models */}
                <span>Быстрые модели</span>
                <CheckCircle className="w-4 h-4 text-[#a4c521]  ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Star className="w-4 h-4" />
                {/* EN: Premium models */}
                <span>Премиум-модели</span>
                <span className="ml-auto">—</span>
              </div>
              {/* EN: Credits */}
              <div className="text-lg font-medium text-muted-foreground mt-6 mb-4 text-orange-500">Кредиты</div>
              <div className="flex items-center justify-between text-sm">
                {/* EN: Monthly Credits */}
                <span>Ежемесячные кредиты</span>
                <span>50</span>
              </div>
              {/* EN: Capacity */}
              <div className="text-lg font-medium text-muted-foreground mt-6 mb-4 text-purple-500">Мощность</div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    {/* EN: Premium-model chats/mo */}
                    <Zap className="w-4 h-4 text-muted-foreground" /> Чаты премиум-модели/мес
                  </span>
                  <span>50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    {/* EN: Agent runs/mo */}
                    <Sparkles className="w-4 h-4 text-muted-foreground" /> Запуски агентов/мес
                  </span>
                  <span>25</span>
                </div>
                <div className="flex justify-between text-sm">
                  {/* EN: Content-planner calls/mo */}
                  <span className="flex items-center gap-2">Вызовы контент-планировщика/мес</span>
                  <span>5</span>
                </div>
                <div className="flex justify-between text-sm">
                  {/* EN: Full SEO articles/mo */}
                  <span className="flex items-center gap-2">Полные SEO-статьи/мес</span>
                  <span>3</span>
                </div>
              </div>
              {/* EN: Features */}
              <div className="text-lg font-medium text-muted-foreground mt-6 mb-4 text-pink-500">Возможности</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  {/* EN: Enhanced Search */}
                  <span>Расширенный поиск</span>
                  <CheckCircle className="w-4 h-4 font-bold text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  {/* EN: Custom Agents */}
                  <span>Кастомные агенты</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  {/* EN: Early Access */}
                  <span>Ранний доступ</span>
                  <span>—</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="p-8 flex flex-col h-full relative bg-gray-50/50">
            <div className="absolute top-4 right-4">
              {/* EN: Most Popular */}
              <Badge className="bg-[#ccff00] text-black hover:bg-[#b3e600] border-0">Популярный</Badge>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-medium mb-2">Pro</h3>
              {/* EN: Step up your productivity with more powerful AI agents that handle complex tasks... */}
              <p className="text-muted-foreground text-sm mb-6">
                Повысьте продуктивность с помощью более мощных ИИ-агентов, которые решают сложные задачи и интегрируются 
                с вашими любимыми инструментами.
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-medium">${isYearly ? "82" : "99"}</span>
                <span className="text-muted-foreground">/ месяц</span> {/* EN: / month */}
              </div>
            </div>
            <a
              href="https://app.oriagent.com/signin"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <Button className="w-full rounded-2xl mb-8 h-12 text-base bg-[#d5ee71] text-black hover:bg-[#b3e600]">
                {/* EN: Sign In */}
                Войти
              </Button>
            </a>
            
            <div className="space-y-4 flex-1">
              {/* EN: Access */}
              <div className="text-lg font-medium text-muted-foreground mb-4 text-red-600">Доступ</div>
              <div className="flex items-center gap-3 text-sm">
                <Zap className="w-4 h-4 text-muted-foreground" />
                {/* EN: Fast models */}
                <span>Быстрые модели</span>
                <CheckCircle className="w-4 h-4 text-[#a4c521]  ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Star className="w-4 h-4 text-muted-foreground" />
                {/* EN: Premium models */}
                <span>Премиум-модели</span>
                <CheckCircle className="w-4 h-4 text-[#a4c521]  ml-auto" />
              </div>
              {/* EN: Credits */}
              <div className="text-lg font-medium text-muted-foreground mt-6 mb-4 text-orange-500">Кредиты</div>
              <div className="flex items-center justify-between text-sm">
                {/* EN: Monthly Credits */}
                <span>Ежемесячные кредиты</span>
                <span>500</span>
              </div>
              {/* EN: Capacity */}
              <div className="text-lg font-medium text-muted-foreground mt-6 mb-4 text-purple-500">Мощность</div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    {/* EN: Premium-model chats/mo */}
                    <Zap className="w-4 h-4 text-muted-foreground" /> Чаты премиум-модели/мес
                  </span>
                  <span>500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    {/* EN: Agent runs/mo */}
                    <Sparkles className="w-4 h-4 text-muted-foreground" /> Запуски агентов/мес
                  </span>
                  <span>250</span>
                </div>
                <div className="flex justify-between text-sm">
                  {/* EN: Content-planner calls/mo */}
                  <span className="flex items-center gap-2">Вызовы контент-планировщика/мес</span>
                  <span>25</span>
                </div>
                <div className="flex justify-between text-sm">
                  {/* EN: Full SEO articles/mo */}
                  <span className="flex items-center gap-2">Полные SEO-статьи/мес</span>
                  <span>26</span>
                </div>
              </div>
              {/* EN: Features */}
              <div className="text-lg font-medium text-muted-foreground mt-6 mb-4 text-pink-500">Возможности</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  {/* EN: Enhanced Search */}
                  <span>Расширенный поиск</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  {/* EN: Custom Agents */}
                  <span>Кастомные агенты</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  {/* EN: Early Access */}
                  <span>Ранний доступ</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  {/* EN: Unlimited Tasks per Agent */}
                  <span>Неограниченные задачи на агента</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  {/* EN: Analytics Dashboard */}
                  <span>Панель аналитики</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  {/* EN: API & Webhooks */}
                  <span>API и вебхуки</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
              </div>
            </div>
          </div>

          {/* Elite Plan */}
          <div className="p-8 flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-medium mb-2">Elite</h3>
              {/* EN: Unlock maximum automation potential with advanced AI agents... */}
              <p className="text-muted-foreground text-sm mb-6">
                Раскройте максимальный потенциал автоматизации с продвинутыми ИИ-агентами, которые изучают потребности вашего бизнеса
                и обрабатывают сложные процессы.
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-medium">${isYearly ? "207" : "249"}</span>
                <span className="text-muted-foreground">/ месяц</span> {/* EN: / month */}
              </div>
            </div>
            <a
              href="https://app.oriagent.com/signin"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <Button className="w-full rounded-2xl mb-8 h-12 text-base bg-black text-white hover:bg-gray-700">
                {/* EN: Sign In */}
                Войти
              </Button>
            </a>
            
            <div className="space-y-4 flex-1">
              {/* EN: Access */}
              <div className="text-lg font-medium text-muted-foreground mb-4 text-red-600">Доступ</div>
              <div className="flex items-center gap-3 text-sm">
                <Zap className="w-4 h-4 text-muted-foreground" />
                {/* EN: Fast models */}
                <span>Быстрые модели</span>
                <CheckCircle className="w-4 h-4 text-[#a4c521]  ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Star className="w-4 h-4 text-muted-foreground" />
                {/* EN: Premium models */}
                <span>Премиум-модели</span>
                <CheckCircle className="w-4 h-4 text-[#a4c521]  ml-auto" />
              </div>
              {/* EN: Credits */}
              <div className="text-lg font-medium text-muted-foreground mt-6 mb-4 text-orange-500">Кредиты</div>
              <div className="flex items-center justify-between text-sm">
                {/* EN: Monthly Credits */}
                <span>Ежемесячные кредиты</span>
                <span>2000</span>
              </div>
              {/* EN: Capacity */}
              <div className="text-lg font-medium text-muted-foreground mt-6 mb-4 text-purple-500">Мощность</div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    {/* EN: Premium-model chats/mo */}
                    <Zap className="w-4 h-4 text-muted-foreground" /> Чаты премиум-модели/мес
                  </span>
                  <span>2000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    {/* EN: Agent runs/mo */}
                    <Sparkles className="w-4 h-4 text-muted-foreground" /> Запуски агентов/мес
                  </span>
                  <span>1000</span>
                </div>
                <div className="flex justify-between text-sm">
                  {/* EN: Content-planner calls/mo */}
                  <span className="flex items-center gap-2">Вызовы контент-планировщика/мес</span>
                  <span>100</span>
                </div>
                <div className="flex justify-between text-sm">
                  {/* EN: Full SEO articles/mo */}
                  <span className="flex items-center gap-2">Полные SEO-статьи/мес</span>
                  <span>105</span>
                </div>
              </div>
              {/* EN: Features */}
              <div className="text-lg font-medium text-muted-foreground mt-6 mb-4 text-pink-500">Возможности</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  {/* EN: Enhanced Search */}
                  <span>Расширенный поиск</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  {/* EN: Custom Agents */}
                  <span>Кастомные агенты</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  {/* EN: Early Access */}
                  <span>Ранний доступ</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  {/* EN: Unlimited Tasks per Agent */}
                  <span>Неограниченные задачи на агента</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  {/* EN: Analytics Dashboard */}
                  <span>Панель аналитики</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  {/* EN: API & Webhooks */}
                  <span>API и вебхуки</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
                <div className="flex items-center justify-between text-sm">
                  {/* EN: Priority Support */}
                  <span>Приоритетная поддержка</span>
                  <CheckCircle className="w-4 h-4 text-[#a4c521] " />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Plans */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Free Plan */}
          <div className="border rounded-3xl p-8 shadow-sm bg-gradient-to-r from-[#F3F5D4] to-[#D9F9C3]">
            <div className="text-center mb-8">
              {/* EN: Free Option */}
              <h3 className="text-2xl font-bold mb-2">Бесплатный план</h3>
              {/* EN: Experience basic AI automation with limited agents... */}
              <p className="text-gray-700 text-sm">
                Попробуйте базовую ИИ-автоматизацию с ограниченными агентами.
                Идеально для ознакомления с автоматизацией задач.
              </p>
            </div>
            <div className="flex items-baseline justify-center gap-1 mb-8">
              <span className="text-4xl font-medium">$0</span>
              <span className="text-muted-foreground">/ месяц</span> {/* EN: / month */}
            </div>
            <a
              href="https://app.oriagent.com/signin"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <Button  className="w-full rounded-2xl mb-8 h-12 text-white text-lg bg-black hover:bg-green-400">
                {/* EN: Sign In */}
                Войти
              </Button>
            </a>
            
            <div className="space-y-4">
              {/* EN: Access */}
              <div className="text-lg font-bold text-muted-foreground mb-4 text-black">Доступ</div>
              <div className="flex items-center gap-3 text-sm">
                <Zap className="w-4 h-4 " />
                {/* EN: Fast models */}
                <span className="">Быстрые модели</span>
                <CheckCircle className="w-4 h-4 text-[#a4c521]  ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-sm ">
                <Star className="w-4 h-4" />
                {/* EN: Premium models */}
                <span>Премиум-модели</span>
                <span className="ml-auto">—</span>
              </div>
              {/* EN: Credits */}
              <div className="text-lg font-bold text-muted-foreground mt-6 mb-4">Кредиты</div>
              <div className="flex items-center justify-between text-sm">
                {/* EN: Monthly Credits */}
                <span>Ежемесячные кредиты</span>
                <span>50</span>
              </div>
              {/* EN: Capacity */}
              <div className="text-lg font-bold text-muted-foreground mt-6 mb-4">Мощность</div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    {/* EN: Premium-model chats/mo */}
                    <Zap className="w-4 h-4 " /> Чаты премиум-модели/мес
                  </span>
                  <span>50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    {/* EN: Agent runs/mo */}
                    <Sparkles className="w-4 h-4 " /> Запуски агентов/мес
                  </span>
                  <span>25</span>
                </div>
                <div className="flex justify-between text-sm">
                  {/* EN: Content-planner calls/mo */}
                  <span className="flex items-center gap-2">Вызовы контент-планировщика/мес</span>
                  <span>5</span>
                </div>
                <div className="flex justify-between text-sm">
                  {/* EN: Full SEO articles/mo */}
                  <span className="flex items-center gap-2">Полные SEO-статьи/мес</span>
                  <span>3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="border rounded-3xl p-8 bg-black text-white">
            <div className="text-center mb-8">
              {/* EN: Enterprise */}
              <h3 className="text-2xl font-medium mb-2">Корпоративный</h3>
              {/* EN: Custom AI agent solutions designed for your organization's unique automation needs... */}
              <p className="text-gray-400 text-sm">
                Кастомные решения ИИ-агентов, спроектированные под уникальные потребности
                автоматизации вашей организации, с выделенной поддержкой и неограниченной масштабируемостью.
              </p>
            </div>
            <div className="flex items-baseline justify-center gap-1 mb-8">
              <span className="text-4xl font-medium">$$$</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <a
                href="https://www.arrowhitech.com/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                {/* EN: Email Us */}
                <Button className="w-full rounded-2xl h-12 text-base bg-white text-black hover:bg-gray-300">Напишите нам</Button>
              </a>
              <a
                href="https://www.arrowhitech.com/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                {/* EN: Book a Call */}
                <Button className="w-full rounded-2xl h-12 text-base bg-white text-black hover:bg-gray-300">Записаться на звонок</Button>
              </a>

            </div>
            <div className="space-y-4">
              {/* EN: Access */}
              <div className="text-lg font-bold text-gray-400 mb-4">Доступ</div>
              <div className="flex items-center gap-3 text-sm">
                <Zap className="w-4 h-4 text-gray-400" />
                {/* EN: Fast models */}
                <span>Быстрые модели</span>
                <CheckCircle className="w-4 h-4 text-[#a4c521]  ml-auto" />
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Star className="w-4 h-4 text-gray-400" />
                {/* EN: Premium models */}
                <span>Премиум-модели</span>
                <CheckCircle className="w-4 h-4 text-[#a4c521]  ml-auto" />
              </div>
              {/* EN: Credits */}
              <div className="text-lg font-bold text-gray-400 mt-6 mb-4">Кредиты</div>
              <div className="flex items-center justify-between text-sm">
                {/* EN: Monthly Credits */}
                <span>Ежемесячные кредиты</span>
                {/* EN: Custom */}
                <span>Индивидуально</span>
              </div>
              {/* EN: Capacity */}
              <div className="text-lg font-bold text-gray-400 mt-6 mb-4">Мощность</div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    {/* EN: Premium-model chats/mo */}
                    <Zap className="w-4 h-4 text-gray-400" /> Чаты премиум-модели/мес
                  </span>
                  {/* EN: Custom */}
                  <span>Индивидуально</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    {/* EN: Agent runs/mo */}
                    <Sparkles className="w-4 h-4 text-gray-400" /> Запуски агентов/мес
                  </span>
                  {/* EN: Custom */}
                  <span>Индивидуально</span>
                </div>
                <div className="flex justify-between text-sm">
                  {/* EN: Content-planner calls/mo */}
                  <span className="flex items-center gap-2">Вызовы контент-планировщика/мес</span>
                  {/* EN: Custom */}
                  <span>Индивидуально</span>
                </div>
                <div className="flex justify-between text-sm">
                  {/* EN: Full SEO articles/mo */}
                  <span className="flex items-center gap-2">Полные SEO-статьи/мес</span>
                  {/* EN: Custom */}
                  <span>Индивидуально</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
