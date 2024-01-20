import React, { useState,FocusEvent } from 'react'
type checker = {
    sumChecker:boolean,
    sexChecker:string
}
type Props = {}
const checkerPESEL = (pesel:string):checker =>{
    let sum = 0;
    const weights = [1,3,7,9,1,3,7,9,1,3];
    for(let i=0 ; i<weights.length;i++){
        sum += parseInt(pesel[i])*weights[i];
    }
    return {
        sumChecker: 10-parseInt(sum.toString().slice(-1))===parseInt(pesel.slice(-1)),
        sexChecker: (parseInt(pesel.slice(-2,-1))%2===0) ? "Kobieta":"Mężczyzna"
    }
};
const PeselChecker = (props: Props) => {
    const [message,setMessage] = useState('');
    
    function handleBlur(event: FocusEvent<HTMLInputElement>): void {
        const result = checkerPESEL(event.target.value);
        if(result.sumChecker){
            setMessage('PESEL poprawny: '+result.sexChecker);
        }else{
            setMessage('PESEL Błędny: '+result.sexChecker);
        }
    }

  return (
    <div>
        <input
        onBlur={handleBlur}
        onKeyDown={(event)=>{
            if(!(/[0-9]/.test(event.key)  || 
               event.key === "Backspace" ||
               event.key === "Delete")
            ){
                event.preventDefault();
            }
        }}
         type="text" placeholder='podaj PESEL' 
         />
        <span>{message}</span>
    </div>
  )
}

export default PeselChecker