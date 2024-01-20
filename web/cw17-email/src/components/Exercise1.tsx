import React from 'react'
import EmailVerify from './EmailVerify'

type Props = {}

const Exercise1 = (props: Props) => {
  return (
    <div>
        <EmailVerify header="Zweryfikuj Email" placeholder='podaj email' isBordered={true}/>
        <EmailVerify header="Inny Email" placeholder='podaj adres' isBordered={false}/>
    </div>
  )
}

export default Exercise1