import React from 'react';
import axios from "axios";
import Player from "./Player"


class PlayerList extends React.Component {

  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(res => {
      console.log(res.data);
      this.setState({
        players: res.data,
    });
  })
}


  render() {
    return (
      <div className="App">
        <h1>Women's World Cup Players</h1>
     {this.state.players.map(player => {
       return <Player
       playerName = {player.name} 
       searchedCountry = {player.country}
       count = {player.searches}
     />
     })}
    </div>
    );
        }
}


export default PlayerList;
