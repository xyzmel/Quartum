import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li className="menu-item-has-children">
          <Link to="/">Hjem</Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/tjenester"}>
            Tjenester 
          </Link>
         
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/portefolje"}>
            Portefølje 
          </Link>
         
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/om"}>
            Om 
          </Link>
          
        </li>
      
        <li>
          <Link to={process.env.PUBLIC_URL + "/kontakt"}>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
