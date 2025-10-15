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
});
