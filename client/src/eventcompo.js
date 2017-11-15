import React, { Component } from 'react';

class EventCompo extends Component {
    //
    render() {
        return (
            <div className="ImageTextContainerHome">
            <div className="titleHome">
                <div className="occasion">
                    <h1>{this.props.event}</h1>
                </div>
                <div className="date">
                    <h1>{this.props.date}</h1>
                </div>
            </div>
            <div className="ImageContainerHome">
                <div className="imageButtonContainer">
                    <div className="ImageBoxHome first"></div>
                </div>

                <div className="imageButtonContainer">
                    <div className="ImageBoxHome second"></div>
                </div>

                <div className="imageButtonContainer">
                    <div className="ImageBoxHome third"></div>
                </div>

                <div className="imageButtonContainerHome">
                    <div className="picture">
                        <img src="https://queerty-prodweb.s3.amazonaws.com/wp/docs/2014/10/liberace-lee.jpg" className="img-responsive img-thumbnailHome img-circle" />
                    </div>
                    <div className="userNameHome">
                        <h1 className="name">{this.props.username}</h1>
                    </div>
                    <div className="submitButton">
                        <button className="dottedHome postHome">Rate</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default EventCompo;