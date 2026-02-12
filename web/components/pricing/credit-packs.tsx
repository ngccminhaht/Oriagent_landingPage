import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Flower2, Check, Star } from "lucide-react"
import { cn } from "@/lib/utils" // Giả sử bạn có utility cn

export function CreditPacks() {
  return (
    <section className="py-20 px-4 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-[#ccff00] text-black hover:bg-[#b3e600] mb-6 px-4 py-1 text-sm font-semibold shadow-sm">
            {/* EN: Need More? */}
            Нужно больше?
          </Badge>
          {/* EN: Purchase Additional Credits */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
            Купите дополнительные кредиты
          </h2>
          {/* EN: Top up your account with extra credits anytime. Purchased credits never expire and can be used across all features. */}
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Пополняйте аккаунт дополнительными кредитами в любое время. <br className="hidden md:block"/>
            Купленные кредиты никогда не сгорают и могут использоваться для всех функций.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          
          {/* Starter Pack - Basic */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 group">
            {/* EN: Starter Pack */}
            <h3 className="font-semibold text-slate-900 text-lg mb-2">Стартовый пакет</h3>
            {/* EN: Perfect for trying out premium features one-time. */}
            <p className="text-sm text-slate-500 mb-6 h-10">Идеален для однократного тестирования премиум-функций.</p>
            
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-bold text-slate-900">100</span>
              <Flower2 className="w-5 h-5 text-slate-400 group-hover:text-[#ccff00] transition-colors" />
            </div>
            <div className="text-sm font-medium text-slate-500 mb-6">$5 • $0.050/credit</div>
            
            <Button variant="outline" className="w-full rounded-xl border-slate-200 hover:border-slate-900 hover:bg-transparent h-12">
              {/* EN: Get 100 Credits */}
              Получить 100 кредитов
            </Button>
          </div>

          {/* Value Pack - HIGHLIGHTED (Most Popular) */}
          <div className="bg-white p-6 rounded-3xl border-2 border-[#ccff00] relative shadow-2xl shadow-slate-200/50 scale-105 z-10">
            {/* Label ной bật */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ccff00] text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
               {/* EN: MOST POPULAR */}
               <Star className="w-3 h-3 fill-black" /> САМЫЙ ПОПУЛЯРНЫЙ
            </div>

            {/* EN: Value Pack */}
            <h3 className="font-semibold text-slate-900 text-lg mb-2">Выгодный пакет</h3>
            {/* EN: Best value for regular creators and frequent users. */}
            <p className="text-sm text-slate-500 mb-6 h-10">Лучшая цена для регулярных создателей и частых пользователей.</p>
            
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-bold text-slate-900">500</span>
              <Flower2 className="w-5 h-5 text-[#a3cc00] fill-[#ccff00]" />
            </div>
            <div className="text-sm font-medium text-slate-500 mb-6">
              <span className="line-through text-slate-300 mr-2">$25</span>
              <span className="text-black">$20 • $0.040/credit</span>
            </div>
            
            <Button className="w-full bg-black text-white hover:bg-slate-800 rounded-xl h-12 font-semibold shadow-lg shadow-slate-300/50">
              {/* EN: Get 500 Credits */}
              Получить 500 кредитов
            </Button>
          </div>

          {/* Pro Pack */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 group">
            {/* EN: Pro Pack */}
            <h3 className="font-semibold text-slate-900 text-lg mb-2">Про-пакет</h3>
            {/* EN: For heavy users and professional teams. */}
            <p className="text-sm text-slate-500 mb-6 h-10">Для активных пользователей и профессиональных команд.</p>
            
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-bold text-slate-900">1,500</span>
              <Flower2 className="w-5 h-5 text-slate-400 group-hover:text-[#ccff00] transition-colors" />
            </div>
            <div className="text-sm font-medium text-slate-500 mb-6">$50 • $0.033/credit</div>
            
            <Button variant="outline" className="w-full rounded-xl border-slate-200 hover:border-slate-900 hover:bg-transparent h-12">
              {/* EN: Get 1500 Credits */}
              Получить 1500 кредитов
            </Button>
          </div>

          {/* Super Pack */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 group">
            {/* EN: Super Pack */}
            <h3 className="font-semibold text-slate-900 text-lg mb-2">Супер-пакет</h3>
            {/* EN: Maximum value for power users and agencies. */}
            <p className="text-sm text-slate-500 mb-6 h-10">Максимальная выгода для продвинутых пользователей и агентств.</p>
            
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-bold text-slate-900">5,000</span>
              <Flower2 className="w-5 h-5 text-slate-400 group-hover:text-[#ccff00] transition-colors" />
            </div>
            <div className="text-sm font-medium text-slate-500 mb-6">$150 • $0.030/credit</div>
            
            <Button variant="outline" className="w-full rounded-xl border-slate-200 hover:border-slate-900 hover:bg-transparent h-12">
              {/* EN: Get 5000 Credits */}
              Получить 5000 кредитов
            </Button>
          </div>

        </div>
        
        {/* Footer Trust Indicators (Optional for visual balance) */}
        <div className="mt-12 text-center flex justify-center items-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-1"><Check className="w-4 h-4" /> {/* EN: Secure payment */}Безопасная оплата</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4" /> {/* EN: Instant delivery */}Мгновенная доставка</span>
        </div>

      </div>
    </section>
  )
}