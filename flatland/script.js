let square = document.getElementById('square');
let words = document.getElementById('words');

document.onload = greeting();

square.addEventListener('click', clicked);
square.addEventListener('mouseover', () => changeColour('gray'));
square.addEventListener('mouseout', () => changeColour('red'));

// Add keyboard activation
square.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    clicked();
    event.preventDefault();
  }
});

function changeColour(colour) {
  square.style.background = colour;
}

function greeting() {
  words.innerHTML = "Welcome to Flatland.<br>I am Square.";
}

function clicked() {
  words.innerHTML = "Build a<br>" + createBuzzwordPhrase();
}

function createBuzzwordPhrase() {
  let buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
  let action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
  let outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

  let idx_buz = Math.floor(Math.random() * buzz.length);
  let idx_act = Math.floor(Math.random() * action.length);
  let idx_out = Math.floor(Math.random() * outcome.length);

  return buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
}


