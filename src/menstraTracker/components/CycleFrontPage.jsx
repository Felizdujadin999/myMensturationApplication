import React from "react";
import '../styles/CycleFrontPage.css';
import {useNavigate} from 'react-router-dom';
import video from "../../menstraTracker/assets/video/Video.mp4"

function FrontCyclePage(){
    const Navigate = useNavigate();
    return(
        <div className="firstcontainer">
          <div id="maintext">Hello beautiful...</div>  
          <p id="maintext">WELCOME TO <span>YOUR_CYCLE</span> WEBSITE</p>
          <p id="maintext">Have you seen your <span>period</span> today??...🙃</p>
          <video className="video" autoPlay loop>
                <source src={video} type="video/mp4"/>
          </video><br/> 
          <div id="info">KEY FACTS ON MENSTRUATION: <br/>

          <div className="boxOne">  1. On average a woman menstruates for about 7 years during their lifetime.</div><br/>
          <div className="boxTwo">2. The first period can be met with either celebration, fear or concern. 
             For every girl, this signifies an important transition to wommanhood.</div><br/>
          <div className="boxThree">3. A rare period disorder can cause bleeding of the eyes.</div><br/>
          <div className="boxFour">4. Poor menstrual hygiene can pose physical health risks and has been linked to reproductive and urinary tract infections.</div><br/>
          <div className="boxFive">5. Sleeping with a nightlight can help regulate your cycle. </div><br/>
          <div className="boxSix">6. The sound of your voice changes during your period.</div>
          
          </div><br/><br/><br/>
             <button onClick={()=>{Navigate("/Cycle")}}>NEXT PAGE</button>
        </div>
    )
}
export default FrontCyclePage