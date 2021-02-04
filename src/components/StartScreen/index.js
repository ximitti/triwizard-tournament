import { Component } from "react";
import Button from "../Button";
import { Borda, QuadroComp, TournamentAnnounce } from "./style.js";

class StartScreen extends Component {
  render() {
    const { gryffindor, slytherin, hufflepuff, ravenclaw } = this.props.houses;
    return (
      <div>
        <TournamentAnnounce>
          <h1>Triwizard Tournament</h1>
          <h3>Click to find wizards and start the Tournament!</h3>
          <Button func={this.props.func} />
        </TournamentAnnounce>
        <QuadroComp>
          <Borda color="red">
            <h2>Gryffindor</h2>
            {gryffindor.map((competitor, index) => (
              <div key={index}>{competitor.name}</div>
            ))}
          </Borda>
          <Borda color="green">
            <h2>Slytherin</h2>
            {slytherin.map((competitor, index) => (
              <div key={index}>{competitor.name}</div>
            ))}
          </Borda>
          <Borda color="yellow">
            <h2>Hufflepuff</h2>
            {hufflepuff.map((competitor, index) => (
              <div key={index}>{competitor.name}</div>
            ))}
          </Borda>
          <Borda color="blue">
            <h2>Ravenclaw</h2>
            {ravenclaw.map((competitor, index) => (
              <div key={index}>{competitor.name}</div>
            ))}
          </Borda>
        </QuadroComp>
      </div>
    );
  }
}

export default StartScreen;
