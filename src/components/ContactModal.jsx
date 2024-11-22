import { X, Check } from "lucide-react";
import { useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
      name: "",
      companyName: "",
      phoneNumber: "",
      message: "",
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Submitted:", formData);
      onClose(); // Close modal after submission
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white w-[90%] max-w-lg rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center border-b pb-3">
            <h3
              className="text-xl font-semibold"
              style={{ color: "#ad3190" }}
            >
              Contact Us
            </h3>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900 transition-all"
            >
              <X size={24} />
            </button>
          </div>
          <form className="mt-4  space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            {/* Company Name */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-gray-700 font-medium mb-1"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter your company name"
                className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 font-medium mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message"
                className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-yellow-500 w-full hover:bg-yellow-600 text-purple-950 font-semibold py-2 rounded-md transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
  

export default ContactModal