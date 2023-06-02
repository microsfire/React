import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const n = 5
  const name = 'Marcio'
  const redTitle = true

  return (
    <>
       {/**Css Global */}
      <h1>CSS_React</h1>
      <p>Paragrafo do app.js</p>
      {/**Css Component */}
      <MyComponent />
      {/**Css Inline */}
      <p style={{color:"red", backgroundColor:"gray", borderTop:"solid 2px yellow", padding:"5px"}}>Este é um css inline</p>
      {/**Css inline dinamico co if ternario */}
      <h3 style={n > 10 ? {backgroundColor:'black', color:'green'}:{color:'purple'}}>Css Inline dinamico</h3>
      <h3 style={name === 'Marcio' ? {backgroundColor:'blue', color:'white', borderRadius:'10px'}:{color:'purple'}}>Nome: {name}</h3>
      {/*Classe dinamica */}
      <h2 className={redTitle ? 'red-title' : 'title'}>Classe dinamica</h2>
      {/*Css Module no escopado ao componente */}
      <Title />
    </>
  )
}

export default App
