import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
	return (
		<div className="hero-container">
			<div className='hero-section'>
				<div className='hero-child'>
					<h1 className='hero-heading'>
						Engage Your Customers on WhatsApp Like Never Before
					</h1>
					{/* <h2 className='hero-brandName'>Shine Mitra</h2> */}
					<p className='hero-para'>Unlock the full potential of customer engagement with Shine Mitra your comprehensive WhatsApp Marketing Platform.</p>
					<div className='hero-btns'>
						<button className='hero-button'>Get Started</button>
						<button className='hero-button'>Signup Now</button>
					</div>
				</div>
				{/* <div className='hero-child'></div> */}
			</div>
		</div>
	);
}

export default HeroSection;
