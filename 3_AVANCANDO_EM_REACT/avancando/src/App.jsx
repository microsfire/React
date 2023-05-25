
import { useState } from 'react'
import './App.css'
import Paradise from './assets/paradise.jpeg' 
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ShowUserName from './components/ShowUserName'
import ManageData from './components/manageData'

function App() {

  //props passando de varias maneiras mais simples
  const name = "mcscode"
  const [userName] = useState('mcscode')

  return (
    <>
          {/* Imagem pasta public */}
      <div>
          <h1>Avançando em React :)</h1>
          <img src="/city.jpeg" alt="Cidades" />
      </div>
        {/* Imagem pasta src */}
      <div>
        <img src={Paradise} alt="Paisagem" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={userName}/>
    </>
  )
}

export default App
