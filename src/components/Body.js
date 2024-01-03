import React, { useState, useEffect } from 'react';
import '../styles/Body.css';
import backgroundImage from '../img/国窖背景.jpg';
import backgroundImage2 from '../img/紫砂横.jpg';
import backgroundImage3 from '../img/黑盖bg.jpg';
import words from './Words.js';

import seriesImage1 from '../img/1573.png';
import seriesImage2 from '../img/紫砂圆logo.jpg';
import seriesImage3 from '../img/黑盖logo.jpg';

function Body() {
  
  const images = [backgroundImage, backgroundImage2, backgroundImage3];
  const links = ["/guojiao1573", "/daqu", "/HeyGuys"]; // Replace with actual links
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const imageElement = document.querySelector('.banner img');
      if (imageElement) {
          imageElement.style.opacity = 1; // Set initial opacity to 0
          setTimeout(() => {
              imageElement.src = images[currentIndex]; // Change the image source after fade-out
              imageElement.style.opacity = 1; // Fade-in new image
          }, 500); // Wait for fade-out to complete
      }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
        goToNext();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
}, [currentIndex]);

  const changeImage = (newIndex) => {
      const imageElement = document.querySelector('.banner img');
      if (imageElement) {
          imageElement.style.opacity = 0; // Start fade-out
      }
      setTimeout(() => {
          setCurrentIndex(newIndex); // Change index after fade-out
      }, 500); // Wait for fade-out to complete
  };

  const goToPrevious = () => {
      const isFirstImage = currentIndex === 0;
      const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
      changeImage(newIndex);
  };

  const goToNext = () => {
      const isLastImage = currentIndex === images.length - 1;
      const newIndex = isLastImage ? 0 : currentIndex + 1;
      changeImage(newIndex);
  };

  const goToImage = (index) => {
      changeImage(index);
  };

    return (
        <body>
            <div>
                <div className="banner">
                    <a href={links[currentIndex]}>
                        <img src={images[currentIndex]} alt="Banner" className="fade-in" />
                    </a>
                    <button onClick={goToPrevious} className="arrow left-arrow">&#8592;</button>
                    <button onClick={goToNext} className="arrow right-arrow">&#8594;</button>
                    <div className="dots">
                        {images.map((_, index) => (
                            <span key={index} className={`dot${currentIndex === index ? ' active' : ''}`} onClick={() => goToImage(index)}></span>
                        ))}
                    </div>
                </div>

        {/* Product introductions */}
        <section id="seriess">
          <div className="series">
            <a href="/guojiao1573">
            <img src={seriesImage1} alt="series 1" />
            </a>
            <p>{words.serious1}</p>
          </div>
          <div className="series">
            <a href="/daqu">
            <img src={seriesImage2} alt="series 2" class="series-image-2" />
            </a>
            <p dangerouslySetInnerHTML={{ __html: words.serious2 }}></p>
          </div>
          <div className="series">
            <a href="/HeyGuys">
            <img src={seriesImage3} alt="series 3" />
            </a>
            <p>{words.serious3}</p>
          </div>
        </section>

        <section id="showcase">
          <div className="bodycontainer">
            <h1>公司简介</h1>
            <p>{words.CompanyIntroduction}</p>
          </div>
        </section>
      </div>
    </body>
  );
}

export default Body;
