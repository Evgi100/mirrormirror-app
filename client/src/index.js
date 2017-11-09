import React from 'react';
import Navbar from './navbar.js';
import ImageUpLoader from './pictureUpload.js';
import UsersListBox from './UsersList.js';
import userBox from './userBox'


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
            <div className="container">
                <Navbar />
                <UsersListBox deletePic={this.deletePic} pictures={this.state.pictures} />
                <ImageUpLoader onDrop={this.onDrop} />
                <userBox />
            </div>
        );
    }
}



export default App;
