import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  useEffect(() => {
    fetchItems();
  }, []);
  
  const [cards, setCards] = useState([]); 

  const fetchItems = async () => {
    const esCardsApi = "https://api.elderscrollslegends.io/v1/cards"

    const data = await fetch(esCardsApi);
    const items = await data.json();
    // const slicedItems = items.cards.slice(0, 10);
    const slicedItems = items.cards.slice(0, 10);
    setCards(slicedItems);
  }
  

  return(
    <div>
      <h1>Shop</h1>
      {cards.map(card => (
        <h1 key={card.id}>
          <Link to={`/shop/${card.id}`}>
            {card.name}
          </Link>
        </h1>
      ))}
    </div>
  )
}

export default Shop;