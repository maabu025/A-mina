function speakMessage() {
  const input = document.getElementById('userInput').value;
  const output = document.getElementById('output');
  if (!input.trim()) return;

  const utterance = new SpeechSynthesisUtterance(input);
  utterance.lang = 'en-US';

  output.textContent = "Aïmina says: " + input;
  speechSynthesis.speak(utterance);
}
