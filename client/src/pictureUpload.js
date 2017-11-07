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
                    <div className="bar"></div>
                    <div className="title">Drop file to upload</div>
                    <div className="dropzone">
                        <div className="content">
                            <img src="http://100dayscss.com/codepen/upload.svg" className="upload"></img>
                            <span className="filename"></span>
                            <input type="file" className="input"></input>
                            <div className="upload-btn" onDrop={this.props.onDrop(picture)}>Upload file</div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default ImageUpLoader;