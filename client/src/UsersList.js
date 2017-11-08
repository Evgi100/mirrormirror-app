import React from 'react';
import UserBox from './userBox';
class UsersListBox extends React.Component {
    constructor(props) {
        super(props);
        this.state={users:[]}
        this.addUser=this.addUser.bind(this);
    }

    renderPictures() {
        return this.props.pictures.map((img, index) =>
            <UserBox key={index} index={index} img={img} deleteImg={this.props.deleteImg} />);
    }

    addUser(user){
        this.set
    }

    render() {
        return (
            <div>
                <ul className="row">
                    {this.renderPictures()}
                </ul>
            </div>
        );
    }
}




export default UsersListBox;