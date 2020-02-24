import React from 'react';

const WelcomeContainer = (props) => {
  return (
    <div className="content">
    <br/>
    <h3>Welcome to GSS Arcade</h3>
      <h2 href="/select">Recently Uploaded Games</h2>
      <a href="/rps"><img src="/assets/cartridge1.png" href="/rps" style={{height: "25vh"}} /></a>
      <a href="/rps2"><img src="/assets/cartridge3.png" href="/rps" style={{height: "25vh"}} /></a>

      <h6>Upload games +</h6>

       <div>
       <form >
       <label >Game Name: </label>
       <input type="text" name="name"/>
      <br/>
      <label >Bit: </label>
        <input type="number" name="bit"/>
        <br/>
        <button className="yol" type="submit">Add Game</button>
      </form>
      </div>

    </div>

  )
}

export default WelcomeContainer;
