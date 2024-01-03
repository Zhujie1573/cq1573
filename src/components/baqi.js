import React from 'react';
import '../styles/Baqi.css';
import backgroundImage from '../img/87横.png';

function Baqi() {
  return (
    <div className="baqi-container">
      <div className="baqi-responsive-image"> 
        <img src={backgroundImage} alt="Background" />
      </div>

      <div className="baqi-grid"> 
        <div className="baqi-column">
          <h2>泸州老窖·87版大曲</h2>
          <div className="baqi-image-box"></div>
        </div>

        <div className="baqi-column"> 
          <h2>产品介绍</h2>
          <p>
          2019年，以1987年泸州老窖大曲酒紫砂陶装为原型原样复刻。泸州老窖大曲酒（时代珍藏），内部简称：87版大曲。
          </p>
          <p>
          以泸州老窖大曲酒紫砂陶装为原型原样复刻。
          </p>
          <p>
          承袭其品质风格，以当时企业“七十载金牌不倒，四百年老窖飘香”的核心诉求为依托，系大曲酒出口转内销的第一款单品，是泸州老窖当年的高端形象产品。
          </p>
        </div>

        <div className="baqi-column"> 
          <div className="baqi-upper-column"> 
            <h2>规格</h2>
            <p>500ML</p>
          </div>
          <div className="baqi-half-column"> 
            <h2>度数</h2>
            <p>52%vol</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Baqi;
