document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector("header button");

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      const featuresSection = document.querySelector(".features");
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
