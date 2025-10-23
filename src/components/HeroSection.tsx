import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onOpenDialog: () => void;
}

const HeroSection = ({ onOpenDialog }: HeroSectionProps) => {
  return (
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
            onClick={onOpenDialog}
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
  );
};

export default HeroSection;
