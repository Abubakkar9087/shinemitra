import React, { useState } from 'react';
import { FaRobot, FaChartLine, FaUsers, FaPlug } from "react-icons/fa";

import './HomeSection.css';
import Faq from './Faq';
import Customer from './Customer';

const HomeSection = () => {


  const features = [
    {
      title: "Automated Messaging",
      description: "Engage customers with AI-driven auto-replies & scheduled messages.",
      icon: <FaRobot />,
      bgColor: "#F0FFF4",
      textColor: "#128C7E",
      iconColor: "#25D366",
    },
    {
      title: "Analytics & Reports",
      description: "Track customer engagement, clicks, and message success rates.",
      icon: <FaChartLine />,
      bgColor: "#EAF4FC",
      textColor: "#007BFF",
      iconColor: "#0056b3",
    },
    {
      title: "Bulk Messaging",
      description: "Send promotional offers to thousands of customers in one click.",
      icon: <FaUsers />,
      bgColor: "#FFF3E0",
      textColor: "#E67E22",
      iconColor: "#D35400",
    },
    {
      title: "Integration",
      description: "Connect WhatsApp with CRM, eCommerce platforms & other tools.",
      icon: <FaPlug />,
      bgColor: "#FDEDEC",
      textColor: "#C0392B",
      iconColor: "#A93226",
    },
  ];

  const steps = [
    {
      title: "Sign Up",
      description: "Create your free account in just a few clicks.",
      bgColor: "#FFEBEE",
      textColor: "#C62828",
    },
    {
      title: "Connect WhatsApp",
      description: "Securely link your WhatsApp Business account.",
      bgColor: "#E3F2FD",
      textColor: "#1565C0",
    },
    {
      title: "Start Messaging",
      description: "Send and schedule messages instantly.",
      bgColor: "#E8F5E9",
      textColor: "#2E7D32",
    },
  ];

  const plans = [
    {
      name: "Growth",
      description: 'Send WhatsApp messages to thousands of users in one click to improve reach',
      price: "₹499 / month",
      topic: 'Official WhatsApp API',
      features: ["Blue Tick Verification & Assistance",
        "Broadcast multi-media messages",
        "15K Marketing Broadcasts per month",
        "Manual message routing",
        "Shared Team Inbox for collaboration",
        "Basic choice-based Chatbots",
        "1,000 Free Chatbot Sessions/month",
        "Basic campaign & inbox analytics",
        "WhatsApp Catalog",
        "Shopify automated messages$",
        "2 select Commerce/CRM integrations",
        "Email Support in English & Portuguese",
        "Instagram DM Integration "],
      bgColor: "#E8F5E9",
      textColor: "#2E7D32",
      buttonColor: "#128C7E",
    },
    {
      name: "Pro (Most Popular)",
      description: 'Set up automations, integrations and get powerful analytics to boost conversion',
      price: "₹2999/month",
      topic: 'Everything in Growth +',
      features: ["Smart Broadcast Retarget for all events",
        "Carousel templates to boost conversions",
        "45K Marketing Broadcasts per month",
        "Team/Operator based message routing",
        "Click tracking for URLs and analytics",
        "Whatsapp Lead Generation Forms",
        "CTWA automations and priority team inbox",
        "2,000 Free Chatbot Sessions/month",
        "Advanced campaign & inbox analytics",
        "250 Free AI KnowBot Responses/month",
        "WhatsApp Drip Campaigns",
        "5 select integrations including Hubspot and Yotpo",
        "Limited Webhooks and API access",
        "Shopify: Sync key customer & order info$",
        "Shopify: Support for 3rd party checkout pages like Shopflo, Gokwik$",
        "WhatsApp Pay checkout in Catalog with",
        "Razorpay and PayU",
        "Detailed team performance report",
        "Instagram DM Automations "],
      bgColor: "#FFF3E0",
      textColor: "#E67E22",
      buttonColor: "#D35400",
      badge: "Best Value",
    },
    {
      name: 'Business',
      description: "Unlock the full potential of WhatsApp with advanced workflows and expert support",
      price: "₹9999/ month",
      topic: 'Everything in Pro +',
      features: ["Dedicated Customer Success Manager",
        "Round-Robin chat assignment",
        "150K Marketing Broadcasts per month",
        "Phone number Masking for high privacy",
        "Measure Broadcast ROI",
        "Auto-delete chat for org compliance",
        "CTWA retargeting and conversion funnel for better conversion",
        "5,000 Free Chatbot Sessions/month",
        "Upto 6% discount on conversation pricing",
        "1000 Free AI KnowBot Responses/month",
        "Advanced granual level roles",
        "Unlimited integrations including Salesforce, Twilio",
        "Extensive Webhook & API access",
        "Free Custom Domain",
        "Whatsapp Pay APIs",
        "24x7 Priority support",
        "IP Whitelisting"],
      bgColor: "#E3F2FD",
      textColor: "#1565C0",
      buttonColor: "#007BFF",
    },
  ];

  


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

      {/* --------------------------------------------------section 1------------------------------------------------------- */}
      {/* <div className='home-section-1'>
        <h1 className='home-section-1-heading'>Why Choose Us?</h1>
        <p className='home-section-1-para'>Showcase the key benefits of using your WhatsApp marketing service.</p>
        <div className='home-section-1-cards'>
          <div className='home-section-1-card automated'>
            <img src='/images/message-icon.svg' alt='error' className='HS1-card-icon' />
            <h3 className='HS1-card-heading'>Automated Messaging</h3>
            <p className='HS1-card-para'>Engage customers with AI-driven auto-replies & scheduled messages.</p>
          </div>
          <div className='home-section-1-card analytics'>
            <img src='/images/analyze-icon.svg' alt='error' className='HS1-card-icon' />
            <h3 className='HS1-card-heading'>Analytics & Reports</h3>
            <p className='HS1-card-para'>Track customer engagement, clicks, and message success rates.</p>
          </div>
          <div className='home-section-1-card bulk'>
            <img src='/images/message-icon.svg' alt='error' className='HS1-card-icon' />
            <h3 className='HS1-card-heading'>Bulk Messaging</h3>
            <p className='HS1-card-para'>Send promotional offers to thousands of customers in one click.</p>
          </div>
          <div className='home-section-1-card integration'>
            <img src='/images/integration-icon.svg' alt='error' className='HS1-card-icon' />
            <h3 className='HS1-card-heading'>Integration</h3>
            <p className='HS1-card-para'>Connect WhatsApp with CRM, eCommerce platforms & other tools.</p>
          </div>
        </div>
      </div> */}

      <div className="features-section">
        <h2 className="features-title">Why Choose Us?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ backgroundColor: feature.bgColor, color: feature.textColor }}
            >
              <div className="feature-icon" style={{ color: feature.iconColor }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>


      {/* -----------------------------------------------------section 2-------------------------------------------------------- */}
      {/* <div className='home-section-2'>
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

      </div> */}

      <div className="how-it-works-section">
        <h2 className="how-it-works-title">How It Works</h2>
        <div className="how-it-works-steps">
          {steps.map((step, index) => (
            <div key={index} className="how-it-works-step">
              <div
                className="step-circle"
                style={{ backgroundColor: step.bgColor, color: step.textColor }}
              >
                {index + 1}
              </div>
              <h3 className="step-title" style={{ color: step.textColor }}>
                {step.title}
              </h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="arrow">→</div>}
            </div>
          ))}
        </div>
      </div>


      {/* -----------------------------------------------------section 3-------------------------------------------------------- */}
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


      {/* -------------------------------------------pricing plan------------------------------------------- */}
      {/* <div className='home-section-4'>
        <h1 className='home-section-4-heading'>Pricing Plans</h1>
        <p className='home-section-4-para'>Build credibility by showing real users' feedback.</p>
        <div className='pricing-cards'>
          <div className='pricing-card basic'>
            <p className='pricing-plan'>Basic</p>
            <h3 className='pricing-features'>message</h3>
            <button className='pricing-getstart'>Get Start</button>

          </div>
          <div className='pricing-card pro'>
            <p className='pricing-plan'>Pro</p>
            <h3 className='pricing-features'>message</h3>
            <button className='pricing-getstart'>Get Start</button>

          </div>
          <div className='pricing-card customize'>
            <p className='pricing-plan'>Customize Plan</p>
            <h3 className='pricing-features'>message</h3>
            <button className='pricing-getstart'>Get Start</button>


          </div>
        </div>
      </div> */}



      <div className="pricing-section">
        <h2 className="pricing-title">Choose Your Plan</h2>
        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div key={index} className="pricing-card" style={{ backgroundColor: plan.bgColor }}>
              <div className='plan-card'>
                {plan.badge && <span className="badge">{plan.badge}</span>}
                <h3 className="plan-name" style={{ color: plan.textColor }}>{plan.name}</h3>
                <p className='plan-description'>{plan.description}</p>
                <p className="plan-price" style={{ color: plan.textColor }}>{plan.price}</p>
                <p className='plan-topic'>{plan.topic}</p>

                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}><img src='/images/tick-icon.svg' alt='error' />{feature}</li>
                  ))}
                </ul>
              </div>
              <button className="plan-button" style={{ backgroundColor: plan.buttonColor }}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

        <Faq />
        <Customer />
      {/* -------------------------------------------section 5------------------------------------------------ */}
      
      <div className="section-6">
        <h2 className="cta-title">Ready to Boost Your Business with WhatsApp Marketing?</h2>
        <p className="cta-subtitle">Sign Up Now & Get 7 Days Free!</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
}

export default HomeSection;
