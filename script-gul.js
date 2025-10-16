const quotes = [
  "Believe in yourself!",
  "Keep going, you’re doing great!",
  "Success comes to those who never give up!",
  "Dream big, work hard!"
];

function showNewQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}
