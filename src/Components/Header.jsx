import React from "react";
import HomeBg from "../Assets/img/HomePage-bg.mp4";
import ContactBg from "../Assets/img/contact-bg.mp4";

function Header({ section }) {
  let headerSource;
  switch (section) {
    case "category":
      headerSource = <source src={HomeBg} type="video/mp4" />;
      break;
    case "product":
      headerSource = <source src={HomeBg} type="video/mp4" />;
      break;
    case "contact":
      headerSource = <source src={ContactBg} type="video/mp4" />;
      break;
    default:
      headerSource = <source src={HomeBg} type="video/mp4" />;
  }
  return (
    <div>
      <video width="100%" autoPlay playsInline loop muted>
        {headerSource}
      </video>
    </div>
  );
}

export default Header;
