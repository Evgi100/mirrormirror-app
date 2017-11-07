import React, { Component } from 'react';


class RegularComment extends Component {
    constructor(props) {
        super(props);
        this.deleteComment = this.deleteComment.bind(this);
    }

    deleteComment(index) {
        return () => {
            this.props.deleteComment(index);
        };
    }

    render() {
        return (
            <li className="list-group-item ">
                <span className="circle">
                    <img src="http://bigbeehive.com/demo/orientplay-angular/img/user/vector4.png" alt="user" />
                </span>
                <span className="title">
                    <a >{this.props.username}</a>
                    <time>{this.props.time}</time>
                    <p>{this.props.commentInput}</p>
                </span>
                <ul className="actions" >
                    <li>
                        <a className="reply" >Reply</a>
                    </li>
                    <li>
                        <a className="delete" onClick={this.deleteComment(this.props.index)}>Delete</a>
                    </li>
                </ul>
            </li>
        );
    }
}

class LastComment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul id="lastComment" className="list-group">
                <li className="list-group-item">
                    <span className="circle">
                        <img src="http://bigbeehive.com/demo/orientplay-angular/img/user/vector4.png" alt="user" />
                    </span>
                    <span className="title">
                        <a >{this.props.username} </a>
                        <time>{`${this.props.time} pm`}</time>
                        <p>
                            <a >{this.props.username}</a> {this.props.commentInput}</p>
                    </span>
                    <ul className="list-inline actions" >
                        <li>
                            <a className="edit" title="Edit comment">Edit</a>
                        </li>
                        <li className="roff">
                            <a className="delete" title="Delete comment"></a>
                        </li>
                    </ul>
                </li>
            </ul>
        );
    }
}

class CommentsListBox extends Component {
    constructor(props) {
        super(props);
        this.renderComments = this.renderComments.bind(this);
        // this.state = {};
    }

    renderComments() {
        let comments = this.props.comments;
        console.log('yooooooooooooo');
        return comments.map((comment, index) => <RegularComment index={index} key={index} username={comment.username} time={comment.time} commentInput={comment.commentInput} deleteComment={this.props.deleteComment} />, console.log('popopopopo'));
    }

    // renderFirstComment() {
    //     return <LastComment key="0" username={this.props.comments[0].username} time={this.props.comments[0].time} commentInput={this.props.comments[0].commentInput}/>
    // }

    render() {
        return (
            <div>
                <details>
                    <summary style={{ padding: "1em" }}>{`${this.props.comments.length} comments`}</summary>
                    <ul className="list-group">
                        {this.renderComments()}
                    </ul>
                </details>
                <ul id="lastComment" className="list-group">
                    <li className="list-group-item">
                        <span className="circle">
                            <img src="http://bigbeehive.com/demo/orientplay-angular/img/user/vector4.png" alt="user" />
                        </span>
                        <span className="title">
                            <a href="#">Sandra Adams </a>
                            <time> 6:00 PM</time>
                            <p>
                                <a href="#">Peter Carlsson</a> This is without doubt the greatest flim i’ve ever seen.</p>
                        </span>
                        <ul className="list-inline actions" href="#">
                            <li>
                                <a className="edit" href="#" title="Edit comment">Edit</a>
                            </li>
                            <li className="roff">
                                <a className="delete" href="#" title="Delete comment"></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CommentsListBox;