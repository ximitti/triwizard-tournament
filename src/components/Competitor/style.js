import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    background-color: #888;
  }
  50% {
    background-color: #aaa;
  }
  100% {
    background-color: #ccc;
  }
`;

const startBlur = keyframes`
  0% {
    filter: blur(30px);
  }
  50% {
    filter: blur(15px);
  }
  100% {
    filter: blur(0px);
  }
`;

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
  max-height: 350px;
  width: 100%;
  height: 100%;
  border-radius: 5%;
  text-align: center;
  margin: 10px;
  padding: 5px;
  transition: 0.5s;
  background: linear-gradient(45deg, #aaa, #ccc);
  /* animation: ${pulse} 3s ease-out alternate infinite; */
  animation: ${startBlur} 2.5s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    box-shadow: 0 0 5px #333333;
  }
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
