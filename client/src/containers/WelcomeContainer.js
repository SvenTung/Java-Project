import React from 'react';

const WelcomeContainer = (props) => {
  return (
    <div className="content">
      <br/>
      <h3>Welcome to GSS Arcade</h3>
      <h2 href="/select">Recently Uploaded Games</h2>
      <a href="/rps"><img src="/assets/cartridge1.png" href="/rps" style={{height: "25vh"}} alt=''/></a>
      <a href="/rps2"><img src="/assets/cartridge3.png" href="/rps2" style={{height: "25vh"}} alt=''/></a>
      <div>
        <form>
          <h6>Upload Game</h6>
          <label>Game Name: </label>
          <input type="text" name="name"/>
          <br/>
          <label>Games URL: </label>
          <input type="number" name="bit"/>
          <br/>
          <button type="submit" className="submithome">Submit</button>
          <br/>
        </form>
        <div className="uploadbtn">
          <label class="custom-file-upload">
            <input type="file"/>
            <i class="upload"></i> Game Upload
          </label>
        </div>
      </div>
      <div class="share-btns">
        <br/>
        <a
         class="share-btn twitter"
         href="https://twitter.com/share?url=<URL>&text=<TITLE>&via=GregorySchier"
         target="_blank"
         rel="noopener noreferrer"
        >Twitter</a>

        <a
         class="share-btn facebook"
         href="https://www.facebook.com/sharer/sharer.php?u=#url<URL>"
         target="_blank"
         rel="noopener noreferrer"
        >Facebook</a>

        <a
         class="share-btn reddit"
         href="https://reddit.com/submit?url=<URL>&title=<TITLE>"
         target="_blank"
         rel="noopener noreferrer"
        >Reddit</a>

        <a
         class="share-btn hackernews"
         href="https://news.ycombinator.com/submitlink?u=<URL>&t=<TITLE>"
         target="_blank"
         rel="noopener noreferrer"
        >Hacker News</a>

        <a
         class="share-btn linkedin"
         href="https://www.linkedin.com/shareArticle?url=<URL>&title=<TITLE>"
         target="_blank"
         rel="noopener noreferrer"
        >LinkedIn</a>

        <a
         class="share-btn email"
         href="mailto:?subject=<TITLE>&body=<URL>"
         target="_blank"
         rel="noopener noreferrer"
        >Email</a>

      </div>
      <p>GSS Styled &#169;</p>
    </div>
  )
}

export default WelcomeContainer;
