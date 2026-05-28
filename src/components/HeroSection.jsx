import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section id="home" className="relative">
      <div id="hero">
        <div className="max-w-4xl px-4">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 reveal">
            Elevate Your <span className="text-gold italic">Style</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white/80 reveal" style={{ transitionDelay: '0.1s' }}>
            SV 5G SPEED SALOON
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-300 reveal" style={{ transitionDelay: '0.2s' }}>
            <span className="bg-gold text-black px-4 py-1 rounded-full font-bold text-sm mb-4 inline-block">
              30+ YEARS OF EXPERIENCE
            </span>
            <br />
            Experience world-class grooming and beauty treatments in Vijayawada. Modern techniques, classic care since 1994.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 reveal" style={{ transitionDelay: '0.4s' }}>
            <Link to="/booking" className="btn-primary text-lg px-8 py-4">Book Now</Link>
            <a
              href="#services"
              className="border border-gold text-gold hover:bg-gold hover:text-black transition px-8 py-4 rounded font-semibold text-center"
            >
              Explore Services
            </a>
          </div>
          {/* Working Hours */}
          <div className="mt-16 glass-card p-6 inline-block reveal" style={{ transitionDelay: '0.6s' }}>
            <h3 className="text-gold font-bold mb-2 uppercase tracking-widest text-sm">Working Hours</h3>
            <div className="flex gap-8 text-sm">
              <div>
                <span className="block text-gray-400">Morning</span>
                7:30 AM – 1:00 PM
              </div>
              <div className="w-px bg-gold opacity-30"></div>
              <div>
                <span className="block text-gray-400">Evening</span>
                4:00 PM – 9:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
