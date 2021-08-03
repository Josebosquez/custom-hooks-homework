import React from 'react'
import CustomHooksArrayFormat from './hooks/inputHooks'

function App() {
  const [email, 
    emailOnChange, 
    clearEmailInput, 
    showEmailValue
  ] = CustomHooksArrayFormat('')
  const [username, 
    usernameOnChange, 
    clearUsernameInput, 
    showUsernameValue
  ] = CustomHooksArrayFormat('')
  const [password, 
    passwordOnChange, 
    clearPasswordInput, 
    showPasswordValue
  ] = CustomHooksArrayFormat('')

  function handleOnSubmit(e){
    e.preventDefault();
    
    showEmailValue();
    clearEmailInput();

    showUsernameValue();
    clearUsernameInput();

    showPasswordValue();
    clearPasswordInput();
  }

  return (
    <div>
      <h1>App-1</h1>
      <form onSubmit={handleOnSubmit}>
        <input type='email' placeholder='email' value={email} onChange={(e)=> emailOnChange(e)}/>
        <br/>
        <input type='text' placeholder='Username' value={username} onChange={(e) => usernameOnChange(e)}/>
        <br />
        <input type='text' placeholder='Password' value={password} onChange={(e) => passwordOnChange(e)}/>
        <br />
        <button type='submit'>Enter</button>
      </form>
    </div>
  )
}

export default App
