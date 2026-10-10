import portfolioData from './PortfolioData'

function Banner() {
  return (
    <div className="banner">
      <img src={portfolioData.banner.image} alt="Banner" />
      <h1>{portfolioData.banner.text}</h1>
    </div>
  )
}

export default Banner