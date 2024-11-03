
import { Facebook, Linkedin ,Twitter, Instagram} from "lucide-react"
import logo from '../assets/With-Glow-Logo.png';
import logo2 from '../assets/logo12.png'
export default function Component() {
  return (
    <footer   className="bg-primary text-[#b894c0] py-12 px-4  ">
      <div className="container mx-auto max-w-6xl space-y-8 flex flex-col items-center">
        {/* Logo and Tagline */}
        <div className="text-center space-y-2">
        <a href="/" className="flex flex-row items-center justify-center gap-0">
  <img src={logo2} className="w-14 -mr-6" alt="" /> {/* Adjust the margin here */}
  <img src={logo} alt="razo360° Logo" className="w-52" />
</a>

          <p className=" max-w-xl mx-auto">
     
          Boost visibility, drive traffic, convert leads – let's transform your Marketing and Sales together.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center text-white space-x-4">
          <a href="#" className="hover:text-yellow-300  transition-colors">
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="hover:text-yellow-300  transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="hover:text-yellow-300  transition-colors">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="hover:text-yellow-300  transition-colors">
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </a>
        </div>

        {/* Navigation */}
        <nav className="border-y border-[#844375] py-4 w-3/4">
          <ul className="flex flex-wrap justify-center max-sm:flex-col max-sm:text-center text-white gap-x-8 gap-y-4">
            <li><a href="#" className="hover:text-yellow-300  transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300  transition-colors">How We Work</a></li>
            <li><a href="#" className="hover:text-yellow-300  transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-300  transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-300  transition-colors">Newsletter</a></li>
          </ul>
        </nav>

        <div className="text-center flex flex-row  gap-6">
  <p>© razo360° All rights reserved.</p>
 
    <a href="#" className="hover:text-yellow-300  transition-colors">Privacy Policy</a>
    <a href="#" className="hover:text-yellow-300  transition-colors">Terms and Conditions</a>
    <a href="#" className="hover:text-yellow-300  transition-colors">Fulfillment Policy</a>

</div>

      </div>
    </footer>
  )
}