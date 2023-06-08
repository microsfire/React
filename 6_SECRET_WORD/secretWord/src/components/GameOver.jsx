import './GameOver.css'

const GameOver = ({reset}) => {
  return (
    <div>
        <h1>GameOver</h1>
        <button onClick={reset}>Jogar novamente?</button>
    </div>
  )
}

export default GameOver