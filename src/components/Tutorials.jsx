import tutData from './TutorialData'
import TutorialBox  from './TutorialBox'
import '../App.css'
import './Tutorials.css'

function Tutorials() {
  return (
    <div className="tutorials">

      {tutData.map((tutorial) => (
        <TutorialBox
          key={tutorial.id}
          image={tutorial.image}
          name={tutorial.name}
          text={tutorial.text}
          rating={tutorial.rating}
          author={tutorial.author}
        />
      ))}

    </div>
  )
}

export default Tutorials