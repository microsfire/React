import styles from './Login.module.css'
import { useState, useEffect } from 'react'
import { useAuthetication } from '../../hooks/useAuthentication'

const Login = () => {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState("")

    const { loading, error: authError } = useAuthetication()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {
            email,
            password,
        }

        if (password !== confirmPassword) {
            setError(" As senha não são iguais!")
            return
        }
        
        await createUser(user)

    } 

    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    },[authError])

  return (
    <div className={styles.login}>
        <h1>Entrar</h1>
        <p>Entre com suas credencias para usar o sistema</p>
        <form onSubmit={handleSubmit}>
             <label>
                <span>E-mail:</span>
                <input 
                type="email" 
                name='email' 
                required 
                placeholder='E-mail do usuário'
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </label>
             <label>
                <span>Senha:</span>
                <input 
                type="password" 
                name='password' 
                required 
                placeholder='insira sua senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </label>
            {!loading && <button className='btn'>Cadastrar</button>}
            {loading && <button className='btn' disabled>Aguarde...</button> }
            
           
            {error && <p className='error'>{error}</p> }
        </form>
    </div>
  )
}

export default Login