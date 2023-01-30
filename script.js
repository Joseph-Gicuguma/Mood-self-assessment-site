const form = document.querySelector("#mood-form");
const result = document.querySelector("#result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const mood = document.querySelector("#mood").value;
    const energy = document.querySelector("#energy").value;
    const stress = document.querySelector("#stress").value;
    let message;

    if (mood >= 1 && mood <= 3 && energy >= 1 && energy <= 3 && stress >= 1 && stress <= 3) {
        message = "Oh no! You're feeling quite down, tired, and stressed. Take care of yourself and reach out to someone if you need support.";
    } else if (mood >= 4 && mood <= 6 && energy >= 4 && energy <= 6 && stress >= 4 && stress <= 6) {
        message = "You seem to be feeling okay. Remember to do something that brings you joy today.";
    } else if (mood >= 7 && mood <= 10 && energy >= 7 && energy <= 10 && stress >= 7 && stress <= 10) {
        message = "Great! You're feeling happy, energetic, and relaxed. Keep it up!";
    } else {
        message = "Invalid input. Please enter a number between 1 and 10 for each question.";
    }

    result.textContent = message;
});