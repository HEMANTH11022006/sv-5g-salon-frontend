import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-gold playfair mb-6">SV 5G SALON</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your ultimate destination for premium grooming and beauty services in Vijayawada. Redefining style with precision and 30+ years of passion.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-gold" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gold" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gold" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-6 uppercase text-sm tracking-widest">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#home" className="hover:text-gold">Home</a></li>
            <li><a href="#services" className="hover:text-gold">Services</a></li>
            <li><a href="#gallery" className="hover:text-gold">Gallery</a></li>
            <li><Link to="/booking" className="hover:text-gold">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-6 uppercase text-sm tracking-widest">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start">
              <MapPin className="w-4 h-4 mr-2 text-gold shrink-0 mt-0.5" />
              # 23-7-13, Sri Kasivisweswara Devasthanam Complex, Shop No. 3, Sivalayam Street, Satyanarayanapuram, VIJAYAWADA-520 011.
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-gold" />
              9393784433
            </li>
            <li className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-gold" />
              simhac47@gmail.com
            </li>
          </ul>
        </div>

        {/* Location Map */}
        <div>
          <h4 className="font-bold mb-6 uppercase text-sm tracking-widest">Location</h4>
          <div className="h-48 bg-zinc-900 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.42967191192!2d80.63185491143905!3d16.522436399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e56ff722d207%3A0x22b24e5e807eb97!2sVenkateshwara%20beauty%20salon!5e0!3m2!1sen!2sin!4v1716460000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="SV 5G Salon Location"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 text-xs border-t border-zinc-900 pt-8">
        &copy; 2026 SV 5G Salon. All rights reserved. | <Link to="/admin" className="hover:text-gold">Admin Portal</Link>
      </div>
    </footer>
  );
}
