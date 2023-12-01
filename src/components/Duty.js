import React from 'react';
import '../styles/Duty.css';

function Duty() {
  const teamMembers = [
    { id: 1, name: "七夕·巴渝浪漫", title: "渝中见证，浪漫满分", time: "2023.8", link: "/dutyPage1" },
    { id: 2, name: "传承·祖国未来", title: "东水门小学阳光成长行动", time: "2023.3", link: "/dutyPage2" },
    { id: 3, name: "抗疫·家国情怀", title: "凝心聚力众志成城", time:"2020.2", link: "/dutyPage3" }
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
        <a href={member.link} className={`duty-card ${getBackgroundClass(index)}`} key={index}>
        <h2>{member.name}</h2>
        <p className="title">{member.title}</p>
        <p className="time">{member.time}</p>
        </a>
    ))}
    </div>
  );
}

export default Duty;
