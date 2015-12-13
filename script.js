(() => {

  var player = "O";
  var moves = [];
  var winningCombos = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "5", "8"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"]
  ];

  play = (square) => {
    if (square.innerHTML !== "O" && square.innerHTML !== "X") {
      mark(square);
      saveMove(square);
      if (isWinner()) {
        alert("Wohoo! " + player + " vant!");
        // more fun...
        // count score
        // reset game
      };
      // if (isDraw()){}
      changePlayer();
    }
  }

  mark = m => m.innerHTML = player;

  changePlayer = () => {
    if (player === "O") {
      player = "X";
    } else {
      player = "O";
    }
  }

  saveMove = (e) => moves[e.id] = player;

  isWinner = () => (winningCombos.map(checkCombo).filter(result => result).length > 0);

  checkCombo = combo => (combo.filter(square => moves[square] === player).length === 3);

})();
