import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const About = () => {

  const { counter } = useContext(CounterContext)

  return (
    <div>
      <h1>Sobre</h1>
      <p>Context valor: <strong>{ counter }</strong></p>
    </div>
  )
}

export default About