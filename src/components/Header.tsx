import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onOpenDialog: () => void;
}

const Header = ({ onOpenDialog }: HeaderProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-orange-500/20">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
            <Icon name="Flame" size={24} className="text-white" />
          </div>
          <div className="text-2xl font-bold text-white">
            VAPE ZONE
          </div>
        </div>
        <Button 
          onClick={onOpenDialog}
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/20"
        >
          Стать партнером
        </Button>
      </nav>
    </div>
  );
};

export default Header;
