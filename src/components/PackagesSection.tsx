import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface PackagesSectionProps {
  onOpenDialog: () => void;
}

const PackagesSection = ({ onOpenDialog }: PackagesSectionProps) => {
  return (
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
            <p className="text-gray-500 mb-6">Паушальный взнос</p>
            <ul className="space-y-3 mb-8">
              {[
                'Использование бренда VAPE ZONE',
                'Поддержка при выборе помещения',
                'Базовое обучение персонала',
                'Доступ к поставщикам',
                'Роялти 1%'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-400">
                  <Icon name="Check" size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button 
              onClick={onOpenDialog}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
            >
              Выбрать пакет
            </Button>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/30 relative overflow-hidden hover:scale-105 transition-all duration-300">
            <div className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-sm font-bold rounded-full">
              ПОПУЛЯРНЫЙ
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">Премиум</h3>
            <div className="text-4xl font-bold mb-2 text-orange-500">
              300,000₽
            </div>
            <p className="text-gray-500 mb-6">Паушальный взнос</p>
            <ul className="space-y-3 mb-8">
              {[
                'Всё из пакета Стандарт',
                'Готовый дизайн-проект магазина',
                'Полное обучение персонала + 7 дней',
                'Помощь в запуске рекламы',
                'Персональный менеджер',
                'Роялти 0.5%'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300">
                  <Icon name="Check" size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button 
              onClick={onOpenDialog}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/30"
            >
              Выбрать пакет
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
