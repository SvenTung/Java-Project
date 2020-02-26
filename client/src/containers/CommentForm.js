import React, {Component} from 'react'

class CommentForm extends Component {

  constructor(props){
    super(props)
    this.state={
      author: "",
      body: ""
    }
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(event){
    this.setState({author: event.target.value})
  }

  handleBodyChange(event){
    this.setState({body: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const newComment =
    {
      author: this.state.author,
      body: this.state.body
    }
    this.props.onPost(newComment)
    this.setState({author: "", body: ""})
  }

  render(){
    if(!this.props.newCommentToggle){
      return null
    }
    return(
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <label >Author: </label>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          //because this is a callback, we're not putting brackets in
          //if we put brackets in it would execute once and straight away
          onChange={this.handleAuthorChange}
        />
        <br/>
        <label>Body:  </label>
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.body}
          onChange={this.handleBodyChange}
        />
        <br/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default CommentForm;
