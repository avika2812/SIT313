import { Link, Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import portfolioData from '../components/PortfolioData'

function Navigation() {
  return (
    <>
      <div className="top-navbar">
        <Link to="/" className="logo">
          DEV@Deakin
        </Link>

<<<<<<< HEAD
        

=======
>>>>>>> 2d53c0f394f39fa740be9c50fd62e4300db64bbd
        <input
          type="search"
          className="search-box"
          placeholder="Search..."
        />

<<<<<<< HEAD
        <Link to="/post" className="nav-link">Post</Link>
        
=======
        <Link to="/signup" className="nav-link">
          Post
        </Link>
>>>>>>> 2d53c0f394f39fa740be9c50fd62e4300db64bbd

        <Link to="/login" className="nav-link">
          Login
        </Link>
      </div>

      <div className="banner">
        <img src={portfolioData.banner.image} alt="Banner" />
      </div>

      <Outlet />

      <Footer />
    </>
  )
}

export default Navigation