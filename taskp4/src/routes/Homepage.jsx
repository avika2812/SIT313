import Portfolio from '../components/Portfolio'
import Articles from '../components/Articles'
import Tutorials from '../components/Tutorials'
import '../App.css'

function Homepage() {
  return (
    <>
      <div>
        <Portfolio />

        <div className="home-intro">
          <h1>DEV@Deakin</h1>
          <p> Share your knowledge, discover new ideas, and connect with developers.
          </p>
        </div>

        <div className="home-section">
          <h2>Featured Articles</h2>
          <Articles />
        </div>

        <div className="home-section">
          <h2>Featured Tutorials</h2>
          <Tutorials />
        </div>
      </div>
    </>
  )
}

export default Homepage