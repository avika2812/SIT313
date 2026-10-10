function TutorialBox(props) {
    return (
        <div className="tutorial-box">
            <img className="tutorial-image" src={props.image} />
            <h2>{props.name}</h2>
            <p>{props.text}</p>
            <p>⭐ {props.rating} {props.author}</p>
        </div>
    )
}

export default TutorialBox