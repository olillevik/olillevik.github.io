(() => {
    'use strict';

    var player = "0";
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
            changePlayer();
        }
    };

    var free = sq => sq.innerHTML !== "0" && sq.innerHTML !== "X";

    var drawMark = sq => sq.innerHTML = player;

    var saveMove = sq => moves[sq.id] = player;

    var colourWinningCombos = () => (winningCombos
        .filter(ownedByPlayer)
        .map(colourCombo));

    var ownedByPlayer = combo => (combo
        .filter(sq => moves[sq] === player)
        .length === 3);

    var colourCombo = combo => (combo
        .map(sq => document.getElementById(sq + "").style.backgroundColor = "green"));

    var changePlayer = () => (player === "0") ? player = "X" : player = "0";

})();