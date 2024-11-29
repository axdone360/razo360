import React, { useState } from 'react';
import { Play, Calendar, Users, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { ProcessTimeline } from '../components/ui/timeline';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactModal from './ContactModal';
import logo1 from "../assets/1-2.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.png";
import logo6 from "../assets/1111c.png";


// CustomerLogos.jsx
function CustomerLogos() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6]; 
  
  return (
    <section className="bg-gray-50 py-16">
      <h3 className="text-center text-sm uppercase tracking-wider text-primary font-bold mb-8">
        CUSTOMERS WHO ARE SPEARHEADING USER CENTRIC LINK BUILDING WITH US
      </h3>
      <div className="container mx-auto px-4 flex justify-center items-center gap-12 flex-wrap">
        {logos.map((logo) => (
          <img 
            key={logo}
            src={logo}
            alt={logo}
            className="h-8 object-contain grayscale"
          />
        ))}
      </div>
    </section>
  );
}

// PillarsSection.jsx
function PillarsSection() {
  const pillars = [
    {
      title: "User centric link building",
      description: "User centric link building provides the highest quality of links you can get without sacrificing long term success. We build links that Google loves because they're focused on improving the user experience..."
    },
    {
      title: "In-Depth Competitor Analysis",
      description: "We use the strength of your competitors against them by analysing what they do well and applying their learnings to boost your backlink profile..."
    },
    {
      title: "Constant Feedback Loop",
      description: "Our link building approach is highly focused on high quality content to attract links from the most desired publications on the web..."
    }
  ];

  return (
    <section className="bg-primary py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          The 3 Pillars Of Our Link Building Approach
        </h2>
        <p className="text-center mb-12">
          Sustainably get more organic traffic & leads by adopting a new way of link building.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-white text-primary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-gray-700">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




const Services = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const services = [
    {
      icon: <Users size={32} />,
      title: "Leads Extraction",
      content: `We extract leads from various platforms across the web like Facebook, LinkedIn, Instagram, Google Maps, etc. 
  Leads include phone numbers, emails, and lots of other details. 
  We use automated solutions to complete this process efficiently.`,
    },
    {
      icon: <Mail size={32} />,
      title: "Refining the Leads",
      content: "Sorting phone numbers, emails, and social media links to create well-organized lead lists.",
    },
    {
      icon: <Phone size={32} />,
      title: "Outreach Strategy Development",
      content: "Developing personalized and tailored outreach strategies for maximum impact.",
    },
    {
      icon: <Calendar size={32} />,
      title: "Starting Outreach",
      content: `We focus on WhatsApp, email, and social media outreach.
  From the extracted leads, we conduct WhatsApp outreach using phone numbers, email marketing campaigns, and social media outreach. \n
  Social media platforms include Instagram, Facebook, Reddit, and LinkedIn.`,
    },
    {
      icon: <Calendar size={32} />,
      title: "Setting Appointments",
      content: `Scheduling appointments via Calendly after outreach efforts and creating one-on-one meetings with potential clients.`,
    },
    {
      icon: <Users size={32} />,
      title: "Meetings and Closures",
      content: `Understanding client requirements, creating a meeting roadmap, conducting live closings, and adding potential prospects to a bucket list.`,
    },
    {
      icon: <Users size={32} />,
      title: "Leads Engagement and Retention",
      content: `Constant follow-up campaigns for active leads.
  Retaining existing closed clients by offering new services or solutions using outstanding strategies.`,
    },
    {
      icon: <Phone size={32} />,
      title: "Warm-Up Calls and Relationship Development",
      content: `Calling active leads and scheduling meetings to either close deals or understand their current scenarios for better alignment.`,
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Expert Deal Closures",
      content: "Our expert closers join meetings and close deals on your behalf for maximum success.",
    },
    {
      icon: <ArrowRight size={32} />,
      title: "Recurring Clients",
      content: "We help you build a base of recurring clients for sustainable growth and long-term success.",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Quality Assurance",
      content: `We ensure the best experience by making each client recurring and achieving high-ticket sizes tailored to your service or solution.`,
    },
  ];
  

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-16 ">
        <div className="w-full mt-20   ">
        <section className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center gap-2 mb-6">
        <img src="https://randomuser.me/api/portraits/men/1.jpg" className="w-8 h-8 rounded-full" alt="Random Avatar" />
<img src="https://randomuser.me/api/portraits/women/2.jpg" className="w-8 h-8 rounded-full" alt="Random Avatar" />

          <span className="text-gray-600">100+ Happy Customers</span>
        </div>
        
        <h1 className="text-5xl font-bold mb-8">
          <span className="text-primary">We Are A </span>
          <span className="text-amber-400">Personalised Outreach</span>
        </h1>
      
        <h2 className="text-4xl font-semibold mb-8">
       {/*    <span className="text-amber-400">For B2B Companies </span> */}
          <span className="text-primary">and Closing Solution for your Business</span>
        </h2>

        <p className="max-w-3xl text-xl font-bold mx-auto text-gray-800 mb-8">
        We help B2B businesses from Leads extraction to appointment setting and closing Potential prospects for them , we make sure that they are recurring clients for them
        </p>

        <button className="bg-amber-400 text-black px-8 py-3 rounded-md font-medium hover:bg-amber-500 transition-colors">
          Request Pricing
        </button>
      </section>
<div className='w-full '>
  
      <CustomerLogos />

      <PillarsSection />
</div>
     
           <ProcessTimeline data={services} /> 

    
          <section className="py-24 mt-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-20">
          {/* Who We Are */}
          <div>
            <h2 className="text-4xl font-bold mb-8">Who We Are</h2>
            <div className="prose prose-lg">
              <p className="text-gray-700">
                Razo360 is a bespoke style link building agency. We pride ourselves on taking a completely manual,
                customized approach with every one of our clients instead of working off a list like many other link
                building services.
              </p>
              <p className="text-gray-700">
                Every client we take on gets a dedicated project manager who does fresh outreach for every project we
                take on. That means we don't work off of lists; in fact, we think{' '}
                <span className="font-semibold">link marketplaces represent everything that is wrong with the SEO industry</span>.
              </p>
              <p className="text-gray-700">
                Your project deserves to have a fresh, customized campaign. We get you links that nobody else can get
                with our user centric link building approach that aligns with Google's own quality guidelines.
              </p>
            </div>
          </div>

          {/* Who We Are Not */}
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Who We Are <span className="italic text-yellow-500">Not</span>
            </h2>
            <div className="prose prose-lg">
              <p className="text-gray-700">
                We believe traditional <span className="font-semibold">link building is broken</span>. Companies who build links off of a list and allow you to pick
                the links and anchor text you want are playing with fire.
              </p>
              <p className="text-gray-700">
                Anyone with $100 and a site can get links on these sites; which means there is no editorial process and no
                quality standards. Google can easily spot these types of links, because most of the time these sites exist
                just to sell links.
              </p>
              <p className="text-gray-700">
                These types of links are ineffective and worst case can get your site penalized. We are not this type of
                link building service.
              </p>
            </div>
          </div>

          {/* How We Work */}
          <div>
            <h2 className="text-4xl font-bold mb-8">How We Work</h2>
            <div className="prose prose-lg">
              <p className="text-gray-700">
                <span className="font-semibold">It's important to note that Razo360 strictly focuses on links.</span>{' '}
                We don't do content, and we don't do technical SEO. We work with clients who already have a content strategy
                in place and sound technical/internal linking infrastructure. We provide the horsepower.
              </p>
              <p className="text-gray-700">
                Every client we onboard gets a dedicated project manager. Their job is to comb your site for linkable
                assets, perform competitor analysis and build a monthly outreach list of editors, contributors and
                journalists that we can build a relationship with.
              </p>
              <p className="text-gray-700">
                We only go after links that pass through an editorial process.{' '}
                <span className="font-semibold">We believe these are links that stand the test of time.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <Footer />
    </>
  );
};

export default Services;

