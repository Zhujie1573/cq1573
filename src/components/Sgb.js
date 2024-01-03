import React from 'react';
import '../styles/Sgb.css'; // Updated the CSS file path
import backgroundImage from '../img/手工横.png';

function Sgb() { // Renamed function
  return (
    <div className="sgb-container">
      <div className="sgb-responsive-image"> 
        <img src={backgroundImage} alt="Background" />
      </div>

      <div className="sgb-grid"> 
        <div className="sgb-column">
          <h2>泸州老窖·手工版大曲</h2>
          <div className="sgb-image-box"></div>
        </div>

        <div className="sgb-column"> 
          <h2>产品介绍</h2>
          <p>
            两大工匠 手艺之作
          </p>
          <p>
          被评为“大国工匠”称号的酿酒大工匠杨平，对酿制技艺过程全程把关；联手制曲大工匠邬捷锋，把控手工大曲制作工艺流程。手工酿制技艺得以以一款产品的方式展示出来 。
          </p>
          <p>
            百道工序 道道考究
          </p>
          <p>
          严格遵循泸州老窖大曲酒酿制技艺，108位手工匠人 ，108道工序，108双勤勉的双手，慢工细活，耗时多，产量小。
          </p>
          <p>
            匠心勾调 品味万千
          </p>
          <p>
          国家级勾调大师精心“调配”，几十年匠心技艺用双手摸寻出手工版大曲独特的勾调配方，唇舌毫厘，气象万千，手工酝味，别有意蕴。
          </p>
        </div>

        <div className="sgb-column"> 
          <div className="sgb-upper-column"> 
            <h2>规格</h2>
            <p>500ML</p>
          </div>
          <div className="sgb-half-column"> 
            <h2>度数</h2>
            <p>52%vol</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sgb; // Updated export
