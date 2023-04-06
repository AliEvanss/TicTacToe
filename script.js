const board = document.querySelector(".board");

const gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayer: "x",
};

const player1 = document.querySelector("#Player1");
const player2 = document.querySelector("#Player2");

const player1name = document.querySelector("#player1name");
const player2name = document.querySelector("#player2name");

const addplayers = document.querySelector("#addplayers");

const newGameButton = document.querySelector("#new-game");

addplayers.addEventListener("submit", addPlayers);

newGameButton.addEventListener("click", () => {
  newGame();
});
// make a reference to the newGame button

// add an event listener to button
// in the event listener reset the gameState.board to be all nulls again
// gameState.board =  [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
//   ]
// then call the render board function
function newGame() {
  (gameState.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]),
    renderBoard();
}

function addPlayers(event) {
  event.preventDefault();
  player1name.innerText = player1.value;
  player2name.innerText = player2.value;
  player1.value = "";
  player2.value = "";
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `${i}-${j}`;
    board.append(cell);
  }
}

board.addEventListener("click", (e) => {
  const row = e.target.id[0];
  const col = e.target.id[2];
  // check to see if that space in the board is free

  if (gameState.board[row][col] === null) {
    gameState.board[row][col] = gameState.currentPlayer;
    console.log(checkDiagonal());
    renderBoard();
    switchPlayers();
  }
});

function renderBoard() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.getElementById(`${i}-${j}`);
      cell.innerText = gameState.board[i][j];
    }
  }
}

function switchPlayers() {
  if (gameState.currentPlayer === "x") {
    gameState.currentPlayer = "o";
  } else {
    gameState.currentPlayer = "x";
  }
}

function checkRow() {
  for (let i = 0; i < gameState.board.length; i++) {
    let firstEl = gameState.board[i][0];
    let secondEl = gameState.board[i][1];
    let thirdEl = gameState.board[i][2];
    if (firstEl && firstEl === secondEl && firstEl === thirdEl) {
      return true;
    }
  }

  return false;
}

function checkColumn() {
  for (let i = 0; i < gameState.board.length; i++) {
    let firstEl = gameState.board[0][i];
    let secondEl = gameState.board[1][i];
    let thirdEl = gameState.board[2][i];
    if (firstEl && firstEl === secondEl && firstEl === thirdEl) {
      return true;
    }
  }
  return false;
}

function checkDiagonal() {
  let firstEl = gameState.board[0][0];
  let secondEl = gameState.board[1][1];
  let thirdEl = gameState.board[2][2];
  let fourthEl = gameState.board[0][2];
  let fifthEl = gameState.board[2][0];
  if (firstEl && firstEl === secondEl && firstEl === thirdEl) {
    return true;
  }
  if (fourthEl && fourthEl === secondEl && fifthEl === fourthEl) {
    return true;
  }

  return false;
}
