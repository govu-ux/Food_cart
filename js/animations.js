// Parallax effect on scroll
document.addEventListener("scroll", function () {
  const parallaxElements = document.querySelectorAll(".parallax");
  let scrollTop = window.scrollY;

  parallaxElements.forEach((el) => {
    let speed = parseFloat(el.getAttribute("data-speed"));
    el.style.transform = `translateY(${scrollTop * speed}px)`;
  });
});

// Hide loading screen when page is ready (if a loading screen element exists)
window.addEventListener("load", function () {
  const loader = document.querySelector(".loading-screen");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 500);
  }
});
