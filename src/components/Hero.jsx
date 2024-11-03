import React, { useState, useEffect } from "react";
import arr1 from "../assets/arr1.webp";
import arr2 from "../assets/arr2.webp";

export default function Hero() {
  return (
    <div className="bg-primary text-white py-12 md:py-16 lg:py-24 min-h-[700px] max-sm:min-h-[650px] relative flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <p className="text-base sm:text-lg md:text-xl mb-2 text-yellow-500 font-bold">
          B2B and B2C Scaling Specialists
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
          Fix the Problems that stops your{" "}
          <span className="block sm:inline">business from scaling</span>
        </h1>
        <p className="text-base max-sm:text-md md:text-xl mb-6 md:mb-8 text-purple-100 max-w-3xl mx-auto">
        Boost visibility, drive traffic, convert leads – let's transform your Marketing and Sales together.


        </p>
        <button
          className="bg-yellow-500 w-full sm:w-auto text-primary px-8 max-sm:px-3 py-3 font-semibold hover:bg-yellow-400 transition-colors rounded-sm"
          style={{ boxShadow: "0 8px 38px rgba(171, 28, 187, 0.6)" }}
          onClick={() => window.open("https://wa.me/917907682565", "_blank")}
        >
          Book An Appointment
        </button>
      </div>

      <img
        src={arr1}
        alt="Decorative arrow 1"
        className="absolute bottom-4 right-4 w-1/4 max-w-xs rounded-sm opacity-100 sm:opacity-100 md:opacity-100 md:bottom-0 md:right-0 md:mb-4 md:mr-4 object-cover" // Added object-cover
      />

      <img
        src={arr2}
        alt="Decorative arrow 2"
        className="absolute bottom-4 left-4 w-1/4 max-w-xs rounded-sm opacity-100 md:opacity-100 md:bottom-0 md:left-0 md:mb-0 md:ml-0 object-cover" // Added object-cover
      />
    </div>
  );
}
