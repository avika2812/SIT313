import './Post.css'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
function Question(){
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [tags, setTags] = useState('')

    const handleAlert=()=>{
        if(title.trim()==""){
            alert("Title field is empty. PLease provide a suitable title.")
        }
        else if(text.trim()==""){
            alert("The problem field is empty. Please enter your question to be posted.")
        }
        else if(tags.trim()==""){
            alert("The Tags field is empty. Please enter atleast one tag .")
        }
        else{
            alert("Your question has been submitted successfully !!")
        }

         setTitle('')
         setText('')
         setTags('')
    }
    return(
        <>
        <div className="question-container">
        <span className="question">
        <h3>What dow you want to ask or share </h3>
        </span>
        
        <div className="form-style">
        <h3>Title : </h3>
        <input type="text" placeholder="start your question with how, what, why etc." value={title} onChange={(e) => setTitle(e.target.value)}/>
        
        <h3>Describe your problem</h3>
        <br></br>
        <textarea className="text-input" value={text}  onChange={(e) => setText(e.target.value)}/>
            <ReactMarkdown>{text}</ReactMarkdown>

        <h3>Tags</h3>
        <input className="tags-input" type="text" placeholder="Please add upto 3 tags what your question is about e.g. Java"
        value={tags}  onChange={(e) => setTags(e.target.value)}/>
        <br></br>

        <div className="button-style">
        <button onClick={handleAlert}>POST</button>

        </div>
        </div>
        </div>
        </>
    )
}
export default Question