import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Board, emptyBoard, getWinner, isDraw, nextPlayer, placeMark } from './game/logic';

export default function App() {
 
  return (

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
