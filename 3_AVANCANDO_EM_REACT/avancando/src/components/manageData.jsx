import { useState } from "react";

const ManageData = () => {
    let someData = 10
    console.log(someData)

    const[number, setNumber] = useState(30)
    console.log(number)
    return(
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => (someData = 30)}>Mudar Variavel</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber((number) => number = 90)}>Com useState</button>
            </div>
        </div>
    )
}

export default ManageData;