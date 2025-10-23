import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ContactSectionProps {
  onOpenDialog: () => void;
}

const ContactSection = ({ onOpenDialog }: ContactSectionProps) => {
  return (
    <section className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-zinc-900 to-zinc-950 border-orange-500/30 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <img 
              src="https://cdn.poehali.dev/projects/b9116c29-0125-43fc-a453-3ebd79592af1/files/a2abb71d-fcab-4cfe-b22d-e9830a3c1d49.jpg" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-orange-500/30">
              <Icon name="Flame" size={40} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Готовы начать свой бизнес?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Оставьте заявку и наш менеджер свяжется с вами для консультации
            </p>
            <Button 
              size="lg"
              onClick={onOpenDialog}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg px-12 py-6 shadow-xl shadow-orange-500/30"
            >
              Стать партнером VAPE ZONE
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
