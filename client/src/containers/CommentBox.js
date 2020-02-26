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
    let url = window.location.pathname;
    if(url === '/rps2'){
    request.get('/api/rps2')
    .then(commentData => this.setState({data: commentData}))
    .catch(err => console.error)
  }
  else if(url === '/rps'){
    request.get('/api/rps')
    .then(commentData => this.setState({data: commentData}))
    .catch(err => console.error)
  }
  }

  handleNewComment(comment){
    let url = window.location.pathname
    if(url === '/rps2'){
      const request = new Request()
      request.post("/api/rps2", comment)
      .then(data => this.fetchComments())
    }
    else if (url === '/rps'){
      const request = new Request()
      request.post("/api/rps", comment)
      .then(data => this.fetchComments())
    }
  }

  handleToggleComment(){
    this.setState(state => ({
      newCommentForm: !state.newCommentForm
    }))
  }

  render(){
    return(
      <div className="comment-box">
        <h4>Report a bug <br/> Discuss your score</h4>
        <CommentList data={this.state.data}/>
        <button className="btn-comment" onClick={this.handleToggleComment}> Comment </button>
        <CommentForm newCommentToggle={this.state.newCommentForm} onPost={this.handleNewComment} fetchComments={this.fetchComments}/>
      </div>
    )
  }
}
export default CommentBox
