import React from 'react'
import Comment from './Comment'

const CommentList = (props) => {

  const commentNodes = props.data.map((comment, index)=> {
    return(<Comment authorProp={comment.author} key={index}>{comment.body}</Comment>)
  })

  return (
    <div className="comment-list">
      {commentNodes}
    </div>
  )
}

export default CommentList
