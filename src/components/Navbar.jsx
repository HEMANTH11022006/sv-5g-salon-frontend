import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 glass-card mx-auto mt-4 px-6 py-4 flex justify-between items-center max-w-7xl left-0 right-0">
        <div className="text-2xl font-bold playfair text-gold">SV 5G SALON</div>
        <div className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gold transition">
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <Link to="/booking" className="btn-primary">Book Appointment</Link>
        </div>
        <button
          className="md:hidden text-gold"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-40 flex-col items-center justify-center space-y-8 text-2xl ${
          mobileOpen ? 'flex' : 'hidden'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <Link
          to="/booking"
          className="btn-primary"
          onClick={() => setMobileOpen(false)}
        >
          Book Appointment
        </Link>
        <button
          className="text-gold absolute top-10 right-10"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X />
        </button>
      </div>
    </>
  );
}
