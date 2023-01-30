const form = document.querySelector("#mood-form");
const result = document.querySelector("#result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const mood = document.querySelector("#mood").value;
    let message;

    if (mood >= 1 && mood <= 3) {
        message = "Oh no! You're feeling quite down. Take care of yourself and reach out to someone if you need support.";
    } else if (mood >= 4 && mood <= 6) {
        message = "You seem to be feeling okay. Remember to do something that brings you joy today.";
    } else if (mood >= 7 && mood <= 10) {
        message = "Great! You're feeling happy and positive. Keep it up!";
    } else {
        message = "Invalid input. Please enter a number between 1 and 10.";
    }

    result.textContent = message;
});