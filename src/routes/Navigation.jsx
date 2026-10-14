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

        

        <input
          type="search"
          className="search-box"
          placeholder="Search..."
        />

        <Link to="/post" className="nav-link">Post</Link>
        

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