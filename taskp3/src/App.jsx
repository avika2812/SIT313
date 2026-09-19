import './App.css'
import Portfolio from './Portfolio'
import Articles from './Articles'
import Tutorials from './Tutorials'
import Button from './Button'
import Footer from './Footer'

function App() {
  return (
    <>
      <Portfolio />

      <div className="search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>

      <div className="hero">
        <h1>DEV@Deakin</h1>
        <p>Learn, share and connect with developers.</p>
      </div>

      <h2 className="section-title">Featured Articles</h2>

      <Articles />

      <div className="button-area">
        <Button text="See all articles" />
      </div>

      <h2 className="section-title">Featured Tutorials</h2>

      <Tutorials />

      <div className="button-area">
        <Button text="See all tutorials" />
      </div>

      <Footer />
    </>
  )
}

export default App