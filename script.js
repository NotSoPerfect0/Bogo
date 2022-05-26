const numContainer = document.getElementById("numContainer");
const FCounter = document.getElementById("FinishCounter");
const TCounter = document.getElementById("TotalCounter");
const delay = document.getElementById("speedText");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");

const htmlNumList = [num1, num2, num3, num4, num5];
const numList = [1, 2, 3, 4, 5];
const finishedList = [1, 2, 3, 4, 5];
let speed = 100;
let running = false;
var finishes = 0;
var sorts = 0;



FCounter.innerHTML = "Finished Sorts: " + finishes;
TCounter.innerHTML = "Total Sorts: " + sorts;

function sort() {
    numList.sort(() => Math.random() - 0.5)
    if (numList[0] == finishedList[0]) {
        if (numList[1] == finishedList[1]) {
            if (numList[2] == finishedList[2]) {
                if (numList[3] == finishedList[3]) {
                    if (numList[5] == finishedList[5]) {
                        finishes++;
                        console.log("Completed Sort #" + finishes + " - Sort #" + (sorts+1))
                        FCounter.innerHTML = "Finished Sorts: " + finishes;
                    }
                }
            }
        }
    }
    for (i in htmlNumList) {
        htmlNumList[i].innerHTML = numList[i];
    }
    sorts++;
    TCounter.innerHTML = "Total Sorts: " + sorts;
}

function pause() {
    clearInterval(sorting)
    running = false;
}

function start() {
    if (running == false) {
        running = true;
        speed = delay.value;
        sorting = setInterval(sort, speed)
    }
}

function reload() {
    window.location.reload();
}