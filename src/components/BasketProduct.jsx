import React from 'react'

const BasketProduct = ({item}) => {
  return (
    <div>
      <img src={item.image} alt={item.name + "glasses"} />
      <div>
        <p>{item.name}</p>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <button>
        Remove
      </button>
    </div>
  );
}

export default BasketProduct
