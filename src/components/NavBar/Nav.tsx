import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import MenuLinks from "./MenuLinks";
import NavBarContainer from "./NavBarContainer";
import { useState } from "react";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer >
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};
export default NavBar;
