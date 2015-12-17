(() => {
    'use strict';

    var nextPlayer = "0";
    var moves = [];
    var winningCombos = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["1", "5", "9"],
        ["3", "5", "7"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["3", "6", "9"]];

    window.play = (sq) => {
        if (sq.innerHTML !== "0" && sq.innerHTML !== "X") {
            drawMark(sq);
            saveMove(sq);
            if (isWinner()) {
                colourWinner();
            };
            changePlayer();
        }
    };

    var drawMark = td => td.innerHTML = nextPlayer;

    var saveMove = td => moves[td.id] = nextPlayer;

    var isWinner = () => (winningCombos.filter(isWinningCombo).length > 0);

    var isWinningCombo = combo => (combo.filter(sq => moves[sq] === nextPlayer).length === 3);

    var colourWinner = () => winningCombos.filter(isWinningCombo).forEach(colourCombo);

    var colourCombo = combo => combo.forEach(sq => document.getElementById(sq + "").style.backgroundColor = "green");

    var changePlayer = () => (nextPlayer === "0") ? nextPlayer = "X" : nextPlayer = "0";

})();