function Banner(props) {
  return (
    <>
      <div className="banner-container">

        <img
          className="banner"
          src={props.image}
          alt="Portfolio banner"
        />

        <div className="hover-text">
          <p>{props.text}</p>
        </div>

      </div>

      <hr className="portfolio-divider" />
    </>
  )
}

export default Banner