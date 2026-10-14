import portfolioData from './PortfolioData'
import PortfolioNavbar from './PortfolioNavbar'
import About from './About'
import Gallery from './Gallery'
import '../App.css'
import './Portfolio.css'

function Portfolio() {
  return (
    <>
      <PortfolioNavbar items={portfolioData.navbarItems} />

      <About
        profileImage={portfolioData.about.profileImage}
        aboutText={portfolioData.about.text}
        projects={portfolioData.projects}
      />

      <Gallery images={portfolioData.galleryImages} />
    </>
  )
}

export default Portfolio