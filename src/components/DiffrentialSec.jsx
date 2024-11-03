import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import d1 from '../assets/d1.svg';
import d2 from '../assets/d2.svg';
import d3 from '../assets/d3.svg';
import d4 from '../assets/d4.svg';
import d5 from '../assets/d5.svg';
import d6 from '../assets/d6.svg';

const DifferentiationSection = () => {
  const features = [
    { image: d2, title: "Retention Marketing", description: "We Provide Retention marketing Which focuses on keeping existing customers engaged, happy, and coming back for more. it's often more cost-effective than acquiring new customers. " },
    { image: d1, title: "Follow-up Strategies", description: " Follow-up strategies involve reaching out to a lead after an initial interaction to strengthen relationships and encourage business. By actively engaging these leads and addressing their needs, Ultimately, effective follow-up turns a leads to a potential prospects." },
    { image: d4, title: "Brand Development", description: "We Deliver Brand development for Your Business by creating and strengthening a brand's identity, image, and presence in the market. It involves defining the brand’s values, mission, and unique selling points, This helps build recognition and trust among customers" },
    { image: d3, title: "Outreach Campaigns", description: "We provide Fresh and strategic outreach campaigns focused on finding new and creative ways to connect with potential prospects.  Using different mode of reach outs like Email , Whatsapp , Instagram , Linked-in , reddit etc" },

    { image: d5, title: "Prospect Research:", description: "We offer a prospect research service that focuses on identifying high-potential leads. By gathering insights on interests, needs, and behavior, we help you tailor your outreach for better results. Our service ensures you connect with the right prospects in a meaningful way." },
    { image: d6, title: "No lock-in contracts", description: " We recommend working together for at least 6 months to see results, but we won’t force you to commit. Our clients come back month after month because they want to." },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">How is razo360° different?</h2>
        
        {/* Swiper Carousel for Mobile and Grid for Larger Screens */}
        <div className="m-8">
          <div className='md:hidden'>

          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="lg:hidden"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-md p-6 my-9 rounded-lg flex flex-col items-start">
                  <div className="flex flex-row items-center w-full">
                    <img src={feature.image} alt={feature.title} className="w-12 h-12 mr-4" />
                    <h3 className="text-xl font-semibold flex-grow text-center">{feature.title}</h3>
                  </div>
                  <p className="mt-4 text-left">{feature.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
            </div>

          {/* Grid for larger screens */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg flex flex-col items-start">
                <div className="flex flex-row items-center w-full">
                  <img src={feature.image} alt={feature.title} className="w-12 h-12 mr-4" />
                  <h3 className="text-xl font-semibold flex-grow text-center">{feature.title}</h3>
                </div>
                <p className="mt-4 text-left">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferentiationSection;
