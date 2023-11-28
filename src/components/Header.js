import React from 'react';
import '../styles/Header.css';
import logo from '../img/logo0.png'; // Make sure the path to the logo is correct

function Header() {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <img src={logo} alt="Company Logo" className="logo"/> {/* Add this line for the logo */}
          <h1>重庆乾阳酒类销售股份有限公司</h1>
        </div>
        
        <nav>
            <ul>
                <li className="current"><a href="/">公司首页</a></li>
                <li><a href="/develop">产品介绍</a></li>
                <li><a href="/develop">社会责任</a></li>
                <li><a href="/develop">招贤纳士</a></li>
                <li><a href="/develop">联系我们</a></li>
            </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
