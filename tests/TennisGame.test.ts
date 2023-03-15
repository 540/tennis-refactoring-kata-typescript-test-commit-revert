import * as fs from 'fs'
import * as path from 'path'
import { TennisGame } from '../src/TennisGame'

function getAllScores(): [number, number, string][] {
  const testCases = path.resolve(__dirname, 'scores.json')
  const scoreData = fs.readFileSync(testCases).toString()
  const scores = JSON.parse(scoreData)
  return JSON.parse(JSON.stringify(scores))
}

const scores: [number, number, string][] = getAllScores()

function checkScore(game: TennisGame, player1Score: number, player2Score: number, expectedScore: string): void {
  const highestScore: number = Math.max(player1Score, player2Score)
  for (let i = 0; i < highestScore; i++) {
    if (i < player1Score) {
      game.wonPoint('player1')
    }
    if (i < player2Score) {
      game.wonPoint('player2')
    }
  }
  expect(game.getScore()).toEqual(expectedScore)
}


describe('TennisGame', () => {
  scores.forEach(([player1Score, player2Score, expectedScore]) => {
    it(`scores ${player1Score}:${player2Score} as ${expectedScore}`, function () {
      checkScore(new TennisGame('player1', 'player2'), player1Score, player2Score, expectedScore)
    })
  })
})
