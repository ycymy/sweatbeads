const panels = [
  "images/panel1.jpg",
  "images/panel2.jpg",
  "images/panel3.jpg"
  // Add more as needed
];

let currentIndex = 0;
let beadCounts = {};

function loadPanel(index) {
  const img = document.getElementById("manga-panel");
  img.src = panels[index];
  updateCounterDisplay();
}

function updateCounterDisplay() {
  const key = panels[currentIndex];
  const count = beadCounts[key] || 0;
  document.getElementById("panel-counter").textContent = count;
}

function incrementBeads() {
  const key = panels[currentIndex];
  beadCounts[key] = (beadCounts[key] || 0) + 1;
  updateCounterDisplay();
  saveData();
}

function resetBeads() {
  const key = panels[currentIndex];
  beadCounts[key] = 0;
  updateCounterDisplay();
  saveData();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % panels.length;
  loadPanel(currentIndex);
}

function saveData() {
  localStorage.setItem("sweatBeadCounts", JSON.stringify(beadCounts));
}

function loadData() {
  const saved = localStorage.getItem("sweatBeadCounts");
  if (saved) {
    beadCounts = JSON.parse(saved);
  }
}

loadData();
loadPanel(currentIndex);
