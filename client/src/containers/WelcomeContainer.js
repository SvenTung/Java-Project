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
      <div class="share-btns">
      <br/>
     <a
       class="share-btn twitter"
       href="https://twitter.com/share?url=<URL>&text=<TITLE>&via=GregorySchier"
       target="_blank"
     >Twitter</a>

     <a
       class="share-btn facebook"
       href="https://www.facebook.com/sharer/sharer.php?u=#url<URL>"
       target="_blank"
     >Facebook</a>

     <a
       class="share-btn reddit"
       href="https://reddit.com/submit?url=<URL>&title=<TITLE>"
       target="_blank"
     >Reddit</a>

     <a
       class="share-btn hackernews"
       href="https://news.ycombinator.com/submitlink?u=<URL>&t=<TITLE>"
       target="_blank"
     >Hacker News</a>

     <a
       class="share-btn linkedin"
       href="https://www.linkedin.com/shareArticle?url=<URL>&title=<TITLE>"
       target="_blank"
     >LinkedIn</a>

     <a
       class="share-btn email"
       href="mailto:?subject=<TITLE>&body=<URL>"
       target="_blank"
     >Email</a>
   </div>

    </div>

  )
}

export default WelcomeContainer;
