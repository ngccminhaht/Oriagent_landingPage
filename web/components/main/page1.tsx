'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

// IMPORT BIỂU TƯỢNG
import { Mail, PhoneCall, PlusCircle, Workflow, Bot, ChartArea, Calendar,Heart } from "lucide-react";
export function MainPage() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-16 border-b   text-left border-x border-gray-200">

        {/* Badge */}
        <div className="mb-6">
          <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-200">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 inline-block"></span>
            {/* EN: Done for you AI automation */}
            ИИ-автоматизация под ключ
          </Badge>
        </div>

        {/* Main Headline */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-black">
            {/* EN: Get more done without doing more. */}
            Делайте больше, не делая лишнего.
          </h1>

          <p className="text-xl sm:text-2xl text-gray-500 leading-relaxed">
            {/* EN: Imagine your best teammates, multiplied. */}
            Представьте ваших лучших коллег, умноженных.
            <br />
            {/* EN: Working Smarter, Faster, and Stronger. */}
            Работают <span className="text-purple-600 font-semibold underline underline-offset-1 decoration-purple-600">умнее</span>,
            <span className="text-orange-500 font-semibold"> быстрее</span>,
            и <span className="text-green-600 font-semibold">сильнее</span>.

            <br />
            {/* EN: Taking care of the busywork — so you can do your best work. */}
            Берут на себя рутину —<br />
            чтобы вы делали лучшую работу.
          </p>
        </div>

        {/* Bullet list */}
        <ul className="text-gray-700 space-y-3 mb-10 text-base">
          <li className="flex items-start gap-2">
            {/* EN: Create a team of AI agents that handle real work */}
            <PlusCircle className='w-4 h-5 flex-shrink-0' /> Создайте команду ИИ-агентов для реальной работы
          </li>
          <li className="flex items-start gap-2">
            {/* EN: Automate repetitive tasks — no training needed */}
            <Workflow className='w-4 h-5 flex-shrink-0' /> Автоматизируйте рутинные задачи — обучение не нужно
          </li>
          <li className="flex items-start gap-2">
            {/* EN: Plug into tools you already use */}
            <Calendar className='w-4 h-5 flex-shrink-0' /> Интеграция с инструментами, которые вы уже используете
          </li>
          <li className="flex items-start gap-2">
            {/* EN: Train AI agents on your existing docs */}
            <Bot className='w-4 h-5 flex-shrink-0' /> Обучите ИИ-агентов на ваших документах
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mb-12">
          <a
            href="https://www.arrowhitech.com/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-4xl">
              <span className="mr-2"><PhoneCall /></span>
              {/* EN: Launch your AI Team */}
              Запустите вашу команду ИИ
            </Button>

          </a>
          

          <div className="flex items-center">
            <Avatar className="w-6 h-6 border-2 border-white -ml-2 first:ml-0 flex-shrink-0">
              <AvatarImage src="/person1.png" />
            </Avatar>
            <Avatar className="w-6 h-6 border-2 border-white -ml-2 flex-shrink-0">
              <AvatarImage src="/person2.png" />
            </Avatar>
            <Avatar className="w-6 h-6 border-2 border-white -ml-2 flex-shrink-0">
              <AvatarImage src="/person3.png" />
            </Avatar>
            <Avatar className="w-6 h-6 border-2 border-white -ml-2 flex-shrink-0">
              <AvatarImage src="/person4.png" />
            </Avatar>
            <Avatar className="w-6 h-6 border-2 border-white -ml-2 flex-shrink-0">
              <AvatarImage src="/person5.png" />
            </Avatar>
            <div className="text-xs ml-2">
              <p className="font-semibold text-gray-900">13,000+ <Heart className="inline w-3 h-3 text-red-500 fill-red-500" /></p>
              {/* EN: Loved by users */}
              <p className="text-gray-600">Нас любят пользователи</p>
            </div>
          </div>

          
        </div>
        <div className="mt-10 flex flex-col items-start gap-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          {/* EN: Grants from */}
          <span className="text-xs text-gray-400 font-medium">Гранты от</span>

          <div className="flex items-center gap-3">

            {/* 1. Microsoft Block */}
            <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              {/* --- CHỖ NÀY THAY BẰNG LOGO CỦA BẠN --- */}
              {/* Ví dụ: <img src="/microsoft.png" className="w-5 h-5" /> hoặc <MicrosoftIcon /> */}

              {/* ---------------------------------------- */}
              <span className="text-sm font-semibold text-gray-500">Microsoft</span>
            </div>

            {/* Dấu chấm ngăn cách */}
            <span className="text-gray-500 text-[10px]">•</span>

            {/* 2. OpenAI Block */}
            <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              {/* --- CHỖ NÀY THAY BẰNG LOGO CỦA BẠN --- */}
              {/* Ví dụ: <img src="/openai.png" className="w-5 h-5" /> hoặc <OpenAIIcon /> */}

              {/* ---------------------------------------- */}
              <span className="text-sm font-semibold text-gray-500">OpenAI</span>
            </div>

          </div>
        </div>

      </div>
    </section>

  )
}
