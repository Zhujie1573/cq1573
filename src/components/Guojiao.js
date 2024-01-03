import React from 'react';
import '../styles/Guojiao.css';
import backgroundImage from '../img/国窖背景.jpg';

function Guojiao() {
  const teamMembers = [
    { id: 1, name: "国窖1573·经典装", link: "/jdz1573" },
    { id: 2, name: "国窖1573·中国品味", link: "/zgpw1573" },
    { id: 3, name: "国窖1573·鸿运568", link: "/hy568" }
  ];

  const getBackgroundClass = (index) => {
    switch (index) {
      case 0: return "gj-card-bg-1";
      case 1: return "gj-card-bg-2";
      case 2: return "gj-card-bg-3";
      default: return "";
    }
  };

  return (
    <div>
      <section id="gjBack">
          <img src={backgroundImage} alt="Background" />
        </section>
    <div className="gj-container">
      
       <div className="gj-header">
        <h1 className="gj-title">泸州老窖·国窖1573系列</h1>
      </div>
    {teamMembers.map((member, index) => (
        <a href={member.link} className={`gj-card ${getBackgroundClass(index)}`} key={index}>
          <p>{member.name}</p>
        </a>
    ))}
    </div>
    </div>
  );
}

export default Guojiao;
