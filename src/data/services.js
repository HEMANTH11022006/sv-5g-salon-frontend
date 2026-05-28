export const allServices = [
  { id: 1, name: 'Normal Haircut', price: 200, cat: 'Haircuts', icon: 'Scissors' },
  { id: 2, name: 'Fashion Cut', price: 250, cat: 'Haircuts', icon: 'Scissors' },
  { id: 3, name: 'Shaving', price: 100, cat: 'Haircuts', icon: 'Scissors' },
  { id: 4, name: 'General Facial', price: 800, cat: 'Skin Care', icon: 'Smile' },
  { id: 5, name: 'Gold Facial', price: 1500, cat: 'Skin Care', icon: 'Sparkles' },
  { id: 6, name: 'Hydro Facial', price: 3000, cat: 'Skin Care', icon: 'Droplet' },
  { id: 7, name: 'Hair Spa', price: 1000, cat: 'Spa & Treatments', icon: 'Bath' },
  { id: 8, name: 'Hair Color', price: 250, cat: 'Color', icon: 'Palette' },
  { id: 9, name: 'Oil Massage', price: 150, cat: 'Spa & Treatments', icon: 'Hand' },
  { id: 10, name: 'Tan Pack', price: 500, cat: 'Skin Care', icon: 'Sun' },
  { id: 11, name: 'Pedicure', price: 1000, cat: 'Spa & Treatments', icon: 'Footprints' },
  { id: 12, name: 'Keratin Treatment', price: 4000, cat: 'Spa & Treatments', icon: 'Zap' },
];

export const morningTimes = [
  '07:30 AM', '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM',
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
];

export const eveningTimes = [
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM',
  '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',
];

export const serviceCategories = [
  { name: 'Haircuts', icon: 'Scissors' },
  { name: 'Skin Care', icon: 'Smile' },
  { name: 'Spa & Treatments', icon: 'Droplet' },
  { name: 'Color', icon: 'Palette' },
];

// Full menu data for the service modal
export const fullMenu = {
  left: [
    {
      title: 'Haircuts & Styling',
      icon: 'Scissors',
      items: [
        { name: 'Normal Haircut', price: '₹200' },
        { name: 'Fashion Cut', price: '₹250' },
        { name: 'Boy Cut (0-12)', price: '₹170' },
        { name: 'Baby Cut', price: '₹250' },
        { name: 'Trimming', price: '₹120' },
        { name: 'Shaving', price: '₹100' },
        { name: 'Hair Lining', price: '₹100' },
        { name: 'Moustache', price: '₹80' },
      ],
    },
    {
      title: 'Color Services',
      icon: 'Palette',
      items: [
        { name: 'Hair Dye (Fruit Gel)', price: '₹250' },
        { name: 'Black Henna', price: '₹200' },
        { name: 'Beard Color', price: '₹150' },
        { name: 'Bigen/Lorial/Revlon', price: '₹700-800' },
      ],
    },
    {
      title: 'Body & Grooming',
      icon: 'Sparkles',
      items: [
        { name: 'Oil Massage', price: '₹150' },
        { name: 'Oil Massage (Steam)', price: '₹300' },
        { name: 'Nail Cut & File', price: '₹100' },
        { name: 'Hair Wash', price: '₹100' },
      ],
    },
  ],
  right: [
    {
      title: 'Facials & Skin',
      icon: 'Smile',
      items: [
        { name: 'Hydro Facial', price: '₹3000' },
        { name: 'Gold Facial', price: '₹1500-2500' },
        { name: 'Diamond Facial', price: '₹1500' },
        { name: 'Silver Facial', price: '₹1000' },
        { name: 'General Facial', price: '₹800' },
        { name: 'Face Cleanup', price: '₹500' },
        { name: 'Face Bleach', price: '₹500' },
        { name: 'Tan Pack + Scrub', price: '₹500' },
        { name: 'Face Wash', price: '₹100' },
      ],
    },
    {
      title: 'Advanced Hair Spa',
      icon: 'Droplet',
      items: [
        { name: 'Keratin Treatment', price: '₹4000' },
        { name: 'Hair Straightening', price: '₹2500-3500' },
        { name: 'Hair Spa', price: '₹1000' },
        { name: 'Pedicure', price: '₹1000' },
        { name: 'Manicure', price: '₹600' },
      ],
    },
  ],
};
