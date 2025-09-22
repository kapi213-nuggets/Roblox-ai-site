const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.classList.add('chat-message');
  msg.textContent = `${sender}: ${text}`;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getAIResponse(input) {
  // Placeholder AI responses
  const commands = {
    "hello": "Hello, my King! How can I serve you today?",
    "build game": "Preparing your Roblox game project...",
    "help": "You can type 'build game', 'hello', or 'status'.",
    "status": "All systems are operational."
  };
  return commands[input.toLowerCase()] || "I do not understand, my King.";
}

sendBtn.addEventListener('click', () => {
  const input = userInput.value.trim();
  if (input === "") return;

  addMessage(input, "You");
  const response = getAIResponse(input);
  setTimeout(() => addMessage(response, "AI"), 300);
  userInput.value = "";
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendBtn.click();
});
