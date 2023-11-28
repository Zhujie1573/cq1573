import React from 'react';
import '../styles/Contact.css';

function ContactMain() {
  const teamMembers = [
    { name: "刘备", title: "人事部经理", description: "*添加职位描述*.", phone: "139-0000-0000" },
    { name: "关羽", title: "紫砂大曲产品经理", description: "*添加职位描述*", phone: "139-0000-0000" },
    { name: "张飞", title: "国窖1573产品经理", description: "*添加职位描述*", phone: "139-0000-0000" },
    { name: "诸葛亮", title: "消费者业务经理", description: "*添加职位描述*", phone: "139-0000-0000" }
  ];

  return (
    <div className="contact-container">
      {teamMembers.map((member, index) => (
        <div className="contact-card" key={index}>
          <h2>{member.name}</h2>
          <p className="title">{member.title}</p>
          <p>{member.description}</p>
          <p>电话: {member.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default ContactMain;
