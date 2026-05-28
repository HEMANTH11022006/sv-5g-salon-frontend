import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-6 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 reveal">
          <div className="relative">
            <img src="/owner.png" alt="P. Simhachalam - SV 5G Salon" className="rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 bg-gold text-black p-8 rounded-xl hidden md:block">
              <p className="text-4xl font-bold">30+</p>
              <p className="text-xs uppercase font-bold tracking-widest">Years Experience</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 reveal" style={{ transitionDelay: '0.2s' }}>
          <h3 className="text-gold uppercase tracking-widest font-bold text-sm mb-4">Our Story</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Redefining Grooming <br /> Standards Since 1994
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            SV 5G Salon (formerly SVS) started with a simple vision: to provide premium grooming services that combine classic techniques with modern style. Led by <span className="text-gold font-bold">P. Simhachalam</span>, our team is dedicated to making you look and feel your best with over 30 years of expertise.
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            We use only the finest products and state-of-the-art equipment to ensure every visit is a luxurious experience. Whether it&apos;s a quick trim or a full day of pampering, we&apos;ve got you covered.
          </p>
          <ul className="space-y-4 mb-10">
            {['Expert Professional Staff', 'Premium International Products', 'Relaxing & Hygienic Environment'].map((item) => (
              <li key={item} className="flex items-center text-sm font-bold uppercase tracking-widest">
                <CheckCircle className="text-gold w-5 h-5 mr-3" />
                {item}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary">Learn More</a>
        </div>
      </div>
    </section>
  );
}
