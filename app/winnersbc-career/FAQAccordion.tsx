import React, { useState } from 'react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I register for training sessions?",
      answer: "You can register through our website or join our WhatsApp group for direct notifications about upcoming sessions."
    },
    {
      question: "Are the training programs free?",
      answer: "Most of our training programs are free for members. Some advanced workshops may have a nominal fee."
    },
    {
      question: "How can I get career counseling?",
      answer: "We offer one-on-one career counseling sessions. Contact us through the form to schedule an appointment."
    },
    {
      question: "Do you provide job placement services?",
      answer: "We connect members with job opportunities and provide resume review and interview preparation services."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Get answers to common questions about our career development programs</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}