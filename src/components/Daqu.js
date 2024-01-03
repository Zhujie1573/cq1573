import React from 'react';
import '../styles/Daqu.css';

function Daqu() {
  const teamMembers = [
    { id: 1, name: "紫砂大曲", link: "/zisha-daqu" },
    { id: 2, name: "陶然典藏", link: "/diancang" },
    { id: 3, name: "陶然天成", link: "/tiancheng" },
    { id: 3, name: "手工版大曲", link: "/shougong" },
    { id: 3, name: "87版大曲", link: "/baqi" },
    { id: 3, name: "紫砂酒馆", link: "/jiuguan" },
  ];

  const getBackgroundClass = (index) => {
    switch (index) {
      case 0: return "daqu-card-bg-1";
      case 1: return "daqu-card-bg-2";
      case 2: return "daqu-card-bg-3";
      case 3: return "daqu-card-bg-4";
      case 4: return "daqu-card-bg-5";
      case 5: return "daqu-card-bg-6";
      default: return "";
    }
  };

  return (
    <div className="daqu-container">
       <div className="daqu-header">
        <h1 className="daqu-title">泸州老窖·紫砂大曲系列</h1>
        <p className="daqu-description">中式待客之道</p>
      </div>
    {teamMembers.map((member, index) => (
        <a href={member.link} className={`daqu-card ${getBackgroundClass(index)}`} key={index}>
        <h2>{member.name}</h2>
        </a>
    ))}
    </div>
  );
}

export default Daqu;
