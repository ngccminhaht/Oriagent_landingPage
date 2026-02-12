'use client';

export function FeaturesSection() {
  const features = [
    {
      id: 1,
      // EN: Your Personal Knowledge Ecosystem
      title: 'Ваша персональная экосистема знаний',
      // EN: Transform the way you store and access information with an elegantly designed knowledge base that adapts to your workflow. Organize your data with intuitive precision.
      description: 'Измените способ хранения и доступа к информации с помощью элегантно спроектированной базы знаний, адаптирующейся к вашему рабочему процессу. Организуйте данные с интуитивной точностью.',
      illustration: '/knowledge.svg',
    },
    {
      id: 2,
      // EN: Beautifully Transparent Process
      title: 'Красиво прозрачный процесс',
      // EN: Experience unprecedented clarity with our immersive visualization tools. Watch your AI agent work in real-time, putting you in complete control.
      description: 'Откройте беспрецедентную ясность с нашими инструментами визуализации. Наблюдайте за работой вашего ИИ-агента в реальном времени, сохраняя полный контроль.',
      illustration: '/process.svg',
    },
    {
      id: 3,
      // EN: Effortlessly Powerful. No Code Needed.
      title: 'Мощно и просто. Без кода.',
      // EN: Revolutionary simplicity meets sophisticated technology. Create powerful AI workflows with intuitive commands—no programming required.
      description: 'Революционная простота в сочетании с передовыми технологиями. Создавайте мощные ИИ-рабочие процессы с помощью интуитивных команд — программирование не требуется.',
      illustration: '/simple.svg',
    },
  ];

  return (
    <section className="pt-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="border-l border-r border-b border-gray-200 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-x divide-gray-200">
            {features.map((feature) => (
              <div key={feature.id} className="flex flex-col">
                {/* Image Section */}
                <div className="h-72 overflow-hidden w-full bg-gray-50 flex items-center justify-center border-b border-gray-200">
                  <img
                    src={feature.illustration || "/placeholder.svg"}
                    alt={feature.title}
                    // SỬA TẠI ĐÂY: đổi object-cover thành object-contain
                    className="w-80 h-80 object-contain"
                  />
                </div>

                {/* Text Section */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
