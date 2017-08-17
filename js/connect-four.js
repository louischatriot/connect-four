// Barebones Connect Four

var rows = 6, columns = 7
  , board   // 0 is empty, -1 is red and 1 is yellow
  , currentPlayer
  ;


function init () {
  console.log("INITIALIZATION");

  // Empty board
  board = [];
  for (var i = 0; i < columns; i += 1) {
    board[i] = [];
    for (var j = 0; j < rows; j += 1) {
      board[i][j] = 0;
    }
  }

  currentPlayer = 1;   // Yellow starts
}

// If player is not supplied, alternate
function play(column, player) {
  currentPlayer = (player === 1 || player === -1) ? player : currentPlayer;

  for (var r = 0; r < rows; r += 1) {
    if (board[column][r] === 0) {
      board[column][r] = currentPlayer;
      currentPlayer *= -1;
      break;
    }
  }

  // Do nothing is play is illegal (i.e. column is full)
  //displayBoard();   // debug
}





function displayBoard () {
  var line;

  console.log("===================================================================================");
  for (var i = rows - 1; i >= 0; i -= 1) {
    line = "";
    for (var j = 0; j < columns; j += 1) {
      line += (board[j][i] === 0 ? "." : (board[j][i] === 1 ? "Y" : "R")) + "  ";
    }
    line += "                    " + Math.random();   // Quick hack to avoid line collapsing in Chrome console :)
    console.log(line);
  }
}





// Initialization
init();
