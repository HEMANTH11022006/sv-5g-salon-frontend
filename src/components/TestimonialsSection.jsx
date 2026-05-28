import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "The best haircut I've ever had. The atmosphere is incredible and the service is top-notch.",
    name: 'John Doe',
    role: 'Regular Client',
  },
  {
    text: "SV 5G Salon transformed my look completely. The team is professional and truly skilled at their craft.",
    name: 'Ravi Kumar',
    role: 'Loyal Customer',
  },
  {
    text: "Amazing experience every time! The attention to detail and premium products make all the difference.",
    name: 'Priya Sharma',
    role: 'First-time Visitor',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="container mx-auto px-6">
      <h2 className="text-center text-4xl font-bold mb-16">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="glass-card p-8 italic">
            <div className="text-gold mb-4 flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-current" />
              ))}
            </div>
            &quot;{t.text}&quot;
            <div className="mt-6 flex items-center">
              <div className="w-10 h-10 rounded-full bg-zinc-800 mr-4"></div>
              <div>
                <p className="font-bold not-italic">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
