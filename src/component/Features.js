import React from 'react';
import './Features.css'
import Navbar from './Navbar';
import Footer from './Footer';
import BreadCrumb from './BreadCrumb';

const Features = () => {

    const FeatureCard = [
        {
            id: 1,
            icon: '/images/signup-icon.svg',
            heading: 'Embedded Signup',
            para: 'Onboard customers with ease with our integrated Embedded Signup system.'
        },
        {
            id: 2,
            icon: '/images/management.svg',
            heading: 'Template Management',
            para: 'Handle templates directly within the application without requiring a visit to Meta for creating templates.'
        },
        {
            id: 3,
            icon: '/images/phone-icon.svg',
            heading: 'Multiple Phone Numbers',
            para: 'Supports multiple phone numbers for same WhatsApp Business Account'
        },
        {
            id: 4,
            icon: '/images/whatsapp-icon.svg',
            heading: 'WhatsApp Chat ',
            para: 'Shine Mitra chat feature replicates the native WhatsApp interface, guaranteeing users a seamless and familiar messaging experience.'
        },
        {
            id: 5,
            icon: '/images/robot-icon.svg',
            heading: 'Bot Replies/ Chat Bot',
            para: 'Automate responses and engage customers 24/7 with intelligent bot replies through'
        },
        {
            id: 6,
            icon: '/images/plug-icon.svg',
            heading: 'APIs to connect with other services',
            para: 'API’s enable seamless connection between different services, allowing data sharing and functionality integration.'
        },
        {
            id: 7,
            icon: '/images/address-icon.svg',
            heading: 'Manage Contacts',
            para: 'Effortlessly import and export contacts using XLSX format for easy contacts transfer along with Add/Edit functionality on interface.'
        },
        {
            id: 8,
            icon: '/images/rotate-icon.svg',
            heading: 'Realtime Updates',
            para: 'Realtime message and campaign status updates to see your campaign or message performance.'
        },
        {
            id: 9,
            icon: '/images/dashboard-icon.svg',
            heading: 'Dashboard',
            para: 'To provide with instant visibility into the performance and status of their marketing campaigns.'
        },
        {
            id: 10,
            icon: '/images/team-icon.svg',
            heading: 'Team Members/Agents',
            para: 'Delegate work by creating users with various permissions.'
        },
        {
            id: 11,
            icon: '/images/interaction-icon.svg',
            heading: 'Interactive/Button Messages for bot Reply',
            para: 'Shine Mitra Advanced interactive bots now provide smarter, more engaging replies, supporting images, documents, videos, audios and interactive buttons for enhanced user interaction.'
        },
        {
            id: 12,
            icon: '/images/custom-icon.svg',
            heading: 'Custom Fields',
            para: 'Personalize your messages with user base information and custom fields tailored to your audience on Shine Mitra'
        }
    ];
    return (
        <>
            <Navbar />
            <BreadCrumb />
            <div className='features-container'>
                <div className='features-child-1'>
                    <h2 className='features-heading'>Tech Empowerment</h2>
                    <p className='features-para'>Features that would make your life easier with WhatsApp Marketing</p>
                </div>
                <div className='features-child-2'>
                    {FeatureCard.map((feature) => (

                        <div className='features-child-card' key={feature.id}>
                            <img src={feature.icon} alt='error' />
                            <h2>{feature.heading}</h2>
                            <p>{feature.para}</p>
                        </div>
                    ))}
                </div>
                <div className='feature-connect'>
                    <h3>Make Connecting Easy with <span>Shine Mitra</span></h3>
                    <p>Grow Your Brand, Delight Your <span>Customers!</span></p>
                </div>
                <div className='campaign-container'>
                    <div className='campaign-section'>
                        <div className='campaign-img'>
                            <img src='/images/campaign.png' alt='error' />
                        </div>
                        <div className='campaign-content'>
                            <h3>Campaign Management</h3>
                            <span>Streamline Campaign Management: Create, Schedule, and Reach Instantly!</span>
                            <p>Effortlessly manage your campaigns with our intuitive campaign management feature. Create or schedule campaigns instantly for all contacts or specific groups, allowing for immediate reach or strategic timing. Maximize the impact of your marketing efforts and take control of your messaging with ease.</p>
                        </div>
                    </div>
                    <div className='campaign-section'>
                        <div className='campaign-content'>
                            <h3>Integrated WhatsApp Chat</h3>
                            <span>Enhance Customer Engagement and Support</span>
                            <p>The Integrated WhatsApp Chat feature in Shine Mitra provides a seamless and familiar messaging experience by faithfully replicating the native WhatsApp interface. Users can navigate effortlessly, leveraging their existing familiarity with WhatsApp's layout and functions. This consistency enhances user comfort and efficiency, facilitating smooth communication.</p>
                        </div>
                        <div className='campaign-img'>
                            <img src='/images/campaign-1.png' alt='error' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Features;
