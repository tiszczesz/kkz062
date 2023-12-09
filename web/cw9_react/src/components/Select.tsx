import React from 'react'

type Props = {
    options:string[]
}

const Select = (props: Props) => {
  return (
    <select>
        {props.options.map((op,k)=>(
            <option key={k} value={op}>{op}</option>
        ))}
    </select>
  )
}

export default Select