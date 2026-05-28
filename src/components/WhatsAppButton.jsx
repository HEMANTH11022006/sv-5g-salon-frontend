import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919393784433"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle />
    </a>
  );
}
