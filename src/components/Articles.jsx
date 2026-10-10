import articles from './ArticleData'
import ArticleBox from './ArticleBox'
import './Articles.css'

function Articles() {
  return (
    <div className="articles">

      {articles.map((article) => (
        <ArticleBox
          key={article.id}
          image={article.image}
          name={article.name}
          text={article.text}
          rating={article.rating}
          author={article.author}
        />
      ))}

    </div>
  )
}

export default Articles