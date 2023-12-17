import React from 'react'
import { IFilm } from '../models/data'

type Props = {
    film:IFilm|null
}

const Result = (props: Props) => {
    
  return (
    <div>
        <div>Tytuł: {props.film?.title}</div>
        <div>Reżyser: {props.film?.director}</div>
    </div>
  )
}

export default Result