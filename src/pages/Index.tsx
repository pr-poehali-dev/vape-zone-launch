import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', city: '' });
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 pointer-events-none" />
      
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-orange-500/20">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <Icon name="Flame" size={24} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-white">
              VAPE ZONE
            </div>
          </div>
          <Button 
            onClick={() => setIsDialogOpen(true)}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/20"
          >
            Стать партнером
          </Button>
        </nav>
      </div>

      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img 
            src="https://cdn.poehali.dev/projects/b9116c29-0125-43fc-a453-3ebd79592af1/files/a2abb71d-fcab-4cfe-b22d-e9830a3c1d49.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-orange-500/10 border border-orange-500/30">
            <span className="text-orange-400 font-semibold">🔥 Прибыльный бизнес с нуля</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-white">
            Франшиза <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">VAPE ZONE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Запустите прибыльный бизнес в вейп-индустрии с проверенной бизнес-моделью
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => setIsDialogOpen(true)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all text-lg px-8 py-6 shadow-xl shadow-orange-500/25"
            >
              Получить консультацию
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-orange-500/50 text-white hover:bg-orange-500/10 text-lg px-8 py-6"
            >
              Узнать подробнее
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      </section>

      <section className="py-20 px-6 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16 text-white">
            О бренде <span className="text-orange-500">VAPE ZONE</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Store', title: '50+ магазинов', desc: 'По всей России', gradient: 'from-orange-500 to-orange-600' },
              { icon: 'TrendingUp', title: '300%+', desc: 'Средняя рентабельность', gradient: 'from-orange-600 to-orange-700' },
              { icon: 'Users', title: '10,000+', desc: 'Довольных клиентов', gradient: 'from-orange-400 to-orange-500' }
            ].map((item, i) => (
              <Card key={i} className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 hover:border-orange-500/50 transition-all hover:scale-105 duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 relative z-10`}>
                  <Icon name={item.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white relative z-10">{item.title}</h3>
                <p className="text-gray-500 relative z-10">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img 
            src="https://cdn.poehali.dev/projects/b9116c29-0125-43fc-a453-3ebd79592af1/files/444323e3-dd17-46ab-b109-74bdafcbe9d7.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16 text-white">
            Преимущества <span className="text-orange-500">франшизы</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Sparkles', title: 'Готовая бизнес-модель', desc: 'Проверенная на 50+ точках' },
              { icon: 'Handshake', title: 'Полная поддержка', desc: 'От выбора помещения до открытия' },
              { icon: 'GraduationCap', title: 'Обучение команды', desc: 'Практическое обучение персонала' },
              { icon: 'PackageSearch', title: 'Поставщики', desc: 'Надежные партнеры с выгодными условиями' },
              { icon: 'LineChart', title: 'Маркетинг', desc: 'Готовые стратегии продвижения' },
              { icon: 'Shield', title: 'Юридическая поддержка', desc: 'Помощь на всех этапах' }
            ].map((item, i) => (
              <Card key={i} className="p-6 bg-zinc-900/50 border-zinc-800 hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm">
                <Icon name={item.icon} size={40} className="text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-8 text-white">
            Чистая <span className="text-orange-500">прибыль</span>
          </h2>
          <p className="text-center text-gray-400 text-xl mb-12 max-w-3xl mx-auto">
            Реальные показатели работающих магазинов VAPE ZONE
          </p>
          
          <div className="max-w-6xl mx-auto mb-12">
            <Card className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 border-orange-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
                <img 
                  src="https://cdn.poehali.dev/projects/b9116c29-0125-43fc-a453-3ebd79592af1/files/224a969d-5e3d-46c9-ad5f-ce305af810f9.jpg" 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Динамика роста прибыли</h3>
                </div>
                <p className="text-gray-400 max-w-2xl">
                  График показывает устойчивый рост прибыли магазинов VAPE ZONE. 
                  Средний прирост составляет 15-20% ежемесячно в первый год работы.
                </p>
              </div>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/30 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Icon name="Wallet" size={40} className="text-orange-500 mx-auto mb-4 relative z-10" />
              <div className="text-5xl font-bold text-orange-500 mb-2 relative z-10">500,000₽</div>
              <p className="text-gray-400 relative z-10">Средняя прибыль/месяц</p>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-orange-600/10 to-orange-500/5 border-orange-500/30 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Icon name="Clock" size={40} className="text-orange-500 mx-auto mb-4 relative z-10" />
              <div className="text-5xl font-bold text-orange-500 mb-2 relative z-10">6-12</div>
              <p className="text-gray-400 relative z-10">Месяцев окупаемость</p>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-orange-400/10 to-orange-600/5 border-orange-500/30 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Icon name="PiggyBank" size={40} className="text-orange-500 mx-auto mb-4 relative z-10" />
              <div className="text-5xl font-bold text-orange-500 mb-2 relative z-10">300%+</div>
              <p className="text-gray-400 relative z-10">ROI в год</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16 text-white">
            Пакеты <span className="text-orange-500">франшизы</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 hover:border-orange-500/50 transition-all hover:scale-105 duration-300">
              <h3 className="text-3xl font-bold mb-4 text-white">Стандарт</h3>
              <div className="text-4xl font-bold mb-2 text-orange-500">
                0₽
              </div>
              <p className="text-gray-500 mb-6">Паушальный взнос | Роялти 1.5%</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Право на бренд',
                  'Базовые материалы',
                  'Онлайн-обучение',
                  'Список поставщиков',
                  'Консультации по запуску'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400">
                    <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={14} className="text-orange-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => setIsDialogOpen(true)}
                variant="outline"
                className="w-full border-orange-500/50 text-orange-500 hover:bg-orange-500/10"
              >
                Выбрать пакет
              </Button>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-orange-500/10 to-zinc-950 border-orange-500 relative overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                ПОПУЛЯРНО
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white relative z-10">Бизнес</h3>
              <div className="text-4xl font-bold mb-2 text-orange-500 relative z-10">
                200,000₽
              </div>
              <p className="text-gray-400 mb-6 relative z-10">Паушальный взнос | Роялти 1%</p>
              <ul className="space-y-3 mb-8 relative z-10">
                {[
                  'Всё из пакета Стандарт',
                  'Персональный менеджер',
                  'Помощь в регистрации бизнеса',
                  'Обучение персонала на точке',
                  'Помощь в поиске помещения',
                  'Маркетинговые материалы',
                  'Система лояльности',
                  'Регулярные проверки'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={14} className="text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => setIsDialogOpen(true)}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 relative z-10 shadow-lg shadow-orange-500/25"
              >
                Выбрать пакет
              </Button>
            </Card>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8 max-w-3xl mx-auto italic">
            Если у вас уже есть бизнес в помещении с хорошим расположением, но аренда слишком высока - 
            субаренда с VAPE ZONE превратит его в прибыльную точку. На той же площади вы получите 
            дополнительный поток клиентов, объедините аудиторию и увеличите доход.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <img 
            src="https://cdn.poehali.dev/projects/b9116c29-0125-43fc-a453-3ebd79592af1/files/cf4bd9cf-9749-48d0-8f99-88691f4ffd7e.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16 text-white">
            Инвестиции в <span className="text-orange-500">открытие</span>
          </h2>
          <p className="text-center text-gray-400 text-xl mb-12 max-w-3xl mx-auto">
            Здесь указаны базовые вложения для старта. Хотите узнать точные цифры для вашего города? 
            Оставьте заявку, и мы подготовим персональный расчет стоимости открытия.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Паушальный взнос', amount: 'от 0₽', icon: 'HandCoins' },
              { title: 'Закупка товара', amount: 'от 700,000₽', icon: 'Package' },
              { title: 'Аренда локации', amount: 'от 50,000₽', icon: 'Home' },
              { title: 'Мебель', amount: 'от 300,000₽', icon: 'Armchair' }
            ].map((item, i) => (
              <Card key={i} className="p-6 bg-zinc-900/80 border-zinc-800 text-center hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} size={32} className="text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-400">{item.title}</h3>
                <div className="text-2xl font-bold text-white">{item.amount}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16 text-white">
            Запуск VAPE ZONE — <span className="text-orange-500">6 шагов</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { step: '01', title: 'Заявка', desc: 'Оставьте заявку, чтобы узнать больше о бизнесе', icon: 'FileText' },
              { step: '02', title: 'Знакомство', desc: 'Познакомимся и подробно разберем все детали', icon: 'Users' },
              { step: '03', title: 'Подписание договора', desc: 'Закрепим партнёрство и будем двигаться дальше вместе', icon: 'FileSignature' },
              { step: '04', title: 'Обучение партнера', desc: 'Обучаем, делимся знаниями и всегда остаёмся рядом', icon: 'GraduationCap' },
              { step: '05', title: 'Подготовка к открытию', desc: 'Вместе выберем место, соберём команду и всё настроим', icon: 'Settings' },
              { step: '06', title: 'Официальное открытие', desc: 'Открываем магазин и отмечаем ваш успех!', icon: 'PartyPopper' }
            ].map((item, i) => (
              <Card key={i} className="p-6 bg-zinc-900/50 border-l-4 border-orange-500 hover:bg-zinc-900/80 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/25">
                      <Icon name={item.icon} size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-orange-500 mb-1">ШАГ {item.step}</div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-2xl relative z-10">
          <Card className="p-12 bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-orange-500/50 shadow-2xl shadow-orange-500/10">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">
              Открыть свой <span className="text-orange-500">VAPE ZONE</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input 
                placeholder="Имя"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="bg-zinc-950 border-zinc-800 text-white placeholder:text-gray-600 focus:border-orange-500 transition-colors"
              />
              <Input 
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                className="bg-zinc-950 border-zinc-800 text-white placeholder:text-gray-600 focus:border-orange-500 transition-colors"
              />
              <Input 
                type="email"
                placeholder="Почта"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="bg-zinc-950 border-zinc-800 text-white placeholder:text-gray-600 focus:border-orange-500 transition-colors"
              />
              <Input 
                placeholder="Город"
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                required
                className="bg-zinc-950 border-zinc-800 text-white placeholder:text-gray-600 focus:border-orange-500 transition-colors"
              />
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg py-6 shadow-xl shadow-orange-500/25"
              >
                Стать франчайзи
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-zinc-900 relative">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <Icon name="Flame" size={24} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-white">
              VAPE ZONE
            </div>
          </div>
          <p className="text-gray-600 mb-4">© 2024 VAPE ZONE. Все права защищены.</p>
          <div className="flex justify-center gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-orange-500/20 border border-zinc-800 hover:border-orange-500/50 flex items-center justify-center cursor-pointer transition-all">
              <Icon name="Instagram" size={20} className="text-gray-500 hover:text-orange-500 transition-colors" />
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-orange-500/20 border border-zinc-800 hover:border-orange-500/50 flex items-center justify-center cursor-pointer transition-all">
              <Icon name="Phone" size={20} className="text-gray-500 hover:text-orange-500 transition-colors" />
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-orange-500/20 border border-zinc-800 hover:border-orange-500/50 flex items-center justify-center cursor-pointer transition-all">
              <Icon name="Mail" size={20} className="text-gray-500 hover:text-orange-500 transition-colors" />
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-orange-500/50 text-white">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-white">
              Получите бесплатную <span className="text-orange-500">консультацию</span> уже сейчас
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <Input 
              placeholder="Имя"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="bg-zinc-950 border-zinc-800 text-white placeholder:text-gray-600 focus:border-orange-500"
            />
            <Input 
              type="tel"
              placeholder="Телефон"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
              className="bg-zinc-950 border-zinc-800 text-white placeholder:text-gray-600 focus:border-orange-500"
            />
            <Input 
              type="email"
              placeholder="Почта"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="bg-zinc-950 border-zinc-800 text-white placeholder:text-gray-600 focus:border-orange-500"
            />
            <Input 
              placeholder="Город"
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
              required
              className="bg-zinc-950 border-zinc-800 text-white placeholder:text-gray-600 focus:border-orange-500"
            />
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25"
            >
              Получить консультацию
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;