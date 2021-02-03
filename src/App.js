import { Component } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import TournamentScreen from "./components/TournamentScreen";

class App extends Component {
  state = {
    startScreen: true,
    competitorPool: [],
    championsList: [],
    houses: {
      gryffindor: [],
      slytherin: [],
      hufflepuff: [],
      ravenclaw: [],
    },
  };
  API = "https://hp-api.herokuapp.com/api/characters/students";

  componentDidMount() {
    fetch(this.API)
      .then((response) => response.json())
      .then((competitors) => {
        const gryffindor = [],
          slytherin = [],
          hufflepuff = [],
          ravenclaw = [];

        for (const id in competitors) {
          switch (competitors[id].house) {
            case "Gryffindor":
              gryffindor.push(competitors[id]);
              break;
            case "Slytherin":
              slytherin.push(competitors[id]);
              break;
            case "Hufflepuff":
              hufflepuff.push(competitors[id]);
              break;
            case "Ravenclaw":
              ravenclaw.push(competitors[id]);
              break;
            default:
          }
        }

        this.setState({
          competitorPool: competitors,
          houses: { gryffindor, slytherin, hufflepuff, ravenclaw },
        });
      })
      .catch((err) => console.log(err));
  }

  findCompetitors = () => {
    const { competitorPool } = this.state;
    const champions = [],
      house = [];

    while (champions.length < 3) {
      const random = Math.round(Math.random() * (competitorPool.length - 1));
      if (
        !champions.includes(competitorPool[random]) &&
        !house.includes(competitorPool[random].house)
      ) {
        champions.push(competitorPool[random]);
        house.push(competitorPool[random].house);
      }
    }
    this.setState({ championsList: champions });
  };

  startTournament = () => {
    const { startScreen } = this.state;
    startScreen && this.findCompetitors();
    this.setState({ startScreen: !startScreen });
  };

  render() {
    const { startScreen, houses, championsList } = this.state;
    return (
      <div className="App">
        {startScreen && (
          <StartScreen func={this.startTournament} houses={houses} />
        )}
        {!startScreen && (
          <TournamentScreen
            func={this.startTournament}
            champions={championsList}
          />
        )}
      </div>
    );
  }
}

export default App;
