import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'

function App() {
  const [showProducts, setShowProducts] = useState(true)

  const products = [
    { id: 1, name: 'Sports T-Shirt', price: 799, available: true },
    { id: 2, name: 'Running Shoes', price: 1499, available: true },
    { id: 3, name: 'Cricket Bat', price: 1999, available: false },
    { id: 4, name: 'Football', price: 599, available: true },
    { id: 5, name: 'Gym Shorts', price: 699, available: false },
    { id: 6, name: 'Sports Cap', price: 399, available: true }
  ]

  return (
    <div className="app">
      <header className="header">
        <h1>Product Store</h1>
        <p>Day 5 - Lists & Conditional Rendering</p>
      </header>

      <main className="main">
        <div className="top-section">
          <div>
            <h2>Sports Products</h2>
            <p>Products rendered using map()</p>
          </div>

          <button onClick={() => setShowProducts(!showProducts)}>
            {showProducts ? 'Hide Products' : 'Show Products'}
          </button>
        </div>

        {showProducts ? (
          <ProductList products={products} />
        ) : (
          <div className="empty">
            <h3>Products Hidden</h3>
            <p>Click the button to show products.</p>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>React Fundamentals - Day 5</p>
      </footer>
    </div>
  )
}

export default App