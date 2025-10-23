import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AdvantagesSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <img 
          src="https://cdn.poehali.dev/projects/b9116c29-0125-43fc-a453-3ebd79592af1/files/444323e3-dd17-46ab-b109-74bdafcbe9d7.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="grid gap-6">
          <Card className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Ваш путь в индустрию с <span className="text-orange-500">вечным спросом</span> и <span className="text-orange-500">стабильной прибылью</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Курение остается привычкой миллионов, а спрос на современные альтернативы только увеличивается.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800">
            <h3 className="text-3xl font-bold mb-3 text-white">
              Честно, без иллюзий, <span className="text-orange-500">с поддержкой на каждом шаге</span>
            </h3>
            <p className="text-gray-400 text-lg">
              Мы уважаем партнёров и не даём пустых обещаний, как другие франшизы. Вместо этого мы даём свой опыт, честные условия и реальную помощь.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-orange-500/20 to-orange-600/10 border-orange-500/50 ring-2 ring-orange-500/30 relative overflow-hidden group hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl shadow-orange-500/40 flex items-center justify-center flex-shrink-0">
                <Icon name="Percent" size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-3 text-orange-400">Роялти – всего 1%</h3>
                <p className="text-gray-300 text-lg">
                  Минимальные отчисления, максимальная прибыль остается у вас
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-zinc-900/50 border-zinc-800 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center mb-4 relative z-10">
                <Icon name="Wallet" size={32} className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white relative z-10">Доступный порог входа</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">
                Открыть собственное дело под известным брендом можно без крупного капитала.
              </p>
            </Card>

            <Card className="p-8 bg-zinc-900/50 border-zinc-800 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center mb-4 relative z-10">
                <Icon name="Shield" size={32} className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white relative z-10">Легальный и надежный бизнес</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">
                Сегодня в этой отрасли остаётся место лишь для крупных и профессиональных игроков. Крупные сети, такие как VAPE ZONE, укрепляют свои позиции, а поставки из Китая и качественная отечественная продукция обеспечивают стабильность. Этот бизнес полностью соответствует закону и гарантирует безопасность для партнёров.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
