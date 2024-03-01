import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Register from './RegisterView.jsx';
import {AuthProvider} from "../../../services/AuthContext.jsx";
import Login from "./LoginView.jsx";
import {BrowserRouter} from "react-router-dom";

test('Fehlermeldung wird angezeigt, wenn keine Daten eingegeben werden', async () => {
    const { getByText, getByLabelText } = render(

    <BrowserRouter>
        <AuthProvider> {/* Einbetten der Login-Komponente in AuthProvider */}
            <Register />
        </AuthProvider>
    </BrowserRouter>
    );

    // Keine Daten eingeben
    fireEvent.click(getByText('Registrieren 🎉'));

    // Warten auf die Fehlermeldung
    await waitFor(() => {
        expect(getByText('Registrierung fehlgeschlagen')).toBeInTheDocument();
    });
});