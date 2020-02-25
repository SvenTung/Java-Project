import React from 'react';
import RockPaperScissors from  '../components/RockPaperScissors'
import CodeBoyTemplate from '../components/CodeBoyTemplate'

const RpsContainer = (props) => {
  return(
    <div className = "main-content">
      <CodeBoyTemplate />
      <RockPaperScissors />
    </div>
  )
}

export default RpsContainer
