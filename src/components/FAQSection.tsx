import React, { useState } from 'react';
import { FAQS } from '../data/eventData';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Everything you need to know about TECHTONIC '26 registration, rules, logistics, and eligibility.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. food, team size, eligibility)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All FAQs' },
              { id: 'general', label: 'General' },
              { id: 'registration', label: 'Registration' },
              { id: 'teams', label: 'Teams & Eligibility' },
              { id: 'logistics', label: 'Logistics & Food' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200/90 rounded-2xl overflow-hidden transition-all bg-[#F8FAFC]"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-brand-600 transition-colors"
                  >
                    <span className="text-base font-semibold">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-slate-500 text-sm">
              No questions found matching your search. Feel free to contact us at{' '}
              <a href="mailto:techtonic26@iare.ac.in" className="text-brand-600 underline font-semibold">
                techtonic26@iare.ac.in
              </a>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
