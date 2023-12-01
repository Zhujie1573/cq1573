import React from 'react';
import '../styles/ProductMain.css';

function ProductMain() {
  const teamMembers = [
    { id: 1, name: "泸州老窖·国窖1573系列", link: "/guojiao1573" },
    { id: 2, name: "泸州老窖·紫砂大曲系列",link: "/daqu" },
    { id: 3, name: "泸州老窖·黑盖二曲",  link: "/HeyGuys" },
    { id: 4, name: "其他产品",  link: "/otherProduct" }
  ];

  const getBackgroundClass = (index) => {
    switch (index) {
      case 0: return "product-card-bg-1";
      case 1: return "product-card-bg-2";
      case 2: return "product-card-bg-3";
      case 3: return "product-card-bg-4";
      default: return "";
    }
  };

  return (
    <div className="product-container">
    {teamMembers.map((member, index) => (
        <a href={member.link} className={`product-card ${getBackgroundClass(index)}`} key={index}>
        <h2>{member.name}</h2>
        </a>
    ))}
    </div>
  );
}

export default ProductMain;
