import React from 'react';
import './Image.css';

const Image = (props) => {
  const imgStyle = {
    background: `url(${props.link})`,
    height: '75%',
    width: '100%',
    backgroundSize: 'cover'
  }
  return (
    <div className="image-card">
      <div 
        style={imgStyle}
        className="image-holder"></div>
      <h3>{props.desc}</h3>
    </div>
  )
}


export default Image;