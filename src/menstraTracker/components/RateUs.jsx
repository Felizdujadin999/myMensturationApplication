import React, { useState } from "react";
import '../styles/RateUs.css'
import {useNavigate} from 'react-router-dom';

function Rating() {
    const Navigate = useNavigate();
    const [rating, setRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleResetClick = () => {
    setRating(0);
  }

  return (
    <center>
    <div className="class">
      <p>Please rate my service:</p>
      <div>
        <span onClick={() => handleRatingClick(1)}>{rating >= 1 ? "★" : "☆"}</span>
        <span onClick={() => handleRatingClick(2)}>{rating >= 2 ? "★" : "☆"}</span>
        <span onClick={() => handleRatingClick(3)}>{rating >= 3 ? "★" : "☆"}</span>
        <span onClick={() => handleRatingClick(4)}>{rating >= 4 ? "★" : "☆"}</span>
        <span onClick={() => handleRatingClick(5)}>{rating >= 5 ? "★" : "☆"}</span>
      </div>
      <p>You rated me: {rating} {rating !== 1 ? "stars" : "star"}</p>
      <button onClick={handleResetClick}>Reset Rating</button>
      <button id="back" onClick={()=>{Navigate("/Cycle")}}>Back</button>
    </div>
    </center>
  );
}

export default Rating;