const r = require("ramda")

const ALPHA = "abcdefghijklmnopqrstuvwxyz"

const BOARD_SIZE = 5

type Neighbor = {
    coords: Coordinate,
    letter: string
}

type Coordinate = [number, number]

const getRow = (boardSize: number) => 
  r.map(() => ALPHA[Math.floor(Math.random() * boardSize + 1)], r.range(0, boardSize))

const matrix: string[][] = r.map(() => getRow(5), r.range(0, 5))

const my_board = [ 
    [ 'c', 'b', 'b', 'e', 'e' ],
    [ 'b', 'e', 'b', 'c', 'b' ],
    [ 'd', 'b', 'd', 'e', 'c' ],
    [ 'f', 'e', 'b', 'd', 'f' ],
    [ 'b', 'f', 'd', 'b', 'f' ] ]

  
const word = ["b", "e", "d"]

export const getRange = (val: number): number[] =>
  r.range(
    val > 0 ? val - 1 : val,
    val < BOARD_SIZE - 1 ? val + 2 : val + 1
  )

export const getNeighborLetters = (row: number, col: number, board: string[][]): Neighbor[] => {
  return r.unnest(getRange(row).map(
    (i: number) => {
      return getRange(col).map(
        (j: number) => {
          return {coords: [i, j], letter: board[i][j]}
        }
      )
    }
  ))
}

export const findLetterCandidates = (letter: string, board: string[][]): Coordinate[] => 
    r.unnest(r.range(0, board.length).map(
      (i: number) => 
        r.reject(r.isNil, 
          r.range(0, board.length).map(
            (j: number) => 
              board[i][j] === letter 
                ? [i, j] 
                : null
          )
        )
    ))

const findNeighbors = (idx: number, word: string[], prevCoord: Coordinate, usedCoords: Coordinate[]): boolean => {
  // Base Case; made whole word
  if (idx === word.length) {
    return true
  }

  // Base Case: could not find next letter
  const neighbors = r.filter(
    (candidate) => candidate.letter === word[idx],
    getNeighborLetters(prevCoord[0], prevCoord[1], my_board)
  )

  if (neighbors.length === 0) {
    return false
  }

  // Recursive case: have neighbor candidates to check
  return neighbors.map(
    (candidate) => findNeighbors(
      idx + 1, 
      word, 
      candidate.coords, 
      r.append(candidate.coords, usedCoords)
    )
  )
}


const startBoard = (word: string[]) => {
  const startingCandidates = findLetterCandidates(word[0], my_board)
  
  for (let i in startingCandidates) {
    if (findNeighbors(1, word, startingCandidates[i], [startingCandidates[i]])) {
      return true
    }
  }
  return false 
}

console.log(JSON.stringify(startBoard(word)))