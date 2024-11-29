import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Check } from "lucide-react";

export const ProcessTimeline = ({ data }) => {
  const containerRef = useRef(null);
  const [stepCompletion, setStepCompletion] = useState(
    Array(data.length).fill(false)
  );

  useEffect(() => {
    const handleScroll = () => {
      const newCompletion = data.map((_, index) => {
        const stepRef = containerRef.current.querySelector(
          `[data-step-index="${index}"]`
        );
        if (stepRef) {
          const rect = stepRef.getBoundingClientRect();
          return rect.top < window.innerHeight * 0.8;
        }
        return false;
      });
      setStepCompletion(newCompletion);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  return (
    <div
      ref={containerRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">
        Our Process
      </h2>
      <p className="text-center text-gray-600 mb-12 sm:mb-16 lg:mb-20">
        We've got you covered across all stages of your link-building journey.
      </p>
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical timeline line */}
        <motion.div
          className="absolute left-1/2 max-sm:left-0 transform -translate-x-1/2 w-1 bg-gray-200 h-full"
          style={{
            background: `linear-gradient(to bottom, #FCD34D ${
              (stepCompletion.filter(Boolean).length / data.length) * 100
            }%, #e5e7eb 0%)`,
          }}
        />

        {/* Sticky animated checkbox */}
        <motion.div
          className="sticky left-1/2 max-sm:left-0   transform -translate-x-1/2 z-20"
          style={{ top: "50%" }}
        >
          <motion.div
            className="w-12 h-12 rounded-full bg-white border-4 border-yellow-400 flex items-center justify-center shadow-lg"
            style={{
              backgroundColor:
                stepCompletion.every(Boolean) ? "#FCD34D" : "#FFFFFF",
            }}
          >
            <Check
              className={`w-7 h-7 ${
                stepCompletion.every(Boolean) ? "text-white" : "text-gray-400"
              }`}
            />
          </motion.div>
        </motion.div>

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
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.2,
                },
              }}
              viewport={{ once: true }}
            >
              {/* Dot for each step */}
              <div
                className={`absolute left-1/2 max-sm:left-0 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                  stepCompletion[index]
                    ? "bg-yellow-400"
                    : "bg-white border-2 border-gray-300"
                }`}
              />

              {/* Step title and content */}
              <div
                className={`flex flex-col sm:flex-row  items-start sm:gap-8 lg:gap-12 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Step title */}
                <div
                  className={`w-full sm:w-1/2 ${
                    index % 2 === 0 ? "sm:text-right" : "sm:text-left"
                  }`}
                >
                  <h3 className="text-3xl  max-sm:pl-4 sm:text-4xl lg:text-5xl font-semibold mb-2">
                    {item.title}
                  </h3>
                </div>

                {/* Step description */}
                <div className="w-full sm:w-1/2">
                  <div className="space-y-2">
                    {Array.isArray(item.content) ? (
                      item.content.map((text, i) => (
                        <p key={i} className="text-gray-600 max-sm:pl-4 text-lg sm:text-xl lg:text-2xl">
                          {text}
                        </p>
                      ))
                    ) : (
                      <p className="text-gray-600 max-sm:pl-4 text-lg sm:text-xl lg:text-2xl">
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
  );
};

export default ProcessTimeline;
