import React from 'react';
import Option from "./Option";

const Player = (props) => {
  return (
    <div className={"player"}>
      <h5>Player {props.player.name} ({props.player.wins} wins)</h5>
      {props.player.selectedOption === '' ? (
        <>
          <button onClick={() => props.setPlayerOption("rock")} className={"playerOption"}>
          <Option option={"rock"}/></button>
          <button onClick={() => props.setPlayerOption("paper")} className={"playerOption"}>
          <Option option={"paper"}/></button>
          <button onClick={() => props.setPlayerOption("scissors")}
          className={"playerOption"}><Option option={"scissors"}/></button>
        </>
      ) : (
        <button>
          <Option
            option={props.player.selectedOption}
          />
        </button>

      )}
    </div>
  )
};

export default Player
