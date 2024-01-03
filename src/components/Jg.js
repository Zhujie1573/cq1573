import React from 'react';
import '../styles/Jg.css'; // Updated the CSS file path
import backgroundImage from '../img/酒馆横.png';

function Jg() { // Renamed function
  return (
    <div className="jg-container">
      <div className="jg-responsive-image"> 
        <img src={backgroundImage} alt="Background" />
      </div>

      <div className="jg-grid"> 
        <div className="jg-column">
          <h2>泸州老窖·紫砂酒馆</h2>
          <div className="jg-image-box"></div>
        </div>

        <div className="jg-column"> 
          <h2>产品介绍</h2>
          <p>
            紫砂酒馆，老酒馆，老味道。紫砂酒馆，包装简朴大方。瓶盖升级为红色象征鸿运当头。打开瓶盖，就如打开了一瓶尘封酒馆中的好酒。酒质清冽甘爽，回味悠长。
          </p>
          <p>
            "紫砂酒馆"同时也是泸州老窖紫砂大曲的专属形象。聚天下有情有义人士共聚一堂，用美酒传递情义，用美酒增添幸福，用美酒描绘绚烂。
          </p>
          
        </div>

        <div className="jg-column"> 
          <div className="jg-upper-column"> 
            <h2>规格</h2>
            <p>520ML</p>
          </div>
          <div className="jg-half-column"> 
            <h2>度数</h2>
            <p>52%vol</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jg; // Updated export
