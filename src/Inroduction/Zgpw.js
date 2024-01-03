import React from 'react';
import '../styles/Zgpw.css'; // Make sure to use the correct path for your CSS file
import backgroundImage from '../img/品味装横版.jpg';

function Zgpw() {
  return (
    <div className="zgpw-container">
      <div className="zgpw-responsive-image">
      <img src={backgroundImage} alt="Background" />
      </div>

      <div className="zgpw-grid">
        <div className="zgpw-column">
          <h2>国窖1573·中国品味</h2>
          <div className="zgpw-image-box"></div>
        </div>

        <div className="zgpw-column">
          <h2>产品介绍</h2>
          <p>
          国窖1573·中国品味限量版是中国文化遗产与中国非物质文化遗产双遗产代表作，为纪念1573国宝窖池群、泸州老窖酒传统酿制技艺入选“全国重点文物保护单位”（1996年）及“国家级非物质文化遗产名录”（2006年）特别酿制。作为泸州老窖超高端品牌，通过六项工艺创新，香味物质含量高，口感优雅飘逸，好比中国先贤大能，胸中丘壑万千，却不动于声色，与中国文化高度相同，因此称之为中国品味。
        </p><p>
        盛装于水晶玻璃，以牡丹衬其雍容华贵，蕴含中国文明精华，藏纳华夏盛世之美，珍稀华贵。“柔”是醇和绵甜、柔顺飘逸；“纯”是纯净，没有污染、没有杂质；“雅”是国窖1573·中国品味带给消费者的综合品饮体验。
        </p>
        </div>

        <div className="zgpw-column">
          <div className="zgpw-upper-column">
            <h2>规格</h2>
            <p>500ML</p>
          </div>
          <div className="zgpw-half-column">
            <h2>度数</h2>
            <p>38%vol、52%vol</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zgpw;
