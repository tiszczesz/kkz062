import { FormEvent, useRef, useState } from "react"

export default function ExerciseForm() {
    const refInput = useRef<HTMLInputElement>(null)
    const [result,setResult] = useState("")
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        if(refInput.current!==null){
            const info = refInput.current.value;
           // setResult((prev)=>info)
           setResult(info);
            console.log(result)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input ref={refInput} type="text"  />
            <input type="submit"  value="Wykonaj" />
        </form>
        <div>{result}</div>
    </div>
  )
}