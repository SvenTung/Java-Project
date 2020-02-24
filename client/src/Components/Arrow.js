import React, {Component} from 'react';

class Arrow extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <p>{this.props.choices[this.props.hover]}</p>
    )
  }
}

export default Arrow
