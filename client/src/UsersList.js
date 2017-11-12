import React from 'react';
import UserBox from './userBox';
import UsersDataForm from './usersDataForm'
import axios from 'axios'
class UsersListBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] }
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    renderPictures() {
        return this.props.pictures.map((img, index) =>
            <UserBox key={index} index={index} img={img} deleteImg={this.props.deleteImg} />);
    }

    addUser(user) {
        this.setState({ users: this.state.users.concat(user) });
    }

    deleteUser(index) {
        this.setState((prevState) => ({
            users: prevState.users.filter((item, i) => i !== index)
        }));
    }

    componentDidMount() {
        axios.get('/events')
            .then(response => {
                this.addUser(response.data)
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            })
    }


    render() {
        const renderUsers = this.state.users.map((user, index) =>
            <UserBox user={user} index={index} deleteUser={this.deleteUser} key={index} />)
        return (
            <div>
                <UsersDataForm addUser={this.addUser} /> {renderUsers}
                <ul className="row" >
                    {this.renderPictures()}
                </ul>
            </div>

        );
    }
}




export default UsersListBox;