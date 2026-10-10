function PortfolioItem(props) {
  return (
    <div className="portfolio-item">

      <img
        src={props.image}
        alt={props.title}
      />

      <div className="portfolio-text">

        <h3>{props.title}</h3>

        <p>{props.text}</p>

      </div>

    </div>
  )
}

export default PortfolioItem