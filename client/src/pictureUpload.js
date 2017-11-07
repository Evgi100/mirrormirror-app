import React from 'react';
import ImageUploader from 'react-images-upload';

class ImageUpLoader extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    render() {
        return (
            <div className="frame">
                 
                <div className="center">
                
                    <div className="bar"></div>
                    <div className="title">Drop file to upload</div>
                    <div className="dropzone">
                        <div className="content">
                            <span className="filename"></span>
                            <input type="file" className="input"></input>
                        </div>
                    </div>
                </div>
                <div className="upload-btn input" onClick={this.onDrop}></div>
            </div>
            


        );
    }
}

export default ImageUpLoader;