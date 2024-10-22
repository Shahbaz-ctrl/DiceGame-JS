function rollDice() {
    const player1 = Math.floor(Math.random() * 6) + 1;
    const player2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('player1').textContent = player1;
    document.getElementById('player2').textContent = player2;

    let resultText;
    if (player1 > player2) {
        resultText = "Player 1 Wins!";
    } else if (player1 < player2) {
        resultText = "Player 2 Wins!";
    } else {
        resultText = "It's a Tie!";
    }

    document.getElementById('result').textContent = resultText;
}