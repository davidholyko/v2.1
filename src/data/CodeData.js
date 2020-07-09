export const codeTicTacToe = {
  title: 'Tic-Tac-Toe for any size with recursion',
  code: `const checkForWinner = (size, board) => {
  if (!board) { board = Array.from(Array(size).keys()) }
  const winner = []
  const boardSize = Math.sqrt(board.length) | 0
  const diagonal = boardSize - 1

  const checkLine = function (axis = 3, initialValue = 0, incrementX = 1, incrementY = boardSize, cycle = 1) {
    const check = []; cycle = cycle - 1
    for (let i = 0; i < boardSize; i++) { check.push(board[initialValue + incrementX * i]) }
    if (check.every(value => value === check[0])) { winner.push(check[0]) }
    if (initialValue === diagonal) { return checkLine(axis, initialValue - diagonal, diagonal + 2) }
    if (!cycle) {
      axis = axis - 1
      if (!axis && !cycle) { return }
      if (axis === 3) { return checkLine(axis, 0, incrementX, incrementY, boardSize) }
      if (axis === 2) { return checkLine(axis, 0, incrementY, incrementX, boardSize) }
      if (axis === 1) { return checkLine(axis, diagonal, diagonal) }
    }
    return checkLine(axis, initialValue + incrementY, incrementX, incrementY, cycle)
  }

  checkLine(4)
  return winner[0]
}`,
};
