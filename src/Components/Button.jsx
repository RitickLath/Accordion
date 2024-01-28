import React from 'react'

function Button({SingleSelect , setSingleSelect , id, setId}) {
    
  return (
    <div style={{border:"solid", padding:"10px"}} onClick={() => {setSingleSelect(!SingleSelect)  , setId([])}}>
        {!SingleSelect ? "Change to Single Select": "Change to Multiple Select"}
        {console.log(SingleSelect)}
    </div>
  )
}

export default Button