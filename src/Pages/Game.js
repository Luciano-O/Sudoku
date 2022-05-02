import React, { useEffect, useState } from "react";

function Game() {
  const [boxes, setBoxes] = useState({
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

  const saveSquare = () => {
    let countLine = 0;
    let countPos = 0;
    for(let bb = 1; bb < 10; bb += 1){
      const finalArr = [];
      for(let b = 1; b < 4; b += 1) {
        for(let l = 0; l < 3; l += 1) {
          finalArr.push(lines[b + countLine][l + countPos])
        }
      }
      boxes[bb] = finalArr
      countLine += 3;
      if (countLine > 6) {
        countLine = 0
        countPos += 3
      }
    }
  }

  const testSquare = (line, column) => {
    if(line === 1 || line === 2 || line === 3) {
      switch (column){
        case 1 || 2 || 3 :
          return 1
        case 4 || 5 || 6 :
          return 4
        default:
          return 7
      }
    } if(line === 4 || line === 5 || line === 6) {
      switch (column){
        case 1 || 2 || 3 :
          return 2
        case 4 || 5 || 6 :
          return 5
        default:
          return 8
      }
    } if(line === 7 || line === 8 || line === 9) {
      switch (column){
        case 1 || 2 || 3 :
          return 3
        case 4 || 5 || 6 :
          return 6
        default:
          return 9
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
        const finalArr = [];
        for (let line = 0; line < 9; line += 1 ) {
          let number = getRandomNumber();
          const box = testSquare(column, line + 1)
          while (lines[column].includes(number) || columns[line + 1].includes(number) || boxes[box].includes(number)) {
            number = getRandomNumber();
          }
          finalArr[line] = number
          columns[line + 1][column - 1] = number
        }
        lines[column] = finalArr
      }
      saveSquare();
    }
    generateGame();
    // console.log(lines)
  }, [])

  return (
    <>
      <h1>Ola</h1>
      {lines[1].map((item) => <p>{item}</p>)}
    </>
  )
}

export default Game;
