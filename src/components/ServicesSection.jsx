import { useState } from 'react';
import ServiceMenuModal from './ServiceMenuModal';

export default function ServicesSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="services" className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a wide range of premium services tailored to your needs. From precision haircuts to rejuvenating spa treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Category 1: Haircuts & Styling */}
          <div className="glass-card p-8 reveal">
            <img src="/service_haircut.png" alt="Haircuts" className="w-full h-48 object-cover rounded-xl mb-6" />
            <h3 className="text-2xl font-bold text-gold mb-6 border-b border-gold/20 pb-2">Haircuts &amp; Styling</h3>
            <ul className="space-y-4">
              <li className="flex justify-between"><span>Normal Haircut</span> <span className="font-bold">₹200</span></li>
              <li className="flex justify-between"><span>Fashion Cut</span> <span className="font-bold">₹250</span></li>
              <li className="flex justify-between"><span>Boy Cut (0-12 yrs)</span> <span className="font-bold">₹170</span></li>
              <li className="flex justify-between"><span>Baby Cut</span> <span className="font-bold">₹250</span></li>
              <li className="flex justify-between"><span>Trimming</span> <span className="font-bold">₹120</span></li>
              <li className="flex justify-between"><span>Shaving</span> <span className="font-bold">₹100</span></li>
              <li className="flex justify-between"><span>Hair Lining</span> <span className="font-bold">₹100</span></li>
              <li className="flex justify-between"><span>Moustache Styling</span> <span className="font-bold">₹80</span></li>
            </ul>
          </div>

          {/* Category 2: Facials & Skin */}
          <div className="glass-card p-8 reveal" style={{ transitionDelay: '0.1s' }}>
            <img src="/service_facial.png" alt="Facials" className="w-full h-48 object-cover rounded-xl mb-6" />
            <h3 className="text-2xl font-bold text-gold mb-6 border-b border-gold/20 pb-2">Facials &amp; Skin Care</h3>
            <ul className="space-y-4">
              <li className="flex justify-between"><span>General Facial</span> <span className="font-bold">₹800</span></li>
              <li className="flex justify-between"><span>Silver Facial</span> <span className="font-bold">₹1000</span></li>
              <li className="flex justify-between"><span>Diamond Facial</span> <span className="font-bold">₹1500</span></li>
              <li className="flex justify-between"><span>Gold Facial</span> <span className="font-bold">₹1500-2500</span></li>
              <li className="flex justify-between"><span>Hydro Facial</span> <span className="font-bold">₹3000</span></li>
              <li className="flex justify-between"><span>Face Bleach</span> <span className="font-bold">₹500</span></li>
              <li className="flex justify-between"><span>Tan Pack + Scrub</span> <span className="font-bold">₹500</span></li>
              <li className="flex justify-between"><span>Face Cleanup</span> <span className="font-bold">₹500</span></li>
            </ul>
          </div>

          {/* Category 3: Spa & Treatments */}
          <div className="glass-card p-8 reveal" style={{ transitionDelay: '0.2s' }}>
            <img src="/service_spa.png" alt="Spa" className="w-full h-48 object-cover rounded-xl mb-6" />
            <h3 className="text-2xl font-bold text-gold mb-6 border-b border-gold/20 pb-2">Spa &amp; Treatments</h3>
            <ul className="space-y-4">
              <li className="flex justify-between"><span>Hair Spa</span> <span className="font-bold">₹1000</span></li>
              <li className="flex justify-between"><span>Keratin Treatment</span> <span className="font-bold">₹4000</span></li>
              <li className="flex justify-between"><span>Hair Straightening</span> <span className="font-bold">₹2500-3500</span></li>
              <li className="flex justify-between"><span>Oil Massage</span> <span className="font-bold">₹150</span></li>
              <li className="flex justify-between"><span>Oil Massage (Steam)</span> <span className="font-bold">₹300</span></li>
              <li className="flex justify-between"><span>Pedicure</span> <span className="font-bold">₹1000</span></li>
              <li className="flex justify-between"><span>Manicure</span> <span className="font-bold">₹600</span></li>
              <li className="flex justify-between"><span>Hair Dye (Fruit Gel)</span> <span className="font-bold">₹250</span></li>
            </ul>
          </div>
        </div>

        {/* Additional Services Bar */}
        <div className="mt-12 glass-card p-6 reveal">
          <h4 className="text-center text-gold font-bold mb-4 uppercase tracking-widest text-sm">More Services</h4>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-gray-400">
            <div className="flex justify-between w-full md:w-auto gap-4"><span>Hair Wash</span> <span className="text-white">₹100</span></div>
            <div className="flex justify-between w-full md:w-auto gap-4"><span>Nail Cut &amp; File</span> <span className="text-white">₹100</span></div>
            <div className="flex justify-between w-full md:w-auto gap-4"><span>Black Henna</span> <span className="text-white">₹200</span></div>
            <div className="flex justify-between w-full md:w-auto gap-4"><span>Bigen/Lorial/Revlon</span> <span className="text-white">₹700-800</span></div>
            <div className="flex justify-between w-full md:w-auto gap-4"><span>Beard Color</span> <span className="text-white">₹150</span></div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="text-center mt-12">
            <button
              onClick={() => setModalOpen(true)}
              className="border border-gray-700 hover:border-gold px-8 py-3 transition rounded uppercase tracking-widest text-sm bg-transparent text-white cursor-pointer"
            >
              View Full Price List
            </button>
          </div>
        </div>
      </section>

      <ServiceMenuModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
