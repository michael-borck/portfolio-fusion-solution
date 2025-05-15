// Rock Paper Scissors game where computer always picks 'rock'
function play(user) {
  let resultText = "";
  if (user === 'rock') {
    resultText = "It's a tie!";
  } else if (user === 'paper') {
    resultText = "You win!";
  } else if (user === 'scissors') {
    resultText = "You lose!";
  }

  const resultEl = document.getElementById("result");
  resultEl.textContent = `Computer chose rock — ${resultText}`;
}

