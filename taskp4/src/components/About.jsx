import PortfolioItem from './PortfolioItem'

function About(props) {
  return (
    <div className="about">

      <h1>About Me</h1>

      <img
        src={props.profileImage}
        alt="Profile"
      />

      <p>
        {props.aboutText}
      </p>

      <hr />

      <p className="portfolio-intro">
        Here's what I have done so far
      </p>

      <div className="portfolio">

        {props.projects.map((project) => (
          <PortfolioItem
            key={project.id}
            image={project.image}
            title={project.title}
            text={project.text}
          />
        ))}

      </div>

    </div>
  )
}

export default About