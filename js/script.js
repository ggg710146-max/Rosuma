window.addEventListener("scroll", () => {
  const layers = document.querySelectorAll(".parallax");
  layers.forEach((layer) => {
    const speed = layer.dataset.speed;
    layer.style.transform = `translateY(${window.scrollY * speed}px)`;
  });
});
