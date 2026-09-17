function ProductCard({ name, price, available }) {
  return (
    <div className="product-card">
      <div className="product-icon">
        {name.charAt(0)}
      </div>

      <h3>{name}</h3>

      <p className="price">₹{price}</p>

      {available ? (
        <span className="available">Available</span>
      ) : (
        <span className="unavailable">Out of Stock</span>
      )}

      <button disabled={!available}>
        {available ? 'Buy Now' : 'Unavailable'}
      </button>
    </div>
  )
}

export default ProductCard