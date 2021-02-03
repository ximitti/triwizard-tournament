import { Component } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";

class App extends Component {
  state = {
    startScreen: true,
    competitorPool: [],
  };
  API = "https://hp-api.herokuapp.com/api/characters/students";

  componentDidMount() {
    fetch(this.API)
      .then((response) => response.json())
      .then((competitors) => this.setState({ competitorPool: competitors }))
      .catch((err) => console.log(err));
  }

  startTournament = () => {
    const { startScreen } = this.state;
    this.setState({ startScreen: !startScreen });
  };
  render() {
    const { startScreen } = this.state;
    console.log(startScreen);
    return (
      <div className="App">
        {startScreen && <StartScreen func={this.startTournament} />}
      </div>
    );
  }
}

export default App;
