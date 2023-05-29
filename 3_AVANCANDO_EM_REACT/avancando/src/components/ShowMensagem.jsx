
//Mostando a mensagem que esta sendo executado pelo componente filho ChangeMensagemState
const ShowMensagem = ({msg}) => {
  return (
    <div>
        <p>State lift mensagem: {msg}</p>
    </div>
  )
}

export default ShowMensagem