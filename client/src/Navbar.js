import React from 'react';

const NavBar = (props) => {
  return (
    <header>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/select">Games</a>
        </li>
        <li>
          <a href="/rps">Rock, paper, scissors</a>
        </li>
      </ul>
    </header>
  )
}

export default NavBar;
