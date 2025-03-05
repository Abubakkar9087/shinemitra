import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './Faq.css'
  
  const Faq = () =>  {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    

    const faqs = [
        {
          question: "What is WhatsApp Marketing?",
          answer:
            "WhatsApp Marketing helps businesses connect with customers using automated messaging, promotions, and customer support via WhatsApp Business API.",
        },
        {
          question: "Is this service compliant with WhatsApp policies?",
          answer:
            "Yes, our service is fully compliant with WhatsApp's official policies. We use WhatsApp Business API to ensure secure and authorized messaging. We strictly follow WhatsApp's guidelines to prevent spam and unauthorized messaging.",
        },
        {
          question: "Can I schedule messages in advance?",
          answer:
            "Yes! Our platform allows you to schedule messages for a specific date and time. You can plan your campaigns in advance, ensuring that your customers receive messages at the perfect moment.",
        },
        {
          question: "Do you offer customer support?",
          answer:
            "Absolutely! We provide 24/7 customer support via WhatsApp, email, and live chat. Whether you need help with setup, troubleshooting, or best practices, our team is always ready to assist you.",
        },
      ];
	return (
    <div className="home-section-5">
    <h1 className="home-section-5-heading">FAQs</h1>
    <p className="home-section-5-para">Remove doubts & boost conversions.</p>
    <div className="home-section-5-cards">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="home-section-5-card"
          onClick={() => toggleAnswer(index)}
        >
          <div className="home-section-5-question-wrapper">
            <p className="home-section-5-question">{faq.question}</p>
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openIndex === index && <p className="home-section-5-ans">{faq.answer}</p>}
        </div>
      ))}
    </div>
  </div>
	);
  }
  
  export default Faq;
  