import { Link, Users, Scale, Folder, LayoutGrid } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="p-8 border rounded-xl hover:shadow-lg transition-shadow duration-300 bg-white">
    <Icon className="w-10 h-10 text-purple-600 mb-4" />
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const TeamMember = ({ name, role, image }) => (
  <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
    <div className="aspect-square overflow-hidden">
      <img
        src={image || "/api/placeholder/400/400"}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6 text-center">
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  </div>
);

export default function About() {
  const values = [
    {
      icon: Link,
      title: "Transparency",
      description: "Always know what's going on with real-time updates"
    },
    {
      icon: Link,
      title: "Live Quality",
      description: "Our team builds relevant authority and trust for your website through genuine outreach"
    },
    {
      icon: Users,
      title: "Communication",
      description: "Get real-time priority task sharing with seamless three-way good times!"
    },
    {
      icon: Scale,
      title: "Fairness",
      description: "We play by Google's best practices. No grey hat, no spammy. Guest articles are your key to play and unlock fun."
    },
    {
      icon: Folder,
      title: "Respect",
      description: "We know that you are expert in SEO & website. We find new opportunities for you while you focus on growing your craft."
    },
    {
      icon: LayoutGrid,
      title: "Ownership",
      description: "When we commit, we own both mistakes and wins. We take lots of ownership and responsibility to do things right."
    }
  ];

  const team = [
    { name: "Eric Carter", role: "Founder", image: "/api/placeholder/400/400" },
    { name: "Sebastian Schäfer", role: "Founder", image: "/api/placeholder/400/400" },
    { name: "Vince", role: "Something Cool", image: "/api/placeholder/400/400" },
    { name: "Sam", role: "Account Manager", image: "/api/placeholder/400/400" },
    { name: "Alisha", role: "Account Manager", image: "/api/placeholder/400/400" },
    { name: "Anna", role: "Account Manager", image: "/api/placeholder/400/400" },
    { name: "Tamara", role: "Account Manager", image: "/api/placeholder/400/400" },
    { name: "Nat", role: "Marketing Manager", image: "/api/placeholder/400/400" },
    { name: "Sara", role: "Account Manager", image: "/api/placeholder/400/400" },
    { name: "Mariana", role: "Project Manager", image: "/api/placeholder/400/400" },
    { name: "Agata", role: "Account Manager", image: "/api/placeholder/400/400" },
    { name: "Katka", role: "Sales & Customer Success", image: "/api/placeholder/400/400" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl  max-sm:text-2xl md:text-6xl font-bold text-white mb-4 leading-tight">
            A team of link building rocket scientists ready to send<br/> your site to the moon
          </h1>
          <p className="text-xl max-sm:text-base max-sm:font-normal  text-white font-bold">
            We are also really fun to work with - just saying 🚀
          </p>
        </div>
      </section>

      {/* Decorative Wave */}
      <div className="bg-primary">
        <div className="h-16 bg-gray-50 rounded-t-[50px]"></div>
      </div>

      {/* Values Section */}
      <section className="py-24 max-sm:py-10 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Values We Live And Work By</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We believe the real value of link building are here. Today, quality beats quantity and relevancy outperforms high authority. Our goal is to help you achieve the right balance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-yellow-100/50 py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our Team Of Rockstars
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We believe that a great company culture leads to trust, transparency, and success! 🚀
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-t from-yellow-50 to-yellow-100/50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-primary rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              See how we can help you scale your SEO
            </h2>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-8 py-4 rounded-xl text-lg font-semibold transition duration-300 transform hover:scale-105">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}