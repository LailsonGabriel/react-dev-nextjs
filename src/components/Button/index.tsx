import React from "react";
import { IButton } from "./interface";

export const Button = ({ onClick, text }: IButton) => {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
};
