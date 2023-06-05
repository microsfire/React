
import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <h1>Forms</h1>
      {/*6-Input de edição */} 
      <MyForm user={{name:"Marcio", email:"m.c.s@msn.com", bio:"hacker", role:"admin"}}/>
    </>
  )
}

export default App
