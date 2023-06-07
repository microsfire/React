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
  const [gameState, setGameState] = useState(stages[0].name)
  const [words] = useState(wordsList)

  console.log(words)


  return (
    <div className='App'>
      {gameState === 'start' && <StartScreen />}
      {gameState === 'game' && <Game />}
      {gameState === 'end' && <GameOver />}
      
    </div>
  )
}

export default App
