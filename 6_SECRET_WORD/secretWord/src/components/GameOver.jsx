import './GameOver.css'

const GameOver = ({reset, score}) => {
  return (
    <div>
        <h1>GameOver</h1>
        <h2>Sua pontuação: {score}</h2>
        <button onClick={reset}>Jogar novamente?</button>
    </div>
  )
}

export default GameOver