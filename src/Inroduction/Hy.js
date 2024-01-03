import React from 'react';
import '../styles/Hy.css'; // Make sure to use the correct path for your CSS file
import backgroundImage from '../img/鸿运长.jpg';

function Hy() {
  return (
    <div className="hy-container">
      <div className="hy-responsive-image">
      <img src={backgroundImage} alt="Background" />
      </div>

      <div className="hy-grid">
        <div className="hy-column">
          <h2>国窖1573·鸿运568</h2>
          <div className="hy-image-box"></div>
        </div>

        <div className="hy-column">
          <h2>产品介绍</h2>
          <p>
          国窖1573 •鸿运568，由中国非物质文化遗产——泸州老窖酒传统酿制技艺酿造。国家酿酒大师精心调制，酿得酒中上品。醇厚浓香的52度、清冽甘醇的38度，皆拥有窖香幽雅、绵甜爽净、柔和协调、尾净香长、风格典型的非凡品质。“五”行交融生万物，万物“六”合而顺，“八”为发。“568”寓意吉祥，赋予美好。
        </p><p>
        国窖1573 •鸿运568包装设计丹珠为顶，鸿运当头，红袍加身，喜成瑞彩。瓶身由中国古瓷传承大家永丰源特别定制，稀有华贵。雕琢细绘的卷章纹装饰，神韵尽显。整体造型大气端方、韵味中正，无愧艺术之作。
        </p>
        </div>

        <div className="hy-column">
          <div className="hy-upper-column">
            <h2>规格</h2>
            <p>500ML</p>
          </div>
          <div className="hy-half-column">
            <h2>度数</h2>
            <p>38%vol、52%vol</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hy;
