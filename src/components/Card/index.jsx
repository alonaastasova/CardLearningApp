import React from 'react';
import s from './style.module.css'

export default function Card({id, color, changeWord, change, deleteCard}) {

  return (
    <div className={s.card} style={{backgroundColor: color}}>
        <button onClick={() => deleteCard(id)}>&#10006;</button>
        <p  onClick={() => change(id)}>{changeWord(id)}</p>
    </div>
  )
}
