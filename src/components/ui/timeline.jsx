"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Check } from 'lucide-react'

export const ProcessTimeline = ({ data }) => {
  const containerRef = useRef(null)
  const [stepCompletion, setStepCompletion] = useState(
    Array(data.length).fill(false)
  )

  useEffect(() => {
    const handleScroll = () => {
      const newCompletion = data.map((_, index) => {
        const stepRef = containerRef.current.querySelector(
          `[data-step-index="${index}"]`
        )
        if (stepRef) {
          const rect = stepRef.getBoundingClientRect()
          return rect.top < window.innerHeight * 0.8
        }
        return false
      })
      setStepCompletion(newCompletion)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [data])

  return (
    <div
      ref={containerRef}
      className="max-w-7xl mx-auto font-clash px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">
        Our Process
      </h2>
      <p className="text-center text-xl text-gray-600 mb-10 sm:mb-14 lg:mb-18">
        We've got you covered across all stages of your link-building journey.
      </p>
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical timeline line */}
        <motion.div
          className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-gray-200 h-full"
          style={{
            background: `linear-gradient(to bottom, #FCD34D ${
              (stepCompletion.filter(Boolean).length / data.length) * 100
            }%, #e5e7eb 0%)`,
          }}
        />

       
        {/* Process steps */}
        <div className="space-y-24 sm:space-y-32 lg:space-y-40">
          {data.map((item, index) => (
            <motion.div
              key={index}
              data-step-index={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  delay: index * 0.1,
                },
              }}
              viewport={{ once: true }}
            >
              {/* Dot for each step */}
              <div
                className={`absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 rounded-full ${
                  stepCompletion[index]
                    ? "bg-yellow-400"
                    : "bg-white border-2 border-gray-300"
                }`}
              />

              {/* Step title and content */}
              <div className="flex flex-col sm:flex-row items-start sm:gap-8 lg:gap-12 pl-6 sm:pl-0">
                {/* Step title (on the left for larger screens, above content for mobile) */}
                <div className="w-full sm:w-1/2 sm:text-right sm:pr-4 mb-2 sm:mb-0">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                    {item.title}
                  </h3>
                </div>

                {/* Step description (below title for mobile, on the right for larger screens) */}
                <div className="w-full sm:w-1/2 sm:pl-4">
                  <div className="space-y-2">
                    {Array.isArray(item.content) ? (
                      item.content.map((text, i) => (
                        <p
                          key={i}
                          className="text-gray-600 text-base sm:text-lg lg:text-xl"
                        >
                          {text}
                        </p>
                      ))
                    ) : (
                      <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProcessTimeline

