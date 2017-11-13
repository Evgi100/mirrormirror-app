import React from 'react';
import UsersListBox from './UsersList';

import RateBox from './rateBox'



import UsersDataForm from './usersDataForm'


class UserBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { url: "" }
        this.deletePictures = this.deletePictures.bind(this);
        this.addPhoto = this.addPhoto.bind(this);
    }

    addPhoto(img) {
        this.setState({ url: img })
    }

    deletePictures(index) {
        this.props.deletePictures(this.props.index)
    }
    render() {


        return (


            // <div className='UserBox'>
            //     <span className="glyphicon glyphicon-trash userTrash" onClick={() => { this.props.deleteUser(this.props.index) }}></span>
            //     {/* <h2>{this.props.user.event}</h2>
            //     <h4>{this.props.user.name}</h4> */}
            //     <div className="col-md-3">
            //         {/* <img src={url} /> */}
            //         <span className="glyphicon glyphicon-trash userTrash" onClick={this.deletePictures} ></span>

            // </div>
            <div className='ImageTextContainer'>
                <span className="glyphicon glyphicon-trash userTrash" onClick={() => { this.props.deleteUser(this.props.index) }}></span>
                {/* <h2>{this.props.user.event}</h2>
                    <h4>{this.props.user.name}</h4> */}

                <div className="submitButton">
                    <button className="action-button animate blue">Upload pic</button>
                </div>
                <div className="ImageContainer">

                    <div className="ImageTextContainer">
                        <div className="title">
                            <input className="bubble textInput" placeholder="Enter Occasion" type="text" />
                            <button className="action-button animate blue">Expiration date </button>
                        </div>

                        <div className="ImageContainer">
                            <div className="imageButtonContainer">
                                <div className="ImageBox first"></div>
                                <div className="ButtonContainer">
                                    <button className="action-button animate blue picButton">
                                        <i className="fa fa-upload" aria-hidden="true"></i>
                                    </button>
                                    <button className="action-button animate blue picButton">
                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                    </button>
                                    <RateBox />
                                </div>
                            </div>

                            <div className="imageButtonContainer">
                                <div className="ImageBox second"></div>
                                <div className="ButtonContainer">
                                    <button className="action-button animate blue picButton">
                                        <i className="fa fa-upload" aria-hidden="true"></i>
                                    </button>
                                    <button className="action-button animate blue picButton">
                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                    </button>
                                    <RateBox />
                                </div>
                            </div>

                            <div className="imageButtonContainer">
                                <div className="ImageBox third"></div>
                                <div className="ButtonContainer">
                                    <button className="action-button animate blue picButton">
                                        <i className="fa fa-upload" aria-hidden="true"></i>
                                    </button>
                                    <button className="action-button animate blue picButton">
                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                    </button>
                                    <RateBox />
                                </div>
                            </div>

                            <div className="imageButtonContainer">
                                <div className="ImageBox forth">
                                    <img className="ImageBox" src={this.props.imgSrc} />
                                </div>
                                <div className="ButtonContainer">
                                    <button className="action-button animate blue picButton">
                                        <i className="fa fa-upload" aria-hidden="true"></i>
                                    </button>
                                    <button className="action-button animate blue picButton">
                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                    </button>
                                    <RateBox />
                                </div>
                            </div>
                        </div>

                        <div className="submitButton">
                            <p className="uploadMessage">Upload up to 4 outfit pictures for one occasion. Filetype: jpg, maximum file size: 2MB.
            </p>
                            <button className="action-button animate blue">Post Event</button>
                        </div>

                    </div>
                    {/* <span className="glyphicon glyphicon-trash userTrash" onClick={this.deletePictures} ></span> */}

                </div>
            </div>
        );
    }
}

export default UserBox;


