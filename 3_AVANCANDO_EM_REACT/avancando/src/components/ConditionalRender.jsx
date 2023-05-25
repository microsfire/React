import { useState } from "react"


// Renderisando condicional no component
const ConditionalRender = () => {
    const[x] = useState(false)

    const [name, setNome] = useState()

    return (
        <div>
            {/* Condicional simples */}
            {x && <p>Isso será exibido True</p> }
            {!x && <p>Isso é false</p> }
                <h2>If Ternario</h2>
            {/* Condicional com valor ternario para logica mais complexa */}
            {name === 'mcscode'?(
                
                <p>O nome é {name} foi encontrado</p>
            ):(
                <p>O nome {name} não foi encontrado</p>
            )}
            <button onClick={() => setNome('mcscode')}>Buscar Nome</button>
        </div>
    )
}

export default ConditionalRender