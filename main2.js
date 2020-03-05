console.log('loaded main2.js...'); // sanity 

// 1. Create a HTML page with <h1> and a button
// 2. Create a score variable that starts at zero (0) and displays it's value in the <h1> element
// 3. Write the code/event handling such that each time the button is clicked it will update the score by 1 in the browser

// First get references to the elements we will interact with
let current_score_h2_el = document.getElementById('current_score_h2');
let score_btn_el = document.getElementById('score_btn');

// Setup an event handler to update the score when the cutton is clicked
let total_score = 0; // Create a variable we wil use to track the current score
let update_total_score = (evt) => {
    total_score += 1; // Add 1 to total score
    // Update the total score header element with new score
    current_score_h2_el.innerText = total_score;
}

// Wire up the cutton and the event handler
score_btn_el.addEventListener('click', update_total_score);



