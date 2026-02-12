'use client'
import { useState, useEffect } from "react";

// Đảm bảo các import này hoạt động trong dự án của bạn

import { Badge } from '@/components/ui/badge'

interface TrustFeature {
  icon: string
  title: string
  description: string
}

interface TrustSectionProps {
  leftTitle?: string
  leftDescription?: string
  rightTitle?: string
  rightDescription?: string
  features?: TrustFeature[]
  ctaText?: string
}

const defaultFeatures: TrustFeature[] = [
  {
    icon: '🔒',
    title: 'Сквозная безопасность для каждой автоматизированной задачи', // EN: End-to-End Security for Every Automated Task
    description:
      'Ваши ИИ-агенты работают в защищённой зашифрованной среде. От выполнения задач до обработки данных — каждый шаг защищён шифрованием по умолчанию.',
  },
  {
    icon: '🌍',
    title: 'ИИ-агенты, которые масштабируются вместе с вашей командой', // EN: AI Agents That Scale With Your Team
    description:
      'Будь вы стартап из 5 человек, агентство из 50 или корпорация из 500 — наши ИИ-агенты адаптируются к вашим процессам. Результат? В 5 раз быстрее, в 10 раз меньше ошибок и спокойствие.',
  },
]

// Component chính được xuất (đã sửa từ Banner thành TrustSection và thêm logic state)
export default function TrustSection({
  // EN: End-to-End Security for Every Automated Task
  leftTitle = 'Сквозная безопасность для каждой автоматизированной задачи',
  // EN: Your AI Agents operate in a secure, encrypted environment...
  leftDescription = 'Ваши ИИ-агенты работают в защищённой зашифрованной среде. От выполнения задач до обработки данных — каждый шаг защищён шифрованием по умолчанию. Безопасность — не последняя мысль.',
  // EN: AI Agents That Scale With Your Team
  rightTitle = 'ИИ-агенты, которые масштабируются вместе с вашей командой',
  // EN: Whether you're a 5-person startup...
  rightDescription = 'Будь вы стартап из 5 человек, агентство из 50 или корпорация из 500 — наши ИИ-агенты адаптируются к вашим процессам. Работайте совместно между командами, отделами, регионами. Результат? В 5 раз быстрее, в 10 раз меньше ошибок и спокойствие.',
  features = defaultFeatures, // Prop features vẫn được giữ nhưng không được dùng trong JSX hiện tại
  ctaText = 'Work with us to make it right.', // Prop ctaText vẫn được giữ nhưng không được dùng trong JSX hiện tại
}: TrustSectionProps) {

  // Logic xoay chữ (chuyển từ component Banner cũ vào đây)
  // EN: right./True.
  const words = ["правильно.", "верно."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000); // đổi chữ mỗi 2 giây

    // Cleanup function để dừng timer khi component unmount
    return () => clearInterval(timer);
  }, [words.length]); // Thêm words.length vào dependencies

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="text-center mb-8">
          <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-200">
            {/* EN: Security */}
            Безопасность
          </Badge>
        </div>
        {/* EN: Built for Trust. */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Создано для доверия.
        </h2>
        {/* EN: Backed by Enterprise-Grade Security. */}
        <h3 className="text-3xl md:text-4xl text-center text-gray-700 mb-6">
          Подкреплено корпоративным уровнем безопасности.
        </h3>
        {/* EN: Every AI Agent task is encrypted, isolated, and protected — on your workflows made safe, without ever risking your data, team, or reputation. */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Каждая задача ИИ-агента зашифрована, изолирована и защищена — ваши процессы в безопасности без риска для ваших данных, команды или репутации.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Feature */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🔒</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {leftTitle}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {leftDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Right Feature with Rotating Globe */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-64 h-64 mb-6 flex items-center justify-center bg-gray-50 rounded-lg">
              
            </div>
            <div className="text-center space-y-3">
              <h4 className="text-xl font-bold text-gray-900">
                {rightTitle}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {rightDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 rounded-2xl p-12 md:p-20 text-center min-h-[450px] flex items-center justify-center">
        {/* EN: Work with us to make it right./True. */}
        <h3 className="text-3xl md:text-4xl font-bold text-white">
          Работайте с нами, чтобы сделать это{" "}
          <span
            className="bg-lime-400 text-gray-900 px-3 py-1 rounded font-bold transition-opacity duration-500"
            style={{ opacity: 1 }}
          >
            {words[index]} {/* Sử dụng state index đã được định nghĩa trong component này */}
          </span>
        </h3>
      </div>
    </section>
  )
}