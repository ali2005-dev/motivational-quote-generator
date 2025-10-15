const quotes = [
  "Believe in yourself and all that you are.",
  "Push yourself, because no one else is going to do it for you.",
  "Success is not for the lazy.",
  "You are stronger than you think.",
  "Dream big, work hard, stay humble."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerText = quotes[randomIndex];
}
