import React from "react";
import { Button } from "../Button";
import { HeaderContainer, Title } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Crie seu formulário</Title>
      <Button text="novo" />
    </HeaderContainer>
  );
};

export default Header;
