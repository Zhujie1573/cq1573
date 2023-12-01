import React from 'react';
import '../styles/Trtc.css'; // Make sure to use the correct path for your CSS file
import backgroundImage from '../img/紫砂系列.jpg';

function Trtc() {
  return (
    <div className="trtc-container">
      <div className="trtc-responsive-image">
      <img src={backgroundImage} alt="Background" />
      </div>

      <div className="trtc-grid">
        <div className="trtc-column">
          <h2>泸州老窖·陶然天成</h2>
          <div className="trtc-image-box"></div>
        </div>

        <div className="trtc-column">
          <h2>产品介绍</h2>
          <p>
          所谓“天道自然”、“天人合一”，是古代先哲们解释人与自然之间关系的基本观念。陶然天成正是这种酒与自然的完美融合。
        </p><p>
        陶然天成（紫砂陶大曲）源自元代郭怀玉首创大曲酒酿制方法，经历了明朝第二代传人，清朝第三代舒聚源酒坊发扬传承，时至今日，第九代酿酒大师亲自酿制勾调“陶然天成”，让您品味百年非物质文化遗产之醇厚。
        </p><p>
        “陶然天成”以时光为最完美的勾调之手，终至完美。高端定制包装，为独一无二的您所专享。
        </p>
        </div>

        <div className="trtc-column">
          <div className="trtc-upper-column">
            <h2>规格</h2>
            <p>2.5L</p>
          </div>
          <div className="trtc-half-column">
            <h2>度数</h2>
            <p>55%vol</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trtc;
