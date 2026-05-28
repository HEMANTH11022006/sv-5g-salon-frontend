const faqs = [
  {
    question: 'Do I need to book in advance?',
    answer: 'While we accept walk-ins, we highly recommend booking in advance to ensure your preferred time slot and stylist are available.',
  },
  {
    question: 'What are your cancellation policies?',
    answer: 'We request at least 24 hours notice for cancellations. This allows us to offer the slot to other clients on our waiting list.',
  },
  {
    question: 'Do you offer bridal/groom packages?',
    answer: 'Yes! We have specialized packages for weddings. Please contact us directly for a custom consultation and pricing.',
  },
];

export default function FAQSection() {
  return (
    <section className="bg-zinc-950">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about our services and policies.</p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="glass-card p-6 reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h4 className="font-bold text-gold mb-2">{faq.question}</h4>
              <p className="text-sm text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
