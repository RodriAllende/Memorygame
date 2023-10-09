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
let timerInterval; // Variable para guardar el identificador del intervalo del temporizador

let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numbers = numbers.sort(() => Math.random() - 0.5);

function countdown() {
    timerInterval = setInterval(() => {
        timer--;
        showtime.innerHTML = `Remaining Time: ${timer}`;
        if (timer === 0) {
            clearInterval(timerInterval);
            // Agregar aquí cualquier acción que quieras realizar al agotarse el tiempo
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
        return; // Evitar que se muestren más de 2 cartas
    }

    const card = document.getElementById(id);

    if (showcard === 0) {
        // Primer clic
        showcard = 1;
        card1 = card;
        firstResults = numbers[id];
        card1.style.backgroundImage = getImageUrl(firstResults);
        card1.style.backgroundSize = '100%';
        card1.disabled = true;
    } else if (showcard === 1) {
        // Segundo clic
        showcard = 2;
        card2 = card;
        secondResults = numbers[id];
        card2.style.backgroundImage = getImageUrl(secondResults);
        card2.style.backgroundSize = '100%';
        card2.disabled = true;

        moves++;
        showMoves.innerHTML = `Moves: ${moves}`;

        if (firstResults === secondResults) {
            // Las cartas coinciden
            showcard = 0;
            hits++;
            showhits.innerHTML = `Hits: ${hits}`;

            if (hits === 8) {
                showhits.innerHTML = `Hits: ${hits} 😊`;
                showMoves.innerHTML = `Moves: ${moves} 🙌`;
            }
        } else {
            // Las cartas no coinciden
            setTimeout(() => {
                card1.style.backgroundImage = '';
                card2.style.backgroundImage = '';
                card1.disabled = false;
                card2.disabled = false;
                showcard = 0;
            }, 1000); // Cambié el tiempo de espera a 1000ms (1 segundo) para que se muestren las cartas incorrectas durante menos tiempo.
        }
    }
}

function resetGame() {
    // Restablecer todas las variables y estadísticas del juego aquí
    showcard = 0;
    card1 = null;
    card2 = null;
    firstResults = null;
    secondResults = null;
    moves = 0;
    hits = 0;
    timer = 30;
    temp = false; // Restablece la variable temp a false

    // Restablecer la visualización de estadísticas en el HTML
    showMoves.innerHTML = 'Moves: 0';
    showhits.innerHTML = 'Hits: 0';
    showtime.innerHTML = 'Remaining Time: 30';

    // Restablecer las imágenes de las cartas y habilitar los botones
    for (let i = 0; i < 16; i++) {
        const card = document.getElementById(i);
        card.style.backgroundImage = '';
        card.disabled = false;
    }

    // Detener el temporizador actual (si está en marcha)
    clearInterval(timerInterval);

    // Iniciar un nuevo juego o realizar cualquier otra acción necesaria aquí
}

function showGameFinishedMessage() {
    const scoreMessage = `Tu puntaje fue: ${hits}`;
    const message = `Juego finalizado. ${scoreMessage} Presiona el botón Reset para comenzar de nuevo.`;
    alert(message);
}


