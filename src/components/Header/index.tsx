import React from "react";
import { Button } from "../Button";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <h4>Crie seu form</h4>
      <Button text="criar form" />
    </HeaderContainer>
  );
};

export default Header;
