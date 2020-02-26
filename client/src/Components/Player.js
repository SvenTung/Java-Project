import React from 'react';
import Option from "./Option";


const Player = (props) => {
  return (
    <div className={"player"}>
      {props.player.selectedOption === '' ? (
        <>
        {props.hoveredOption === 'rock' ? (
          <button onClick={() => props.setPlayerOption("rock")} className={"hoveredOption"}> <Option option={"rock"}/></button>
        ) : (
          <button onClick={() => props.setPlayerOption("rock")} className={"playerOption"}> <Option option={"rock"}/></button>
        )}
        {props.hoveredOption === 'paper' ? (
          <button onClick={() => props.setPlayerOption("paper")} className={"hoveredOption"}> <Option option={"paper"}/></button>
        ) : (
          <button onClick={() => props.setPlayerOption("paper")} className={"playerOption"}> <Option option={"paper"}/></button>
        )}
        {props.hoveredOption === 'scissors' ? (
          <button onClick={() => props.setPlayerOption("scissors")} className={"hoveredOption"}> <Option option={"scissors"}/></button>
        ) : (
          <button onClick={() => props.setPlayerOption("scissors")} className={"playerOption"}> <Option option={"scissors"}/></button>
        )}
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
