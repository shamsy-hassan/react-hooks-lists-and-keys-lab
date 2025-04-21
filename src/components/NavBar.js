import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (<nav>
   <nav>
      {links.map((link) => (
        <a href={`#${link}`} key={link}>
          {link}
        </a>
      ))}
    </nav>
    </nav>);

}

export default NavBar;
