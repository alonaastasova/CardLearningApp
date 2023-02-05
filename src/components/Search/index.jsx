import React from 'react';
import s from './style.module.css'

export default function Search({search}) {

    const search_task = event => {
        search(event.target.value)
    }

  return (
    <div className={s.search}>
        <input type="text" name="title" placeholder='Search..' onChange={search_task}/>
    </div>
  )
}
