import React from 'react'

type Props = {}

const PeselChecker = (props: Props) => {
  return (
    <div>
        <input
        onKeyDown={(event)=>{
            if(!/[0-9]/.test(event.key)  || 
               event.key == 8
            ){
                event.preventDefault();
            }
        }}
         type="text" placeholder='podaj PESEL' 
         />
        <span></span>
    </div>
  )
}

export default PeselChecker