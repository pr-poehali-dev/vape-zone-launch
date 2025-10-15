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
    <div className="min-h-screen bg-gradient-to-br from-[#1a1625] via-[#221932] to-[#1a1625]">
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent">
            VAPE ZONE
          </div>
          <Button 
            onClick={() => setIsDialogOpen(true)}
            className="bg-gradient-to-r from-[#9b87f5] to-[#D946EF] hover:opacity-90 transition-opacity"
          >
            Стать партнером
          </Button>
        </nav>
      </div>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#9b87f5] via-[#D946EF] to-[#0EA5E9] bg-clip-text text-transparent animate-fade-in">
            Франшиза VAPE ZONE
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Запустите прибыльный бизнес в вейп-индустрии с проверенной бизнес-моделью
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => setIsDialogOpen(true)}
              className="bg-gradient-to-r from-[#9b87f5] to-[#D946EF] hover:opacity-90 transition-all text-lg px-8 py-6"
            >
              Получить консультацию
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-[#9b87f5] text-white hover:bg-[#9b87f5]/20 text-lg px-8 py-6"
            >
              Узнать подробнее
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] bg-clip-text text-transparent">
            О бренде VAPE ZONE
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Store', title: '50+ магазинов', desc: 'По всей России' },
              { icon: 'TrendingUp', title: '300%+', desc: 'Средняя рентабельность' },
              { icon: 'Users', title: '10,000+', desc: 'Довольных клиентов' }
            ].map((item, i) => (
              <Card key={i} className="p-8 bg-gradient-to-br from-[#1f1c2e] to-[#2a2540] border-[#9b87f5]/30 hover:border-[#9b87f5] transition-all hover:scale-105 duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9b87f5] to-[#D946EF] flex items-center justify-center mb-6">
                  <Icon name={item.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#D946EF] to-[#9b87f5] bg-clip-text text-transparent">
            Преимущества франшизы
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
              <Card key={i} className="p-6 bg-gradient-to-br from-[#1f1c2e]/80 to-[#2a2540]/80 border-[#0EA5E9]/30 hover:border-[#0EA5E9] transition-all duration-300">
                <Icon name={item.icon} size={40} className="text-[#0EA5E9] mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-black/30 to-transparent">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
            Чистая прибыль
          </h2>
          <p className="text-center text-gray-300 text-xl mb-12 max-w-3xl mx-auto">
            Реальные показатели работающих магазинов VAPE ZONE
          </p>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-[#9b87f5]/20 to-[#D946EF]/20 border-[#9b87f5] text-center">
              <div className="text-5xl font-bold text-white mb-2">500,000₽</div>
              <p className="text-gray-300">Средняя прибыль/месяц</p>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-[#D946EF]/20 to-[#0EA5E9]/20 border-[#D946EF] text-center">
              <div className="text-5xl font-bold text-white mb-2">6-12</div>
              <p className="text-gray-300">Месяцев окупаемость</p>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-[#0EA5E9]/20 to-[#8B5CF6]/20 border-[#0EA5E9] text-center">
              <div className="text-5xl font-bold text-white mb-2">300%+</div>
              <p className="text-gray-300">ROI в год</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#0EA5E9] to-[#9b87f5] bg-clip-text text-transparent">
            Пакеты франшизы
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-[#1f1c2e] to-[#2a2540] border-[#9b87f5]/50 hover:border-[#9b87f5] transition-all hover:scale-105 duration-300">
              <h3 className="text-3xl font-bold mb-4 text-white">Стандарт</h3>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent">
                0₽
              </div>
              <p className="text-gray-400 mb-6">Паушальный взнос | Роялти 1.5%</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Право на бренд',
                  'Базовые материалы',
                  'Онлайн-обучение',
                  'Список поставщиков',
                  'Консультации по запуску'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <Icon name="Check" size={20} className="text-[#9b87f5]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => setIsDialogOpen(true)}
                className="w-full bg-gradient-to-r from-[#9b87f5] to-[#D946EF] hover:opacity-90"
              >
                Выбрать пакет
              </Button>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-[#2a2540] to-[#1f1c2e] border-[#D946EF] relative overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D946EF] to-[#9b87f5] text-white px-4 py-1 rounded-full text-sm font-bold">
                ПОПУЛЯРНО
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Бизнес</h3>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#D946EF] to-[#0EA5E9] bg-clip-text text-transparent">
                200,000₽
              </div>
              <p className="text-gray-400 mb-6">Паушальный взнос | Роялти 1%</p>
              <ul className="space-y-3 mb-8">
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
                    <Icon name="Check" size={20} className="text-[#D946EF]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => setIsDialogOpen(true)}
                className="w-full bg-gradient-to-r from-[#D946EF] to-[#0EA5E9] hover:opacity-90"
              >
                Выбрать пакет
              </Button>
            </Card>
          </div>
          <p className="text-center text-sm text-gray-400 mt-8 max-w-3xl mx-auto italic">
            Если у вас уже есть бизнес в помещении с хорошим расположением, но аренда слишком высока - 
            субаренда с VAPE ZONE превратит его в прибыльную точку. На той же площади вы получите 
            дополнительный поток клиентов, объедините аудиторию и увеличите доход.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9] bg-clip-text text-transparent">
            Инвестиции в открытие
          </h2>
          <p className="text-center text-gray-300 text-xl mb-12 max-w-3xl mx-auto">
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
              <Card key={i} className="p-6 bg-gradient-to-br from-[#1f1c2e] to-[#2a2540] border-[#0EA5E9]/30 text-center hover:border-[#0EA5E9] transition-all duration-300">
                <Icon name={item.icon} size={48} className="text-[#0EA5E9] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-300">{item.title}</h3>
                <div className="text-2xl font-bold text-white">{item.amount}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] bg-clip-text text-transparent">
            Запуск VAPE ZONE — 6 шагов
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
              <Card key={i} className="p-6 bg-gradient-to-r from-[#1f1c2e] to-[#2a2540] border-l-4 border-[#9b87f5] hover:border-[#D946EF] transition-all hover:scale-102 duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9b87f5] to-[#D946EF] flex items-center justify-center">
                      <Icon name={item.icon} size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-[#D946EF] mb-1">ШАГ {item.step}</div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-black/30 to-transparent">
        <div className="container mx-auto max-w-2xl">
          <Card className="p-12 bg-gradient-to-br from-[#1f1c2e] to-[#2a2540] border-2 border-[#9b87f5]">
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent">
              Открыть свой VAPE ZONE
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input 
                placeholder="Имя"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="bg-[#1a1625] border-[#9b87f5]/30 text-white placeholder:text-gray-500"
              />
              <Input 
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                className="bg-[#1a1625] border-[#9b87f5]/30 text-white placeholder:text-gray-500"
              />
              <Input 
                type="email"
                placeholder="Почта"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="bg-[#1a1625] border-[#9b87f5]/30 text-white placeholder:text-gray-500"
              />
              <Input 
                placeholder="Город"
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                required
                className="bg-[#1a1625] border-[#9b87f5]/30 text-white placeholder:text-gray-500"
              />
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#9b87f5] to-[#D946EF] hover:opacity-90 text-lg py-6"
              >
                Стать франчайзи
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent">
            VAPE ZONE
          </div>
          <p className="text-gray-400 mb-4">© 2024 VAPE ZONE. Все права защищены.</p>
          <div className="flex justify-center gap-4">
            <Icon name="Instagram" size={24} className="text-gray-400 hover:text-[#D946EF] cursor-pointer transition-colors" />
            <Icon name="Phone" size={24} className="text-gray-400 hover:text-[#9b87f5] cursor-pointer transition-colors" />
            <Icon name="Mail" size={24} className="text-gray-400 hover:text-[#0EA5E9] cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-gradient-to-br from-[#1f1c2e] to-[#2a2540] border-[#9b87f5] text-white">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent">
              Получите бесплатную консультацию уже сейчас
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <Input 
              placeholder="Имя"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="bg-[#1a1625] border-[#9b87f5]/30 text-white placeholder:text-gray-500"
            />
            <Input 
              type="tel"
              placeholder="Телефон"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
              className="bg-[#1a1625] border-[#9b87f5]/30 text-white placeholder:text-gray-500"
            />
            <Input 
              type="email"
              placeholder="Почта"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="bg-[#1a1625] border-[#9b87f5]/30 text-white placeholder:text-gray-500"
            />
            <Input 
              placeholder="Город"
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
              required
              className="bg-[#1a1625] border-[#9b87f5]/30 text-white placeholder:text-gray-500"
            />
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#9b87f5] to-[#D946EF] hover:opacity-90"
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
