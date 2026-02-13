import {
  Search,
  Share,
  Copy,
  MoreHorizontal,
  ArrowUpRight,
  LinkIcon,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export default function ChangeLogPage() {
  return (
    <div className="min-h-screen bg-white text-[#37352f]">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 flex h-10 items-center justify-between bg-white px-3 backdrop-blur-sm transition-all">

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-muted/90">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-muted/90">
                <Share className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center text-xl">{/* EN: Share site */}Поделиться сайтом</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 pb-4 pt-3 ">
                <div className="rounded-xl border bg-muted/20 p-4">
                  
                  <div className="aspect-[2/1] relative bg-black rounded-xl overflow-hidden mb-2">
                    <Image
                      src="/astronaut2.jpg"
                      alt="Preview"
                      width={400}
                      height={200}
                      className="object-cover opacity-80"
                    />
                  </div>
                  
                  
                </div>

                <div className="flex items-center gap-2">
                  <Input readOnly value="https://oriagent.com/changelog" className="flex-1 bg-muted/10" />
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    {/* EN: Copy URL */}Копировать URL
                  </Button>
                </div>

                <div className="flex justify-center gap-2 pt-2">
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-transparent">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-transparent">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-transparent">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-transparent">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-transparent">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-muted/90">
            <Copy className="h-4 w-4" />
            <span className="sr-only">Duplicate</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-muted/90">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <ArrowUpRight className="mr-2 h-4 w-4" />
                {/* EN: View original page */}Посмотреть оригинал
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {/* EN: Report page */}
              <DropdownMenuItem className="text-red-600 focus:text-red-600">Пожаловаться</DropdownMenuItem>
              {/* EN: Cookie settings */}
              <DropdownMenuItem>Настройки cookie</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="ml-2 h-4 w-[1px] bg-border" />

          <Button
            variant="ghost"
            className="ml-2 h-8 gap-1.5 px-2 text-xs font-medium text-muted-foreground hover:bg-muted/50 border border-transparent hover:border-border"
          >
{/* EN: Made with */}Сделано с
            <span className="flex h-4 w-4 items-center justify-center rounded-[2px] bg-black text-[10px] font-bold text-white">
              N
            </span>
          </Button>
        </div>
      </header>

      {/* Cover Image */}
      <div className="relative h-[28vh] w-full bg-black overflow-hidden group">
        <Image
          src="/astronaut.jpg"
          alt="Cover"
          fill
          className="object-cover object-center opacity-90 "
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
      </div>

      {/* Main Content */}
      <main className="relative mx-auto max-w-3xl px-4 pb-24 sm:px-12 lg:px-24">


        {/* Title Section */}
        <div className="mb-12 space-y-6">
          {/* EN: Change log */}
          <h1 className="text-4xl font-bold tracking-tight text-[#37352f] sm:text-5xl">Журнал изменений</h1>
          <div className="space-y-4 text-lg text-[#37352f]/80">
            {/* EN: We'll do our best to keep you updated on all that is happening behind the scene. Looking forward to taking you along the journey. */}
            <p className="leading-relaxed">
              Мы сделаем всё возможное, чтобы держать вас в курсе всего, что происходит за кулисами. С нетерпением ждём возможности разделить этот путь с вами.
            </p>
            <Link
              href="#"
              className="inline-block text-muted-foreground hover:text-foreground hover:underline decoration-muted-foreground/50 underline-offset-4"
            >
              @aiagent_app
            </Link>
          </div>
        </div>

        {/* Timeline Entries */}
        <div className="space-y-16 border-l border-border/40 pl-8 ml-2 relative">
          
          {/* Entry 1: Flows */}
          <div className="relative">
            <div className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-muted-foreground/30 bg-white" />

            <div className="mb-4 flex flex-wrap items-baseline gap-2">
              <span className="text-muted-foreground">@July 8, 2025</span>
              <span className="text-muted-foreground">—</span>
              <h2 className="text-xl font-semibold text-[#37352f]">{/* EN: Flows are live */}Потоки запущены</h2>
            </div>

            <div className="space-y-6">
              {/* EN: Visually build multi-step workflows by dragging and connecting agents, tools, and tasks... */}
              <p className="text-[#37352f]/80 leading-relaxed">
                Визуально создавайте многошаговые рабочие процессы, перетаскивая и соединяя агентов, инструменты и задачи. От простых последовательностей до сложной логики — Потоки позволяют оркестрировать всё на одном интерактивном холсте.
              </p>

              <div className="overflow-hidden rounded-xl border bg-muted/10 shadow-sm">
                {/* ĐIỀN LINK ẢNH VÀO src="" BÊN DƯỚI */}
                <Image
                  src="/changelog1.webp" 
                  alt="changelog1"
                  width={1000}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Entry 2: Teams */}
          <div className="relative">
            <div className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-muted-foreground/30 bg-white" />

            <div className="mb-4 flex flex-wrap items-baseline gap-2">
              <span className="text-muted-foreground">@June 28, 2025</span>
              <span className="text-muted-foreground">—</span>
              <h2 className="text-xl font-semibold text-[#37352f]">{/* EN: Teams are live */}Команды запущены</h2>
            </div>

            <div className="space-y-6">
              {/* EN: Introducing Teams: combine multiple AI agents into coordinated units... */}
              <p className="text-[#37352f]/80 leading-relaxed">
                Представляем Команды: объединяйте несколько ИИ-агентов в координированные группы, которые обмениваются информацией и выполняют сложные многошаговые процессы вместе. Ваш ИИ стал командным.
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-[#37352f]/80 leading-relaxed">
                  {/* EN: Multi-agent coordination */}
                  <li><strong>Мульти-агентная координация:</strong> Назначайте несколько агентов на одну миссию — каждый со своей ролью и специализацией.</li>
                  {/* EN: Chained tasks with smart handoff */}
                  <li><strong>Цепочка задач с умной передачей:</strong> Результат одного агента становится входом для следующего — глубокое многоэтапное рассуждение.</li>
                  {/* EN: Reusable blueprints */}
                  <li><strong>Повторно используемые шаблоны:</strong> Сохраняйте и запускайте конфигурации команд для повторяющихся задач исследований, написания или скрапинга.</li>
              </ul>

              <div className="overflow-hidden rounded-xl border bg-muted/10 shadow-sm">
                {/* ĐIỀN LINK ẢNH VÀO src="" BÊN DƯỚI */}
                <Image
                  src="/changelog2.webp"
                  alt="changelog2"
                  width={1000}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Entry 3: Tools */}
          <div className="relative">
            <div className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-muted-foreground/30 bg-white" />

            <div className="mb-4 flex flex-wrap items-baseline gap-2">
              <span className="text-muted-foreground">@June 6, 2025</span>
              <span className="text-muted-foreground">—</span>
              <h2 className="text-xl font-semibold text-[#37352f]">{/* EN: 15+ Tools Now Available for Agents */}15+ инструментов теперь доступны для агентов</h2>
            </div>

            <div className="space-y-6">
              {/* EN: We've supercharged your agent toolkit... */}
              <p className="text-[#37352f]/80 leading-relaxed">
                Мы значительно расширили набор инструментов ваших агентов. От скрапинга LinkedIn и Reddit до генерации изображений и анализа профилей TikTok — ваши агенты теперь имеют доступ к 15+ встроенным инструментам для автоматизации исследований, контента и конкурентной аналитики как никогда раньше.
              </p>
              
              <div className="overflow-hidden rounded-xl border bg-muted/10 shadow-sm">
                {/* ĐIỀN LINK ẢNH VÀO src="" BÊN DƯỚI */}
                <Image
                  src="/changelog3.webp"
                  alt="changelog3"
                  width={1000}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Entry 4: Model Selection */}
          <div className="relative">
            <div className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-muted-foreground/30 bg-white" />

            <div className="mb-4 flex flex-wrap items-baseline gap-2">
              <span className="text-muted-foreground">@May 30, 2025</span>
              <span className="text-muted-foreground">—</span>
              <h2 className="text-xl font-semibold text-[#37352f]">{/* EN: Model selection, leveled up */}Выбор модели — на новом уровне</h2>
            </div>

            <div className="space-y-6">
              {/* EN: We've redesigned the model picker for clarity and speed... */}
              <p className="text-[#37352f]/80 leading-relaxed">
                Мы переработали выбор моделей для наглядности и скорости. Легко сравнивайте сильные стороны моделей, лимиты контекста и метки производительности — Быстрая, Рассуждающая или Мощная. Выбирайте то, что подходит для вашей задачи — GPT‑4.1, Claude, Grok, XAI и другие.
              </p>

              <div className="overflow-hidden rounded-xl border bg-muted/10 shadow-sm">
                {/* ĐIỀN LINK ẢNH VÀO src="" BÊN DƯỚI */}
                <Image
                  src="/changelog4.webp"
                  alt="Changelog4"
                  width={1000}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Entry 5: Agent Team Execution */}
          <div className="relative">
            <div className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-muted-foreground/30 bg-white" />

            <div className="mb-4 flex flex-wrap items-baseline gap-2">
              <span className="text-muted-foreground">@May 27, 2025</span>
              <span className="text-muted-foreground">—</span>
              <h2 className="text-xl font-semibold text-[#37352f]">{/* EN: Clearer Agent Team Execution */}Более понятное выполнение командных задач</h2>
            </div>

            <div className="space-y-6">
              {/* EN: We upgraded how team agent executions are displayed... */}
              <p className="text-[#37352f]/80 leading-relaxed">
                Мы улучшили отображение выполнения командных задач агентов. Теперь вы видите входные переменные, роли агентов, поток задач и прогресс в реальном времени в одном обзорном виде. Чище, понятнее и проще для отслеживания.
              </p>

              <div className="overflow-hidden rounded-xl border bg-muted/10 shadow-sm">
                <Image
                  src="/changelog5.webp"
                  alt="changelog5"
                  width={1000}
                  height={600}
                  className="w-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
