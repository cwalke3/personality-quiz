console.log("script.js connected!");

// Find all the quiz question blocks
const questions = document.querySelectorAll(".question-block");

// Store the user's selected answers
const selectedAnswers = {};

// Go through each question
questions.forEach((question, index) => {
    const buttons = question.querySelectorAll(".answer-btn");

    // Listen for clicks on each answer
    buttons.forEach((button) => {
        button.addEventListener("click", () => {

            // Remove the selected style from other answers
            buttons.forEach((btn) => {
                btn.classList.remove("selected");
            });

            // Highlight the clicked answer
            button.classList.add("selected");

            // Remember the answer
            selectedAnswers[index] = button.dataset.answer;

            console.log(selectedAnswers);
        });
    });
});

// Calculate and display the personality result
function displayResult() {
    const answers = Object.values(selectedAnswers);

    // Make sure all four questions are answered
    if (answers.length !== 4) {
        alert("Please answer all four questions!");
        return;
    }

    // Count the different personality answers
    let adventurer = 0;
    let creative = 0;
    let chill = 0;

    answers.forEach((answer) => {
        if (answer === "A" || answer === "D") {
            adventurer++;
        } else if (answer === "B") {
            creative++;
        } else if (answer === "C") {
            chill++;
        }
    });

    // Determine the personality type
    let result = "";

    if (adventurer >= creative && adventurer >= chill) {
        result = "The Adventurer! You love excitement, exploring new places, and trying new things.";
    } else if (creative >= chill) {
        result = "The Creative! You enjoy expressing yourself and using your imagination.";
    } else {
        result = "The Chill One! You enjoy relaxing, staying comfortable, and having peaceful moments.";
    }

    // Display the result on the webpage
    document.getElementById("result-text").textContent = result;
    document.getElementById("result-container").style.display = "block";
}

// Run the function when Show Results is clicked
document.getElementById("show-result").addEventListener("click", displayResult);