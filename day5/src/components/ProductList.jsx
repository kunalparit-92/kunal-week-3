import ProductCard from './ProductCard'

function ProductList({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          available={product.available}
        />
      ))}
    </div>
  )
}

export default ProductList