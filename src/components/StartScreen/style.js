import styled from "styled-components";

export const Borda = styled.div`
  border: 2px solid
    ${(props) => {
      switch (props.house) {
        case "Gryffindor":
          return "red";
        case "Slytherin":
          return "green";
        case "Hufflepuff":
          return "yellow";
        case "Ravenclaw":
          return "blue";
        default:
      }
    }};
  border-radius: 5%;
  text-align: center;
  margin: 10px;
  padding: 5px;
  min-width: 250px;
  display: block;
  position: relative;

  &::after {
    content: "";
    background: ${(props) => {
      switch (props.house) {
        case "Gryffindor":
          return `url(./images/gryffindor.png)`;
        case "Slytherin":
          return "url(./images/slytherin.png)";
        case "Hufflepuff":
          return "url(./images/hufflepuff.png)";
        case "Ravenclaw":
          return "url(./images/ravenclaw.png)";
        default:
      }
    }};
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }

  h2 {
    font-size: 1.2rem;
    margin: 10px;
    text-shadow: 2px 2px #333;
  }
  div {
    font-size: 1rem;
    text-shadow: 2px 2px #333;
  }
`;

export const Board = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 100px;

  h3 {
    font-size: 1.5rem;
    margin: 25px 10px 5px 10px;
    text-shadow: 2px 2px #333;
  }
`;

export const QuadroComp = styled.div`
  margin: 10px auto;
  padding: 10px;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

export const TournamentAnnounce = styled.div`
  margin: 10px auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-family: "HP", sans-serif;
  font-weight: lighter;

  h1 {
    margin: 15px;
    font-size: 5rem;
    text-shadow: 2px 2px #333;
  }

  h3 {
    margin: 10px 10px 20px 10px;
    text-shadow: 2px 2px #333;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("./images/tela_inicial.jpeg");
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  &:after {
    opacity: 0.3;
  }
`;
