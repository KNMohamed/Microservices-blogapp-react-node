import React from 'react'

export default function CommentList({comments}) {

  return (
    <ul>
      {
        comments.map(comment => <li key={comment.id}> {(comment.status === "pending")?"Comment is awaiting moderation":(comment.status === "approved")?comment.content:"This comment has been rejected"} </li> )
      }
    </ul>
  )
}
