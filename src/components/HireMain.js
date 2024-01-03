

import React, { useState } from 'react';
import '../styles/HireMain.css';
import words from './Words.js';


const hiringPositions = [
  { 
    id: 1, 
    title: '酒水销售代表', 
    location: '重庆主城各区及外埠', 
    salary: '4k-8k/12薪', 
    description: words.job1
  },
  // ... add other positions here
];



  const HireMain = () => {
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const handleClick = position => {
        setSelectedPosition(position === selectedPosition ? null : position);
        setIsOverlayVisible(!isOverlayVisible);
    };

    const closeOverlay = () => {
        setSelectedPosition(null);
        setIsOverlayVisible(false);
    };

    return (
      <div className="grid-container">
        <div className="hiring-manager-info">
          <h2>人事部经理：刘利</h2>
          <p>联系电话：023-67701599</p>
          <p>投递简历：861216011@qq.com</p>
          <p>经销商/终端合作：<a href="/contactus">联系我们</a></p>
          {/* Add more information as needed */}
        </div>
        {hiringPositions.map(position => (
          <div 
            key={position.id} 
            className="grid-item"
            onClick={() => handleClick(position)}
          >
            <h2>{position.title}</h2>
            <p>{position.location}</p>
            <p>{position.salary}</p>
          </div>
        ))}
        <div className={`background-overlay ${isOverlayVisible ? 'visible' : 'hidden'}`} onClick={closeOverlay}></div>
        <div className={`overlay ${isOverlayVisible ? 'visible' : 'hidden'}`}></div>
        {selectedPosition && (
        <>
        <div className="background-overlay" onClick={closeOverlay}></div>
          <div className="overlay">
            <div className="overlay-content">
              <h2>{selectedPosition.title}</h2>
              <p>{selectedPosition.location}</p>
              <p>{selectedPosition.salary}</p>
              <p className="job-description" dangerouslySetInnerHTML={{ __html:selectedPosition.description }}></p>
            </div>
          </div>
        </>
        )}
      </div>
    );
  };


export default HireMain;
