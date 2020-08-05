import React, { useState } from 'react'
import axios from 'axios'

export default function CommentCreate({postId}) {
  const [content, setContent] = useState('');

  const onSubmit = async(e) => {
    e.preventDefault();
    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content
    });
    setContent('');
  };
  
  return (
    <div>
      <form onSubmit={onSubmit} style={{padding: "1rem"}}>
        <div>
          <label>New Comment</label>
          <input type="text" value={content} onChange={(e) => setContent(e.target.value)}className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary" style={{marginTop: "1rem"}}>Submit</button>
      </form>
    </div>
  )
}
