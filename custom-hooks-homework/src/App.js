import React from 'react'
import customHooksArrayFormat from './hooks/inputHooks'

function App() {

  return (
    <div>
      <h1>App-1</h1>
      <form onSubmit={handleOnSubmit}>
        <input type='text' placeholder='email'/>
        <br/>
        <input type='text' placeholder='Username'/>
        <br/>
        <input type='text' placeholder='Password'/>
        <br/>
        <button type='submit'>Enter</button>
      </form>
    </div>
  )
}

export default App
