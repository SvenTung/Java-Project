import React, {Component} from 'react';
import GameList from '../components/GameList.js';

class GameSelectContainer extends Component {
  state = {
    games: []
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/games')
    .then(data => this.setState({games: data}))
  }

  render = () => {
    return (
      <GameList games={this.state.game} />
    )
  }

}
export default GameSelectContainer
