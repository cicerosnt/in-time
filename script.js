const greetingStorageKey = 'in-time-greeting';

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
  updateGreeting(now);
}

function updateGreeting(now) {
  const hour = now.getHours();
  const greeting = hour < 12 ? 'Bom dia!' : hour < 18 ? 'Boa tarde!' : 'Boa noite!';
  document.getElementById('hello').textContent = greeting;
}

function setupGreetingEditor() {
  const greetingElement = document.getElementById('customGreeting');
  const editButton = document.getElementById('editGreeting');
  let previousGreeting = '';

  const savedGreeting = localStorage.getItem(greetingStorageKey);
  if (savedGreeting) {
    greetingElement.textContent = savedGreeting;
  }

  function finishEditing(saveGreeting) {
    const newGreeting = greetingElement.textContent.trim();
    greetingElement.contentEditable = 'false';

    if (saveGreeting && newGreeting) {
      localStorage.setItem(greetingStorageKey, newGreeting);
    } else {
      greetingElement.textContent = previousGreeting;
    }
  }

  editButton.addEventListener('click', () => {
    previousGreeting = greetingElement.textContent;
    greetingElement.contentEditable = 'true';
    greetingElement.focus();
    document.execCommand('selectAll', false);
  });

  greetingElement.addEventListener('blur', () => finishEditing(true));
  greetingElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      greetingElement.blur();
    }
    if (event.key === 'Escape') {
      finishEditing(false);
    }
  });
}

setupGreetingEditor();
setInterval(updateClock, 1000);
updateClock();
