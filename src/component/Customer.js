import React from 'react';
import './Customer.css'  

  const Customer = () =>  {
	return (
        <div className='section-6-customers'>
        <h2 className='customer-heading'>Over 5,000 customers</h2>
        <p className='customer-para'>What some of our 5,000+ customers across 100+ countries think of Shine Mitra.</p>
        <div className='section-6-customer'>
          <div className='customer-card'>
            <h3 className='customer-card-heading'>“Highly customisable and friendly”</h3>
            <p className='customer-card-para'>We work in the hotel business, so keeping in touch with
               people travelling is very easy using WhatsApp.<span>Shine Mitra</span> help us to have multiple people 
               answering guests. It also allows us to automate basic replies such as the address.
            </p>
            <span className='customer-card-auth'>
              <h4 className='auth-heading'>- Eduardo Zeballos</h4>
              <p className='auth-para'>Marketing Manager, Hotel Rosario</p>
            </span>
          </div>
          <div className='customer-card'>
            <h3 className='customer-card-heading'>“Our Star Tool”</h3>
            <p className='customer-card-para'><span>Shine Mitra</span> is essential to our cloud services business.
               Its ease of use helps us stay connected, offer personalised support, and address
                customer concerns quickly. With multiple agents working simultaneously, we ensure
                 efficient service and excellent after-sales support daily.</p>
            <span className='customer-card-auth'>
              <h4 className='auth-heading'>- Sidney Elena J</h4>
              <p className='auth-para'>Cloud Services Provider, DynamiaERP</p>
            </span>
          </div>
        </div>
      </div>
	);
  }
  
  export default Customer;
  