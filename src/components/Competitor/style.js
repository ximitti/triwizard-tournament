import styled from "styled-components";

export const Card = styled.div`
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

  max-width: 200px;
  max-height: 400px;
  width: 100%;
  height: 100%;
  border-radius: 5%;
  text-align: center;
  margin: 10px;
  padding: 5px;
  background-color: #ccc;
`;

export const ImageBox = styled.div`
  margin: 5px auto;
`;

export const InfoBox = styled.div`
  margin: 5px auto;
  padding: 5px;
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
    border-radius: 10px;
  }
`;

export const Info = styled.p`
  margin: 5px;
  font-size: 1rem;
  text-transform: capitalize;
  ${(props) => {
    switch (props.house) {
      case "Gryffindor":
        return { color: "red" };
      case "Slytherin":
        return { color: "green" };
      case "Hufflepuff":
        return { color: "yellow" };
      case "Ravenclaw":
        return { color: "blue" };
      default:
        return { color: "black" };
    }
  }}
`;

export const Picture = styled.img`
  max-width: 190px;
  max-height: 250px;
  min-width: 190px;
  min-height: 250px;
  width: 100%;
  height: 100%;
  border-radius: 5%;
`;
