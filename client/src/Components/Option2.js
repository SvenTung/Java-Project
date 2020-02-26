import React from 'react';

import RockAlly from './images/RockAlly'
import ToiletPaper from './images/ToiletPaper'
import BluntScissors from './images/BluntScissors'

const Option2 = (props) => {
  return (
    //replace this code with our own option images
    <div style={{width: "5vw"}}>
      {props.option === 'softrock' ? (
        <RockAlly/>
      ) : (
        props.option === 'toiletpaper' ? (
          <ToiletPaper/>
        ) : (
          <BluntScissors/>
        )
      )}
    </div>
  )
};

export default Option2;
