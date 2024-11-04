import React from 'react';
import styles from './BrandTicker.module.css';
import logo1 from "../assets/1-2.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.png";
import logo6 from "../assets/1111c.png";

function BrandTicker() {
  const brands = [
    { name: 'LegalZoom', logo: logo1 },
    { name: 'Surfshark', logo: logo2 },
    { name: 'Guru', logo: logo3 },
    { name: 'Aspiration', logo: logo4 },
    { name: 'Vonage', logo: logo5 },
    { name: 'Resume.io', logo: logo6 },
  ];

  return (
    <div className={`${styles.brandTickerContainer} bg-secondry`}>
      <h3 className="text-center text-gray-700 font-bold mb-8">
        Trusted by ambitious brands like
      </h3>
      <div className={styles.tickerWrapper}>
        <div className={styles.ticker}>
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className={styles.tickerItem}>
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-8 md:h-10 w-full opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandTicker;






