import React from 'react';
import '../styles/Zsdq.css'; // Make sure to use the correct path for your CSS file
import backgroundImage from '../img/紫砂系列.jpg';

function Zsdq() {
  return (
    <div className="zsdq-container">
      <div className="zsdq-responsive-image">
      <img src={backgroundImage} alt="Background" />
      </div>

      <div className="zsdq-grid">
        <div className="zsdq-column">
          <h2>泸州老窖·紫砂大曲</h2>
          <div className="zsdq-image-box"></div>
        </div>

        <div className="zsdq-column">
          <h2>产品介绍</h2>
          <p>
          系出名门 大家风范
        </p><p>
        泸州老窖紫砂大曲是泸州老窖旗下的拳头产品，其前身是于1915年最早获得巴拿马万国博览会金奖的“三百年老窖大曲”。
        </p><p>
        紫砂大曲融传统白酒酿造技艺与紫砂文化于一体。精选泸州特产之糯红高粱， 恪守“ 泸州老窖传统酿造技艺”纯正血统，精选具有百年连续不断酿造历史的老窖池群及恒温恒湿顶级藏酒洞，终获一脉浓香，绝世口感，臻于完美。
        </p><p>
        紫砂大曲采用独特紫砂陶包装，瓶型上厚重大气、圆润典雅、质感朴拙，整体风格内敛平和，不张扬、低调中见尊贵，更重要的是使用紫砂陶包装有效延长了酒的窖藏时间，酒体在瓶中自由呼吸，继续老熟。
          </p>
        </div>

        <div className="zsdq-column">
          <div className="zsdq-upper-column">
            <h2>规格</h2>
            <p>375ML、500ML、700ML</p>
          </div>
          <div className="zsdq-half-column">
            <h2>度数</h2>
            <p>38%vol、52%vol</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zsdq;
