// Barebones Connect Four

var rows = 6, columns = 7
  , topRows = 2   // Number of virtual rows on top of the grid that will be used for animation
  , board   // 0 is empty, -1 is red and 1 is yellow
  , currentPlayer
  , width, height
  , cellSize   // Cells are square
  , container
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
  var wWidth = $(window).width(), wHeight = $(window).height();
  cellSize = Math.min(wWidth / columns, wHeight / (rows + topRows))
  var containerWidth = cellSize * columns
    , containerHeight = cellSize * (rows + topRows)
    ;

  // Draw grid
  container = d3.select("#container")
                .attr("width", containerWidth)
                .attr("height", containerHeight)
                ;
  for (var i = 0; i <= rows; i += 1) {
    container.append("line")
             .attr("class", "grid-line")
             .attr("x1", 0)
             .attr("y1", (topRows + i) * cellSize)
             .attr("x2", containerWidth)
             .attr("y2", (topRows + i) * cellSize)
             ;
  }
  for (i = 0; i <= columns; i += 1) {
    container.append("line")
             .attr("class", "grid-line")
             .attr("x1", i * cellSize)
             .attr("y1", topRows * cellSize)
             .attr("x2", i * cellSize)
             .attr("y2", containerHeight)
             ;
  }
}

// If player is not supplied, alternate
function play(c, player) {
  currentPlayer = (player === 1 || player === -1) ? player : currentPlayer;

  for (var r = 0; r < rows; r += 1) {
    if (board[c][r] === 0) {
      board[c][r] = currentPlayer;
      currentPlayer *= -1;
      container.append("circle")
               .attr("class", "chip-" + (currentPlayer === 1 ? "yellow" : "red"))
               .attr("cx", (c + 0.5) * cellSize)
               .attr("cy", (topRows + rows - r - 0.5) * cellSize)
               .attr("r", cellSize / 2.25)
      break;
    }
  }

  // Do nothing is play is illegal (i.e. column is full)
  displayBoard();   // debug
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
