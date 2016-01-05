(() => {
    'use strict';

    var player = "0";
    var scoreX = "0";
    var score0 = "0"
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
        if (free(sq)) {
            drawMark(sq);
            saveMove(sq);
            colourWinningCombos();
            scoreCombo();
            changePlayer();
        }
    };

    window.reset = () => {
        for (var i = 1; i <= 9; i++) {
            document.getElementById(i + "").innerHTML = "&nbsp";
            document.getElementById(i + "").style.backgroundColor = "lightgray";
        }
        moves = [];

    }

    var free = sq => sq.innerHTML !== "0" && sq.innerHTML !== "X";

    var drawMark = sq => sq.innerHTML = player;

    var saveMove = sq => moves[sq.id] = player;

    var colourWinningCombos = () => winningCombos
        .filter(ownedByPlayer)
        .map(colourCombo);

    var scoreCombo = () => {
        if (winningCombos.filter(ownedByPlayer).length > 0) {
            if (player === "X") {
                scoreX++;
                document.getElementById("player" + player).innerHTML = (scoreX);
            } else if (player === "0") {
                score0++;
                document.getElementById("player" + player).innerHTML = (score0);
            }
        }
    };

    var ownedByPlayer = combo => (combo
        .filter(sq => moves[sq] === player)
        .length === 3);

    var colourCombo = combo => (combo
        .map(sq => document.getElementById(sq + "").style.backgroundColor = "green"));

    var changePlayer = () => (player === "0") ? player = "X" : player = "0";

})();