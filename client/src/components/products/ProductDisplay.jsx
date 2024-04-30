
// eslint-disable-next-line react/prop-types
const ProductDisplay = ({product, index}) => {
  return (
    <div key={index} className=" rounded-sm bg-slate-100 p-2 w-4/5">
                <img className="w-full h-36 object-cover rounded-sm mb-2" src={product.thumbnail} alt="item thumbnail" />
                <div className="flex items-center mb-2">
                  <span className="text-xs bg-red-700 text-white rounded-sm px-2 py-1">{product.discountPercentage}% off</span>
                  <span className="text-xs text-red-700 ml-2 font-semibold">Limited time deal</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-red-700 font-semibold text-lg mr-1"><sup>₹</sup>{product.price}.00</span>
                  <span className="text-xs">MRP</span>
                </div>
                <h3 className="text-sm font-semibold">{product.title}</h3>
              </div>
  )
}

export default ProductDisplay