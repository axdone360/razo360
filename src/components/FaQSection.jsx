import { Check, Plus } from 'lucide-react';
import React, { useState } from 'react';
import ContactModal from './ContactModal';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const faqs = [
    {
      question: "What services does razo360 offer?",
      answer: " Razo360 provides a range of services, including digital marketing, web development, mobile app development, branding, and software solutions tailored to meet our clients' business goals."
    },
    {
      question: "Who are your typical clients?",
      answer: "   We work with businesses of all sizes across different industries. Whether you’re a startup, a growing company, or a large enterprise, we create strategies that fit your needs and objectives."
    },
    {
      question: "How long does it take to complete a project?",
      answer: " Project timelines vary based on the scope and complexity. After understanding your requirements, we provide a detailed timeline to ensure your project is delivered on schedule."
    },
    {
      question: "Do you offer customized marketing strategies?",
      answer: " Yes, all our marketing strategies are tailored to meet each client’s specific needs, industry trends, and target audience for maximum impact."
    },
    {
      question: "How can we get started with razo360?",
      answer: "   Simply reach out to us through our website or contact form, and we’ll schedule an initial consultation to discuss your goals and how razo360 can help."
    }
  
  ];

  return (
    <div className="bg-orange-50 py-16 mt-40 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-950 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-gray-200 py-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-medium text-purple-950">{faq.question}</span>
                <span className="bg-yellow-500 p-1 rounded">
                  <Plus className="w-4 h-4" 
                    style={{ 
                      transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0)',
                      transition: 'transform 0.2s'
                    }}
                  />
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-4 text-gray-600 text-base pl-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action at bottom */}
        <div className="bg-primary rounded-lg mt-12 py-8 px-6 text-center">
          <h3 className="text-2xl max-sm:text-lg font-bold text-white mb-6">
            Still have questions?
          </h3>
          <button style={{ boxShadow: "0 8px 38px rgba(171, 28, 187, 0.6)" }}
          className="bg-yellow-500 hover:bg-yellow-600 text-purple-950 font-semibold py-3 px-8 max-sm:py-2 max-sm:px-4 rounded-md transition-colors"
          onClick={() => setModalOpen(true)}>
            Connect with us
          </button>
          <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

        </div>
      </div>
    </div>
  );
};

export default FAQSection;
