import React from 'react';
import  UsersList from './UsersList';

class UserBox extends React.Component {
    constructor(props) {
        super(props)
        this.deletePictures = this.deletePictures.bind(this);
      }
    

    deletePictures() {
        this.props.deletePictures(this.props.index)
    }
    render() {
        var url = ``
        return (
            <div className="col-md-3" >
                
                <img src={url} />
                <span className="glyphicon glyphicon-trash cityTrash" onClick={this.deletePictures} ></span>
                <UsersListBox />
            </div>
        );
    }
}

export default UserBox;


