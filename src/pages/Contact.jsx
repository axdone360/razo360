import React, { useState } from 'react'
import { Phone, Mail, User, Instagram, Send } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Navbar/>
      <div className='bg-primary h-[92px]'></div>
      <div className="min-h-screen bg-primary text-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-20 pb-32">
          <div className="max-w-6xl mx-auto">
            <span className="text-yellow-500 tracking-wider">CONTACT</span>
            <div className="grid md:grid-cols-2 gap-12 max-sm:gap-6 mt-6">
              <div>
                <h1 className="text-5xl max-sm:text-3xl font-bold max-sm:mb-2 mb-8">
                  Get in Touch with <br/> Our Team
                </h1>
                <button
                  className="bg-yellow-500 w-full sm:w-auto text-purple-900 px-8 max-sm:px-3 py-3 font-semibold hover:bg-yellow-400 transition-colors rounded-sm"
                  style={{ boxShadow: "0 8px 38px rgba(171, 28, 187, 0.6)" }}
                  onClick={() => window.open("https://wa.me/917907682565", "_blank")}
                >
                  Contact Us
                </button>
              </div>
              <div className="space-y-4 max-sm:space-y-1">
                <p className="text-gray-300">
                  Have questions or need support? We’re here to help! Reach out to our team for any inquiries, whether you need assistance,
                </p>
                <p className="text-gray-300">
                  want to learn more about our features, or have feedback to share. Contact us and we’ll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Social Links */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-4">
          <a href="#" className="bg-white p-3 rounded-full text-black hover:bg-gray-100 transition duration-300">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="tel:+917907682565" className="bg-white p-3 rounded-full text-black hover:bg-gray-100 transition duration-300">
            <Phone className="w-6 h-6" />
          </a>
          <a href="https://wa.me/917907682565" className="bg-white p-3 rounded-full text-black hover:bg-gray-100 transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
          <a href="#" className="bg-white p-3 rounded-full text-black hover:bg-gray-100 transition duration-300">
            <Send className="w-6 h-6" />
          </a>
        </div>
      </div>
    </>
  )
}
