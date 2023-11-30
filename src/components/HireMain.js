

import React, { useState } from 'react';
import '../styles/HireMain.css';



const hiringPositions = [
    { id: 1, title: '江北区销售经理', location: '江北区', salary: '3k-4k', description: '详细职位描述 1...' },
    { id: 2, title: '巴南区销售经理', location: '巴南区·灵活办公', salary: '3k-4k', description: '详细职位描述 2...' },
    // ... 添加其他职位
    { id: 3, title: '市场营销经理', location: '江北区·灵活办公', salary: '3k-4k', description: '详细职位描述...' },
    { id: 4, title: '物流管理', location: '渝北区', salary: '3k-4k', description: '详细职位描述...' },
    { id: 5, title: '商超部经理', location: '主城·灵活办公', salary: '3k-4k', description: '详细职位描述...' },
    { id: 6, title: '紫砂大曲系列销售', location: '主城·灵活办公', salary: '3k-4k', description: '详细职位描述...' },
    { id: 7, title: '国窖1573系列销售', location: '主城·灵活办公', salary: '3k-4k', description: '详细职位描述...' },
    { id: 8, title: '财务出纳', location: '江北区', salary: '3k-4k', description: '详细职位描述...' },
    { id: 9, title: '客户公关', location: '江北区', salary: '3k-4k', description: '详细职位描述...' },
    { id: 10, title: '行政', location: '江北区', salary: '3k-4k', description: '详细职位描述...' }
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
          <h2>人事部经理：刘备</h2>
          <p>联系电话：136-0000-0000</p>
          <p>投递简历：email@email.com</p>
          <p>经销商/终端供货：<a href="/contactus">联系我们</a></p>
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
              <p className="job-description">{selectedPosition.description}</p>
            </div>
          </div>
        </>
        )}
      </div>
    );
  };


export default HireMain;
