import './App.css'
import Counter from './components/Counter'
import Profile from './components/Profile'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>React State Management</h1>
        <p>Day 3 - useState Hook</p>
      </header>

      <main className="main">
        <Profile />
        <Counter />
      </main>

      <footer className="footer">
        <p>React Fundamentals - Day 3</p>
      </footer>
    </div>
  )
}

export default App