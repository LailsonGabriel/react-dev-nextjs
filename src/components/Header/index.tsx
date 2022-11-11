import React from "react";
import { Button } from "../Button";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header>
      <h4>Crie seu form</h4>
      <Button text="criar form" />
      {children}
    </header>
  );
};

export default Header;
