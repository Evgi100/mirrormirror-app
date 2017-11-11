import React from 'react';
import UsersListBox from './UsersList';
import UsersDataForm from './usersDataForm'

class UserBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { url: "" }
        this.deletePictures = this.deletePictures.bind(this);
        this.addPhoto = this.addPhoto.bind(this);
    }

    addPhoto(img) {
        this.setState({ url: img })
    }

    deletePictures(index) {
        this.props.deletePictures(this.props.index)
    }
    render() {
        <UsersDataForm addPhoto={this.addPhoto} />
        
        var url = ``
        return (
            <div className='UserBox'>
                <span className="glyphicon glyphicon-trash userTrash" onClick={() => { this.props.deleteUser(this.props.index) }}></span>
                <h2>{this.props.user.event}</h2>
                <h4>{this.props.user.name}</h4>
                <div className="col-md-3">
                    < img src={this.state.url} />
                    <span className="glyphicon glyphicon-trash userTrash" onClick={this.deletePictures} ></span>
                </div>
            </div>
        );
    }
}

export default UserBox;


