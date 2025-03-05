import React, { useState } from 'react';
import './Price.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Faq from './Faq';
import Customer from './Customer';
import Brand from './Brand';
import BreadCrumb from './BreadCrumb';

const Price = () => {
    const plans = [
        {
            name: "Growth",
            description: 'Send WhatsApp messages to thousands of users in one click to improve reach',
            monthlyPrice: "₹499 / month",
            annualPrice: "₹4999 / year",
            topic: 'Official WhatsApp API',
            features: [
                "Blue Tick Verification & Assistance",
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
                "Instagram DM Integration "
            ],
            bgColor: "#E8F5E9",
            textColor: "#2E7D32",
            buttonColor: "#128C7E",
        },
        {
            name: "Pro (Most Popular)",
            description: 'Set up automations, integrations and get powerful analytics to boost conversion',
            monthlyPrice: "₹2999/month",
            annualPrice: "₹29,999/year",
            topic: 'Everything in Growth +',
            features: [
                "Smart Broadcast Retarget for all events",
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
                "Instagram DM Automations "
            ],
            bgColor: "#FFF3E0",
            textColor: "#E67E22",
            buttonColor: "#D35400",
            badge: "Best Value",
        },
        {
            name: 'Business',
            description: "Unlock the full potential of WhatsApp with advanced workflows and expert support",
            monthlyPrice: "₹9999/ month",
            annualPrice: "₹99,999/year",
            topic: 'Everything in Pro +',
            features: [
                "Dedicated Customer Success Manager",
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
                "IP Whitelisting"
            ],
            bgColor: "#E3F2FD",
            textColor: "#1565C0",
            buttonColor: "#007BFF",
        },
    ];

    const [billingCycle, setBillingCycle] = useState('monthly');

    const handleBillingCycleChange = (cycle) => {
        setBillingCycle(cycle);
    };

    return (
        <>
            <Navbar />
            <BreadCrumb />
            <div className="pricing-section">
                <h2 className="pricing-title">Choose Your Plan</h2>
                <p className='pricing-para'>Get great features at a price that makes sense
                </p>

                <div className='pricing-btn'>
                    <button 
                        className={`pricing-annual ${billingCycle === 'annual' ? 'active' : ''}`} 
                        onClick={() => handleBillingCycleChange('annual')}
                    >
                        Annual
                    </button>
                    <button 
                        className={`pricing-monthly ${billingCycle === 'monthly' ? 'active' : ''}`} 
                        onClick={() => handleBillingCycleChange('monthly')}
                    >
                        Monthly
                    </button>
                </div>

                  <p className='plan-offer'>Get Upto ~25% Off With Annual Subscription</p>
                <div className="pricing-cards">
                    {plans.map((plan, index) => (
                        <div key={index} className="pricing-card" style={{ backgroundColor: plan.bgColor }}>
                            <div className='plan-card'>
                                {plan.badge && <span className="badge">{plan.badge}</span>}
                                <h3 className="plan-name" style={{ color: plan.textColor }}>{plan.name}</h3>
                                <p className='plan-description'>{plan.description}</p>
                                <p className="plan-price" style={{ color: plan.textColor }}>
                                    {billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice}
                                </p>
                                <p className='plan-topic'>{plan.topic}</p>
                                <ul className="plan-features">
                                    {plan.features.map((feature, i) => (
                                        <li key={i}><img src='/images/tick-icon.svg' alt='tick' />{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <button className="plan-button" style={{ backgroundColor: plan.buttonColor }}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
                {/* <p className='compare-plan'></p> */}
                <div className='plan-compare'>
                  <p className='plan-detail'>Compare Plans in Details</p>
                    <div className='plan-custom'>
                      <p className='price-custom'>Have custom needs? Let's explore how we can tailor <b>Shine Mitra to empower your business.</b></p>
                      <button className='custom-btn'>Talk to Sales</button>
                    </div>
                    <div className='plan-custom'>
                      <p className='price-custom'>Get attractive discounts for over <b>1 million
                      conversations per month.</b></p>
                      <button className='custom-btn'>Contact Us</button>
                    </div>
                </div>
                <div className='pricing-plan'>
                  <h2 className='all-price'>All pricing plans include:</h2>
                  <div className='pricing-point'>
                    <ul>
                      <li><img src='/images/circle-tick.jpg'/> Shared Team Inbox</li>
                      <li><img src='/images/circle-tick.jpg'/> Chatbot Builder</li>
                      <li><img src='/images/circle-tick.jpg'/> Contact Management</li>
                      <li><img src='/images/circle-tick.jpg'/> APIs</li>
                      <li><img src='/images/circle-tick.jpg'/> Broadcast Management</li>
                      <li><img src='/images/circle-tick.jpg'/> WhatsApp Catalog</li>
                      <li><img src='/images/circle-tick.jpg'/> Template Submission</li>
                    </ul>
                  </div>
                </div>
            </div>
            <Brand />
            <Faq />
            <Customer />
            <Footer />
        </>
    );
}

export default Price;
