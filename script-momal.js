function generateQuote() {
  const quotes = [
    "Believe in yourself!",
    "You can do hard things!",
    "Keep going, you’re doing great!",
    "Success starts with effort."
  ];
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];
}

function changeBackground() {
  const colors = ["#ff9999", "#99ff99", "#9999ff", "#ffff99"];
  const random = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random];
}
