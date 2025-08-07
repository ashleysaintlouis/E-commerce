import React from 'react'
import '../../styles/SignUp.css';

const SignUp = () => {


  return (
    <>
      <form className='form-signup'>
        <h1>Cadastrar</h1>
        
        <div className="form-lab-input">
          <label>Nome:    
            <input 
            type="text" 
            className="form-input" 
            id="username" 
            placeholder="Digite seu nome" />
          </label>        

          <label>Email:
            <input
              type="email" 
              className="form-input" 
              id="email" 
              placeholder="Digite seu email" />
          </label>

          <label>Senha:
            <input 
              type="password" 
              className="form-input" 
              id="password" 
              placeholder="Digite sua senha" />
          </label>
          
          <label>Confirme a Senha:
            <input 
              type="password" 
              className="form-input" 
              id="confirm-password" 
              placeholder="Confirme sua senha" />
          </label>
          
          <button type="submit" className="form-button">Cadastrar</button>
          
          <p className="form-text">Já tem uma conta? <a href="/signin">Entrar</a></p>


        </div>
      </form>
    
    </>
  )
}

export default SignUp