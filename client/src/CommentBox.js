import React, { Component } from 'react';
import CommentForm from "./CommentForm";
import CommentsListBox from "./CommentsListBox";


class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {comments:  []};
        this.addComment = this.addComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }

    addComment(commentData){
        this.setState({comments: this.state.comments.concat(commentData)}, ()=> {
            console.log(this.state.comments);
        });
    }

    deleteComment(index) {
        // console.log(index);
        // console.log(index+1);
        // this.setState({comments: this.state.comments.slice(index, index+1)});
        this.setState({ expenses: this.state.comments.filter((comment, fIndex, comments)=> comment.commentInput !== comments[index].commentInput) }, function () {
            console.log(this.state);
        });
    }

    render() {
        return (
            // <div className="col-md-6 offset-md-3" style={{margin: "top:2em"}}>
            // <div className="card paper">
            <div>
            <CommentForm addComment={this.addComment} />
            <hr/>
            <CommentsListBox comments={this.state.comments} deleteComment={this.deleteComment} />
            </div>
            // </div>
        );
    }
}

export default CommentBox;