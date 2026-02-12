'use client';

import React from 'react';
import { PronunciationButton } from './PronunciationButton'; // Đảm bảo đường dẫn đúng tới file nút loa bạn vừa tạo

export function DefinitionSection() {
  return (
    <section className="">
      {/* Khung bao ngoài: Giữ chuẩn kích thước và viền để khớp với các section khác */}
      <div className="mx-auto max-w-7xl border-b  bg-white border-x border-gray-200 px-0 py-16 text-left">

        {/* Nội dung chính: Padding trong để chữ không dính viền */}
        <div className="mx-auto max-w-5xl px-8">

          {/* 1. Tag Capabilities */}
          <div className="mb-8 flex justify-center">
            <span className="flex items-center gap-1 rounded-full bg-purple-50 px-3 py-1 text-[10px] font-bold tracking-wider text-purple-600 uppercase">
              {/* EN: Capabilities */}
              <span className="text-[8px]">●</span> Возможности
            </span>
          </div>

          {/* 2. Main Title */}
          {/* EN: What is an AI Agent? */}
          <h1 className="mb-12 text-center text-7xl font-bold text-gray-900 tracking-tight">
            Что такое{' '}
            <span className="relative inline-block underline underline-offset-1 decoration-[#a3e635]/60 ">
              ИИ-агент?
              <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#a3e635]/60"></span>
            </span>
          </h1>

          {/* 3. Dictionary Header */}
          <div className="mb-8 flex items-start gap-4">
            <PronunciationButton text="AI Agent" />
            <div className="mt-1">
              <h3 className="text-xl font-bold leading-none text-gray-900">
                {/* EN: AI agent */}
                ИИ-агент
              </h3>
              <p className="mt-1 font-serif text-lg italic text-gray-500">
                {/* EN: noun */}
                /ˈāˈī ˈā-jənt/ • существительное
              </p>
            </div>
          </div>

          {/* 4. Definition Point 1 */}
          {/* EN: A software system that uses AI to perform tasks, pursue goals, and make decisions autonomously. */}
          <div className="mb-8 flex gap-4">
            <span className="flex-shrink-0 pt-1 font-serif text-xl text-gray-400">1.</span>
            <p className="text-lg leading-relaxed text-gray-800">

              <span className="font-bold decoration-[#a3e635] decoration-2 underline-offset-2 hover:underline">
                Программная система, использующая искусственный интеллект (ИИ) для выполнения задач
              </span>,{' '}
              <span className="font-bold decoration-[#a3e635] decoration-2 underline-offset-2 hover:underline">
                достижения целей
              </span> и{' '}
              <span className="font-bold decoration-[#a3e635] decoration-2 underline-offset-2 hover:underline">
                принятия автономных решений
              </span>.
              ИИ-агенты учатся на <span className="font-bold text-black">данных</span> и{' '}
              <span className="font-bold text-black">обратной связи пользователей</span>, адаптируясь со временем. Они действуют от имени пользователей с минимальным вмешательством человека.
            </p>
          </div>

          {/* 5. Definition Point 2 */}
          {/* EN: Advanced usage: Intelligent systems that perceive their environment... */}
          <div className="mb-10 flex gap-4">
            <span className="flex-shrink-0 pt-1 font-serif text-xl text-gray-400">2.</span>
            <p className="text-lg leading-relaxed text-gray-600">
              <span className="mr-2 text-lg italic text-gray-400">Продвинутое использование:</span>
              Интеллектуальные системы, которые{' '}
              <span className="decoration-gray-300 decoration-1 underline-offset-2 hover:underline">
                воспринимают окружающую среду
              </span>, применяют
              <span className="font-medium text-gray-900"> рассуждение и планирование</span> и предпринимают{' '}
              <span className="decoration-[#a3e635] decoration-2 underline-offset-2 hover:underline">
                автономные действия
              </span> для достижения результатов.
              Они используют такие инструменты, как <span className="italic">машинное обучение</span>, <span className="italic">память</span> и <span className="italic">целенаправленное поведение</span> для непрерывного совершенствования.
            </p>
          </div>

          {/* 6. Quote Box */}
          {/* EN: "AI agents are software systems that use AI to pursue goals..." */}
          <div className="mb-12 border-l-2 border-gray-200 pl-6">
            <p className="text-lg italic leading-relaxed text-gray-600">
              "ИИ-агенты — это программные системы, использующие ИИ для достижения целей и выполнения задач от имени пользователей. Они демонстрируют рассуждение, планирование и память, а также обладают уровнем автономии для принятия решений, обучения и адаптации."
            </p>
            <p className="mt-2 text-right text-sm text-gray-400">— Google Cloud</p>
          </div>

          {/* 7. Similar Tags */}
          {/* EN: Similar: virtual assistant, AI assistant, intelligence agent, digital agent, autonomous agent */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="mr-2 text-sm italic text-gray-400">Похожие:</span>
            {[
              'виртуальный помощник',
              'ИИ-помощник',
              'интеллектуальный агент',
              'цифровой агент',
              'автономный агент'
            ].map((tag) => (
              <span
                key={tag}
                className="cursor-default rounded-full border border-gray-200 bg-white px-3 py-1 text-[10px] text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}