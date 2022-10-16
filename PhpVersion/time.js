function decrementTime(time) {
    time = time - 1;
    return time;
}
window.onload = (event) => {
    document.addEventListener("visibilitychange", (event) => {
        if (document.visibilityState == "visible") {
          console.log("tab is active")
        } else {
          alert("You have exited the tab, come back before your pet dies!");
        }
      });
  };


function changeUI(state) {
    console.log("change ui: Start clicked");
    if (state === "start") {
        let pauseButton = document.createElement("button");
        pauseButton.classList.add("pause-button");
        pauseButton.innerText = "Pause";
        let resetButton = document.createElement("button");
        resetButton.classList.add("reset-button");
        resetButton.innerText = "Reset";
        let bs = document.querySelector(".button-section");
        bs.removeChild(document.querySelector(".start-button"));
        bs.appendChild(pauseButton);
        bs.appendChild(resetButton);
        //disable all input text fields
        document.querySelector(".HH").setAttribute("disabled", true);
        document.querySelector(".MM").setAttribute("disabled", true);
        document.querySelector(".SS").setAttribute("disabled", true);
    } else if (state === "reset") {
        document.querySelector(".HH").removeAttribute("disabled");
        document.querySelector(".MM").removeAttribute("disabled");
        document.querySelector(".SS").removeAttribute("disabled");
        document.querySelector(".HH").value = "";
        document.querySelector(".MM").value = "";
        document.querySelector(".SS").value = "";
        let bs = document.querySelector(".button-section");
        if (document.querySelector(".pause-button")) {
            bs.removeChild(document.querySelector(".pause-button"));
        }
        bs.removeChild(document.querySelector(".reset-button"));
        //add start button
        let startButton = document.createElement("button");
        startButton.classList.add("start-button");
        startButton.innerText = "Start";
        bs.appendChild(startButton);
    } else if (state === "pause") {
        document.querySelector(".HH").removeAttribute("disabled");
        document.querySelector(".MM").removeAttribute("disabled");
        document.querySelector(".SS").removeAttribute("disabled");
        let bs = document.querySelector(".button-section");
        if (document.querySelector(".pause-button")) {
            bs.removeChild(document.querySelector(".pause-button"));
        }
        bs.removeChild(document.querySelector(".reset-button"));
        //add start button
        let startButton = document.createElement("button");
        startButton.classList.add("start-button");
        startButton.innerText = "Start";
        bs.appendChild(startButton);
    }
}

//Start State
function calculateHHMMSS(timeInterval) {
    let hh = Math.trunc(timeInterval / 3600);
    timeInterval = timeInterval - hh * 3600;
    let mm = Math.trunc(timeInterval / 60);
    timeInterval = timeInterval - mm * 60;
    let ss = timeInterval;
    return [hh, mm, ss];
}

function startState(state, interval) {
    hh = document.querySelector(".HH").value;
    mm = document.querySelector(".MM").value;
    ss = document.querySelector(".SS").value;
    if (hh === "") {
        hh = 0;
    }
    if (mm === "") {
        mm = 0;
    }
    if (ss === "") {
        ss = 0;
    }
    changeUI(state);
    let timeInterval =
        parseInt(hh, 10) * 60 * 60 + parseInt(mm, 10) * 60 + parseInt(ss, 10);
    let time = timeInterval;
    interval = setInterval(() => {

        let arrTime = calculateHHMMSS(time);
        time = decrementTime(time);
        hh = arrTime[0];
        mm = arrTime[1];
        ss = arrTime[2];
        let hours, minutes, seconds;
        hours = hh < 10 ? "0" + hh : hh;
        minutes = mm < 10 ? "0" + mm : mm;
        seconds = ss < 10 ? "0" + ss : ss;

        document.querySelector(".HH").value = hours;
        document.querySelector(".MM").value = minutes;
        document.querySelector(".SS").value = seconds;

        if (hh === 0 && mm === 0 && ss === 0) {
            clearInterval(interval);
            //write code to disable pause button button
            document.querySelector(".pause-button").classList.add("hidden");
        }
    }, 1000);
    document.querySelector(".reset-button").addEventListener("click", () => {
        state = "reset";
        clearInterval(interval);
    });
    document.querySelector(".pause-button").addEventListener("click", () => {
        state = "pause";
        clearInterval(interval);
    });
}


let state = "start";
let hh = 0;
let mm = 0;
let ss = 0;
var interval;
setTimeout(() => {
    let timerElem = document.querySelector(".real-time");
    timerElem.addEventListener("click", (event) => {
        if (
            event.target.className === "start-button" &&
            (document.querySelector(".HH").value !== "" ||
                document.querySelector(".MM").value !== "" ||
                document.querySelector(".SS").value !== "")
        ) {
            state = "start";
            startState(state, interval);
        } else if (
            event.target.className === "start-button" &&
            (document.querySelector(".HH").value === "" ||
                document.querySelector(".MM").value === "" ||
                document.querySelector(".SS").value === "")
        ) {
            alert("Enter HH:MM:SS");
        } else if (event.target.className === "reset-button") {
            // clearInterval(interval);
            
            changeUI("reset");
        } else if (event.target.className === "pause-button") {
            // clearInterval(interval);
            changeUI("pause");
        }
    });
}, 1000);