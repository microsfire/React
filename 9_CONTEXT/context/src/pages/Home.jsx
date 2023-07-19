//import { useContext } from "react"
//import { CounterContext } from "../context/CounterContext"

// 3 - alterando context
import ChangeCounter from "../components/ChangeCounter"

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"

// 5 - context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Home = () => {

  //const { counter } = useContext(CounterContext)
  const { counter } = useCounterContext()

  // 5 - context mais complexo
  const { color, dispatch } = useTitleColorContext()

  // 6 - alterando context complexo
  const setTileColor = (color) => {
    dispatch({ type: color })
  }


  return (
    <div>
      <h1 style={{color:color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/** 3 - alterando context */}
      <ChangeCounter />
      {/** 6 - alterando context complexo */}
      <div>
        <button onClick={() => setTileColor("RED")}>Vermelho</button>
        <button onClick={() => setTileColor("BLUE")}>Azul</button>
        <button onClick={() => setTileColor("GREEN")}>Verde</button>

      </div>
    </div>
  )
}

export default Home