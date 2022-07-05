import React from "react";
import { MenuIcon } from "./Icons";
import { HeaderWrapper } from "./LayoutStyles";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="w-100 px-3">
        <MenuIcon />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
