import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Home, ArrowRight, ArrowLeft, Calendar, Clock, User,
  CheckCircle, Scissors, Smile, Droplet, Palette, Check,
  Sparkles, Bath, Hand, Sun, Footprints, Zap,
} from 'lucide-react';
import { allServices, morningTimes, eveningTimes, serviceCategories } from '../data/services';
import { createBooking } from '../services/api';

const iconMap = {
  Scissors, Smile, Sparkles, Droplet, Bath, Hand,
  Sun, Footprints, Zap, Palette, Check,
};

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServiceIds, setSelectedServiceIds] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Haircuts');
  const [selectedTime, setSelectedTime] = useState(null);
  const [date, setDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const goToStep = (step) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Progress
  const stepLabels = ['Services', 'Date & Time', 'Review'];
  const progressPercent = Math.round((currentStep / 3) * 100);

  // Step 1 logic
  const toggleService = (id) => {
    setSelectedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const selectedServices = allServices.filter((s) => selectedServiceIds.includes(s.id));
  const filteredServices = allServices.filter((s) => s.cat === activeCategory);

  // Step 2 readiness
  const step2Ready = date && selectedTime;

  // Step 3 summary
  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    const formData = {
      customerName,
      mobileNumber,
      service: selectedServices.map((s) => s.name).join(', '),
      date,
      timeSlot: selectedTime,
    };

    try {
      await createBooking(formData);
      setShowSuccess(true);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-card mx-auto mt-4 px-6 py-4 flex justify-between items-center max-w-7xl left-0 right-0">
        <Link to="/" className="text-2xl font-bold playfair text-gold">SV 5G SALON</Link>
        <Link to="/" className="text-gold hover:underline flex items-center">
          <Home className="w-4 h-4 mr-2" /> Home
        </Link>
      </nav>

      <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
        {/* Progress Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold playfair mb-4">
            Book Your <span className="text-gold">Experience</span>
          </h1>
          <div className="relative pt-1 max-w-md mx-auto">
            <div className="flex mb-2 items-center justify-between text-xs uppercase tracking-widest font-bold text-gold/60">
              <span>Step {currentStep}: {stepLabels[currentStep - 1]}</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-zinc-900 border border-zinc-800">
              <div
                className="progress-bar shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gold"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* STEP 1: SERVICE SELECTION */}
          <div className={currentStep === 1 ? 'step-active' : 'step-inactive'}>
            {/* Category Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {serviceCategories.map((cat) => {
                const Icon = iconMap[cat.icon] || Scissors;
                return (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => setActiveCategory(cat.name)}
                    className={`glass-card p-4 text-center hover:border-gold transition group ${
                      activeCategory === cat.name ? 'border-gold bg-gold/10' : ''
                    }`}
                  >
                    <Icon className="mx-auto mb-2 text-gold group-hover:scale-110 transition" />
                    <span className="text-xs font-bold uppercase tracking-widest">{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {filteredServices.map((service) => {
                const isSelected = selectedServiceIds.includes(service.id);
                const Icon = iconMap[service.icon] || Scissors;
                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`service-card glass-card p-6 cursor-pointer border hover:border-gold transition flex justify-between items-center ${
                      isSelected ? 'selected' : 'border-zinc-800'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mr-4">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold">{service.name}</h4>
                        <p className="text-xs text-gray-500">Starts from ₹{service.price}</p>
                      </div>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                        isSelected ? 'bg-gold border-gold' : 'border-zinc-700'
                      }`}
                    >
                      {isSelected && <Check className="w-4 h-4 text-black" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selection Summary Bar */}
            <div className="flex justify-between items-center sticky bottom-8 glass-card p-6 border-gold/30 bg-black/80 backdrop-blur-lg">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400">Selected Services</p>
                <p className="text-gold font-bold">
                  {selectedServices.length === 0
                    ? 'None selected'
                    : selectedServices.map((s) => s.name).join(', ')}
                </p>
              </div>
              <button
                type="button"
                onClick={() => goToStep(2)}
                disabled={selectedServices.length === 0}
                className={`btn-primary ${selectedServices.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Next Step <ArrowRight className="inline w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* STEP 2: DATE & TIME */}
          <div className={currentStep === 2 ? 'step-active' : 'step-inactive'}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center text-gold">
                  <Calendar className="mr-2" /> Select Date
                </h3>
                <input
                  type="date"
                  value={date}
                  min={today}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 focus:outline-none focus:border-gold transition text-lg text-white"
                />
                <p className="text-xs text-gray-500 mt-4 italic">
                  * We are open 7:30 AM – 1:00 PM and 4:00 PM – 9:00 PM
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center text-gold">
                  <Clock className="mr-2" /> Select Time Slot
                </h3>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Morning</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {morningTimes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`time-slot border border-zinc-800 rounded-lg p-3 text-sm hover:border-gold transition ${
                          selectedTime === t ? 'selected bg-gold text-black' : ''
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Evening</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {eveningTimes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`time-slot border border-zinc-800 rounded-lg p-3 text-sm hover:border-gold transition ${
                          selectedTime === t ? 'selected bg-gold text-black' : ''
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-zinc-900">
              <button
                type="button"
                onClick={() => goToStep(1)}
                className="text-gray-400 hover:text-white transition"
              >
                <ArrowLeft className="inline w-4 h-4 mr-2" /> Back
              </button>
              <button
                type="button"
                onClick={() => goToStep(3)}
                disabled={!step2Ready}
                className={`btn-primary ${!step2Ready ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Review Booking <ArrowRight className="inline w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* STEP 3: CONTACT & CONFIRM */}
          <div className={currentStep === 3 ? 'step-active' : 'step-inactive'}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-bold mb-6 flex items-center text-gold">
                  <User className="mr-2" /> Your Details
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition text-white"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    pattern="[0-9]{10}"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition text-white"
                    placeholder="10-digit mobile number"
                  />
                </div>
              </div>

              <div className="glass-card p-8 border-gold/20">
                <h3 className="text-xl font-bold mb-6 text-gold">Booking Summary</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Services:</span>
                    <span className="font-bold text-right ml-4">
                      {selectedServices.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date:</span>
                    <span className="font-bold">{date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Time:</span>
                    <span className="font-bold text-gold">{selectedTime}</span>
                  </div>
                  <div className="pt-4 border-t border-zinc-800 flex justify-between text-lg">
                    <span className="font-bold">Estimated Total:</span>
                    <span className="font-bold text-gold">₹{totalPrice}</span>
                  </div>
                </div>
              </div>
            </div>

            {message && (
              <div className="mt-8 p-4 rounded-lg text-sm bg-red-900/30 text-red-400">
                {message}
              </div>
            )}

            <div className="flex justify-between mt-12 pt-8 border-t border-zinc-900">
              <button
                type="button"
                onClick={() => goToStep(2)}
                className="text-gray-400 hover:text-white transition"
              >
                <ArrowLeft className="inline w-4 h-4 mr-2" /> Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary px-12 py-4"
              >
                {submitting ? 'Processing...' : 'Confirm & Book Now'}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="glass-card p-12 max-w-md text-center border-gold/50">
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-gold w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold playfair mb-4">Appointment Requested!</h2>
            <p className="text-gray-400 mb-8">
              Thank you for choosing SV 5G Salon. We&apos;ll contact you shortly to confirm your slot.
            </p>
            <Link to="/" className="btn-primary block w-full py-4">Return Home</Link>
          </div>
        </div>
      )}
    </div>
  );
}
