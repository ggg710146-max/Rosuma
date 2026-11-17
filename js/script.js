const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  glow.style.left = `${mouseX}px`;
  glow.style.top = `${mouseY}px`;
});
