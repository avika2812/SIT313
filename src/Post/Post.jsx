import { useState } from 'react'
import Question from './Question'
import Article from './Article'
import './Post.css'

function Post(){
    const [post,setPost]=useState("");
    const handleOption=(e)=>{
        setPost(e.target.value);
    }
    return(
        <>
        <div className="post-container">
        <h3 className="heading">New Post</h3>
        <form className="form-style">
            <p>Select the post type : </p>

            <div className="input-style">
            <label>
            <input type="radio" name="post" value="question" checked={post==='question'} onChange={handleOption}/>
            Question
            </label>

            <label>
            <input type="radio" name="post" value="article" checked={post==='article'} onChange={handleOption}/>
            Article
            </label>
            </div>
        </form>
        

        {post === 'question' && <Question />}
        {post === 'article' && <Article />}
        </div>
        </>
    )
}

export default Post