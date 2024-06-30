function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const h = `${hours}`;
  const m = `${minutes}`;
  const s = ` ${seconds}`;
  document.getElementById('h').textContent = h;
  document.getElementById('m').textContent = m;
  document.getElementById('s').textContent = s;
}

setInterval(updateClock, 1000);
updateClock();