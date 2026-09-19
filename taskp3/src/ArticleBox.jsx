function ArticleBox(props) {
  return (
    <div className="article-box">

      <img
        className="article-image"
        src={props.image}
        alt={props.name}
      />

      <h3>{props.name}</h3>

      <p>{props.text}</p>

      <p>⭐ {props.rating} {props.author}</p>

    </div>
  )
}

export default ArticleBox