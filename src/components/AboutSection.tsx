import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
