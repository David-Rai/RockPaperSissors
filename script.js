const bot_player = document.getElementById('bot-player');
const you_player = document.getElementById('you-player');
const gameres = document.getElementById('game_res')

function botPlayer() {
    let rpcarr = ["rock", "paper", "scissor"];
    const ran = Math.floor(Math.random() * rpcarr.length);
    bot_player.textContent = rpcarr[ran];
}

function win() {
    gameres.textContent="Wow !! You won"
}
function loose() {
    gameres.textContent="Oops!! You loosed"
}
function draw() {
    gameres.textContent="It's a Draw"
}

function checkResult() {
    const you = you_player.textContent;
    const bot = bot_player.textContent;

    if (you === bot) {
        draw();
    } else if (you === "rock" && bot === "scissor") {
        win();
    } else if (you === "scissor" && bot === "paper") {
        win();
    } else if (you === "paper" && bot === "rock") {
        win();
    } else {
        loose();
    }
}

let allbtn = document.querySelector('#btn_s');
allbtn.addEventListener('click', function () {
    you_player.textContent = "scissor";
    botPlayer();
    checkResult();
});

let allbtn2 = document.querySelector('#btn_r');
allbtn2.addEventListener('click', function () {
    you_player.textContent = "rock";
    botPlayer();
    checkResult();
});

let allbtn3 = document.querySelector('#btn_p');
allbtn3.addEventListener('click', function () {
    you_player.textContent = "paper";
    botPlayer();
    checkResult();
});
