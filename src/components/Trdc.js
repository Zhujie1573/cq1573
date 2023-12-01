import React from 'react';
import '../styles/Trdc.css'; // Make sure to use the correct path for your CSS file
import backgroundImage from '../img/典藏.jpg';

function Trdc() {
  return (
    <div className="trdc-container">
      <div className="trdc-responsive-image">
      <img src={backgroundImage} alt="Background" />
      </div>

      <div className="trdc-grid">
        <div className="trdc-column">
          <h2>泸州老窖·陶然典藏</h2>
          <div className="trdc-image-box"></div>
        </div>

        <div className="trdc-column">
          <h2>产品介绍</h2>
          <p>
          陶然之饮 典藏于心
        </p><p>
        《道德经》上有言：“天下难事必作于易，天下大事必作于细。”
        </p><p>
        泸州老窖“陶然典藏”酒吸天地之造化，纳五方之浓香，每一细节都力求完美。
        </p><p>
        它秉承泸州老窖集团二十三代酿酒人流传下来的四大传统工艺，即“续糟配料、固态发酵、泥窖生香、酯化老熟”，精选富含有单宁、花青素等成分的泸州地区特产的有机糯红高粱精酿而成；萃取上古窖池群所产原酒之精华，经漫长的洞藏岁月，经国酿大师精心调酿，终成绝世口感。
        </p><p>
        陶然典藏瓶型呈古书卷轴造型，瓶塞刻有明代卷草纹，整体风格内敛平和，不张扬、无一不突显其浓郁文化色彩。
        </p><p>
        泸州老窖 “陶然典藏”酒是当代科技与非物质文化遗产的交响之作，严格遵循高端白酒之路，返璞归真，藏锋于钝，以其不可复制的细节，成就“泸型”浓香的典藏级臻品。
          </p>
        </div>

        <div className="trdc-column">
          <div className="trdc-upper-column">
            <h2>规格</h2>
            <p>500ML</p>
          </div>
          <div className="trdc-half-column">
            <h2>度数</h2>
            <p>38%vol、52%vol</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trdc;
