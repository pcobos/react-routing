import React, { useState, useEffect } from 'react';

const ItemDetail = ({ match }) => {

  const [item, setItem] = useState({});

  useEffect(() => {
    fetchItem();
    console.log(item);
  }, [])

  const fetchItem = async () => {
    const esCardApi = `https://api.elderscrollslegends.io/v1/cards/${match.params.id}`;
    const data = await fetch(esCardApi);
    const item = await data.json();

    setItem(item);
  }

  return (
    <div>
      <h1>{item.card.name}</h1>
      <img src={`${item.card.imageUrl}`} alt={`${item.card.name}`}/>
    </div>
  )
}

export default ItemDetail;