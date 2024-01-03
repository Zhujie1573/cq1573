import React from 'react';
import '../styles/Duty.css';

function Duty() {
  const teamMembers = [
    { id: 1, name: "七夕·巴渝浪漫", title: "渝中见证，浪漫满分", time: "2023.8", link: "https://mp.weixin.qq.com/s/h7fTgsmnQyy71JZYzkn27g" },
    { id: 2, name: "传承·祖国未来", title: "东水门小学阳光成长行动", time: "2023.3", link: "https://mp.weixin.qq.com/s/UwmzLlaFYn6PA-A6fLoevg" },
    { id: 3, name: "抗疫·家国情怀", title: "凝心聚力众志成城", time:"2020.2", link: "https://mp.weixin.qq.com/s/mAF_B8bv3PpTh_DBNbiiAQ" }
  ];

  const getBackgroundClass = (index) => {
    switch (index) {
      case 0: return "duty-card-bg-1";
      case 1: return "duty-card-bg-2";
      case 2: return "duty-card-bg-3";
      default: return "";
    }
  };

  return (
    <div className="duty-container">
      <div className="duty-header">
        <h1 className="duty-title">重庆乾阳积极承担社会责任</h1>
        <p className="duty-description"></p>
      </div>
      {teamMembers.map((member, index) => (
        <a href={member.link} target="_blank" rel="noopener noreferrer" className={`duty-card ${getBackgroundClass(index)}`} key={index}>
          <h2>{member.name}</h2>
          <p className="title">{member.title}</p>
          <p className="time">{member.time}</p>
        </a>
      ))}
    </div>
  );
}

export default Duty;

