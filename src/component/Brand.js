import React from "react";
import "./Brand.css"; // Import CSS file for styles

const cards = [
  { id: 1, images: '/images/brand-1.webp' },
  { id: 2, images: '/images/brand-2.webp' },
  { id: 3, images: '/images/brand-3.webp' },
  { id: 4, images: '/images/brand-4.webp' },
  { id: 5, images: '/images/brand-5.webp' },
  { id: 6, images: '/images/brand-6.webp' },
  { id: 7, images: '/images/brand-7.webp' },
  { id: 8, images: '/images/brand-8.webp' },
  { id: 9, images: '/images/brand-9.webp' },
  { id: 10, images: '/images/brand-10.webp' },
  { id: 11, images: '/images/brand-11.webp' },
  { id: 13, images: '/images/brand-13.webp' },
  { id: 14, images: '/images/brand-14.webp' },
  { id: 15, images: '/images/brand-15.webp' },
  { id: 16, images: '/images/brand-16.webp' },
];

const Brand = () => {
  return (
    <div className="payment-slider">
      <div className="slider">
        {/* Duplicate cards multiple times for seamless effect */}
        {[...cards, ...cards, ...cards, ...cards, ...cards, ...cards].map((card, index) => (
          <div key={index} className="payment-card">
            <img src={card.images} alt={`Card ${card.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
