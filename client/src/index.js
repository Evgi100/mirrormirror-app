import React from 'react';
import Navbar from './navbar.js';
import ImageUpLoader from './pictureUpload.js';

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Navbar />
                <ImageUpLoader />
            </div>
        );
    }
}



export default App;
