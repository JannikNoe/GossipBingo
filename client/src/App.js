import logo from './logo.svg';
import './App.css';

// Router Testcode von GPT
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import LandingPage from './components/landingpage/LandingpageView';
import AuthLandingPage from './components/features/auth/AuthLandingPage.js';
import GameOverview from "./components/features/game/GameOverviewView.js";
import GameView from "./components/features/game/GameView.js";
import LoginView from "./components/features/auth/LoginView.js";
import RegisterView from "./components/features/auth/RegisterView.js";
import BingoGridView from "./components/features/game/bingoGridView.js";

import { ModalProvider, ModalContext } from './context/ModalContext';
import ModalWrapper from "./components/layout/ModalWrapper";

function App() {

    return (
        <ModalProvider>
            <Router>
                <ModalWrapper /> {/* ModalWrapper innerhalb von Router */}
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/register" element={<RegisterView />} />
                    <Route path="/start" element={<AuthLandingPage />} />
                    <Route path="/gameoverview" element={<GameOverview />} />
                    <Route path="/gameview" element={<GameView />} />
                    <Route path="/gamegrid" element={<BingoGridView />} />
                </Routes>
            </Router>
        </ModalProvider>
    );
}

export default App;


