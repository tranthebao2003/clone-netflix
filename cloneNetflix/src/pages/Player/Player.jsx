import React from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {
  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" />
      {/* The <iframe> element is used to embed 
      another HTML page within the current page 
      and display content in frame with width and
      height set up before*/}
      <iframe
        width="90%"
        height="90%"
        src="https://www.youtube.com/embed/hkHHwA-vEyQ"
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  );
}

export default Player
