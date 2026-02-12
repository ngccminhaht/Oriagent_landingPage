import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-orange-100 text-orange-600 hover:bg-orange-200 mb-4">
            {/* EN: Testimonials */}
            Отзывы
          </Badge>
          {/* EN: What people say */}
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            Что{" "}
            <span className="relative inline-block underline underline-offset-3 decoration-4 decoration-[#ccff00]">
              {/* EN: people */}
              говорят
            </span>{" "}
            люди
          </h2>
          {/* EN: See how AI Agents are transforming workflows and boosting productivity for users across the globe. */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Узнайте, как ИИ-агенты трансформируют рабочие процессы и повышают продуктивность пользователей по всему миру.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Row 1 */}
          <div className="md:col-span-2 p-6 border rounded-2xl bg-white">
            {/* EN: As someone who was skeptical of AI tools, I'm completely converted. This has become an essential part of my workflow. */}
            <p className="text-sm mb-6">
              Как человек, который скептически относился к ИИ-инструментам, я полностью убедился. Это стало неотъемлемой частью моего рабочего процесса.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person6.avif" />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Neco</span>
            </div>
          </div>
          <div className="md:col-span-2 p-6 border rounded-2xl bg-white">
            {/* EN: I was able to automate complex workflows that I thought would require custom development. The AI agent just gets it. */}
            <p className="text-sm mb-6">
              Я смог автоматизировать сложные рабочие процессы, которые, как я думал, потребуют индивидуальной разработки. ИИ-агент просто понимает всё.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person7.avif" />
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Joseph</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white flex flex-col justify-center items-center text-center">
            <div className="text-4xl font-bold text-[#8cc63f] mb-1">40 000+</div>
            {/* EN: Users trust oriagent.com */}
            <div className="text-xs text-[#8cc63f] font-medium">Пользователей доверяют oriagent.com</div>
          </div>
          <div className="md:col-span-3 p-6 border rounded-2xl bg-white">
            {/* EN: As a developer, I appreciate the thought that went into this product. It's robust, reliable, and surprisingly intelligent. */}
            <p className="text-sm mb-6">
              Как разработчик, я ценю продуманность этого продукта. Он надёжный, стабильный и удивительно интеллектуальный.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person8.avif" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Anton</span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white">
            {/* EN: The integration capabilities with my existing tools made adoption seamless. Every update brings new valuable features. */}
            <p className="text-sm mb-6">
              Возможности интеграции с моими существующими инструментами сделали внедрение плавным. Каждое обновление приносит новые ценные функции.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person9.avif" />
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Charlie</span>
            </div>
          </div>
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white flex flex-col justify-center items-center text-center">
            <div className="text-4xl font-bold text-[#8cc63f] mb-1">57%</div>
            {/* EN: AI resolution rate */}
            <div className="text-xs text-[#8cc63f] font-medium">Уровень решения задач ИИ</div>
          </div>
          <div className="md:col-span-2 p-6 border rounded-2xl bg-white">
            {/* EN: I was skeptical at first, but after using it for a week, I can't imagine working without it. Truly exceptional product. */}
            <p className="text-sm mb-6">
              Сначала я был скептиком, но после недели использования не могу представить работу без этого. Действительно исключительный продукт.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person10.avif" />
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Chris</span>
            </div>
          </div>

          {/* Row 4 */}
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white">
            {/* EN: The AI agent has completely transformed our workflow efficiency. It handles complex tasks with remarkable accuracy and saves us hours every day. */}
            <p className="text-sm mb-6">
              ИИ-агент полностью трансформировал эффективность нашего рабочего процесса. Он выполняет сложные задачи с поразительной точностью и экономит нам часы каждый день.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person11.avif" />
                <AvatarFallback>K</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Kamil</span>
            </div>
          </div>
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white">
            {/* EN: Wow! Such a beautiful and intuitive solution to make AutoGPT usable for everyone. Been playing with it for a bit and immediately subscribed. Great job and looking forward what you'll add in the future. */}
            <p className="text-sm mb-6">
              Вау! Какое красивое и интуитивное решение, чтобы сделать AutoGPT доступным для всех. Немного поиграл и сразу оформил подписку. Отличная работа, жду новых функций!
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person12.avif" />
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Dom</span>
            </div>
          </div>
          <div className="md:col-span-2 p-6 border rounded-2xl bg-white">
            {/* EN: I've recommended this to everyone on my team. The ROI is immediate and the learning curve is practically non-existent. */}
            <p className="text-sm mb-6">
              Я порекомендовал это всем в своей команде. Окупаемость мгновенная, а кривая обучения практически отсутствует.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person13.avif" />
                <AvatarFallback>F</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Frank</span>
            </div>
          </div>

          {/* Row 5 */}
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white">
            {/* EN: This is genuinely so cool ... I have no idea what you did on the backend of things but it is so fine-tuned to exactly what I was hoping it to make and it did it on the first try. */}
            <p className="text-sm mb-6">
              Это действительно круто... Я не представляю, что вы сделали на бэкенде, но оно точно настроено под то, что я хотел, и сработало с первого раза.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person14.avif" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Ari</span>
            </div>
          </div>
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white flex flex-col justify-center items-center text-center">
            <div className="text-4xl font-bold text-[#8cc63f] mb-1">72%</div>
            {/* EN: Users reporting improved productivity */}
            <div className="text-xs text-[#8cc63f] font-medium">Пользователей отмечают рост продуктивности</div>
          </div>
          <div className="md:col-span-2 p-6 border rounded-2xl bg-white">
            {/* EN: Incredible tool that has transformed how I handle my daily tasks. The AI agent understands exactly what I need and delivers consistently. */}
            <p className="text-sm mb-6">
              Невероятный инструмент, который изменил мой подход к ежедневным задачам. ИИ-агент точно понимает, что мне нужно, и стабильно выполняет.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person15.avif" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Sander</span>
            </div>
          </div>

          {/* Row 6 */}
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white">
            {/* EN: Finally, an AI solution that actually delivers on its promises. This has saved me countless hours on research and content creation. */}
            <p className="text-sm mb-6">
              Наконец, ИИ-решение, которое действительно выполняет свои обещания. Это сэкономило мне бесчисленные часы на исследованиях и создании контента.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person17.avif" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Per Magnus</span>
            </div>
          </div>
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white">
            {/* EN: The interface is sleek and the AI is surprisingly capable. I've tried many AI tools but this one stands above the rest. */}
            <p className="text-sm mb-6">
              Интерфейс элегантный, а ИИ удивительно способный. Я пробовал много ИИ-инструментов, но этот превосходит остальные.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person16.avif" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Phuc</span>
            </div>
          </div>
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white">
            {/* EN: The speed and accuracy of the AI agent is impressive. It's like having a skilled assistant available 24/7. */}
            <p className="text-sm mb-6">
              Скорость и точность ИИ-агента впечатляют. Это как иметь квалифицированного помощника 24/7.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person18.avif" />
                <AvatarFallback>L</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Lucas</span>
            </div>
          </div>
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white">
            {/* EN: This tool has drastically improved my productivity. What used to take hours now takes minutes. Absolutely worth every penny. */}
            <p className="text-sm mb-6">
              Этот инструмент кардинально повысил мою продуктивность. То, что раньше занимало часы, теперь занимает минуты. Абсолютно стоит каждого рубля.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person1.png" />
                <AvatarFallback>L</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Leo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
