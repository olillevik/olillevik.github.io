(() => {
    'use strict';

    var player = "O";
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
        if (sq.innerHTML !== "O" && sq.innerHTML !== "X") {
            drawMark(sq);
            saveMove(sq);
            if (isWinner()) {
                alert("Wohoo! " + player + " vant!");
                // more fun...
                // count score
                // reset game
            };
            // if (isDraw()){}
            changePlayer();
        }
    };

    var drawMark = m => m.innerHTML = player;

    var changePlayer = () => (player === "O") ? player = "X" : player = "O";

    var saveMove = m => moves[m.id] = player;

    var isWinner = () => (winningCombos.map(isWinningCombo).filter(result => result).length > 0);

    var isWinningCombo = combo => (combo.filter(sq => moves[sq] === player).length === 3);

})();