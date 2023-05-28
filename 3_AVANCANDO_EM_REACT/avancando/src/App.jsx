
import { useState } from 'react'
import './App.css'
import Paradise from './assets/paradise.jpeg' 
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ShowUserName from './components/ShowUserName'
import ManageData from './components/manageData'
import CarDetails from './components/CarDetails'
import Fragmats from './components/Fragmats'
import Container from './components/Container'
import ExecuteFuction from './components/ExecuteFuction'

function App() {

  //props passando de varias maneiras mais simples
  const name = "mcscode"
  const [userName] = useState('mcscode')

  // loop em array de objetos
  const cars =[
    {id:1, marca:"Fiat", cor:"Preto", ano:2020 ,newCar:false },
    {id:2, marca:"Palio", cor:"amarelo", ano:2019 ,newCar:true },
    {id:3, marca:"Renault", cor:"cinza", ano:2021 ,newCar:false },
    {id:4, marca:"Corsa", cor:"Preto", ano:2020 ,newCar:true },
  ]

  //Essa função sera esxecultada pelo componente filho
  const executeFunction = () => console.log('Componente filho execultou')

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
      {/**Props */}
      <ShowUserName name={userName}/>
      {/**Destructuring */}
      <CarDetails marca="Honda" cor="Preto" ano={2024} newCar={true}/>
      {/* Reaproveitamento de Componente */}
      <CarDetails marca="Fiat" cor="Preto" ano={2020} newCar={false}/>
      <CarDetails marca="Chevrolet" cor="Azul" ano={2024} newCar={true}/>
      <CarDetails marca="Tesla" cor="Preto" ano={2023} newCar={false}/>
      {/* Loop em array de objetos */}
      {cars.map((car) =>
      <CarDetails
      key={car.id}
      marca={car.marca}
      cor={car.cor}
      ano={car.ano}
      newCar={car.newCar} />)}

       {/*Fragments  */}
       <Fragmats propsFragments= "Test"/>
       {/* Propriedade Children */}
       <Container newProp='test'>
        <p>Eu sou um children</p>
       </Container>
       <Container newProp='novoValor'>
        <h3>Eu sou um children 2</h3>
       </Container>
       {/* Execultando funçao como paramentro */}
       <ExecuteFuction myFunction={executeFunction} />

    </>
   

  )
}

export default App
