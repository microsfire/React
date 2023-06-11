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

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  // pick a random category
  const pickedWordAddCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    //console.log(category)

    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    //console.log(word)

    return {category, word}
  }

  


  // start the secret word game
  const startGame = () => {
    const {word, category} = pickedWordAddCategory()
  

    //creating an array of letters
    let wordLetters = word.split('')
    wordLetters = wordLetters.map((l) => l.toLowerCase())

  console.log(category, word)
  console.log(wordLetters)

  //fill states
  setPickedWord(word)
  setPickedCategory(category)
  setLetters(letters)


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
