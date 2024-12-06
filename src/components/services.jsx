"use client"

import React, { useState } from "react"
import { Play, Calendar, Users, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react'
import { ProcessTimeline } from "../components/ui/timeline"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ContactModal from "./ContactModal"
import logo1 from "../assets/1-2.png"
import logo2 from "../assets/2.png"
import logo3 from "../assets/3.png"
import logo4 from "../assets/4.png"
import logo5 from "../assets/5.png"
import logo6 from "../assets/1111c.png"
import SeconNav from "./navbar2"

function CustomerLogos() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6]

  return (
    <section className="bg-gray-50 py-8 sm:py-16">
      <h3 className="text-center text-xs sm:text-sm md:text-md uppercase tracking-wider text-primary font-bold mb-4 sm:mb-8 px-4">
        CUSTOMERS WHO ARE SPEARHEADING USER CENTRIC LINK BUILDING WITH US
      </h3>
      <div className="container mx-auto px-4 flex justify-center items-center gap-6 sm:gap-12 flex-wrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Customer logo ${index + 1}`}
            className="h-6 sm:h-8 object-contain grayscale"
          />
        ))}
      </div>
    </section>
  )
}

function PillarsSection() {
  const pillars = [
    {
      title: "User centric link building",
      description:
        "User centric link building provides the highest quality of links you can get without sacrificing long term success. We build links that Google loves because they're focused on improving the user experience...",
    },
    {
      title: "In-Depth Competitor Analysis",
      description:
        "We use the strength of your competitors against them by analysing what they do well and applying their learnings to boost your backlink profile...",
    },
    {
      title: "Constant Feedback Loop",
      description:
        "Our link building approach is highly focused on high quality content to attract links from the most desired publications on the web...",
    },
  ]

  return (
    <section className="bg-primary py-12 sm:py-16 font-clash text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          The 3 Pillars Of Our Link Building Approach
        </h2>
        <p className="text-center mb-8 sm:mb-12 text-sm sm:text-base">
          Sustainably get more organic traffic & leads by adopting a new way of
          link building.
        </p>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white text-primary p-4 sm:p-6 rounded-lg"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Services = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const services = [
    {
      icon: <Users size={24} />,
      title: "Leads Extraction",
      content: `We extract leads from various platforms across the web like Facebook, LinkedIn, Instagram, Google Maps, etc. 
  Leads include phone numbers, emails, and lots of other details. 
  We use automated solutions to complete this process efficiently.`,
    },
    {
      icon: <Mail size={24} />,
      title: "Refining the Leads",
      content:
        "Sorting phone numbers, emails, and social media links to create well-organized lead lists.",
    },
    {
      icon: <Phone size={24} />,
      title: "Outreach Strategy Development",
      content:
        "Developing personalized and tailored outreach strategies for maximum impact.",
    },
    {
      icon: <Calendar size={24} />,
      title: "Starting Outreach",
      content: `We focus on WhatsApp, email, and social media outreach.
  From the extracted leads, we conduct WhatsApp outreach using phone numbers, email marketing campaigns, and social media outreach. \n
  Social media platforms include Instagram, Facebook, Reddit, and LinkedIn.`,
    },
    {
      icon: <Calendar size={24} />,
      title: "Setting Appointments",
      content: `Scheduling appointments via Calendly after outreach efforts and creating one-on-one meetings with potential clients.`,
    },
    {
      icon: <Users size={24} />,
      title: "Meetings and Closures",
      content: `Understanding client requirements, creating a meeting roadmap, conducting live closings, and adding potential prospects to a bucket list.`,
    },
    {
      icon: <Users size={24} />,
      title: "Leads Engagement and Retention",
      content: `Constant follow-up campaigns for active leads.
  Retaining existing closed clients by offering new services or solutions using outstanding strategies.`,
    },
    {
      icon: <Phone size={24} />,
      title: "Warm-Up Calls and Relationship Development",
      content: `Calling active leads and scheduling meetings to either close deals or understand their current scenarios for better alignment.`,
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Expert Deal Closures",
      content:
        "Our expert closers join meetings and close deals on your behalf for maximum success.",
    },
    {
      icon: <ArrowRight size={24} />,
      title: "Recurring Clients",
      content:
        "We help you build a base of recurring clients for sustainable growth and long-term success.",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Quality Assurance",
      content: `We ensure the best experience by making each client recurring and achieving high-ticket sizes tailored to your service or solution.`,
    },
  ]

  return (
    <>
      <SeconNav bgColor={"bg-gray-50"} />
      <div className="min-h-screen bg-gray-50 py-8 sm:py-16">
        <div className="w-full mt-16 sm:mt-20">
          <section className="container mx-auto px-4 py-8 sm:py-16 text-center">
            <div className="flex justify-center gap-2 mb-4 sm:mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                alt="Random Avatar"
              />
              <img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                alt="Random Avatar"
              />
              <span className="text-gray-600 text-sm sm:text-base">
                50+ Happy Customers
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-clash mb-2 sm:mb-4">
              <span className="text-primary font-semibold">We got you</span>
              <span className="text-amber-400"> covered across all</span>
            </h1>

            <h2 className="text-2xl sm:text-4xl md:text-6xl font-clash font-semibold mb-4 sm:mb-8">
              <span className="text-primary font-semibold">
                stages from Outreach to Closing Journey
              </span>
            </h2>

            <p className="max-w-3xl text-lg sm:text-2xl md:text-3xl font-clash font-semibold mx-auto text-gray-800 mb-6 sm:mb-8">
              We help B2B businesses from Leads extraction to appointment
              setting and closing Potential prospects for them, we make sure
              that they are recurring clients for them.
            </p>

            <button className="bg-amber-400 text-black px-6 py-2 sm:px-8 sm:py-3 rounded-md font-medium text-sm sm:text-base hover:bg-amber-500 transition-colors">
              Request Pricing
            </button>
          </section>

          <CustomerLogos />

          <ProcessTimeline data={services} />

          <section className="py-12 sm:py-24 mt-12 sm:mt-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="space-y-12 font-clash sm:space-y-20">
                {/* Who We Are */}
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8">
                    Who We Are
                  </h2>
                  <div className="text-xl">
                    <p className="text-gray-700">
                      Razo360 is a bespoke-style outreach and closing agency. We
                      pride ourselves on taking a completely manual, customized
                      approach with every one of our clients instead of working
                      off a list like many other outreach services.
                    </p>
                    <p className="text-gray-700">
                      Every client we take on gets a dedicated project manager
                      who does fresh outreach for every project we take on. That
                      means we don't work off of lists; in fact,
                      <span className="font-semibold">
                        we think outreach marketplaces represent everything that
                        is wrong with the industry
                      </span>
                      .
                    </p>
                    <p className="text-gray-700">
                      Your project deserves to have a fresh, customized
                      campaign. We get you opportunities that nobody else can
                      get with our user-centric approach that aligns with
                      industry best practices.
                    </p>
                  </div>
                </div>

                {/* Who We Are Not */}
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8">
                    Who We Are{" "}
                    <span className="italic text-yellow-500">Not</span>
                  </h2>
                  <div className="text-xl">
                    <p className="text-gray-700">
                      We believe traditional{" "}
                      <span className="font-semibold">
                        outreach and closing practices are flawed
                      </span>
                      . Companies that rely on pre-made lists and allow clients
                      to choose placements and messaging are taking significant
                      risks.
                    </p>
                    <p className="text-gray-700">
                      Anyone with minimal effort and a small budget can secure
                      opportunities on these platforms, which often lack
                      editorial oversight and quality standards. These methods
                      are easily identifiable as transactional, often involving
                      sites that exist solely to facilitate such deals.
                    </p>
                    <p className="text-gray-700">
                      This approach is not only ineffective but can harm your
                      brand's reputation and, at worst, lead to long-term
                      damage. At razo360, we take a completely different,
                      authentic approach—one that prioritizes quality, trust,
                      and sustainable results.
                    </p>
                  </div>
                </div>

                {/* How We Work */}
                <div>
                  <h2 className="text-2xl sm:text-3xl  md:text-4xl font-bold mb-4 sm:mb-8">
                    How We Work
                  </h2>
                  <div className="text-xl">
                    <p className="text-gray-700">
                      <span className="font-semibold">
                        Meet Emma, the Business Owner Seeking Growth{" "}
                      </span>{" "}
                      Emma was an ambitious agency owner with a vision for her
                      company. She had a great product and a solid content
                      strategy, but she struggled to scale her client base. She
                      spent hours trying to generate leads, reach out to
                      prospects, and follow up, only to see minimal results. It
                      was exhausting, and Emma knew she needed help.
                    </p>

                    <p className="text-gray-700">
                      That's when she discovered razo360—a team that promised
                      not just to lighten her load but to transform her
                      business. When Emma partnered with us at razo360,
                      everything changed.
                    </p>
                    <br />
                    <p className="text-gray-700">
                      <span className="font-semibold">
                        The Journey to Success{" "}
                      </span>{" "}
                      First, her dedicated project manager, Alex, dove deep into
                      her business. Together with our team, we extracted
                      high-potential leads from platforms across the web,
                      ensuring they were aligned with Emma's ideal customer
                      profile. With a refined list of prospects, we launched a
                      targeted outreach campaign across multiple channels. We
                      didn't stop there—we followed up consistently, building
                      genuine relationships with each lead. As interest grew,
                      Emma began to see a transformation. Prospects weren't just
                      responding—they were booking meetings, signing up for
                      strategy calls, and turning into loyal clients. But our
                      work didn't end at the close. We helped Emma establish
                      retention marketing strategies to keep her clients engaged
                      and satisfied, ensuring they stayed loyal and became
                      repeat customers.
                    </p>
                    <br />
                    <p className="text-gray-700">
                      <span className="font-semibold">The Results </span> Now,
                      Emma no longer worries about the heavy lifting of lead
                      generation, outreach, or follow-ups. We attend her
                      meetings, set up strategy calls, and continuously refine
                      outreach methods, allowing her to focus on what she does
                      best—growing her business. Thanks to our comprehensive
                      approach, Emma's vision became a reality. What once felt
                      like an uphill battle is now a seamless process, powered
                      by a team dedicated to her success.
                      <br />
                      <span className="text-gray-700">
                        At razo360, we don't just provide services—we write
                        success stories. Ready to start yours?
                      </span>
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
  )
}

export default Services

