// Task1
let time_input = document.getElementById("time_input");
let timer = document.getElementById("timer");
let timer_button = document.getElementById("timer_button");

let time_remaining = 0;
let counting = false;
let countdown = ""

function set_timer(time) {
    let time_int = parseInt(time);
    time_remaining = time_int;
    update_time(time_remaining);
    console.log(time_remaining);
}

function update_time(time) {
    timer.innerHTML = time;
}

function toggle_countdown(event) {
    if (counting == false && time_remaining > 0) {
        counting = true;
        event.target.innerHTML = "Stop";
        count_down();
        setAnnoyingTimer(10)
    } else {
        counting = false;
        event.target.innerHTML = "Start";
        clearInterval(countdown)
    }
}
// Task3
function setAnnoyingTimer(seconds){
    let annoying_countdown = setTimeout(function(){
        alert("10 seconds has passed!");
    }, seconds*1000);
}

function count_down() {
    let initial_time = time_remaining;
    let time_elapsed = 0;
    let halfRemaining = document.getElementById("half-warning")
    countdown = setInterval(function(){
        update_time(time_remaining);
        time_remaining--;
        time_elapsed++;
        if(time_remaining < 0){
            clearInterval(countdown);
            timer_button.innerHTML = "Start";
            counting = false;
            halfRemaining.classList.add("d-none");
        }else if(time_remaining == Math.floor(initial_time/2)){
            // Task2
            halfRemaining.classList.remove("d-none");
        };
    }, 1000);
    
}

time_input.addEventListener("input", function (event) {
    set_timer(event.target.value);
});
timer_button.addEventListener("click", function (event) {
    toggle_countdown(event);
});

while (counting == true) {
    console.log("true");
}
