import React, {useState} from 'react'

function CustomHooksArrayFormat(initialState) {
    const [value, setValue] = useState(initialState)
    
    function onChange(e){
        setValue(e.target.value)
    }
    
    function clearInput(){
        setValue('')
    }

    function showValue(){
        console.log(value)
    }

    return [value, onChange, clearInput, showValue]
}

export default CustomHooksArrayFormat
