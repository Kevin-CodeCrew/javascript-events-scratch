console.log('Loaded main.js...'); // sanity check

/*
*************************************************************
    Ex. 1 Event handler for checkbox u should not click
*************************************************************
*/
// First get references to all elements we want to muck with
let bad_checkbox_el = document.getElementById('bad_checkbox'); // Get reference to checkbox element instance
let bad_checkbox_label_el = document.getElementById('bad_checkbox_label'); // Get reference to checkbox label instance

// console.log(`bad_checkbox element label is ${bad_checkbox_label_el}`); // Sanity check for checkbox label selector
// console.log(`bad_checkbox element is ${bad_checkbox_el}`); // Sanity check for checkbox selector

// Add an event handler to listen for clicks, and toggle the label text
bad_checkbox_el.addEventListener('click',
    (evt) => {
        if (bad_checkbox_el.checked == true) {
            bad_checkbox_label_el.innerText = `I TOLD YOU NOT TO CLICK THIS!!!`;
        } else {
            bad_checkbox_label_el.innerText = `DON'T CLICK THIS CHECKBOX!`;
        }
    }
);

/*
*************************************************************
    Ex. 2 Event handler/attributes
*************************************************************
*/
// First get references to all elements we want to muck with
let text_area_el = document.getElementById('text_area'); // The textarea
let hidden_text_el = document.getElementById('hidden_text'); // Hidden message
let allow_typing_button_el = document.getElementById('allow_typing_button'); // Button toggle

// Set up event handler for button click toggle
allow_typing_button_el.addEventListener('click',
    (evt) => {
        evt.preventDefault(); // breaking the chains
        if (text_area_el.hasAttribute('disabled')) // check if textarea disabled, and update components
        {
            text_area_el.removeAttribute('disabled'); // enable the textarea
            text_area_el.focus(); // move cursor to textarea
            hidden_text_el.removeAttribute('hidden'); // show hidden text
            allow_typing_button_el.innerText = 'Stop Typing'; // Change button text
        } else {
            text_area_el.setAttribute('disabled', true); // Disable textarea
            hidden_text_el.setAttribute('hidden', true); // hide hidden text
            allow_typing_button_el.innerText = 'Start Typing'; // Change button text
        }
    });

/*
*************************************************************
    Ex. 3 timers/setinterval
*************************************************************
*/
// First get references to all elements we want to muck with
let countdown_button_el = document.getElementById('countdown_button');
let countdown_text_el = document.getElementById('countdown_text');
countdown_button_el.addEventListener('click', countDown);

// Now setup a function with interval timer to countdown
function countDown() {
    let start_val = 10;
    let countdown_timer = setInterval(
        () => {
            countdown_text_el.innerText = (start_val--);
            if (start_val === -1) { // Could do this differently but wanted 1 to display and this works
                clearInterval(countdown_timer); // Cancel the timer when we reach 0
                countdown_text_el.innerText = 'LIFTOFF!!!';
            }
        }, 1000
    )
};