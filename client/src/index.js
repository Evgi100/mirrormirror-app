import React from 'react';
import Navbar from './navbar.js';
import ImageUpLoader from './pictureUpload.js';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { pictures: [] };
        
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    
    render() {
        return (
            <div>
                <Navbar />
                <ImageUpLoader onDrop={this.onDrop} />
            </div>
        );
    }
}



export default App;
