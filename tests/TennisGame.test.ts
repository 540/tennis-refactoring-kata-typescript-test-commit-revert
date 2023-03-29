import {TennisGame} from '../src/TennisGame'

describe('TennisGame',()=>{
  it('starts with Love-All score',()=>{
    const game = new TennisGame('player1','player2')

    const result = game.getScore()

    expect(result).toEqual('Love-All')
  })
})
