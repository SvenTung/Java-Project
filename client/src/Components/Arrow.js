import React, {Component} from 'react';

class Arrow extends Component{

  render(){
    return (
      <p>{this.props.choices[this.props.hover]}</p>
    )
  }
}

export default Arrow
