import React, { Component } from 'react';

class ImageContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="imageButtonContainer">
                <div className="ImageBox">
                    <img className="image" src={this.props.imgsrc} />
                </div>
                <div className="ButtonContainer">
                    <button className="dotted picButton">
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default ImageContainer;