import React from 'react';
import Navbar from './navbar.js';
import ImageUpLoader from './pictureUpload.js';
import UsersListBox from './UsersList.js';
import userBox from './userBox'
import rateBox from './rateBox'
import Sidebar from './sidebar'
import HomeView from './home'




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
                <Sidebar />
                <UsersListBox deletePic={this.deletePic} pictures={this.state.pictures} />
                {/* <ImageUpLoader onDrop={this.onDrop} /> */}
            </div>
        );
    }
}



export default App;
