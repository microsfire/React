const Events = () => {

    const handleMyEvent = (e)=> {
        console.log('My Event')
        console.log(e)
    }
    //Função que retorna um JSX
    const renderSomething = (x) => {
        if (x){
            return <h1>Renderisando True</h1>
        }else{
            return <h1>Renderisando False</h1>
        }
    }    

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique</button>
            </div>
            <div>
                <button onClick={() => console.log('Function no elemento')}>Clique aqui..</button>
            </div>
            <div>
                <button onClick={() => {
                    if(true){
                        console.log('Fuction não recomendada no elemento')
                    }
                }}>No elemento</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )  
}

export default Events;