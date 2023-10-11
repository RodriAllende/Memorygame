let showcard = 0;
let card1 = null;
let card2 = null;
let firstResults = null;
let secondResults = null;
let moves = 0;
let hits = 0;
let showMoves = document.getElementById('moves');
let showhits = document.getElementById('hits');
let showtime = document.getElementById('remaining');
let temp = false;
let timer = 30;
let timerInterval;
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numbers = numbers.sort(() => Math.random() - 0.5);

function countdown() {
    timerInterval = setInterval(() => {
        timer--;
        showtime.innerHTML = `Remaining Time: ${timer}`;
        if (timer === 0) {
            clearInterval(timerInterval); 
            lockCards();
            setTimeout(() => {
                displayMessage();
            }, 1000);
        }
    }, 1000);
}

function getImageUrl(id) {
    const imageUrl = `images/${id}.jfif`;
    console.log('URL de la imagen:', imageUrl);
    return `url('${imageUrl}')`;
}

function Show(id) {
    if (temp === false) {
        countdown();
        temp = true;
    }

    if (showcard === 2) {
        return;
    }

    const card = document.getElementById(id);

    if (showcard === 0) {
      
        showcard = 1;
        card1 = card;
        firstResults = numbers[id];
        card1.style.backgroundImage = getImageUrl(firstResults);
        card1.style.backgroundSize = '100%';
        card1.disabled = true;
    } else if (showcard === 1) {
        
        showcard = 2;
        card2 = card;
        secondResults = numbers[id];
        card2.style.backgroundImage = getImageUrl(secondResults);
        card2.style.backgroundSize = '100%';
        card2.disabled = true;

        moves++;
        showMoves.innerHTML = `Moves: ${moves}`;

        if (firstResults === secondResults) {
            showcard = 0;
            hits++;
            showhits.innerHTML = `Hits: ${hits}`;
            if (hits === 8) {
                showhits.innerHTML = `Hits: ${hits} 😊`;
                showMoves.innerHTML = `Moves: ${moves} 🙌`;
                startGame();
            }
        } else {
           
            setTimeout(() => {
                card1.style.backgroundImage = '';
                card2.style.backgroundImage = '';
                card1.disabled = false;
                card2.disabled = false;
                showcard = 0;
            }, 1000);
        }
    }
}

function lockCards() {
    for (let i = 0; i < 16; i++) {
        const card = document.getElementById(i);
        card.disabled = true;
    }
}

function startGame() {
    var audio = document.getElementById("audio");
    audio.play();
    showcard = 0;
    card1 = null;
    card2 = null;
    firstResults = null;
    secondResults = null;
    moves = 0;
    hits = 0;
    timer = 30;
    temp = false;

    showMoves.innerHTML = 'Moves: 0';
    showhits.innerHTML = 'Hits: 0';
    showtime.innerHTML = 'Remaining Time: 30';

    for (let i = 0; i < 16; i++) {
        const card = document.getElementById(i);
        card.style.backgroundImage = '';
        card.disabled = false;
    }

    clearInterval(timerInterval);
}

function stopmusic() {
    var audio = document.getElementById("audio");
    audio.pause();
    audio.currentTime = 0;
}

function displayMessage() {
    let scoreMessage = '';
    if (hits >= 0 && hits <= 3) {
        scoreMessage = `Necesitas mejorar tu memoria. Tu puntaje fue de ${hits} aciertos en ${moves} movimientos.`;
    } else if (hits >= 4 && hits <= 7) {
        scoreMessage = `Excelente memoria. Tu puntaje fue de ${hits} aciertos en ${moves} movimientos.`;
    } else if (hits === 8) {
        scoreMessage = `¡Felicitaciones! Eres todo un Rock Star. Tu puntaje fue de ${hits} aciertos en ${moves} movimientos.`;
    }
    alert(scoreMessage);
    stopmusic();
}
