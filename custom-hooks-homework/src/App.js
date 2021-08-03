import React, {useState} from 'react'

function App() {
  function CustomHooksObjectFormat(initialState){
    const [value, setValue] = useState(initialState)

    function onChange(e){
      setValue(e.target.value)
    }


    return {value, onChange}
  }
  const {value: email, onChange: emailOnChange, clearInput: clearEmailInput, showValue: showEmailValue} = CustomHooksObjectFormat('');

  function handleOnSubmit(e){
    e.preventDefault();

    clearEmailInput();
    showEmailValue()
  }

  return (
    <div>
      <h1>App-2</h1>
      <form onSubmit={handleOnSubmit}>
        <input type='email' value = {email}placeholder='email' onChange={(e)=>emailOnChange}/>
    <br/>
        {/* <input type='text' value = {username}placeholder='username' onChange={(e)=>usernameOnChange}/>
    <br/>

        <input type='text' value = {password}placeholder='password' onChange={(e)=>passwordOnChange}/> */}
    <br/>
    <button type='submit'>Enter</button>
      </form>
    </div>
  )
}

export default App
