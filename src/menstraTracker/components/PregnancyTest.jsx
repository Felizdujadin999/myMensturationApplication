import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/PregnancyTest.css";

function PregnancyTest() {
  const [testResult, setTestResult] = useState(null);
  const [cycleLength, setCycleLength] = useState("");

  const handleCycleLengthChange = (event) => {
    setCycleLength(event.target.value);
  };

  const handleTestClick = () => {
    if (cycleLength === "") {
      alert("Please enter your menstrual cycle length.");
      return;
    }

    const daysSinceLastPeriod = prompt("How many days has it been since your last period?");
    if (daysSinceLastPeriod === null) {
      return;
    }

    const daysSinceLastPeriodNumber = parseInt(daysSinceLastPeriod);
    if (isNaN(daysSinceLastPeriodNumber)) {
      alert("Please enter a valid number of days.");
      return;
    }

    const result = daysSinceLastPeriodNumber > parseInt(cycleLength) ? true : false;
    setTestResult(result);
  };

  return (
    <div className="body">
      <div className="body2">
        <center>
          <label htmlFor="cycleLength">Menstrual Cycle Length (in days): </label>
          <input type="number" id="cycleLength" value={cycleLength} onChange={handleCycleLengthChange} />

          <br/><br/>

          <button id="btn" onClick={handleTestClick}>Take Test</button>

          {testResult !== null && (
            <p>
              {testResult
                ? "Congratulations! You're pregnant."
                : "Sorry, you're not pregnant."}
            </p>
          )}

          <Link to="/Cycle">
            <button className="homeButton">Back</button>
          </Link>
        </center>
      </div>
    </div>
  );
}

export default PregnancyTest