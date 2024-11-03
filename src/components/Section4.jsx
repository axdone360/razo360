import React from "react";

const Section4 = () => {
  return (
    <div className="bg-orange-50 max-sm:bg-white py-16 flex justify-center ">
      <div className="max-w-5xl w-full flex flex-col max-sm:flex-col-reverse md:flex-row items-center bg-white rounded-lg shadow-lg p-8">
        {/* Left Section - Testimonial */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-lg font-semibold text-primary max-sm:font-semibold">
          Sop to Book appointments:
          </h2>
          <h1 className="text-3xl  mb-4"> From 0 to 7 in 2 hours</h1>
          <p className="text-primary mb-4">
            How we booked appointments from Dental clinics in dubai for marketing/ Software agencies  to pitch their services  ( Asjid Zaf founder & Ceo | razominer ) 
          </p>
     
          <div className="flex items-center mt-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQG66d4-rdcceQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724293812471?e=1736380800&v=beta&t=AfJ3IhUih8JewyxxCjdU3eCk-Hw4kkQmlwEWag4g9Go"
              alt="Trevor Larson"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold">Asjid Zaf</p>
              <p className="text-sm text-gray-500">Founder & CEO </p>
            </div>
          </div>
        </div>

        {/* Right Section - Video */}
        <div className="md:w-1/2  max-sm:w-full max-sm:mt-0 p-4 mt-8 md:mt-0">
          <div className="relative">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/uSwUwtwVIlY" // Updated to use the embed URL
              title="Video Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
