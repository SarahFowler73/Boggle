import * as r from "ramda";

const ALPHA = "abcdefghijklmnopqrstuvwxyz"

type Neighbor = {
    coords: Coordinate,
    letter: string
}

type BoggleBoard = string[][]

type Coordinate = [number, number]

const getRow = (boardSize: number) => 
  r.map(() => ALPHA[Math.floor(Math.random() * ALPHA.length)], r.range(0, boardSize))

export const makeBoggleBoard = (boardSize: number): BoggleBoard => r.map(() => getRow(boardSize), r.range(0, boardSize))

export const getRange = (val: number, boardSize: number): number[] =>
  r.range(
    val > 0 ? val - 1 : val,
    val < boardSize - 1 ? val + 2 : val + 1
  )

export const getNeighborLetters = (row: number, col: number, board: BoggleBoard): Neighbor[] => {
  return r.unnest(getRange(row, board.length).map(
    (i: number) => {
      return getRange(col, board.length).map(
        (j: number): Neighbor => {
          return {coords: [i, j], letter: board[i][j]}
        }
      )
    }
  ))
}

export const findLetterCandidates = (letter: string, board: BoggleBoard): Coordinate[] => 
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
    )) as Coordinate[]

export const findNeighbors = (idx: number, word: string[], prevCoord: Coordinate, usedCoords: Coordinate[], board: BoggleBoard): boolean => {
  // Base Case; made whole word
  if (idx === word.length) {
    return true
  }

  // Base Case: could not find next letter
  const neighbors = r.filter(
    (candidate: Neighbor) => candidate.letter === word[idx] && !r.contains(candidate.coords, usedCoords),
    getNeighborLetters(prevCoord[0], prevCoord[1], board)
  )

  if (neighbors.length === 0) {
    return false
  }

  // Recursive case: have neighbor candidates to check
  return r.any((x) => x, neighbors.map(
    (candidate) => findNeighbors(
      idx + 1, 
      word, 
      candidate.coords, 
      r.append(candidate.coords, usedCoords),
      board
    )
  ))
}


export const startBoard = (word: string[], board: BoggleBoard) => {
  const startingCandidates = findLetterCandidates(word[0], board)
  
  for (let i in startingCandidates) {
    if (findNeighbors(1, word, startingCandidates[i], [startingCandidates[i]], board)) {
      return true
    }
  }
  return false 
}
