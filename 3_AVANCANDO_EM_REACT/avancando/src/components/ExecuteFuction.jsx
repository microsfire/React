
//Função definida no componente pai
const ExecuteFuction = ({myFunction}) => {
  return (
    <div>
        <h2>Componete filho execultando a função</h2>
        <button onClick={myFunction}>clique</button>
    </div>
  )
}

export default ExecuteFuction