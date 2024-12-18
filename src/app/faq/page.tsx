"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "What are your opening hours?",
    answer: "We are open every day from 9:00 AM to 11:00 PM.",
  },
  {
    question: "Do you offer home delivery?",
    answer: "Yes, we provide home delivery services for all orders placed online.",
  },
  {
    question: "Are there vegetarian and vegan options available?",
    answer: "Yes, we have a wide selection of vegetarian and vegan dishes on our menu.",
  },
  {
    question: "How can I make a reservation?",
    answer: "You can reserve a table using our website's reservation page or call us directly.",
  },
  {
    question: "Do you cater for private events?",
    answer:
      "Absolutely! We offer catering services for private events such as birthdays, weddings, and corporate gatherings.",
  },
  {
    question: "Where are you located?",
    answer: "Our restaurant is located at 123 Foodi Street, Foodville, USA.",
  },
  {
    question: "Can I modify or cancel my reservation?",
    answer: "Yes, you can modify or cancel your reservation by calling us at least 24 hours in advance.",
  },
  {
    question: "Do you have gluten-free options?",
    answer: "Yes, we offer a variety of gluten-free dishes. Please ask our staff for recommendations.",
  },
  {
    question: "Is there parking available at your restaurant?",
    answer: "Yes, we provide free parking for all our customers.",
  },
  {
    question: "Do you offer discounts for large group bookings?",
    answer: "Yes, we offer special discounts for group bookings. Contact us for more details.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Page Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FF6868] mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-[#555555] text-lg">
          Have a question? We have got answers! If you do not see what you are
          looking for, feel free to contact us.
        </p>
      </header>

      {/* FAQ Section */}
      <section className="space-y-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            {/* FAQ Question */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-4 bg-white hover:bg-gray-50 flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-medium text-[#39DB4A]">
                {faq.question}
              </span>
              <span className="text-2xl text-[#5FE26C]">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* FAQ Answer */}
            {openIndex === index && (
              <div className="p-4 bg-gray-50 text-[#555555]">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQPage;
