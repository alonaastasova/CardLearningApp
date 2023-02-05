import React from 'react';
import s from './style.module.css';

export default function Form({addCard}) {

    const onSubmit = event => {
        event.preventDefault();

        const {word} = event.target;
        const {translation} = event.target;

        const new_card = {
            id: Date.now(),
            word: word.value,
            translation: translation.value,
            flip: true,
            show: true,
            color: colors()
        }

        addCard(new_card)

        word.value = '';
        translation.value = '';
    }

    const colors = () => {
        let colorArray = [];    
      
        for(let i =0; i < 3 ; i++){
          colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
        }
        // rgb -> hex
        let color = colorArray
          .map( x => x.toString(16))
          .join('');
      
        return `#${color}`;
      }

    return (
        <div>
            <form className={s.form} onSubmit={onSubmit}>
                <input type="text" name="word" placeholder='Enter a word' />
                <input type="text" name="translation" placeholder="Translation" />
                <button>Add</button>
            </form>
        </div>
    )
}
