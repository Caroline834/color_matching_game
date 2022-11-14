
let colorSlot =
    [
        "gray",
        "green",
        "red",
        "blue",
        "orange",
        "violet",
        "tomato",
        "cyan",
        "gray",
        "green",
        "red",
        "blue",
        "orange",
        "violet",
        "tomato",
        "cyan"
    ];
let randomCardList = [];
let click1 = "";
let click2 = "";
let firstId = [];
let secId = [];
let i = 0;
let cards = document.getElementsByClassName("cell");
let valid = false;


function init() {

    randomCard();
    for (let index = 0; index < randomCardList.length; index++) {
        cards[index].style.background = randomCardList[index];
        cards[index].style.border = "none";
    }

}


function randomCard() {

    while (i < colorSlot.length) {
        let key = Math.floor(Math.random() * colorSlot.length);
        if (checkTwice(colorSlot[key])) {
            randomCard(); //if already twice, do random again;
        } else {
            randomCardList.push(colorSlot[key]);
            i++;
        }
    }
}
let checkTwice = (value) => {
    let count = 0;
    for (let index = 0; index < randomCardList.length; index++) {
        if (randomCardList[index] == value)
            count++;
        console.log(value);
    }

    if (count == 2) {
        return true;
    } else {
        return false;
    }
}

function clickCard(obj) {
    if (valid == true) {
        obj.style.transform = "scaleX(-1)";
        var clicked = obj.style.background;

        if (click1 == "") {
            click1 = clicked;
            firstId = obj.id;
        } else {
            click2 = clicked;
            secId = obj.id;

            checkColor();

            click1 = "";
            click2 = "";
            firstId = "";
            secId = "";
        }
    }
}
let c = 0;
function checkColor() {
        if (click1 == click2 && firstId != secId) {
            document.getElementById(firstId).style.display = "none";
            document.getElementById(secId).style.display = "none";
            c++;
        }
    console.log(c);
    if (c == randomCardList.length / 2) {
        clearInterval(timer);
        document.getElementById("message").innerHTML = "Congratulations! Would you like to play again?";
        document.getElementById("timerBox").style.display = "none";
        document.getElementById("newGame").style.display = "block";
    }

}

let timer;
let timerBtn = document.getElementsByClassName("btnTime");
function setTime(obj) {
    for (let index = 0; index < 3; index++) {
        timerBtn[index].style.display = "none";
    }

    document.getElementById("text").innerHTML = "";
    valid = true;
    init();
    let time = obj;
    timer = setInterval(() => {
        document.getElementById("timerDisplay").innerHTML = "Time Left : " + (time--) + "s";

        if (time < 0) {
            valid = false;
            clearInterval(timer);
            for (let index = 0; index < 16; index++) {
                cards[index].style.background = "#e7e7e7";
            }
            document.getElementById("message").innerHTML = "Time's Up!!!";
            document.getElementById("timerBox").style.display = "none";
            document.getElementById("newGame").style.display = "block";
        }
    }, 1000);




}


function newGame() {
    window.location.reload();
}
