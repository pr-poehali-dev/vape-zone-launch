import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ProfitSection from '@/components/ProfitSection';
import PackagesSection from '@/components/PackagesSection';
import StepsSection from '@/components/StepsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ContactDialog from '@/components/ContactDialog';

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

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 pointer-events-none" />
      
      <Header onOpenDialog={() => setIsDialogOpen(true)} />
      <HeroSection onOpenDialog={() => setIsDialogOpen(true)} />
      <AboutSection />
      <AdvantagesSection />
      <ProfitSection />
      <PackagesSection onOpenDialog={() => setIsDialogOpen(true)} />
      <StepsSection />
      <ContactSection onOpenDialog={() => setIsDialogOpen(true)} />
      <Footer />

      <ContactDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        formData={formData}
        onFormChange={handleFormChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Index;
