const Product = ({ item }) => {
  return (
    <div className="mx-auto px-8 border border-gray-200">
      <img src={item.image} />
      <p className="text-xl">{image.name}</p>
      <p className="text-lg">${item.price}</p>
    </div>
  );
}

export default Product
