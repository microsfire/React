import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

// 3 - alterando context
import ChangeCounter from "../components/ChangeCounter"


const Home = () => {

  const { counter } = useContext(CounterContext)

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/** 3 - alterando context */}
      <ChangeCounter />
    </div>
  )
}

export default Home