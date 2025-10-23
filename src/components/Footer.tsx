import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <Icon name="Flame" size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-white">VAPE ZONE</div>
            </div>
            <p className="text-gray-500">
              Франшиза вейп-магазинов с проверенной бизнес-моделью
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Франшиза</h4>
            <ul className="space-y-2 text-gray-500">
              <li>О бренде</li>
              <li>Преимущества</li>
              <li>Пакеты</li>
              <li>Контакты</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-500">
              <li>FAQ</li>
              <li>Документы</li>
              <li>Обучение</li>
              <li>Партнерам</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-500">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-orange-500" />
                info@vapezone.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-orange-500" />
                +7 (800) 555-35-35
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 text-center text-gray-500">
          <p>&copy; 2024 VAPE ZONE. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
