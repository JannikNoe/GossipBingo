<h2>Installation</h2>

Step 1:
npm install in der package.json im Server-Verzeichnis

Step 2:
npm install in der package.json im vite-client-Verzeichnis

<h2>Start</h2>
Frontend: npm run start<br/>
Backend: php artisan serve

<h2>Login</h2>
<b>Admin:</b><br/>
jannik@20north.de <br/>
123456789
<br/>

<b>Spieler:</b><br/>
spieler@20north.de <br/>
123456789

<h2>Anleitung</h2>
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

<h2>Testing</h2>

<p>Durchführen von Tests
Um die Tests für die ChangeEmailModal- und ChangePasswordModal-Komponenten sowie RegisterView und LoginView auszuführen, führen Sie bitte die folgenden Schritte aus:

<ol>
<li>
Stellen Sie sicher, dass alle erforderlichen Abhängigkeiten installiert sind. Sie können dies tun, indem Sie npm install im Stammverzeichnis des Projekts ausführen.
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




