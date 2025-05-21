let count = 0;

function incrementCounter() {
  count++;
  updateDisplay();
  saveCount();
}

function resetCounter() {
  count = 0;
  updateDisplay();
  saveCount();
}

function updateDisplay() {
  document.getElementById("counter").textContent = count;
}

function saveCount() {
  localStorage.setItem("sweatBeadCount", count);
}

function loadCount() {
  const saved = localStorage.getItem("sweatBeadCount");
  if (saved !== null) {
    count = parseInt(saved, 10);
    updateDisplay();
  }
}

loadCount();
