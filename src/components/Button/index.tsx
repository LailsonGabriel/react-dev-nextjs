import React from "react";
import { IButton } from "./interface";
import { ButtonComponent } from "./styles";

export const Button = ({ onClick, text }: IButton) => {
  return (
    <ButtonComponent type="button" onClick={onClick}>
      {text}
    </ButtonComponent>
  );
};
