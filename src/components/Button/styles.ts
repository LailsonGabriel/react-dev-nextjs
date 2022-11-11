import styled from "styled-components";

export const ButtonComponent = styled.button`
  background: ${({ theme }) => theme.greyBackBtn};
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  padding: 7px;

  :hover {
    color: ${({ theme }) => theme.purple500};
    transition: ease 0.5s;
  }
`;
