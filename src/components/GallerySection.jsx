import { useState } from 'react';

const galleryItems = [
  { id: 1, label: 'Modern Fade', filterClass: '', category: ['All', 'Men', 'Trending'] },
  { id: 2, label: 'Textured Crop', filterClass: 'contrast-125 brightness-75', category: ['All', 'Men'] },
  { id: 3, label: 'Classic Wave', filterClass: 'grayscale group-hover:grayscale-0', category: ['All', 'Women', 'Trending'] },
  { id: 4, label: 'Elegant Bob', filterClass: 'hue-rotate-15', category: ['All', 'Women'] },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Men', 'Women', 'Trending'];
  const filtered = galleryItems.filter((item) => item.category.includes(activeFilter));

  return (
    <section id="gallery" className="bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hairstyles Gallery</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`gallery-filter ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" id="gallery-grid">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg aspect-[3/4] reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img
                src="/gallery.png"
                alt={item.label}
                className={`w-full h-full object-cover transition duration-700 group-hover:scale-110 ${item.filterClass}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex items-end p-4">
                <p className="text-white opacity-0 group-hover:opacity-100 transition duration-300 font-bold uppercase tracking-widest text-sm">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
