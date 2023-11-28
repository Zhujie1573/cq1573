

import React, { useState } from 'react';
import '../styles/HireMain.css';



const hiringPositions = [
    { id: 1, title: '软件工程师', location: '纽约', salary: '$120,000 - $150,000', description: '详细职位描述 1...' },
    { id: 2, title: '项目经理', location: '旧金山', salary: '$110,000 - $130,000', description: '详细职位描述 2...' },
    // ... 添加其他职位
    { id: 3, title: '市场营销经理', location: '洛杉矶', salary: '¥300,000 - ¥400,000', description: '负责制定和执行市场营销策略...' },
    { id: 4, title: '品酒师', location: '上海', salary: '¥200,000 - ¥300,000', description: '负责品尝和评估酒品质量...' },
    { id: 5, title: '销售代表', location: '北京', salary: '¥150,000 - ¥250,000', description: '负责开发新客户和维护现有客户关系...' },
    { id: 6, title: '供应链经理', location: '广州', salary: '¥250,000 - ¥350,000', description: '管理供应链操作，确保高效流程...' },
    { id: 7, title: '酒吧经理', location: '深圳', salary: '¥180,000 - ¥280,000', description: '管理酒吧日常运营和员工...' },
    { id: 8, title: '财务分析师', location: '杭州', salary: '¥220,000 - ¥320,000', description: '负责财务报告和数据分析...' },
    { id: 9, title: '客户服务代表', location: '成都', salary: '¥140,000 - ¥240,000', description: '提供卓越的客户服务和支持...' },
    { id: 10, title: '物流协调员', location: '重庆', salary: '¥160,000 - ¥260,000', description: '协调物流运输，确保及时交货...' }
  ];

  const HireMain = () => {
    const [selectedPosition, setSelectedPosition] = useState(null);

    const handleClick = position => {
        setSelectedPosition(position === selectedPosition ? null : position);
    };

    const closeOverlay = () => {
        setSelectedPosition(null);
    };

    return (
      <div className="grid-container">
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
