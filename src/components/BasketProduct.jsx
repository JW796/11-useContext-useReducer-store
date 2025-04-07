import React from 'react'

const BasketProduct = ({item}) => {
  return (
    <div className='flex flex-row items-center gap-8 px-10'>
      <img src={item.image} alt={item.name + "glasses"} 
      className='max-w-150 min-w-40'
      />
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
