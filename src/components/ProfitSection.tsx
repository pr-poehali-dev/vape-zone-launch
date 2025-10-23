import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProfitSection = () => {
  return (
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
  );
};

export default ProfitSection;
