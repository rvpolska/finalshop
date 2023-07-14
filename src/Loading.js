import React from 'react';
import './Loading.css'; // файл со стилями

function Loading() {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      <h2 className="loading-text">Loading...</h2>
      <img alt='load' src='https://i.pinimg.com/originals/79/d9/85/79d9859f3e3f04df49495ebcd2e3f848.gif'/>
    </div>
  );
}

export default Loading;
