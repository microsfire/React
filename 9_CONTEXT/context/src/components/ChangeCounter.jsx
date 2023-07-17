// 3 - alterando o context
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";



const ChangeCounter = () => {
    const {counter, setCounter} = useContext(CounterContext)

  return (
    <div> 
        <button onClick={() => setCounter(counter + 1)}>alterar context</button>
    </div>
  )
}

export default ChangeCounter