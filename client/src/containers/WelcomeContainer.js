import React from 'react';
import NavBar from '../Navbar.js'

const WelcomeContainer = (props) => {
  return (
    <div className="content">
    <NavBar />
      <h3 href="/select">Games</h3>
      <a href="/rps">Rock, Paper, Scissors</a>
      <p>Welcome to GSS Arcade</p>
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
