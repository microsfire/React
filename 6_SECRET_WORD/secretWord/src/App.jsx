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

const guessesQty = 3

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetter, setGuessedLetter] = useState([])
  const [wrongLetter, setWrongLetter] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

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
  setLetters(wordLetters)


  setGameStage(stages[1].name)
}

// processing the letter input
const verifyLetter = (letter) => {
  const normalizedLetter = letter.toLowerCase()
  // check if letter has already been utilized
  if (guessedLetter.includes(normalizedLetter) || wrongLetter.includes(normalizedLetter)){
    return;
  }
  // push guessed letter or remove a guess
if(letters.includes(normalizedLetter)){
  setGuessedLetter((actualGuessedLetters) => [
    ...actualGuessedLetters, normalizedLetter
  ])
}else {
  setWrongLetter((actualWrongLettres) => [
    ...actualWrongLettres, normalizedLetter
  ])

  setGuesses((actualGuesses) => actualGuesses - 1)
}  

}

const clearLetterStates = () => {
  setGuessedLetter([])
  setWrongLetter([])
}

useEffect(() => {
  if (guesses <= 0) {
    //reset all state
    clearLetterStates()

    setGameStage(stages[2].name)
  }
},[guesses])


// restart game
const reset = () => {
  setScore(0)
  setGuesses(guessesQty)
  setGameStage(stages[0].name)
}


  return (
    <div className='App'>
      {gameStage === 'start' && <StartScreen  startGame={startGame}/>}
      {gameStage === 'game' && <Game 
      verifyLetter={verifyLetter}
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      letters={letters}
      guessedLetter={guessedLetter}
      wrongLetter={wrongLetter}
      guesses={guesses}
      score={score}
      />}
      {gameStage === 'end' && <GameOver reset={reset} />}
      
    </div>
  )
}

export default App
