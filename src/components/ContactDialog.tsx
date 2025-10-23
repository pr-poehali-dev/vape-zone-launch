import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    name: string;
    phone: string;
    email: string;
    city: string;
  };
  onFormChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ContactDialog = ({ isOpen, onClose, formData, onFormChange, onSubmit }: ContactDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl">Стать партнером VAPE ZONE</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Ваше имя</label>
            <Input
              value={formData.name}
              onChange={(e) => onFormChange('name', e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-white"
              placeholder="Иван Иванов"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Телефон</label>
            <Input
              value={formData.phone}
              onChange={(e) => onFormChange('phone', e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-white"
              placeholder="+7 (999) 123-45-67"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Email</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => onFormChange('email', e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-white"
              placeholder="email@example.com"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Город</label>
            <Input
              value={formData.city}
              onChange={(e) => onFormChange('city', e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-white"
              placeholder="Москва"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
          >
            Отправить заявку
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
