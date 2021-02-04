import styled from "styled-components";

export const Borda = styled.div`
  border: 2px solid ${(props) => props.color};
  border-radius: 10px;
  text-align: center;
  margin: 10px;
  padding: 5px;
  min-width: 250px;

  h2 {
    font-size: 2rem;
    margin: 10px;
  }
  div {
    font-size: 1.3rem;
  }
`;

export const QuadroComp = styled.div`
  margin: 10px auto;
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
`;
