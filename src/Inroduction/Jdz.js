import React from 'react';
import '../styles/Jdz.css'; // Make sure to use the correct path for your CSS file
import backgroundImage from '../img/国窖背景.jpg';

function Jdz() {
  return (
    <div className="jdz-container">
      <div className="jdz-responsive-image">
      <img src={backgroundImage} alt="Background" />
      </div>

      <div className="jdz-grid">
        <div className="jdz-column">
          <h2>国窖1573·经典装</h2>
          <div className="jdz-image-box"></div>
        </div>

        <div className="jdz-column">
          <h2>产品介绍</h2>
          <p>
        国窖1573经典装源自全国重点文物保护单位——始建于公元1573年、连续使用至今、原址原貌保护完整的1573国宝窖池群，并经由入选首批国家级非物质文化遗产的泸州老窖酒传统酿制技艺纯手工酿造。国窖1573是荣膺文化遗产“双国宝”殊荣的超高端酒品，是中国白酒鉴赏标准级酒品。
        </p><p>
        包装采用大面积正红铺陈，色调呈正红色。酒瓶采用水晶玻璃烧制，瓶身呈截面切割，辅以繁星衬托，瓶体镂刻烧花红黄衬色。
        </p><p>
        瓶身正面“国窖”二字，为官方行文中使用最为广泛之宋体，因450年历史而呈“古印”之风。阿拉伯数字“1573”以纯金压边，衬托酒液的晶莹剔透。
        </p><p>
        整体风格呈传统玉玺造型，基座以金色牡丹花装饰，两侧之“V”形标志尊贵典雅，瓶身五角繁星与外包装相加总数为960颗，寓意中国960万平方公里之领土概念。
          </p>
        </div>

        <div className="jdz-column">
          <div className="jdz-upper-column">
            <h2>规格</h2>
            <p>50ML、100ML、250ML、375ML、500ML、750ML、1.5L、3L</p>
          </div>
          <div className="jdz-half-column">
            <h2>度数</h2>
            <p>38%vol、43%vol、46%vol、52%vol</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jdz;
