import React, {useState} from "react";
import Moment from "moment";
import {useNavigate} from 'react-router-dom';
import "../styles/TrackPage.css"

function TrackPeriod() {
    const Navigate = useNavigate();
    const [lastFlowDate, setLastFlowDate] = useState("");
    const [cycleLength, setCycleLength] = useState("");
    const [period, setNextPeriod] = useState("")
    const handleLastFlowDateFormat = (event) => {
        const date = Moment(event.target.value).format('YYYY-MM-DD');
        setLastFlowDate(date);
    };

    const calculatePeriod = () => {
        const date = Moment(lastFlowDate);
        const date2 = date.add(cycleLength, "days");

        setNextPeriod(date2.format("D, MMMM YYYY"));
    }

    return (
        <React.Fragment>
            <div className="main">
            <div id="top">
            <div className="topic">
                <p><span>YOUR_CYCLE 🩸</span></p>
            </div>
            <li>
                <a href="https://www.always.com/en-us/tips-and-advice/your-first-period/10-common-period-questions"><p>FAQ</p></a>
            </li>
            <li>
                <a href="https://semicolon.africa"><p>About Us</p></a>
            </li>
            <li>
            <a href="https://github.com/Felizdujadin999"><p>Check us on Github</p></a>
                
            </li>
            <li>
            <a href="https://twitter.com/Felizdujadin999"><p>Follow us on Twitter</p></a>
            </li>
            {/* <li>
                <p id="signIn">Sign In</p>
            </li> */}
            </div><br/><br/><br/>
                <div className="form-container">
                <p className="text">YOUR <span>FLOW</span> IS OUR PRIORITY...</p>
                    <form>
                        <div className="firstPrompt">
                            <label htmlFor="lastFlowDate"> Enter first day of flow: </label>
                            <input
                                type="date"
                                id="lastFlowDate"
                                value={lastFlowDate}
                                onChange={(e) => setLastFlowDate(e.target.value)}/>
                        </div><br/><br/>

                        <div className="secondPrompt">
                            <label htmlFor="cycleLength">Enter cycle duraton: </label>
                            <input type="number"
                                   id="cycleLength"
                                   value={cycleLength} onChange={(e) => setCycleLength(e.target.value)}
                            />
                        </div><br/><br/><br/><br/>

                        <button id="submit" type="button" onClick={calculatePeriod}>SUBMIT</button><br/><br/><br/><br/><br/><br/>

                        <button id="back" onClick={()=>{Navigate("/Cycle")}}>BACK</button>
                    </form>

                    {period && (
         <p className="result">Your next period will start on <strong>{period}. Do take care darling..</strong></p>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
}

export default TrackPeriod