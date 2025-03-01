import React from 'react';
import './HomeSection.css';

const HomeSection = () => {

  const cards = [
    { id: 1, images: '/images/brand-1.webp', username: '– John Doe, CEO', content: 'This tool helped us increase customer engagement by 70%! Super easy to use!' },
    { id: 2, images: '/images/brand-2.webp', username: '- Sarah Lee, Marketing Head', content: 'We are reached 10K+ customers within days Highly recommended!' },
    { id: 3, images: '/images/brand-3.webp', username: '- David Kim, Business Owner', content: 'Automated replies have saved us hours of work. Amazing service! ' },
    { id: 4, images: '/images/brand-4.webp', username: '– John Doe, CEO', content: 'This tool helped us increase customer engagement by 70%! Super easy to use!' },
    { id: 5, images: '/images/brand-5.webp', username: '- Sarah Lee, Marketing Head', content: 'This tool helped us increase customer engagement by 70%! Super easy to use!' },
    { id: 6, images: '/images/brand-6.webp', username: '- David Kim, Business Owner', content: 'This tool helped us increase customer engagement by 70%! Super easy to use!' },
    { id: 7, images: '/images/brand-7.webp', username: '– John Doe, CEO', content: 'This tool helped us increase customer engagement by 70%! Super easy to use!' },
    { id: 8, images: '/images/brand-8.webp', username: '- Sarah Lee, Marketing Head', content: 'This tool helped us increase customer engagement by 70%! Super easy to use!' },
    { id: 9, images: '/images/brand-9.webp', username: '- David Kim, Business Owner', content: 'This tool helped us increase customer engagement by 70%! Super easy to use!' },
    { id: 10, images: '/images/brand-10.webp', username: '– John Doe, CEO', content: 'This tool helped us increase customer engagement by 70%! Super easy to use!' },
    { id: 11, images: '/images/brand-11.webp', username: '- Sarah Lee, Marketing Head', content: 'This tool helped us increase customer engagement by 70%! Super easy to use!' },
    { id: 13, images: '/images/brand-13.webp', username: '- David Kim, Business Owner', content: 'This tool helped us increase customer engagement by 70%! Super easy to use!' },
    { id: 14, images: '/images/brand-14.webp', username: '– John Doe, CEO', content: 'This tool helped us increase customer engagement by 70%! Super easy to use!' },
    { id: 15, images: '/images/brand-15.webp', username: '- Sarah Lee, Marketing Head', content: 'This tool helped us increase customer engagement by 70%! Super easy to use!' },
    { id: 16, images: '/images/brand-16.webp', username: '- David Kim, Business Owner', content: 'This tool helped us increase customer engagement by 70%! Super easy to use!' },
  ];

  return (
    <div className='home-container'>
      <div className='home-section-1'>
        <h1 className='home-section-1-heading'>Why Choose Us?</h1>
        <p className='home-section-1-para'>Showcase the key benefits of using your WhatsApp marketing service.</p>
        <div className='home-section-1-cards'>
          <div className='home-section-1-card'>
            <img src='/images/message-icon.svg' alt='error' className='HS1-card-icon' />
            <h3 className='HS1-card-heading'>Automated Messaging</h3>
            <p className='HS1-card-para'>Engage customers with AI-driven auto-replies & scheduled messages.</p>
          </div>
          <div className='home-section-1-card'>
            <img src='/images/analyze-icon.svg' alt='error' className='HS1-card-icon' />
            <h3 className='HS1-card-heading'>Analytics & Reports</h3>
            <p className='HS1-card-para'>Track customer engagement, clicks, and message success rates.</p>
          </div>
          <div className='home-section-1-card'>
            <img src='/images/message-icon.svg' alt='error' className='HS1-card-icon' />
            <h3 className='HS1-card-heading'>Bulk Messaging</h3>
            <p className='HS1-card-para'>Send promotional offers to thousands of customers in one click.</p>
          </div>
          <div className='home-section-1-card'>
            <img src='/images/integration-icon.svg' alt='error' className='HS1-card-icon' />
            <h3 className='HS1-card-heading'>Integration</h3>
            <p className='HS1-card-para'>Connect WhatsApp with CRM, eCommerce platforms & other tools.</p>
          </div>
        </div>
      </div>
      <div className='home-section-2'>
        <h1 className='home-section-2-heading'>How It Works</h1>
        <p className='home-section-2-para'>Engage your customers effectively with our WhatsApp marketing tools.</p>
        <div className='home-section-2-cards'>
          <div className='home-section-2-card'>
            <div className='hs2-details card-step-1'>
              <h3 className='hs2-step'>01</h3>
              <h2 className='hs2-heading'>Signup</h2>
              <p className='hs2-para'>Create your free account in just a few clicks.</p>
            </div>
          </div>
          <div className='home-section-2-card step-2'>
            <div className='hs2-details card-step-2'>
              <h3 className='hs2-step '>02</h3>
              <h2 className='hs2-heading'>Connect WhatsApp</h2>
              <p className='hs2-para'>Securely link your WhatsApp Business number.</p>
            </div>
          </div>
          <div className='home-section-2-card'>
            <div className='hs2-details card-step-3'>
              <h3 className='hs2-step'>03</h3>
              <h2 className='hs2-heading'>Start Messaging</h2>
              <p className='hs2-para'>Automate and schedule bulk messages instantly.</p>
            </div>
          </div>
        </div>

      </div>
      <div className='home-section-3'>
        <h1 className='home-section-3-heading'>Success Story</h1>
        <p className='home-section-3-para'>Build credibility by showing real users' feedback.</p>

        <div className='home-section-3-cards'>
          <div className="home-section-slider">
            <div className="home-slider">
              {/* Duplicate cards multiple times for seamless effect */}
              {[...cards, ...cards, ...cards, ...cards, ...cards, ...cards].map((cards, index) => (
                <div key={index} className="success-card">
                  <p className='user-rating'>★★★★★</p>
                  <p className='user-content'>{cards.content}</p>
                  <h3 className='user-name'>{cards.username}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='home-section-4'>
      <h1 className='home-section-4-heading'>Pricing Plans</h1>
      <p className='home-section-4-para'>Build credibility by showing real users' feedback.</p>
      <div className='pricing-cards'>
        <div className='pricing-card'>
          <p className='pricing-plan'>Basic</p>
          <h3 className='pricing-features'>message</h3>
          
        </div>
        <div className='pricing-card'>
          <p className='pricing-plan'>Basic</p>
          <h3 className='pricing-features'>message</h3>
          
        </div>
        <div className='pricing-card'>
          <p className='pricing-plan'>Basic</p>
          <h3 className='pricing-features'>message</h3>
          
        </div>
      </div>
      </div>
      <div className='home-section-5'></div>

    </div>
  );
}

export default HomeSection;
