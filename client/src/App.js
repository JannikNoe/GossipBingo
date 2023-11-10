import logo from './logo.svg';
import './App.css';

// Router Testcode von GPT
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import LandingPage from './components/LandingpageView';
import AuthLandingPage from './components/AuthLandingPage.js';
import GameOverview from "./components/GameOverviewView.js";
import GameView from "./components/GameView";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/start" element={<AuthLandingPage />} />
                <Route path="/gameoverview" element={<GameOverview />} />
                <Route path="/gameview" element={<GameView />} />
            </Routes>
        </Router>
    );
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <main>
//         <h2 class="">MAMA HÖRST DU MICH?</h2>
//       </main>
//     </div>
//   );
// }
//
// export default App;

