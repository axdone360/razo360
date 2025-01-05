import React, { useState } from "react";
import axios from "axios";
import { X, Send } from 'lucide-react';

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
      await axios.post(`${import.meta.env.VITE_BACKENDSERVER}/lead/contactForm_lead_submission`, { ...formData, leadBy: "Contact" }, { withCredentials: true });
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-8">
          We'd love to hear from you. Please fill out this form and we'll get back to you as soon as possible.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <div className="space-y-1">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-2 py-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-900 placeholder-gray-400"
              required
            />
          </div>

          <div className="space-y-1">
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full px-2 py-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-900 placeholder-gray-400"
            />
          </div>

          <div className="space-y-1">
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-2 py-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-900 placeholder-gray-400"
              required
            />
          </div>

          <div className="space-y-1">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project?"
              className="w-full px-2 py-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-900 placeholder-gray-400 resize-none"
              rows="3"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-primary text-white rounded-lg py-2.5 font-medium hover:bg-contactSecondry transition-colors mt-8 flex items-center justify-center ${
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
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h4>
              <p className="text-gray-700">We'll get back to you soon.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;

