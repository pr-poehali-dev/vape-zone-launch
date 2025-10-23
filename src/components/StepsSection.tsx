import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const StepsSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <img 
          src="https://cdn.poehali.dev/projects/b9116c29-0125-43fc-a453-3ebd79592af1/files/45b42beb-cd50-4df7-a70c-ed7f61fbe1dd.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          Как <span className="text-orange-500">начать работу</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: 'MessageSquare', title: 'Заявка', desc: 'Оставьте заявку на сайте', number: '01' },
            { icon: 'Phone', title: 'Консультация', desc: 'Обсудим детали и условия', number: '02' },
            { icon: 'FileText', title: 'Договор', desc: 'Подписываем документы', number: '03' },
            { icon: 'Rocket', title: 'Запуск', desc: 'Открываем ваш магазин', number: '04' }
          ].map((item, i) => (
            <Card key={i} className="p-6 bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 hover:border-orange-500/50 transition-all hover:scale-105 duration-300 relative group">
              <div className="absolute top-4 right-4 text-6xl font-bold text-orange-500/10 group-hover:text-orange-500/20 transition-colors">
                {item.number}
              </div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20 relative z-10">
                <Icon name={item.icon} size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white relative z-10">{item.title}</h3>
              <p className="text-gray-500 relative z-10">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
