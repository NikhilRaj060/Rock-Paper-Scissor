let playBtn = document.getElementById('play_again_btn');
let gameScreen = document.getElementsByClassName('game');
let resultScreen = document.getElementsByClassName('result_screen');
let images = [];
images.push('/image/icons-rock.png','/image/icon-scissor.png','/image/icon-paper.png')
let computerInputArray = {
    '0' : 'rock',
    '1' : 'scissors',
    '2' : 'paper'
}
let userWon = 0;
let computerWon = 0;
let userInput;

function playGame(userInput) {
    let randomNumber = Math.floor(Math.random() * 3);
    gameScreen[0].style.display = 'none';
    resultScreen[0].style.display = 'block';
    if (userInput === 'rock') {
        this.userInput = userInput;
        showUserImage(userInput);
        computerPlay(randomNumber);
        setScore(randomNumber);
    } else if (userInput === 'scissors') {
        this.userInput = userInput;
        showUserImage(userInput);
        computerPlay(randomNumber);
        setScore(randomNumber);
    } else {
        this.userInput = userInput;
        showUserImage(userInput);
        computerPlay(randomNumber);
        setScore(randomNumber);
    }
}

function playaAgain (type) {
    let mainDiv = document.getElementById('main')
    let user_div = document.getElementById('user');
    let computer_div = document.getElementById('computer');
    let userWinningIndicator = document.getElementById('userwiningIndicator');
    let computerWinningIndicator = document.getElementById('computerwiningIndicator');
    let winnerPage = document.getElementById('winnerpage')
    let nextBtn = document.getElementById('nextBtn');
    let rulesBox = document.getElementsByClassName('ruleSection');
    user_div.classList.remove(user_div.classList[1])
    computer_div.classList.remove(computer_div.classList[1])
    userWinningIndicator.style.display = 'none'
    computerWinningIndicator.style.display = 'none'
    // Hide the result screen and show the game screen
    if (type === 'replay'){
        resultScreen[0].style.display = 'none';
        gameScreen[0].style.display = 'flex';
        nextBtn.style.display = 'none'
        rulesBox[0].style.display = 'block';
    } else {
        mainDiv.style.display = 'block'
        winnerPage.style.display = 'none'
        resultScreen[0].style.display = 'none';
        gameScreen[0].style.display = 'flex';
        nextBtn.style.display = 'none'
        rulesBox[0].style.display = 'block';
    }

}

function showUserImage(userInput) {
    let user_div = document.getElementById('user')
    let userImage = document.getElementById('user_image');
    if (userInput === 'rock') {
        userImage.src = images[0]
        user_div.classList.add('rock')
    } else if (userInput === 'scissors') {
        userImage.src = images[1]
        user_div.classList.add('scissors')
    } else {
        userImage.src = images[2]
        user_div.classList.add('hand')
    }
}

function computerPlay (randomNumber) {
    let computer_div = document.getElementById('computer')
    let computerImage = document.getElementById('computer_image');
    computerImage.src = images[randomNumber];
    if (randomNumber === 0) {
        computer_div.classList.add('rock')
    } else if (randomNumber === 1) {
        computer_div.classList.add('scissors')
    } else {
        computer_div.classList.add('hand')
    }
}

function setScore(randomNumber) {
    let yourScore = document.getElementById('your_score');
    let computerScore =  document.getElementById('computer_score');
    let winner = document.getElementById('winner');
    let replay_btn = document.getElementById('play_again_btn');
    let userWinningIndicator = document.getElementById('userwiningIndicator');
    let computerWinningIndicator = document.getElementById('computerwiningIndicator');
    let nextBtn = document.getElementById('nextBtn');
    if (this.userInput === computerInputArray[randomNumber]) { 
        winner.innerText = 'TIE UP';
        replay_btn.innerText = 'Replay'
    } else if ((computerInputArray[randomNumber]==="rock" && this.userInput === "scissors") || (computerInputArray[randomNumber] === 'scissors' && this.userInput === 'paper') ||
    (computerInputArray[randomNumber] === 'paper' && this.userInput === 'rock')) {
        winner.innerText = 'YOU LOST';
        replay_btn.innerText = 'PLAY AGAIN'
        computerWinningIndicator.style.display = 'flex'
        nextBtn.style.display = 'none'
        computerWon = localStorage.getItem('computer_score');
        computerWon++;
        localStorage.setItem('computer_score',parseInt(computerWon))
        computerScore.innerText = localStorage.getItem('computer_score');
    } else {
        winner.innerText = 'YOU WON';
        replay_btn.innerText = "PLAY AGAIN"
        userWinningIndicator.style.display = 'flex'
        nextBtn.style.display = 'inline-block'
        userWon = localStorage.getItem('user_score');
        userWon++;
        localStorage.setItem('user_score',parseInt(userWon))
        yourScore.innerText = localStorage.getItem('user_score');
    }
}


function showWinner() {
    let nextBtn = document.getElementById('nextBtn');
    let mainDiv = document.getElementById('main');
    let winnerPage = document.getElementById('winnerpage');
    let rulesBox = document.getElementsByClassName('ruleSection');
    nextBtn.style.display = 'none'
    mainDiv.style.display = 'none';
    winnerPage.style.display = 'block';
    rulesBox[0].style.display = 'none';
}

function closerules() {
    let rulesBox = document.getElementsByClassName('ruleSection');
    rulesBox[0].style.display = 'none';
}

function showRules() {
    let rulesBox = document.getElementsByClassName('ruleSection');
    rulesBox[0].style.display = 'block';
}

window.onload = () => {
    let rulesBox = document.getElementsByClassName('ruleSection');
    let yourScore = document.getElementById('your_score');
    let computerScore =  document.getElementById('computer_score');
    computerScore.innerText = localStorage.getItem("computer_score") || 0;
    yourScore.innerText = localStorage.getItem('user_score') || 0;
    rulesBox[0].style.display = 'block';
};