import React, { useState } from "react";
import axios from "axios";
import { X, Send, Building2, Phone, User, MessageSquare } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phoneNumber: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post("http://localhost:3000/api/v1/lead/contactForm_lead_submission", { ...formData, leadBy: "Contact" });
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    }
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden relative">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-purple-900">Contact Us</h3>
          <button
            onClick={onClose}
            className="text-purple-900 hover:text-purple-700 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        <form className="p-6 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex items-center">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 w-1/4">
                Name
              </label>
              <div className="relative flex-1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            <div className="flex items-center">
              <label htmlFor="companyName" className="text-sm font-medium text-gray-700 w-1/4">
                Company
              </label>
              <div className="relative flex-1">
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  className="w-full border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            <div className="flex items-center">
              <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700 w-1/4">
                Phone
              </label>
              <div className="relative flex-1">
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            <div className="flex items-start">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 w-1/4 pt-2">
                Message
              </label>
              <div className="relative flex-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message"
                  className="w-full border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                ></textarea>
                <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              <>
                Submit <Send size={18} className="ml-2" />
              </>
            )}
          </button>
        </form>
        {showPopup && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center">
              <h4 className="text-xl font-semibold text-purple-900 mb-2">Thank You!</h4>
              <p className="text-gray-700">Our team will contact you soon.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;

