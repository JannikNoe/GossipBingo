import logo from './logo.svg';
import './App.css';

// Router Testcode von GPT
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AuthProvider } from './services/AuthContext';

import LandingPage from './components/landingpage/LandingpageView';
import AuthLandingPage from './components/features/auth/AuthLandingPage.js';
import GameOverview from "./components/features/game/GameOverviewView.js";
import GameView from "./components/features/game/GameView.js";
import LoginView from "./components/features/auth/LoginView.js";
import RegisterView from "./components/features/auth/RegisterView.js";
import BingoGridView from "./components/features/game/gameComponents/bingoGridView.js";
import EditBingoGridView from "./components/features/game/gameComponents/editBingoGridView";
import GossipTrackerView from "./components/features/game/gameComponents/GossipTrackerView";
import AddGossipView from "./components/features/game/gameComponents/AddGossipView";
import DashboardView from "./components/features/game/dashboard/dashboardView.js";
import UserManagementView from "./components/features/game/dashboard/UserManagementView.js";
import SettingsView from "./components/features/settingsView";

import { ModalProvider, ModalContext } from './context/ModalContext';
import ModalWrapper from "./components/layout/ModalWrapper";

function App() {

    return (
        <AuthProvider>
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
                        <Route path="/editgamegrid" element={<EditBingoGridView />} />
                        <Route path="/gossiptracker" element={<GossipTrackerView />} />
                        <Route path="/addgossip" element={<AddGossipView />} />

                        <Route path="/settings" element={<SettingsView />} />

                        <Route path="/dashboard" element={<DashboardView />} />
                        <Route path="/dashboard/usermanagement" element={<UserManagementView />} />
                    </Routes>
                </Router>
            </ModalProvider>
        </AuthProvider>
    );
}

export default App;


