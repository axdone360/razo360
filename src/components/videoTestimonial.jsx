import React from 'react';

const VideoTestimonialSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <h3>See how we work</h3>
          <p>"If I was going to hire an agency to build links, dofollow.com would be my first port of call."</p>
          <p>- Mark Webster, Founder | AuthorityHacker.com</p>
        </div>
        <div className="md:w-1/2 p-4">
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/samplevideo"
            title="Video Testimonial"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonialSection;
