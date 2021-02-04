import styled from "styled-components";

export const Buttons = styled.button`
  border: none;
  outline: none;
  border-radius: 5%;
  background-color: #cc0;
  text-transform: uppercase;
  width: 150px;
  height: 35px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px #ccc;
  }
`;
