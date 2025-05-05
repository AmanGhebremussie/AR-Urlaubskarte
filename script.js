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
        dur: 2000,
        loop: true,
        to: `${x} ${y + 0.4} ${z}`
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
  palmRight.setAttribute("src", "#palmTreeImg");
  palmRight.setAttribute("width", "0.8");
  palmRight.setAttribute("height", "1.2");
  palmRight.setAttribute("transparent", "true");
  palmRight.setAttribute("position", "0.6 0.6 0");
  palmRight.setAttribute("rotation", "0 0 0");
  palmContainer.appendChild(palmRight);

  createStars(7); // Fügt 7 Sterne hinzu
});
