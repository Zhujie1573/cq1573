import React from 'react';
import '../styles/Body.css';
import backgroundImage from '../img/国窖背景.jpg';
import words from './Words.js';

// Import your product images
import seriesImage1 from '../img/1573.png';
import seriesImage2 from '../img/紫砂logo.jpg';
import seriesImage3 from '../img/2qu.png';

function Body() {
  return (
    <div>
      <section id="mainBack">
        <img src={backgroundImage} alt="Background" />
      </section>

      {/* Product introductions */}
      <section id="seriess">
        <div className="series">
          <img src={seriesImage1} alt="series 1" />
          <p>{words.serious1}</p>
        </div>
        <div className="series">
          <img src={seriesImage2} alt="series 2" />
          <p>{words.serious2}</p>
        </div>
        <div className="series">
          <img src={seriesImage3} alt="series 3" />
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
  );
}

export default Body;
