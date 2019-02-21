import React from "react";

class PostForm extends React.Component {
  contentRef = React.createRef();
  titleRef = React.createRef();

  createPost = event => {
    event.preventDefault();
    const post = {
      id: "",
      title: this.titleRef.current.value,
      user: this.props.user.displayName,
      userId: this.props.user.uid,
      userImage: this.props.user.photoURL,
      content: this.contentRef.current.value,
      likes: 0,
      likedBy: [""],
      dislikes: 0,
      dislikedBy: [""],
      time: `${new Date().toDateString()} - ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
      timeId: Date.parse(new Date())
    };
    this.props.addPost(post);
    this.titleRef.current.value = "";
    this.contentRef.current.value = "";
  };
  render() {
    return (
      <div>
      {this.props.user ? 
      <form className="form-group" onSubmit={this.createPost}>
        <label htmlFor="title">Title:</label>
        <br />
        <input ref={this.titleRef} type="text" />
        <br />
        <label htmlFor="content">Content: </label>
        <br />
        <textarea
          ref={this.contentRef}
          name="content"
          id=""
          cols="30"
          rows="5"
        />{" "}
        <br />
        <button className="btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form> : <div>Please Log in to Create and View User Posts</div>}
      </div>
    );
  }
}

export default PostForm;
