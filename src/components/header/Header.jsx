import React from "react";
import "./Header.css";
import Action from "./Action";

import TypingComponent from "../about/TypingComponent";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="text-light">
          <TypingComponent />
        </h5>
        <Action />
      </div>
    </header>
  );
};

export default Header;
