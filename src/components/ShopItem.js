import React from 'react'

function ShopItem({ item }) {
  return (
    <div className="shopItem__content">
        <img src={item.img} alt={item.name} className="shopItem__image" height={75}></img>
        <div className="shopItem__name">{(item.name).toUpperCase()}</div>
        <div className="shopItem__color">{item.color}</div>
        <div className="shopItem__price">${item.price}</div>
        <button className="shopItem__button btn">ADD TO CARD</button>
    </div>
  )
}

export default ShopItem
