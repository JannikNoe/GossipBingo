import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from './LoginView.jsx'; // Annahme: Die Datei befindet sich im selben Verzeichnis wie Login.jsx
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../../services/AuthContext'; //

test('Fehlermeldung wird angezeigt, wenn keine Daten eingegeben werden', async () => {
    const { getByText } = render(
        <BrowserRouter>
            <AuthProvider> {/* Einbetten der Login-Komponente in AuthProvider */}
                <Login />
            </AuthProvider>
        </BrowserRouter>
    );

    const loginButton = getByText('Einloggen 🎉');

    fireEvent.click(loginButton);

    // Warten auf die Fehlermeldung
    await waitFor(() => {
        expect(getByText('E-Mail oder Passwort falsch')).toBeInTheDocument();
    });
});
