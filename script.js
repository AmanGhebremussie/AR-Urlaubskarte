// Array mit Stern-Objekten
const stars = [];
const container = document.getElementById("stars");

for (let i = 0; i < 30; i++) {
  const star = {
    x: (Math.random() - 0.5) * 4,
    y: Math.random() * 2 + 0.5,
    z: (Math.random() - 0.5) * 4,
    size: Math.random() * 0.2 + 0.05,
    color: "#fff"
  };

  stars.push(star);

  const el = document.createElement("a-sphere");
  el.setAttribute("position", `${star.x} ${star.y} ${star.z}`);
  el.setAttribute("radius", star.size);
  el.setAttribute("color", star.color);
  container.appendChild(el);}