import React from 'react';
import UsersListBox from './UsersList';

class UserBox extends React.Component {
    constructor(props) {
        super(props)
        this.deletePictures = this.deletePictures.bind(this);
    }


    deletePictures(index) {
        this.props.deletePictures(this.props.index)
    }
    render() {
        var url = `http://images.mattel.com/scene7/DHD86_01?$oslarge$&wid=549&hei=549`
        return (
            <div className='UserBox'>
                 <span className="glyphicon glyphicon-trash userTrash" onClick={ ()=> {this.props.deleteUser(this.props.index)}}></span>
                <h2>{this.props.user.event}</h2>
                <h4>{this.props.user.name}</h4>
                <div className="col-md-3">
                    <img src={url} />
                    <span className="glyphicon glyphicon-trash userTrash" onClick={this.deletePictures} ></span>
                </div>
            </div>
        );
    }
}

export default UserBox;


