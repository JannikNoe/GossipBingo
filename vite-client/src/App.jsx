// import logo from './logo.svg';
// import './App.css';
import './index.css';
// Router Testcode von GPT
import React, { useEffect, useLocation }from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AuthProvider } from './services/AuthContext.jsx';
import Api from "./services/api.jsx";

import LandingPage from './components/landingpage/LandingpageView.jsx';
import AuthLandingPage from './components/features/auth/AuthLandingPage.jsx';
import GameOverview from "./components/features/game/GameOverviewView.jsx";
import GameView from "./components/features/game/GameView.jsx";
import LoginView from "./components/features/auth/LoginView.jsx";
import RegisterView from "./components/features/auth/RegisterView.jsx";
import BingoGridView from "./components/features/game/gameComponents/bingoGridView.jsx";
import EditBingoGridView from "./components/features/game/gameComponents/editBingoGridView.jsx";
import GossipTrackerView from "./components/features/game/gameComponents/GossipTrackerView.jsx";
import AddGossipView from "./components/features/game/gameComponents/AddGossipView.jsx";
import DashboardView from "./components/features/game/dashboard/dashboardView.jsx";
import UserManagementView from "./components/features/game/dashboard/UserManagementView.jsx";
import SettingsView from "./components/features/settingsView.jsx";
import NotFound from "./components/NotFound.jsx";
import { ModalProvider, ModalContext } from './context/ModalContext.jsx';
import BingoChecker from "./components/layout/bingoCheck.jsx";

function App() {
    useEffect(() => {
        // Setze den Titel beim Laden der Komponente
        document.title = "GossipBingo";

    }, []); // Dieser Effekt wird nur einmal beim Laden der Komponente ausgeführt

    return (
        <AuthProvider>
            <ModalProvider>
                <Router>
                    <BingoChecker /> {/* BingoChecker ohne gameId */}
                    <Routes>
                        <Route exact path="/" element={<LandingPage />} />
                        <Route path="/login" element={<LoginView />} />
                        <Route path="/register" element={<RegisterView />} />
                        <Route path="/start" element={<AuthLandingPage />} />

                        <Route path="/gameoverview" element={<GameOverview />} />
                        <Route path="/gameview" element={<GameView />} />
                        <Route path="/gamegrid" element={<BingoGridView />} />
                        <Route path="/editBingogrid" element={<EditBingoGridView />} />
                        <Route path="/gossiptracker" element={<GossipTrackerView />} />
                        <Route path="/addgossip" element={<AddGossipView />} />

                        <Route path="/settings" element={<SettingsView />} />

                        <Route path="/dashboard" element={<DashboardView />} />
                        <Route path="/dashboard/usermanagement" element={<UserManagementView />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
            </ModalProvider>
        </AuthProvider>
    );
}


export default App;


