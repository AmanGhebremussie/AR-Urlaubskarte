document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("stars-container");
  const palmContainer = document.getElementById("palmTree-container");

  // Funktion, die Sterne erstellt
  function createStars(count) {
    for (let i = 0; i < count; i++) {
      const star = document.createElement("a-plane");
      star.setAttribute("src", "#starImg");
      star.setAttribute("width", "0.3");
      star.setAttribute("height", "0.3");
      star.setAttribute("transparent", "true");

      // Zufällige Position der Sterne
      const x = (Math.random() - 0.5) * 1.5;
      const y = Math.random() * 1 + 0.5;
      const z = (Math.random() - 0.5) * 1.5;

      star.setAttribute("position", `${x} ${y} ${z}`);
      star.setAttribute("look-at", "[camera]");

      star.setAttribute("animation__float", {
        property: "position",
        dir: "alternate",   
        dur: 2000,    // duration: 2 Sekunden
        loop: true,   // endlosloop
        to: `${x} ${y + 0.4} ${z}`  // der X-Wert wird gleichgelassen, Der Y-Wert wird in der String um die Zahl nach dem Plus nach oben gesetzt.
      });

      container.appendChild(star);
    }
  }

  // Linke Palme
  const palmLeft = document.createElement("a-plane");
  palmLeft.setAttribute("src", "#palmTreeImg");
  palmLeft.setAttribute("width", "0.8");
  palmLeft.setAttribute("height", "1.2");
  palmLeft.setAttribute("transparent", "true");
  palmLeft.setAttribute("position", "-0.6 0.6 0");
  palmLeft.setAttribute("rotation", "0 0 0");
  palmContainer.appendChild(palmLeft);

  // Rechte Palme
  const palmRight = document.createElement("a-plane");
  palmRight.setAttribute("src", "#palmTreeImg");  // setzt das Bild für die Palme
  palmRight.setAttribute("width", "0.8");
  palmRight.setAttribute("height", "1.2");  
  palmRight.setAttribute("transparent", "true");  // Transparenz
  palmRight.setAttribute("position", "0.6 0.6 0");  // Position nach Rechts
  palmRight.setAttribute("rotation", "0 0 0");
  palmContainer.appendChild(palmRight);

  createStars(7); // Fügt 7 Sterne hinzu
});
