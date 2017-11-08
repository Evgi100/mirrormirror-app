import React from 'react';

class ImageUpLoader extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="mirrorBox">
                    <div className="mirror">
                        <div className="frame"></div>
                    </div>
                    <div className="upload-btn"></div>
                </div>
            </div>
        );
    }
}

export default ImageUpLoader;

// Old Html before taking andrea version

{/* <div className="center">
<div className="upload-btn input" onClick={this.onDrop}></div>

<div className="bar"></div>
<div className="title">Drop file to upload</div>
<div className="dropzone">
    <div className="content">
        <span className="filename"></span>
        <input type="file" className="input"></input>
        <div className="upload-btn" >Upload file</div>
    </div>
</div>
</div>
<div className="upload-btn input"></div> */}