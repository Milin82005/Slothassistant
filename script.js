const slothReplies = [
  "Hmm... do it later.",
  "Why rush? Take a nap first.",
  "Nah, that sounds like effort.",
  "Maybe tomorrow. Or never.",
  "What if... we didn’t?",
  "I’d help, but I’m tired just thinking about it.",
  "Your question exhausted me.",
  "Can we just chill instead?",
  "I'm on a mental vacation."
];

function getSlothResponse() {
  const question = document.getElementById("question").value;
  const responseBox = document.getElementById("response");

  if (question.trim() === "") {
    responseBox.textContent = "Zzz... Ask something, maybe.";
  } else {
    const randomIndex = Math.floor(Math.random() * slothReplies.length);
    responseBox.textContent = slothReplies[randomIndex];
  }
}
// Mood Response
function showMood(mood) {
  const moodReplies = {
    sleepy: "Just sleep, bro 😴",
    hungry: "Eat snacks, not tasks 🍕",
    overworked: "Cancel everything. Time to chill 🧘‍♂"
  };
  document.getElementById("response").innerText = moodReplies[mood] || "";
}

// Sloth Fact
function showSlothFact() {
  const facts = [
    "Sloths poop only once a week 💩",
    "Sloths sleep 15 hours a day 🛌",
    "They move only when necessary 🐢",
    "Sloths can hold their breath longer than dolphins 😮"
  ];
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("response").innerText = facts[random];
}