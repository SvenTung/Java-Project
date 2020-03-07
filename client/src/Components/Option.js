import React from 'react';

import Rock from './images/Rock'
import Paper from './images/Paper'
import Scissors from './images/Scissors'

const Option = (props) => {
  return (
    //replace this code with our own option images
    <div className="option" style={{width: "5vw"}}>
      {props.option === 'rock' ? (
        <Rock/>
      ) : (
        props.option === 'paper' ? (
          <Paper/>
        ) : (
          <Scissors/>
        )
      )}
    </div>
  )
};

export default Option;
