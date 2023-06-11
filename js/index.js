const date = new Date();
let hour,min,sec;

// get actual time and convert it into decimal -------------

window.addEventListener("load", () => {
    get_Actual_Time();
  });


function get_Actual_Time() {
  sec = date.getSeconds();

  min = date.getMinutes();
  min += sec / 60;

  hour = date.getHours();
  hour = hour > 12 ? hour - 12 : hour;
  hour += min / 60;
  refresh();
}

// setting to hand --------------------------------

// let hour_hand = document.querySelector(".hour-hand");
// let temp = (hour * 360) / 12;
// temp = String(temp + "deg");
// hour_hand.style.rotate = temp;

// let min_hand = document.querySelector(".min-hand");
// temp = (min * 360) / 60;
// temp = String(temp + "deg");
// min_hand.style.rotate = temp;

// let sec_hand = document.querySelector(".sec-hand");
// temp = (sec * 360) / 60;
// temp = String(temp + "deg");
// sec_hand.style.rotate = temp;

// refresh --------------------------------

function refresh() {
  let hour_hand = document.querySelector(".hour-hand");
  let temp = (hour * 360) / 12;
  temp = String(temp + "deg");
  hour_hand.style.rotate = temp;

  let min_hand = document.querySelector(".min-hand");
  temp = (min * 360) / 60;
  temp = String(temp + "deg");
  min_hand.style.rotate = temp;

  let sec_hand = document.querySelector(".sec-hand");
  temp = (sec * 360) / 60;
  temp = String(temp + "deg");
  sec_hand.style.rotate = temp;
}



// change time button animnation

let open = document.getElementsByClassName("login-button")[0];

let close = document.getElementsByClassName("close")[0];

open.addEventListener("click", () => {
  document.getElementsByClassName("login-container")[0].style.display = "grid";
  document.getElementsByClassName("card")[0].classList.add("active");
});
close.addEventListener("click", () => {
  document.getElementsByClassName("login-container")[0].style.display = "none";
  document.getElementsByClassName("card")[0].classList.remove("active");
});

// change time function

let change_time;
let SetTime = document.querySelector("#set_time");

SetTime.addEventListener("click", () => {
  // animation
  document.getElementsByClassName("login-container")[0].style.display = "none";
  document.getElementsByClassName("card")[0].classList.remove("active");

  //   take time (hour and sec)
  change_time = Array.from(document.querySelector("#Hour_Min").value);
  let change_hour = change_time.slice(0, 2);
  change_hour = parseInt(change_hour[0]) * 10 + parseInt(change_hour[1]);
  let change_min = change_time.slice(3, 5);
  change_min = parseInt(change_min[0]) * 10 + parseInt(change_min[1]);

  hour = change_hour;
  min = change_min;
  refresh();
});

let reset = document.querySelector(".login-button1");

reset.addEventListener("click", () => {
    get_Actual_Time();
})
