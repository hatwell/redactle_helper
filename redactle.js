const inputField = document.getElementById("userGuess");

const words = [
  "who",
  "what",
  "north",
  "south",
  "east",
  "west",
  "some",
  "all",
  "many",
  "europe",
  "asia",
  "africa",
  "america",
  "most",
  "he",
  "do",
  "be",
  "been",
  "go",
  "science",
  "system",
  "united",
  "states",
  "new",
  "york",
  "ancient",
  "modern",
  "greek",
  "roman",
  "she",
  "her",
  "mathematics",
  "popular",
  "culture",
  "media",
  "human",
  "book",
  "early",
  "life",
  "social",
  "mythology",
  "origin",
  "might",
  "could",
  "will",
  "were",
  "thing",
  "not",
  "no",
];

const submitButton = document.getElementById("submitGuess");

words.forEach((word) => {
  inputField.value = word;
  submitButton.click();
});

const submitWord = (word) => {
  document.getElementById("userGuess").innerText = word;
  document.getElementById("submitGuess").click();
};
