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
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 hover:border-orange-500/30 transition-all">
            <h3 className="text-2xl font-bold mb-3 text-white">
              Ваш путь в индустрию с <span className="text-orange-500">вечным спросом и стабильной прибылью</span>
            </h3>
            <p className="text-gray-400">
              Курение остается привычкой миллионов, а спрос на современные альтернативы только увеличивается.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 hover:border-orange-500/30 transition-all">
            <h3 className="text-2xl font-bold mb-3 text-white">
              Честно, без иллюзий, <span className="text-orange-500">с поддержкой на каждом шаге</span>
            </h3>
            <p className="text-gray-400">
              Мы уважаем партнёров и не даём пустых обещаний, как другие франшизы. Вместо этого мы даём свой опыт, честные условия и реальную помощь.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-500/20 to-orange-600/10 border-orange-500/50 ring-2 ring-orange-500/30 hover:scale-105 transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/40 flex items-center justify-center flex-shrink-0">
                <Icon name="Percent" size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-orange-400">Роялти – всего 1%</h3>
            </div>
            <p className="text-gray-300">
              Минимальные отчисления, максимальная прибыль остается у вас
            </p>
          </Card>

          <Card className="p-6 bg-zinc-900/50 border-zinc-800 hover:border-orange-500/50 transition-all hover:scale-105">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Wallet" size={24} className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Доступный порог входа</h3>
            </div>
            <p className="text-gray-400">
              Открыть собственное дело под известным брендом можно без крупного капитала.
            </p>
          </Card>

          <Card className="p-6 bg-zinc-900/50 border-zinc-800 hover:border-orange-500/50 transition-all hover:scale-105 md:col-span-2">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Shield" size={24} className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Легальный и надежный бизнес</h3>
            </div>
            <p className="text-gray-400">
              Сегодня в этой отрасли остаётся место лишь для крупных и профессиональных игроков. Крупные сети, такие как VAPE ZONE, укрепляют свои позиции, а поставки из Китая и качественная отечественная продукция обеспечивают стабильность. Этот бизнес полностью соответствует закону и гарантирует безопасность для партнёров.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
