export type Player = 'X' | 'O';
export type Cell = Player | null;
export type Board = Cell[];

export type WinResult = { winner: Player; line: readonly [number, number, number] };

export const LINES: readonly [number, number, number][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function emptyBoard(): Board {
  return Array(9).fill(null);
}

export function getWinner(board: Board): WinResult | null {
  for (const line of LINES) {
    const [a, b, c] = line;
    const cell = board[a];
    if (cell && cell === board[b] && cell === board[c]) {
      return { winner: cell, line };
    }
  }
  return null;
}

export function isDraw(board: Board): boolean {
  return !getWinner(board) && board.every((cell) => cell !== null);
}

export function nextPlayer(board: Board): Player {
  const xCount = board.filter((cell) => cell === 'X').length;
  const oCount = board.filter((cell) => cell === 'O').length;
  return xCount <= oCount ? 'X' : 'O';
}

export function placeMark(board: Board, index: number, player: Player): Board {
  const next = [...board];
  next[index] = player;
  return next;
}
