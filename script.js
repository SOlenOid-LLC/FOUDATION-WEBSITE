const exploreBtn = document.getElementById("exploreBtn");
const panel = document.querySelector(".interactive-panel");
const statusText = document.getElementById("status");

const statusMessages = [
  "Scanning premium circuits…",
  "Mapping the African luminous grid…",
  "Calibrating Solenoid intelligence…",
  "Ready to power the next frontier."
];

let idx = 0;

exploreBtn.addEventListener("mouseenter", () => {
  panel.classList.add("active");
});

exploreBtn.addEventListener("mouseleave", () => {
  panel.classList.remove("active");
});

exploreBtn.addEventListener("click", () => {
  idx = (idx + 1) % statusMessages.length;
  statusText.textContent = statusMessages[idx];
  statusText.classList.add("pulse");
  setTimeout(() => statusText.classList.remove("pulse"), 700);
});