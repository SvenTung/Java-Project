import React from 'react';
import Option2 from "./Option2";


const Player2 = (props) => {
  return (
    <div className={"player"}>
      {props.player.selectedOption === '' ? (
        <>
        {props.hoveredOption === 'softrock' ? (
          <button onClick={() => props.setPlayerOption("softrock")} className={"hoveredOption"}> <Option2 option={"softrock"}/></button>
        ) : (
          <button onClick={() => props.setPlayerOption("softrock")} className={"playerOption"}> <Option2 option={"softrock"}/></button>
        )}
        {props.hoveredOption === 'toiletpaper' ? (
          <button onClick={() => props.setPlayerOption("toiletpaper")} className={"hoveredOption"}> <Option2 option={"toiletpaper"}/></button>
        ) : (
          <button onClick={() => props.setPlayerOption("toiletpaper")} className={"playerOption"}> <Option2 option={"toiletpaper"}/></button>
        )}
        {props.hoveredOption === 'bluntscissors' ? (
          <button onClick={() => props.setPlayerOption("bluntscissors")} className={"hoveredOption"}> <Option2 option={"bluntscissors"}/></button>
        ) : (
          <button onClick={() => props.setPlayerOption("bluntscissors")} className={"playerOption"}> <Option2 option={"bluntscissors"}/></button>
        )}
        </>
      ) : (
        <Option2
          option={props.player.selectedOption}
        />
      )}
    </div>
  )
};

export default Player2
