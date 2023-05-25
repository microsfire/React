import { useState } from "react"

const ConditionalRender = () => {
    const[x] = useState(false)
    return (
        <div>
            {x && <p>Isso será exibido True</p> }
            {!x && <p>Isso é false</p> }
            
        </div>
    )
}

export default ConditionalRender