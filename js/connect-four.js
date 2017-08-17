// Barebones Connect Four

var rows = 6, columns = 7
  , topRows = 2   // Number of virtual rows on top of the grid that will be used for animation
  , board   // 0 is empty, -1 is red and 1 is yellow
  , currentPlayer
  , width, height
  , cellSize   // Cells are square
  , $svg = $("body svg")
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

  // Calculate dimensions for drawing (use the largest viewport that can accomodate full grid and top rows)
  var wWidth = $(window).width(), wHeight = $(window).height()
    , cellSize = Math.min(wWidth / columns, wHeight / (rows + topRows))
    , containerWidth = cellSize * columns
    , containerHeight = cellSize * (rows + topRows)
    ;

  // Draw grid and lines
  return;
  $svg.find("").remove();
  //$svg.attr("width", containerWidth);
  //$svg.attr("height", containerHeight);
  return;
  $svg.append('<line style="stroke: rgb(255,0,0); stroke-width: 2;" x1="10" x2="10" y1="50" y2="50"></line>');
  var $line;
    $line = $('<line style="stroke: rgb(255,0,0); stroke-width: 2;">');
    $line.attr("x1","100");
    $line.attr("x2","100");
    $line.attr("y1","500");
    $line.attr("y2","500");
    $svg.append($line);
    console.log($line);
  for (var j = 0; j <= rows; j += 1) {
  }
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
