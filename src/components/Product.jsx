const Product = ({ item }) => {
  return (
    <div className="mx-auto px-8 border border-gray-200 rounded-lg">
      <img src={item.image} alt="glasses"/>
      <div>
        <div className="flex flex-row items-center justify-between py-4">
      <p className="text-xl">{item.name} </p>
      <p className="text-lg">${item.price}</p>
        </div>
        <button className="bg-indigo-500 text-white text-lg font-medium rounded-full p-4">Add to Cart</button>
      </div>
    </div>
  );
}

export default Product
