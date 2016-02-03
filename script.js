(() => {
    'use strict';
    
    // hjelpemetoder
    var el = id => document.getElementById(id + "");
    
    const brett = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    // modell
    var player = "0";
    var scoreX = "0";
    var score0 = "0"
    var moves = [];
    const winningCombos = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["1", "5", "9"],
        ["3", "5", "7"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["3", "6", "9"]];

    // oppdater
    var play = (sq) => {
        if (free(sq)) {
            drawMark(sq);
            saveMove(sq);
            colourWinningCombos();
            scoreCombo();
            changePlayer();
        }
    };

    var reset = () => {
        brett.map(id => el(id).innerHTML = "&nbsp");
        brett.map(id => el(id).style.backgroundColor = "lightgray");
        moves = [];
    }

    var free = sq => sq.innerHTML !== "0" && sq.innerHTML !== "X";

    var drawMark = sq => el(sq).innerHTML = player;

    var saveMove = sq => moves[sq] = player;

    var colourWinningCombos = () => winningCombos
        .filter(ownedByPlayer)
        .map(colourCombo);

    var scoreCombo = () => {
        if (winningCombos.filter(ownedByPlayer).length > 0) {
            if (player === "X") {
                scoreX++;
                el("player" + player).innerHTML = (scoreX++);
            } else if (player === "0") {
                score0++;
                el("player" + player).innerHTML = (score0);
            }
        }
    };

    var ownedByPlayer = combo => (combo
        .filter(sq => moves[sq] === player)
        .length === 3);

    var colourCombo = combo => (combo
        .map(sq => el(sq).style.backgroundColor = "green"));

    var changePlayer = () => (player === "0") ? player = "X" : player = "0";
    
    //Input hendelser
    brett.map(id => el(id).addEventListener("click", () => play(id)));    
    el("reset").addEventListener("click", () => reset());

})();