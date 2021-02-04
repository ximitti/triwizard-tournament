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
    background: url(${(props) => {
      switch (props.house) {
        case "Gryffindor":
          return `./images/gryffindor.png`;
        case "Slytherin":
          return "./images/slytherin.png";
        case "Hufflepuff":
          return "./images/hufflepuff.png";
        case "Ravenclaw":
          return "./images/ravenclaw.png";
        default:
      }
    }});
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    /* z-index: -1; */
  }

  h2 {
    font-size: 2rem;
    margin: 10px;
  }
  div {
    font-size: 1.3rem;
  }
`;

export const Board = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  h3 {
    margin: 25px 10px 5px 10px;
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

  h1 {
    margin: 15px;
  }

  h3 {
    margin: 10px 10px 20px 10px;
  }
`;
