import React from 'react';

const WelcomeContainer = (props) => {
  return (
    <div className="content">
    <br/>
    <h3>Welcome to GSS Arcade</h3>
      <h3 href="/select">Games</h3>
      <a href="/rps">Rock, Paper, Scissors</a>

      <h6>Upload games +</h6>
       <div>
       <form >
       <label >Game Name: </label>
      <input type="text" name="name"/>
      <br/>
      <label >Bit: </label>
        <input type="number" name="bit"/>
        <br/>
        <button type="submit">Add Game</button>
      </form>
    </div>
    </div>

  )
}

export default WelcomeContainer;
