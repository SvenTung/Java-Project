import React, {Fragment} from 'react';

import Rock from './rock'
import Paper from './paper'
import Scissors from './scissors'

const Option = (props) => {
    const options = {
        "rock": Rock,
         "paper": Paper
    //     // "scissors": faHandScissors,
     };

    return (
      //replace this code with our own option images
      <Fragment>
        <Rock/>
        <Paper/>

      </Fragment>
    )
};

export default Option;
