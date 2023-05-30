import './App.css'
import MyComponent from './components/MyComponent'

function App() {

  return (
    <>
       {/**Css Global */}
      <h1>CSS_React</h1>
      <p>Paragrafo do app.js</p>
      {/**Css Component */}
      <MyComponent />
      {/**Css Inline */}
      <p style={{color:"red", backgroundColor:"gray", borderTop:"solid 2px yellow", padding:"5px"}}>Este é um css inline</p>
    </>
  )
}

export default App
