import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import logo from '../assets/pro.svg'

const TestimonialsSection = () => {
  const testimonials = {
    seoExperts: [
      {
        id: 1,
        text: "Razo360 is a great example of an agency that understands modern link building and digital strategies.",
        name: "Amit Choudhary",
        role: "Business Owner",
        avatar: logo// Replace with a reliable URL
      },
      {
        id: 2,
        text: "I was recently challenged by the Razo360 team to review their approach to link building. They follow the best practices!",
        name: "Rajiv Mehta",
        role: "Business Owner",
        avatar: logo // Replace with a reliable URL
      },
      {
        id: 3,
        text: "These professionals are the masters when it comes to user-centric link building and SEO innovation.",
        name: "Suresh Naidu",
        role: "Business Owner",
        avatar: logo // Replace with a reliable URL
      }
    ],
    customers: [
      {
        id: 1,
        text: "Razo360 delivers high-quality backlinks and an easy, hands-off experience. Plus, they ensure our site stays safe from any Google penalties.",
        name: "Ravi Shekhar",
        role: "Freelancer",
        avatar: logo // Replace with a reliable URL
      },
      {
        id: 2,
        text: "Razo360 crafted a phenomenal link-building strategy that helped us land on high-profile sites like HubSpot. Our traffic and rankings have improved significantly!",
        name: "Ankit Patel",
        role: "Freelancer",
        avatar: logo // Replace with a reliable URL
      },
      {
        id: 3,
        text: "Working with Razo360 was a game-changer. Our domain authority skyrocketed within a few months, and they were always flexible to our specific needs.",
        name: "Vikram Singh",
        role: "Freelancer",
        avatar: logo // Replace with a reliable URL
      }
    ]
  };
  

  const [activeTab, setActiveTab] = useState('seoExperts');
  const currentTestimonials = testimonials[activeTab];

  return (
    <div className="flex justify-center px-4 max-sm:px-0 md:px-16 lg:px-64">
      <div className="bg-secondry max-sm:bg-primary w-full text-primary rounded-b-lg flex flex-col items-center justify-center">
        <div className="w-full h-[207px] mx-auto bg-primary flex flex-col rounded-t-lg">
          {/* Header */}
          <div className="flex flex-col justify-center items-center p-12 gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
              What others have to say about razo360°
            </h2>
            <div className="flex max-sm:gap-4 gap-4" >
              <button
                onClick={() => setActiveTab('seoExperts')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'seoExperts' ? 'bg-yellow-500 text-primary' : 'bg-contactSecondry text-white'
                }`}
              >
                Business Owner
              </button>
              <button
                onClick={() => setActiveTab('customers')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'customers' ? 'bg-yellow-500 text-primary' : 'bg-contactSecondry text-white'
                }`}
              >
                Freelancer
              </button>
            </div>
          </div>
        </div>

        {/* Swiper for testimonials */}
        <div className="relative min-h-[400px] w-full  sm:w-3/4 flex flex-col justify-center items-center gap-12 rounded-b-lg">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="w-full"
          >
            {currentTestimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <div className="text-center px-2 mx-9 my-14 max-sm:bg-secondry max-sm:w-4/5 max-sm:rounded-md max-sm:p-3 mt-16">
                  <p className="text-lg max-sm:text-base mb-8">"{testimonial.text}"</p>
                  <div className="flex items-center justify-center gap-4 mt-16 max-sm:mt-8">
                    <img
                      src={testimonial.avatar}
                     
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="text-left">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-primary">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
