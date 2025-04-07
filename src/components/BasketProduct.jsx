import React from 'react'

const BasketProduct = ({item}) => {
  return (
    <div>
      <img src={item.image} alt={item.name + "glasses"} />
      <div>
        <p>{item.name}</p>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <button className='bg-gray-500 text-white text-lg font-medium rounded-lg p-4 hover:bg-red-500'>
        Remove
      </button>
    </div>
  );
}

export default BasketProduct
