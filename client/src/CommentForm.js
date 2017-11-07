import React, { Component } from 'react';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {commentInput: '', username: 'Admin', time: new Date().getHours()};
        this.updateCommentInput = this.updateCommentInput.bind(this);
        this.comment = this.comment.bind(this);
    }

    updateCommentInput(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    comment() {
        this.props.addComment(this.state);
    }

    render() {
        return (
            <div>
                <form>
                    <fieldset className="form-group">
                        <input type="text" className="form-control" id="commentInput" placeholder="Add a comment" onChange={this.updateCommentInput} />
                    </fieldset>
                    <button type="button" className="btn btn-md btn-success" onClick={this.comment}>Post</button>
                </form>
            </div>

        );
    }
}

export default CommentForm;