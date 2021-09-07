import React from "react";
import HomeBg from '../Assets/img/HomePage-bg.mp4';

function Header() {
  return (
    <div>
      <video width="100%" autoPlay playsInline loop muted>
      <source src={HomeBg} type="video/mp4"/>
      </video>
    </div>
  );
}

export default Header;
