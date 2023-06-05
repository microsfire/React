import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // 3-gerenciamento de dados
    //6 -Controler de inputs
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")

    //8-textArea
    const [bio, setBio] = useState(user ? user.bio : "")

    // 9 Select
    const [role, seteRole] = useState(user ? user.role : "")

    const handleName =(e) => {
        setName(e.target.value)
    }
    //console.log(name)
    //console.log(email)

    //Enviando formulario
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('form enviado')
        console.log(name, email, bio, role)
        
        // 7-limpando formulario
        setName('')
        setEmail('')
        setBio('')
        seteRole('')
    }
  return (
    <div>
        {/* 1-criação de form */}
        {/* 5- enviando formulario */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type='text' 
                name='name' 
                placeholder='Digite seu nome' 
                onChange={handleName}
                value={name}/>
            </div>
            {/* 2-label envolvendo o input */}
            <label>
                <span>E-mail:</span>
                {/* 4-Simplificação de manipulaçaõ de input */}
                <input 
                type="email" 
                name='email' 
                placeholder='Digite seu email' 
                onChange={(e)=> setEmail(e.target.value)}
                value={email}/>
            </label>
            {/* 8-textArea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio"
                placeholder='Descrição do usuario'
                onChange={(e)=> setBio(e.target.value)}
                value={bio}/>
            </label>
            {/* 9-Select */}
            <label>
                <span>Função no Sistema</span>
                <select name="role" onChange={(e)=>seteRole(e.target.value)} value={role}>
                    <option value="user">Usuario</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm