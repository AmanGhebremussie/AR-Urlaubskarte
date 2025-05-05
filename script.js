// Wenn die komplette HTML-Seite fertig geladen ist, wird der folgende Code ausgeführt
document.addEventListener("DOMContentLoaded", () => {

  // Holt das <a-entity>-Element mit der ID "stars-container", in dem die Sterne platziert werden sollen
  const container = document.getElementById("stars-container");

  // Funktion, die eine bestimmte Anzahl von Sternen erstellt
  function createStars(count) {
    // Schleife, die 'count' Sterne erzeugt (z.B. 7)
    for (let i = 0; i < count; i++) {

      // Erstellt ein neues <a-plane>-Element (2D-Fläche) für einen Stern
      const star = document.createElement("a-plane");

      // Setzt das Bild (Textur) für den Stern
      star.setAttribute("src", "#starImg");

      // Setzt die Größe des Sterns
      star.setAttribute("width", "0.3");
      star.setAttribute("height", "0.3");

      // Aktiviert Transparenz (für PNG mit transparentem Hintergrund)
      star.setAttribute("transparent", "true");

      // Berechnet eine zufällige Position über dem Marker
      const x = (Math.random() - 0.5) * 1.5;  // links/rechts zufällig
      const y = Math.random() * 1 + 0.5;      // etwas oberhalb des Markers
      const z = (Math.random() - 0.5) * 1.5;  // vorne/hinten zufällig

      // Setzt die Position des Sterns im 3D-Raum
      star.setAttribute("position", `${x} ${y} ${z}`);

      // Sorgt dafür, dass der Stern sich immer zur Kamera ausrichtet
      star.setAttribute("look-at", "[camera]");

      // Fügt eine schwebende Animation auf der Y-Achse hinzu
      star.setAttribute("animation__float", {
        property: "position",       // animiert die Position
        dir: "alternate",           // bewegt sich hin und her
        dur: 2000,                  // duration: 2 Sekunden
        loop: true,                 // Endlosschleife
        to: `${x} ${y + 0.4} ${z}`  // der X-Wert als String, Y wird um die Zahl nach dem Plus nach oben gesetzt.
      });

      // Fügt den Stern dem Container über dem Marker hinzu
      container.appendChild(star);
    }
  }

  // Ruft die Funktion auf, um 7 Sterne zu erstellen
  createStars(7);
});
