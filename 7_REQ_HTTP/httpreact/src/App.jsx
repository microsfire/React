//Style
import './App.css'
//hooks
import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products"

const App = () => {
  const[products, setProducts] = useState([])
  // 1° resgatando dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }
    fetchData()
  },[])
  console.log(products)

  return (
    <>
        <h1>Lista de produtos</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name} - R$: {product.price}</li>
          ))}
        </ul>
    </>
  )
}

export default App
