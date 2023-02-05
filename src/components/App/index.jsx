import Form from "../Form";
import s from './style.module.css'
import Search from "../Search";
import { useEffect, useState } from "react";
import Card from "../Card";


function App() {

  const [cards, setCards] = useState(() => JSON.parse(localStorage.getItem('cards')) ?? []);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards]);

  const addCard = (card) => {
    setCards([...cards, card])
  };

  const change = (id) => {
    const target = cards.find(elem => elem.id === id);
    target.flip = !target.flip;
    setCards([...cards])
  }

  const changeWord = (id) => {
    const target = cards.find(elem => elem.id === id);
    if(target.flip === true){
      return target.word
    }if(target.flip === false){
      return target.translation
    }
  };

  const search = (string) => {
    string = string.toLowerCase();
    const findCard = cards.map(card => {
      card.show = card.word.toLowerCase().startsWith(string) || card.translation.toLowerCase().startsWith(string);
      return card
    })
    setCards(findCard)
  }

  // const deleteCard = (id) => {
  //   const cardsNew = cards.filter(card => card.id !== id);
  //   setCards(cardsNew)
  // }

  const deleteCard = delId => setCards(pre => pre.filter(({id}) => id !== delId));
  

  return (
    <div>
      <div className={s.head}>
        <Form addCard={addCard} /> <Search search={search} />
      </div>
      <div className={s.cardContainer}>
        {
          cards.length === 0
          ? <p>No cards</p>
          :
          cards
          .filter(({show}) => show)
          .map(card => 
            <Card 
              key={card.id}
              {...card}
              changeWord={changeWord}
              change={change}
              deleteCard={deleteCard}
            />  
          )
        }
      </div>
    </div>
  );
}

export default App;
