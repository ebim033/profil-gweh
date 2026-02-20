// Animasi muncul saat load
window.addEventListener("load", () => {
  document.getElementById("card").classList.add("show");
});

// Efek 3D tilt
const card = document.getElementById("card");

card.addEventListener("mousemove", (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  const centerX = card.offsetWidth / 2;
  const centerY = card.offsetHeight / 2;

  const rotateX = -(y - centerY) / 20;
  const rotateY = (x - centerX) / 20;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0) rotateY(0)";
});