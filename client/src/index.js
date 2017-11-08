import React from 'react';
import Navbar from './navbar.js';
import ImageUpLoader from './pictureUpload.js';
import UsersList from './UsersList.js';
import UsersDataForm from './usersDataForm'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { pictures: [] };

    }

    onDrop(picture) {
        //     this.setState({
        //         pictures: this.state.pictures.concat(picture),
        //     });
    }

    deletePic(index) {
        this.setState((prevState) => ({
            pictures: prevState.pictures.filter((item, i) =>
                i !== index)
        }));
    }

    render() {
        return (
            <div>
                <Navbar />
                <UsersDataForm />
                <ImageUpLoader onDrop={this.onDrop} />
                <UsersList deletePic={this.deletePic} pictures={this.state.pictures} />
            </div>
        );
    }
}



export default App;
