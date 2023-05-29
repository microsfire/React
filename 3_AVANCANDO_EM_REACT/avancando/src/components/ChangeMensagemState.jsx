
//Recebendo a funcao do componente pai 
//O componente ShowMensagem esta recebendo a execução desta função como resultado
const ChangeMensagemState = ({handleMensagem}) => {
    const msg = ['Olá', 'Tudo bem', 'Seja Bem-vindo']
  return (
    <div>
        <button onClick={()=> handleMensagem(msg[0])}>1</button>
        <button onClick={()=> handleMensagem(msg[1])}>2</button>
        <button onClick={()=> handleMensagem(msg[2])}>3</button>
    </div>
  )
}

export default ChangeMensagemState