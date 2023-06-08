//css
import './App.css'

//react
import { useState, useCallback, useEffect } from 'react'

//data
import {wordsList} from './data/words' 

//components
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

//Stages
const stages = [
  {id:1, name:'start'},
  {id:2, name:'game'},
  {id:2, name:'end'}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  // start the secret word game
  const startGame = () => {
  setGameStage(stages[1].name)
}

// processing the letter input
const verifyLetter = () => {
  setGameStage(stages[2].name)
}

// restart game
const reset = () => {
  setGameStage(stages[0].name)
}


  return (
    <div className='App'>
      {gameStage === 'start' && <StartScreen  startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <GameOver reset={reset} />}
      
    </div>
  )
}

export default App
