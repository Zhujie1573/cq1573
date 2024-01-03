import React from 'react';
import '../styles/Contact.css';

function ContactMain() {
  const teamMembers = [
    { name: "刘进", title: "总经理", description: "*添加职位描述*.", phone: "023-67701599" },
    { name: "蒋赖", title: "紫砂大曲品牌经理", description: "*添加职位描述*", phone: "023-67701599" },
    { name: "向双", title: "陶然典藏品牌经理", description: "*添加职位描述*", phone: "023-67701599" },
    { name: "陈道翔", title: "国窖1573品牌经理", description: "*添加职位描述*", phone: "023-67701599" },
    { name: "马海鹏", title: "酒店部经理", description: "*添加职位描述*", phone: "023-67701599" },
    { name: "刘利", title: "人事部经理", description: "*添加职位描述*", phone: "023-67701599" },
  ];

  return (
    <div className="contact-container">
      {teamMembers.map((member, index) => (
        <div className="contact-card" key={index}>
          <h2>{member.name}</h2>
          <p className="title">{member.title}</p>
          <p>联系方式: {member.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default ContactMain;
