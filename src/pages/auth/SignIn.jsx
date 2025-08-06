import React from 'react'
import '../../styles/SignIn.css' // Assuming you have a CSS file for styling

const SignIn = () => {
  return (
    <div>
      <form className='form-signin'>
        <h1>Entrar</h1>
        <div className="form-lab-input">  
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

          <button type="submit" className="form-button">Entrar</button>

          <p className="form-text">Não tem uma conta? <a href="/signup">Cadastre-se</a></p>

        </div>
      </form>
    </div>
  )
}

export default SignIn