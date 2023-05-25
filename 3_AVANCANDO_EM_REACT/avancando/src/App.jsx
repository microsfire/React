
import './App.css'
import Paradise from './assets/paradise.jpeg' 
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/manageData'

function App() {

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
    </>
  )
}

export default App
