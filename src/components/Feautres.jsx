import React from 'react';
import feature1 from '../assets/feature1.svg';
import feature2 from '../assets/feature2.svg';
import feature3 from '../assets/feature3.svg';

function Features() {
  const features = [
    {
      title: "Brand Development",
      description: "Our Brand Development service synergizes research, creativity, and strategy. Crafting compelling brand identities, we merge distinct market insights with unique designs, ensuring your brand stands out. From logo creation to brand guidelines, we tailor solutions for a memorable & durable brand presence.",
      image: feature1
    },
    {
      title: "Communication & Campaign Strategy",
      description: "In our Communication & Campaign Strategy service, we blend creativity with analytics. Crafting impactful campaigns, we merge strategic messaging with data-driven insights, ensuring your message resonates. From content creation to campaign optimization, we tailor solutions for effective communication and engagement.",
      image: feature2
    },
    {
      title: "Website Restructure to drive more sales and Appointments",
      description: "We specialize in Converting your website in to a page that can drive more Organic sales and appointments using our Visible Contents , Human psychological algorithms and color pallets according to your niche You don't want to build a website from scratch  (Terms and conditions applied)",
      image: feature3
    }
  ];
  
  return (
    <div className="py-16 max-sm:py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col max-sm:flex-col-reverse md:flex-row items-center justify-between mb-16 max-sm:mb-7 last:mb-0">
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:order-2'}`}>
              <h1 className="text-3xl max-sm:text-xl font-bold mb-4">{feature.title}</h1>
              <p className="text-lg max-sm:text-sm">{feature.description}</p>
            </div>
            <div className={`md:w-1/2 max-sm:mb-6 mt-8 md:mt-0 ${index % 2 === 0 ? '' : 'md:order-1'}`}>
              <img src={feature.image} alt={feature.title} className="rounded-lg  h-auto" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
