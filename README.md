# Installation

Step 1:
npm install in der package.json im Server-Verzeichnis

Step 2:
npm install in der package.json im vite-client-Verzeichnis

## Start
Frontend: npm run start<br/>
Backend: php artisan serve

## Login
<b>Admin:</b><br/>
jannik@20north.de <br/>
123456789
<br/>

<b>Spieler:</b><br/>
spieler@20north.de <br/>
123456789

## Anleitung
<p>Das Spiel hat 4 verschiedene Status:</p>
<ul>
<li>Spiel erstellt</li>
<li>Spiel gestartet</li>
<li>Spiel beendet</li>
<li>Spiel zurückgesetzt</li>
</ul>
<p>Während der Status "Spiel erstellt" aktiv ist, können die Mitspieler sowohl mögliche Gossipszenarien eintragen als auch ihr persönliches Bingofeld mit jenem Gossip befüllen. Sobald alle Spieler ihr Bingofeld befüllt haben, kann das Spiel über den Button "Spiel Start" im Admin-Dashboard gestartet werden.</p>
<p>Nun kann jeder Mitspieler den eingetragenene Gossip bei geschehen abhaken. Sobald der erste Spieler eine Reihe in seinem Bingofeld abgehakt bekommt, ist das Spiel für alle vorbei.</p>
<p>Im Anschluss kann der Admin das Spiel im Admin-Dashboard beenden und ein neues eröffnen.</p>

## Testing

<p>Durchführen von Tests
Um die Tests auszuführen, führen Sie bitte die folgenden Schritte aus:

<ol>
<li>
Stellen Sie sicher, dass alle erforderlichen Abhängigkeiten installiert sind. Sie können dies tun, indem Sie npm install im Stammverzeichnis (vite-client) des Projekts ausführen.
</li>
<li>
Navigieren Sie zur src/components/modal-Verzeichnis im Projektverzeichnis.
</li>
<li>
Öffnen Sie eine Befehlszeile oder ein Terminal und führen Sie den Befehl npm test updateEmailModal.test.jsx aus, um den Test für die ChangeEmailModal-Komponente auszuführen.
</li>
<li>
Führen Sie den Befehl npm test updatePasswordModal.test.jsx aus, um den Test für die ChangePasswordModal-Komponente auszuführen.
</li>
<li>
Überprüfen Sie die Testergebnisse in der Befehlszeile oder im Terminal. Wenn alle Tests erfolgreich bestanden wurden, sehen Sie eine Meldung wie "1 Test Passed". Andernfalls werden die fehlgeschlagenen Tests aufgelistet, um die Ursachen für das Scheitern zu ermitteln.</p>
</li>
</ol>

## Testdokumentation

### Logout-Button funktioniert
Dieser Test überprüft, ob der Logout-Button in der Einstellungsansicht ordnungsgemäß funktioniert. Dabei wird zunächst die SettingsView innerhalb eines MemoryRouter gerendert. Anschließend wird auf den "Ausloggen"-Button geklickt, der den Logout auslöst. Danach wird überprüft, ob der Benutzer nach dem Klick auf den Logout-Button zur Login-Seite navigiert wurde.

### Fehlermeldung wird angezeigt, wenn keine Daten eingegeben werden (LoginView)
Dieser Test überprüft, ob eine Fehlermeldung angezeigt wird, wenn der Benutzer versucht, sich ohne Eingabe von Daten anzumelden. Dafür wird die LoginView innerhalb eines BrowserRouters und in einem AuthProvider gerendert. Anschließend wird auf den Einloggen-Button geklickt, ohne dass Daten eingegeben wurden. Es wird gewartet, bis die Fehlermeldung "E-Mail oder Passwort falsch" angezeigt wird.

### Fehlermeldung wird angezeigt, wenn keine Daten eingegeben werden (RegisterView)
Ähnlich wie der vorherige Test, überprüft dieser Test, ob eine Fehlermeldung angezeigt wird, wenn der Benutzer versucht, sich ohne Eingabe von Daten zu registrieren. Dafür wird die RegisterView innerhalb eines BrowserRouters und in einem AuthProvider gerendert. Es wird auf den Registrieren-Button geklickt, ohne dass Daten eingegeben wurden. Es wird gewartet, bis die Fehlermeldung "Registrierung fehlgeschlagen" angezeigt wird.

### E-Mail-Adresse ändern Button auslösen und Fehlermeldung bei nicht übereinstimmenden E-Mail-Adressen anzeigen
In diesem Test wird überprüft, ob eine Fehlermeldung angezeigt wird, wenn der Benutzer versucht, seine E-Mail-Adresse zu ändern und die eingegebenen E-Mail-Adressen nicht übereinstimmen. Dafür wird das ChangeEmailModal gerendert, und neue E-Mail-Adresse sowie die wiederholte E-Mail-Adresse eingegeben. Dann wird der Button zum Ändern der E-Mail-Adresse ausgelöst. Es wird gewartet, bis die Fehlermeldung "Die eingegebenen E-Mail-Adressen stimmen nicht überein." angezeigt wird.

### Passwort ändern Button auslösen und Fehlermeldung bei nicht übereinstimmenden Passwörtern anzeigen
Dieser Test überprüft, ob eine Fehlermeldung angezeigt wird, wenn der Benutzer versucht, sein Passwort zu ändern und die eingegebenen Passwörter nicht übereinstimmen. Dafür wird das ChangePasswordModal gerendert, und das neue Passwort sowie das wiederholte Passwort eingegeben. Dann wird der Button zum Ändern des Passworts ausgelöst. Es wird gewartet, bis die Fehlermeldung "Die eingegebenen Passwörter stimmen nicht überein." angezeigt wird.




