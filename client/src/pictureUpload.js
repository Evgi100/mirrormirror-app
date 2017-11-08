import React from 'react';
import ImageUploader from 'react-images-upload';

class ImageUpLoader extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div className="frame">
                <div className="center">
            </div>
            <div className="upload-btn input" onClick={this.onDrop}></div>
            </div>
        );
    }
}

export default ImageUpLoader;