import React from 'react'

type Props = {
    info:string,
    color:string
}

const Header = (props: Props) => {
  return (
    <header className='mt-4 mb-4' style={{color:props.color}}>
        <h1>{props.info}</h1>
    </header>
  )
}

export default Header