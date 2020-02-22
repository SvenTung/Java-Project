import React, {Fragment} from 'react';

import Rock from './Rock'
import Paper from './Paper'
import Scissors from './Scissors'

const Option = (props) => {
  const options = {
    "rock": Rock,
    "paper": Paper,
    "scissors": Scissors
  };

  return (
    //replace this code with our own option images
    <Fragment>
      <Rock/>
      <Paper/>
      <Scissors/>
    </Fragment>
  )
};

export default Option;
