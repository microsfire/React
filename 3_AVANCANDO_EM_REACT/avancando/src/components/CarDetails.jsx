
// Trabalando com destructuring de propriedades
//Ao inves de passar props.marca eu posso fazer deste jeito o codico fica mais limpo.
// const something = ({a, b, c})
const CarDetails = ({marca, cor, ano, newCar}) => {
  return (
    <div>
        <div>
            <h2>Destructuring de propriedades</h2>
            <p>Marca: {marca}</p>
            <p>Cor: {cor}</p>
            <p>Ano: {ano}</p>
        </div>
        <div>
            {newCar && <p>Carro Novo 0KM</p> }
        </div>
    </div>
  )
}

export default CarDetails