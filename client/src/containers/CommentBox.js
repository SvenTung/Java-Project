import React, {Component} from 'react'
import CommentList from '../components/CommentList'
import CommentForm from './CommentForm'
import Request from '../helpers/request'


class CommentBox extends Component{
  constructor(props){
    super(props)
    this.state = {
      data:[],
      newCommentForm: false
    }
    this.handleToggleComment = this.handleToggleComment.bind(this)
    this.handleNewComment = this.handleNewComment.bind(this);
  }

  componentDidMount(){
    this.fetchComments();
  }

  fetchComments = () => {
    const request = new Request();
    request.get('/api/comments')
    .then(commentData => this.setState({data: commentData}))
    .catch(err => console.error)
  }

  handleNewComment(comment){
      const request = new Request()
      request.post("/api/comments", comment)
      .then(data => this.fetchComments())
  }

  handleToggleComment(){
      this.setState(state => ({
        newCommentForm: !state.newCommentForm
      }))
  }


render(){
  return(
    <div className="comment-box">
      <h1>Report a bug! <br/>
      Discuss your score!</h1>
      <CommentList data={this.state.data}/>

      <button className="btn-comment" onClick={this.handleToggleComment}> Submit a comment </button>

      <CommentForm newCommentToggle={this.state.newCommentForm} onPost={this.handleNewComment} fetchComments={this.fetchComments}/>

    </div>
  )
}


}


export default CommentBox
