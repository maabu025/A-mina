function speakMessage() {
  const message = document.getElementById("userInput").value;
  const output = document.getElementById("output");
  output.textContent = `You said: ${message}`;

  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(message);

  // Load voices and choose a female voice
  const voices = synth.getVoices();
  const femaleVoice = voices.find(voice =>
    voice.name.toLowerCase().includes("female") ||
    voice.name.toLowerCase().includes("woman") ||
    voice.name.toLowerCase().includes("zira") || // Common female voice
    voice.gender === "female" // May not work in all browsers
  );

  // Set the selected female voice or fallback
  utterance.voice = femaleVoice || voices[0];
  synth.speak(utterance);
}

// Wait for voices to load before using them
window.speechSynthesis.onvoiceschanged = () => {
  // Trigger voice list loading
  window.speechSynthesis.getVoices();
};

