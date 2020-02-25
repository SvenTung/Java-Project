import React from 'react';
import Option from "./Option";

const Player = (props) => {
  return (
    <div className={"player"}>
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
          <Option
            option={props.player.selectedOption}
          />
      )}
    </div>
  )
};

export default Player
