import React from 'react';



const Player = props => {
    return (
      <div>
          <h3>{props.playerName}</h3>
          <p>Trending Country: {props.searchedCountry}</p>
          <p>Searched: {props.count} Times</p>
          </div>
     
    )
  }
  export default Player;
  