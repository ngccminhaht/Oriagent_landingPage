'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
// IMPORT BIỂU TƯỢNG
import { Mail, PhoneCall } from "lucide-react";
export function HeroSection() {
  return (
    <section className="relative pt-0 pb-20 px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-200">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 inline-block"></span>
            {/* EN: Done for you AI automation */}
            ИИ-автоматизация под ключ
          </Badge>
        </div>

        {/* Main Headline */}
        <div className="mb-6">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-balance">
            {/* EN: Show us your workflow. */}
            Покажите нам ваш рабочий процесс.
          </h1>
          <h2 className="text-5xl sm:text-6xl font-bold text-balance">
            <span className="bg-yellow-300 px-2 py-1 rounded-sm">
              {/* EN: We'll automate it with AI Agents. */}
              Мы автоматизируем это с помощью ИИ-агентов.
            </span>
          </h2>
        </div>

        {/* Subheading */}
        {/* EN: From content ops to customer support — we custom-build AI automations that save hours, cut costs, and run 24/7. One call. One week. Done for you. */}
        <p className="text-gray-600 text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-balance">
          От контент-операций до поддержки клиентов — мы создаём кастомные ИИ-автоматизации, которые экономят часы, сокращают расходы и работают 24/7. Один звонок. Одна неделя. <span className="font-semibold">Готово.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://www.arrowhitech.com/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <Button size="lg" className="bg-black text-white hover:bg-gray-900">
              <span className="mr-2">
                <PhoneCall />
              </span>
              {/* EN: Book a call */}
              Записаться на звонок
            </Button>

          </a>
          
          <a
            href="https://www.arrowhitech.com/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <Button size="lg" variant="outline">
              <span className="mr-2">
                <Mail />
              </span>
              {/* EN: Email us */}
              Напишите нам
            </Button>

          </a>


        </div>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            <Avatar className="w-8 h-8 border-2 border-white">
              <AvatarImage src="/person1.png" alt="User" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-white">
              <AvatarImage src="/person2.png" alt="User" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-white">
              <AvatarImage src="/person3.png" alt="User" />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-white">
              <AvatarImage src="/person4.png" alt="User" />
              <AvatarFallback>U4</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-white">
              <AvatarImage src="/person5.png" alt="User" />
              <AvatarFallback>U5</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-gray-900">2,000+</p>
            {/* EN: happy users */}
            <p className="text-gray-600">довольных пользователей</p>
          </div>
        </div>
      </div>
    </section>
  )
}
