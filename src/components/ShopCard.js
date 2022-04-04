import React from 'react'


function ShopCard({ card }) {
  return (
    <div className="shopCard">
        <div className="shopItem__name">{(card.name).toUpperCase()}</div>
        <div className="shopItem__color">{card.color}</div>
        <img className="shopItem__img" src={card.img} alt={card.name} height={200}></img>
        <div className="shopItem__footer">
            <div className="shopItem__price">${card.price}</div>
            <button className="shopItem__button btn">ADD TO CARD</button>
        </div>
    </div>
  )
}

export default ShopCard
