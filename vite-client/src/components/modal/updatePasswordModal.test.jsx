import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ChangePasswordModal from './updatePasswordModal.jsx';

test('Passwort ändern Button auslösen und Fehlermeldung bei nicht übereinstimmenden Passwörtern anzeigen', async () => {
    const { getByText, getByLabelText } = render(<ChangePasswordModal onClose={() => {}} />);

    // Neues Passwort und wiederholtes Passwort eingeben
    const newPasswordInput = getByLabelText('Neues Passwort');
    const repeatPasswordInput = getByLabelText('Passwort wiederholen');
    fireEvent.change(newPasswordInput, { target: { value: 'newPassword' } });
    fireEvent.change(repeatPasswordInput, { target: { value: 'wrongPassword' } });

    // Button zum Ändern des Passworts auslösen
    fireEvent.click(getByText('Jetzt Passwort ändern'));

    // Auf die Fehlermeldung warten
    await waitFor(() => {
        expect(getByText('Die eingegebenen Passwörter stimmen nicht überein.')).toBeInTheDocument();
    });
});
