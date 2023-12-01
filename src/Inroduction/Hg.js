import React from 'react';
import '../styles/Hg.css'; // Make sure to use the correct path for your CSS file
import backgroundImage from '../img/黑盖bg.jpg';

function Hg() {
  return (
    <div className="hg-container">
      <div className="hg-responsive-image">
      <img src={backgroundImage} alt="Background" />
      </div>

      <div className="hg-grid">
        <div className="hg-column">
          <h2>泸州老窖·黑盖二曲</h2>
          <div className="hg-image-box"></div>
        </div>

        <div className="hg-column">
          <h2>产品介绍</h2>
          <p>
          泸州老窖黑盖二曲是泸州老窖公司全新战略大单品，依托于泸州老窖拥有的占全行业91.3%的老窖池资源，坚持纯粮固态发酵、窖泥传承技术、极简环保理念的核心价值，树立高品质光瓶酒引领者的价值标杆。泸州老窖黑盖采用行业创领性“窖泥传承技术”酿造,其品质经中国工程院士、中国酒业协会专家鉴评,达到窖龄30年以上窖池酿造的质量水平，口感粮香馥郁，醇厚绵甜。
        </p>
        </div>

        <div className="hg-column">
          <div className="hg-upper-column">
            <h2>规格</h2>
            <p>500ml、250ml、125ml</p>
          </div>
          <div className="hg-half-column">
            <h2>度数</h2>
            <p>42%vol、52%vol</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hg;
