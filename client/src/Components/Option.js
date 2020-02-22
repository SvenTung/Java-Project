import React, {Fragment} from 'react';

import Rock from './images/Rock'
import Paper from './images/Paper'
import Scissors from './images/Scissors'

const Option = (props) => {
  const options = {
    "rock": Rock,
    "paper": Paper,
    "scissors": Scissors
  };

  return (
    //replace this code with our own option images
    <div style={{width: "5vw"}}>
      {
        props.option === 'rock' ? (
          <Rock/>
        ) : (
          props.option === 'paper' ? (
            <Paper/>
          ) : (
            <Scissors/>
          )
        )
      }
    </div>
  )
};

export default Option;
