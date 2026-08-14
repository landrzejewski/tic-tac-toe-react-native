import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Board, emptyBoard, getWinner, isDraw, nextPlayer, placeMark } from './game/logic';


export default function App() {
  const [board, setBoard] = useState<Board>(emptyBoard);
  
  const winResult = getWinner(board);
  const draw = isDraw(board);
  const gameOver = winResult !== null || draw;
  const current = nextPlayer(board);

  const status = winResult
    ? `Wygrywa ${winResult.winner}!`
    : draw
      ? 'Remis!'
      : `Ruch: ${current}`;

  const onCellPress = (index: number) => {
    if (gameOver || board[index] !== null) return;
    setBoard(placeMark(board, index, current));
  };

  return (
    <View style={styles.screen}>
        <Text style={styles.title}>Kółko i krzyżyk</Text>
        <Text style={styles.status}>{status}</Text>
        <View style={styles.board}>
          {board.map((mark, index) => (
            <Pressable key={index} style={styles.cell} onPress={() => onCellPress(index)}>
              <Text style={styles.mark}>{mark}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable style={styles.button} onPress={() => setBoard(emptyBoard())}>
          <Text style={styles.buttonLabel}>Zagraj ponownie</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 24,
  },
  board: {
    width: 306,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
  },
  cell: {
    width: 100,
    height: 100,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mark: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  buttonLabel: {
    fontSize: 18,
  },
});
