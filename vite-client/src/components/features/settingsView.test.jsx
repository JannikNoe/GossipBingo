import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SettingsView from './settingsView.jsx';

test('Logout-Button funktioniert', async () => {
    // Rendern der SettingsView innerhalb eines MemoryRouter
    render(
        <MemoryRouter>
            <SettingsView />
        </MemoryRouter>
    );

    // Klicken auf den "Zurück zum Start"-Button, der den Logout auslöst
    fireEvent.click(screen.getByText('Ausloggen'));

    const actualPath = window.location.pathname;

    // Überprüfen, ob der Benutzer nach dem Klick auf den Logout-Button zur Login-Seite navigiert wurde
    expect(actualPath).toBe('/');
});
