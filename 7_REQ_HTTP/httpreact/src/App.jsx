//Style
import './App.css'
//hooks
import { useState, useEffect } from 'react'

// 4 Custon Hook
import { useFetch } from '../hooks/useFetch'

const url = "http://localhost:3000/products"

const App = () => {
  // states
  const[products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // 4 Custon hook
  const { data: items, httpConfig, loading, error } = useFetch(url)

  // 1° resgatando dados GET
  /*
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }
    fetchData()
  },[])
  */
  // 2° add produtos POST
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }
    /*
    const res = await fetch(url,{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(product)
    })
    // 3- Carregamento dinamico

    const addedProduct = await res.json()
    setProducts((prevProducts) => [...prevProducts, addedProduct])
    */

    // 5 refatorando post
    httpConfig(product, "POST")

    setName("")
    setPrice("")
  }

  return (
    <>
        <h1>Lista de produtos</h1>
        {/* 6-Loading */}
        {loading && <p>Carregando dados...</p> }
        {error && <p>{error}</p> }
        {!error && (
          <ul>
            {items && items.map((product) => (
            <li key={product.id}>{product.name} - R$: {product.price}</li>
            ))}
         </ul>
        )}
        <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
           <label>
            Preço:
            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          {loading && <input className='btn' type="submit" disabled value="Aguarde" />}
          {!error && <input type="submit" value="Criar" />}
        </form>
        </div>
    </>
  )
}

export default App
