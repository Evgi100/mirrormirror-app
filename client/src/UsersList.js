import React from 'react';
import UserBox from './userBox';
class UsersListBox extends React.Component {
    constructor(props) {
        super(props);
    }

    renderPictures() {
        return this.props.pictures.map((img, index) =>
            <UserBox key={index} index={index} img={img} deleteImg={this.props.deleteImg} />);
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