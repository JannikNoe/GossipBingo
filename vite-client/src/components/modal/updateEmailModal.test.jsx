import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ChangeEmailModal from './updateEmailModal.jsx';

test('E-Mail-Adresse ändern Button auslösen und Fehlermeldung bei nicht übereinstimmenden E-Mail-Adressen anzeigen', async () => {
    const { getByText, getByLabelText } = render(<ChangeEmailModal onClose={() => {}} />);

    // Neue E-Mail-Adresse und wiederholte E-Mail-Adresse eingeben
    const newEmailInput = getByLabelText('Neue E-Mail-Adresse');
    const repeatEmailInput = getByLabelText('E-Mail-Adresse wiederholen');
    fireEvent.change(newEmailInput, { target: { value: 'new@example.com' } });
    fireEvent.change(repeatEmailInput, { target: { value: 'wrong@example.com' } });

    // Button zum Ändern der E-Mail-Adresse auslösen
    fireEvent.click(getByText('E-Mail-Adresse ändern'));

    // Auf die Fehlermeldung warten
    await waitFor(() => {
        expect(getByText('Die eingegebenen E-Mail-Adressen stimmen nicht überein.')).toBeInTheDocument();
    });
});
