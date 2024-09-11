import React, { useEffect } from 'react';
function App() {
    const email = "eduardo.lino@pucpr.br"
    const senha = "123456"
    const resultado = document.querySelector(".resultado")
    const button = document.querySelector(".botao")
    
    if (button) {
        button.addEventListener("click", () => {
            const emailInput = document.querySelector(".email")
            const senhaInput = document.querySelector(".senha")
            if(emailInput && senhaInput) {
                if(emailInput.value == email && senhaInput.value == senha) {
                    resultado.innerHTML = "Acessado com sucesso!"
                } else {
                    resultado.innerHTML = "Usuário ou senha incorretos!"
                }
            } else {
                console.log("erro")
            }
        })
    }

    else {
        console.log("Elemento input nao encontrado")
    }


    return (
      <div className='container'>
          <h1>Login</h1>
          <input type='email' placeholder='digite seu e-mail' className='input email'></input>
          <input type='password' placeholder='digite sua senha' className='input senha'></input>
          <button className='botao'>Acessar</button>
          <label className='resultado'></label>
    </div>
    );
}
export default App;
