import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cycle from './menstraTracker/components/Cycle';
import FrontCyclePage from './menstraTracker/components/CycleFrontPage';
import TrackPeriod from './menstraTracker/components/TrackPage';
import Rating from './menstraTracker/components/RateUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>`
          {/* <Route path='/tictactoe' element={<Tictactoe />} /> */}
          <Route path='/Cycle' element={<Cycle />} />
          <Route path='/FrontPage' element={<FrontCyclePage />} />
          <Route path='/TrackPeriod' element={<TrackPeriod />} />
          <Route path='/RateUs' element={<Rating />} />
        </Routes>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
