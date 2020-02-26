import React, {Fragment} from 'react'

const Comment = (props) => {
  return (
    <Fragment>
      <div className="comment-container">
        <div className="author">
          <p>{props.authorProp}</p>
        </div>
        <div className="comment-body">
          <p>{props.children}</p>
        </div>
      </div>
    </Fragment>
  )
}
export default Comment
