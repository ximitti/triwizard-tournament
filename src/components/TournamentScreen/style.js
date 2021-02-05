import styled from "styled-components";

export const Board = styled.div`
  margin: 10px auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;

  h1 {
    font-family: "HP", serif;
    font-size: 5rem;
    text-shadow: 2px 2px #333;
    margin: 25px 10px 5px 10px;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("./images/tela_torneio.jpeg");
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  &:after {
    opacity: 0.3;
  }
`;
