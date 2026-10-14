function PortfolioNavbar(props) {
  return (
    <>
      <div className="portfolio-navbar">

        {props.items.map((item, index) => (
          <p key={index}>
            {item}
          </p>
        ))}

      </div>

      <hr className="portfolio-divider" />
    </>
  )
}

export default PortfolioNavbar