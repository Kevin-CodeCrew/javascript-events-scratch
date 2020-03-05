// animate using images
let mario_img_el = document.getElementById('mario_img');

let current_img = 1;
const max_img = 3;

// Event handler
let move_mario = () => {
    let next_img_name = `./Mario${current_img}.png`; // build next image name
    mario_img_el.setAttribute('src',next_img_name); // set the new image
    
    current_img = current_img === 3 ? 1 : current_img+=1;
};

// start a repeating timer
let mario_timer = setInterval(move_mario, 150);