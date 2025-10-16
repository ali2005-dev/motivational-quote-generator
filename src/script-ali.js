const quotes = [
  "Believe in yourself!",
  "You can do it!",
  "Stay positive, work hard, make it happen.",
  "Dream it. Wish it. Do it.",
  "Don’t stop until you’re proud."
];

const button = document.getElementById("show-quote");
const quote = document.getElementById("quote");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[randomIndex];
})
  "Believe in yourself and all that you are.",
  "Push yourself, because no one else is going to do it for you.",
  "Success is not for the lazy.",
  "You are stronger than you think.",
  "Dream big, work hard, stay humble."
;

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerText = quotes[randomIndex];
}
 
