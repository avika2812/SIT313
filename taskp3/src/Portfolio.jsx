import portfolioData from './PortfolioData'
import PortfolioNavbar from './PortfolioNavbar'
import Banner from './Banner'
import About from './About'
import Gallery from './Gallery'

function Portfolio() {
  return (
    <>
      <PortfolioNavbar items={portfolioData.navbarItems} />

      <Banner
        image={portfolioData.banner.image}
        text={portfolioData.banner.text}
      />

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