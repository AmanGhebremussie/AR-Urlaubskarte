document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("stars-container");

  function createStars(count) {
    for (let i = 0; i < count; i++) {
      const star = document.createElement("a-plane");
      star.setAttribute("src", "#starImg");
      star.setAttribute("width", "0.3");
      star.setAttribute("height", "0.3");
      star.setAttribute("transparent", "true");

      // Zufällige Position über dem Marker
      const x = (Math.random() - 0.5) * 1.5;
      const y = Math.random() * 1 + 0.5;
      const z = (Math.random() - 0.5) * 1.5;

      star.setAttribute("position", `${x} ${y} ${z}`);
      star.setAttribute("look-at", "[camera]");

      // ✨ Schweb-Animation
      star.setAttribute("animation__float", {
        property: "position",
        dir: "alternate",
        dur: 2000,
        loop: true,
        to: `${x} ${y + 0.2} ${z}`
      });

      container.appendChild(star);
    }
  }

  createStars(7);
});