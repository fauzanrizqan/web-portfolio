// src/components/Ball.js
import React, { useState } from 'react';
import './Ball.css';

function Ball() {
  // Define a set of colors to choose from
  const colors = ["#795b7e", "#e2f2f4", "#4d4372", "#b77f98", "#322f5f", "#f7b2b7", "#f7f7ff", "#f7b32b", "#f76f6d", "#f7f7f7"];

  // Function to randomly select a color from the set
  const generateRandomColor = (currColors) => {
    // Filter out the current colors from the set
    const availableColors = colors.filter((color) => !currColors || !currColors.includes(color));
    // Select a random color from the available colors
    return availableColors[Math.floor(Math.random() * availableColors.length)];

  };

  // Store each ball's initial color and position
  const initialPositions = [...Array(28)].map(() => ({
    color: generateRandomColor(),
    top: `${Math.floor(Math.random() * 100)}vh`,
  }));
  
  const [balls, setBalls] = useState(initialPositions);

  const handleColorChange = (index, currColors) => {
    setBalls((prevBalls) =>
      prevBalls.map((ball, i) =>
        i === index ? { ...ball, color: generateRandomColor(currColors) } : ball
      )
    );
  };

  return (
    <div className="ball-container">
      {balls.map((ball, index) => (
        <span
          key={index}
          className="animated-ball"
          style={{
            '--i': index + 5,
            top: ball.top, // Use stored initial position
            backgroundColor: ball.color, // Use stored color
          }}
          onClick={() => handleColorChange(index, ball.color)} // Update color only for the clicked ball
        ></span>
      ))}
    </div>
  );
}

export default Ball;
