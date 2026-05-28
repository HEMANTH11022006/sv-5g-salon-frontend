import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Scissors, Palette, Sparkles, Smile, Droplet } from 'lucide-react';
import { fullMenu } from '../data/services';

const iconMap = {
  Scissors: Scissors,
  Palette: Palette,
  Sparkles: Sparkles,
  Smile: Smile,
  Droplet: Droplet,
};

export default function ServiceMenuModal({ isOpen, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const renderCategory = (category) => {
    const Icon = iconMap[category.icon] || Scissors;
    return (
      <div key={category.title}>
        <h3 className="text-2xl font-bold text-gold mb-6 flex items-center">
          <Icon className="mr-3" /> {category.title}
        </h3>
        <div className="space-y-4 border-l border-gold/20 pl-6">
          {category.items.map((item) => (
            <div key={item.name} className="flex justify-between border-b border-zinc-800 pb-2">
              <span>{item.name}</span>
              <span className="font-bold">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 z-[60] overflow-y-auto bg-black/95 backdrop-blur-xl"
      onClick={handleBackdropClick}
    >
      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold playfair">
            Our Full <span className="text-gold">Menu</span>
          </h2>
          <button onClick={onClose} className="text-gold hover:scale-110 transition" aria-label="Close menu">
            <X className="w-10 h-10" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-12">
            {fullMenu.left.map(renderCategory)}
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {fullMenu.right.map(renderCategory)}
          </div>
        </div>

        <div className="text-center mt-20">
          <Link to="/booking" className="btn-primary px-12 py-4 text-xl">
            Book Your Transformation
          </Link>
        </div>
      </div>
    </div>
  );
}
