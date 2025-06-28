import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'
import logo from '../assets/With-Glow-Logo.png';
import logo2 from '../assets/logo12.png'

export default function Footer() {
  return (
    <footer className="bg-primary text-[#b894c0] py-8 px-4">
      <div className="container mx-auto max-w-6xl space-y-6 flex flex-col items-center">
        {/* Logo and Tagline */}
        <div className="text-center space-y-2">
          <a href="/" className="flex flex-row items-center justify-center gap-0">
            <img src={logo2} className="w-10 -mr-4" alt="" />
            <img src={logo} alt="razo360° Logo" className="w-40" />
          </a>
          <p className="max-w-xl mx-auto text-sm">
            Boost visibility, drive traffic, convert leads – let's transform your Marketing and Sales together.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center text-white space-x-4">
          {[
            { Icon: Facebook, label: "Facebook" },
            { Icon: Linkedin, label: "LinkedIn" },
            { Icon: Twitter, label: "Twitter" },
            { Icon: Instagram, label: "Instagram" },
          ].map(({ Icon, label }) => (
            <a key={label} href="#" className="hover:text-yellow-300 transition-colors">
              <Icon className="h-5 w-5" />
              <span className="sr-only">{label}</span>
            </a>
          ))}
        </div>

        {/* Navigation */}
        <nav className="border-y border-[#844375] py-3 w-full">
          <ul className="flex flex-wrap justify-center max-sm:flex-col max-sm:text-center text-white gap-x-6 gap-y-2 text-sm">
            {["Home", "How We Work", "Blog", "About Us", "Newsletter"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-yellow-300 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright and Links */}
        <div className="text-center text-xs flex flex-wrap justify-center gap-4">
          <p>© razo360° All rights reserved.</p>
          {["Privacy Policy", "Terms and Conditions", "Fulfillment Policy"].map((item) => (
            <a key={item} href="#" className="hover:text-yellow-300 transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

