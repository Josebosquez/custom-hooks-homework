import React, { useState } from 'react'

function CustomHooksObjectFormat(initialState) {
  const [value, setValue] = useState(initialState)

  function onChange(e) {
    setValue(e.target.value)
  }

  function clearInput() {
    setValue('')
  }

  function showValue() {
    console.log(value)
  }

  return { value, onChange, clearInput, showValue }
}

function App() {
  const { value: email, onChange: emailOnChange, clearInput: clearEmailInput, showValue: showEmailValue } = CustomHooksObjectFormat('');

  function handleOnSubmit(e) {
    e.preventDefault();

    showEmailValue()
    clearEmailInput();
  }

  return (
    <div>
      <h1>App-2</h1>
      <form onSubmit={handleOnSubmit}>
        <input type='email' value={email} placeholder='email' onChange={(e) => emailOnChange(e)} />
        <br />
        {/* <input type='text' value = {username}placeholder='username' onChange={(e)=>usernameOnChange}/>
        <br/>

        <input type='text' value = {password}placeholder='password' onChange={(e)=>passwordOnChange}/> */}
        {/* <br /> */}
        <button type='submit'>Enter</button>
      </form>
    </div>
  )
}

export default App
