function checkMood() {
    // Ask the user how they are feeling
    var mood = prompt("How are you feeling today?");
  
    // Output a message based on the user's mood
    if (mood === "happy") {
      alert("I'm glad to hear that you're feeling happy!");
    } else if (mood === "sad") {
      alert("I'm sorry to hear that you're feeling sad. Is there anything I can do to help?");
    } else if (mood === "angry") {
      alert("It's important to stay calm and not let anger control us. Can you take a deep breath and try to relax?");
    } else {
      alert("I'm not sure what you're feeling. Can you try describing it in a different way?");
    }
  }
  