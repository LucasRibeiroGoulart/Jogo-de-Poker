let playerCards = [];
let opponentCards = [];
let tableCards = [];
let showOpponentHand = false;

function generateRandomCard() {
    const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const cardSuits = ['♠', '♥️', '♦️', '♣'];

    const randomValue = cardValues[Math.floor(Math.random() * cardValues.length)];
    const randomSuit = cardSuits[Math.floor(Math.random() * cardSuits.length)];

    return randomValue + randomSuit;
}

function dealInitialCards() {
    playerCards = [generateRandomCard(), generateRandomCard()];
    document.getElementById('player-card-1').textContent = playerCards[0];
    document.getElementById('player-card-2').textContent = playerCards[1];
}

function continueGame() {
    if (tableCards.length < 5) {
        tableCards.push(generateRandomCard());
        updateTableCards();
        if (tableCards.length === 5) {
            document.querySelector('.player-hand button:nth-child(1)').textContent = 'Continuar';
            document.querySelector('.player-hand button:nth-child(1)').onclick = function() { showOpponentHandFunc() };
        }
    }
}

function showOpponentHandFunc() {
    showOpponentHand = true;
    endGame();
}

function updateTableCards() {
    for (let i = 0; i < tableCards.length; i++) {
        document.getElementById(`table-card-${i + 1}`).textContent = tableCards[i];
    }
}

function endGame() {
    if (!showOpponentHand) {
        document.getElementById('opponent-hand').style.display = 'block';
        opponentCards = [generateRandomCard(), generateRandomCard()];
        document.getElementById('opponent-card-1').textContent = opponentCards[0];
        document.getElementById('opponent-card-2').textContent = opponentCards[1];
    }
    document.getElementById('restart-button').style.display = 'inline-block';
}

function restartGame() {
    playerCards = [];
    opponentCards = [];
    tableCards = [];
    showOpponentHand = false;
    document.getElementById('player-card-1').textContent = '';
    document.getElementById('player-card-2').textContent = '';
    document.getElementById('opponent-card-1').textContent = '';
    document.getElementById('opponent-card-2').textContent = '';
    document.getElementById('opponent-hand').style.display = 'none';
    document.getElementById('restart-button').style.display = 'none';
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`table-card-${i}`).textContent = '';
    }
    dealInitialCards();
}

dealInitialCards();
