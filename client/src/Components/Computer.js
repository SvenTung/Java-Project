import React from 'react';
import Option from "./Option";

const Computer = (props) => {
  return (
    <div className={"computer"}>
      <h3>Player {props.player.name} ({props.player.wins} wins)</h3>
      {props.player.selectedOption === '' ? (

      ) : (
        <button>
          <Option
            option={props.player.selectedOption}
            color={props.gameState !== 'active' ?
            (
              props.player.winner ? 'green' : 'red'
            ) : (
              ''
            )}
          />
        </button>

      )}
    </div>
  )
};

export default Player
