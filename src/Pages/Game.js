import React, { useEffect, useState } from "react";

function Game() {
  const [columns, setColumns] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  })

  const [lines, setLines] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  })

  const [boxes, setBoxes] = useState({
    '11': [],
    '12': [],
    '13': [],
    '21': [],
    '22': [],
    '23': [],
    '31': [],
    '32': [],
    '33': [],
  })

  const testSquare = (line, column) => {
    if (line === 1 || line === 2 || line === 2) {
      switch (column) {
        case 1 || 2 || 3:
          return '11'
        case 4 || 5 || 6:
          return '12'
        default:
          return '13'
      }
    } if (line === 4 || line === 5 || line === 6) {
      switch (column) {
        case 1 || 2 || 3:
          return '21'
          case 4 || 5 || 6:
          return '22'
        default:
          return '23'
      }
    } if (line === 6 || line === 7 || line === 8) {
      switch (column) {
        case 1 || 2 || 3:
          return '31'
        case 4 || 5 || 6:
          return '32'
        default:
          return '33'
      }
    }
  }

  // Função Retirada da Documentação do site developer.mozilla.org
  function getRandomNumber() {
    const min = Math.ceil(1);
    const max = Math.floor(10);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    const generateGame = () => {
      for (let column = 1; column < 10; column += 1 ) {
        for (let line = 1; line < 10; line += 1 ) {
          let number = getRandomNumber();
          const box = testSquare(line, column)
          while (lines[line].includes(number) || columns[column].includes(number) || boxes[box].includes(number)) {
            number = getRandomNumber();
          }
          setLines(lines[line].concat(number));
          setColumns(columns[column].concat(number));
          setBoxes(boxes[box].concat(number))
        }
      }
    }
    generateGame();
  }, [])

  return (
    <h1>Ola</h1>
  )
}

export default Game;
