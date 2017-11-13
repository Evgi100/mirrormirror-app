import React from 'react';
import UsersListBox from './UsersList';
import RateBox from './rateBox'
import UsersDataForm from './usersDataForm'


class UserBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { event: '', eventDate: '' }
        this.deletePictures = this.deletePictures.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnChangeDate = this.handleOnChangeDate.bind(this)
    }

    handleOnChange(e) {
        this.setState({
            event: e.target.value,
        }, () => {
            console.log(this.state)
        })
    }

    handleOnChangeDate(e) {
        this.setState({
            eventDate: e.target.value
        }, () => {
            console.log(this.state)
        })
    }

    deletePictures(index) {
        this.props.deletePictures(this.props.index)
    }
    render() {


        return (

            //         <span className="glyphicon glyphicon-trash userTrash" onClick={this.deletePictures} ></span>
            <div>
                <div className="title">
                    <div>
                        <select onChange={this.handleOnChange} style={{ border: '0', backgroundColor: 'rgb(240, 6, 84)', fontSize: '25px', fontFamily: 'Rozha One' }}>
                            <option>Choose Occasion</option>
                            <option value="Party">Party</option>
                            <option value="Concert">Concert</option>
                            <option value="Clubbing">Clubbing</option>
                            <option value="Wedding">Wedding</option>
                        </select>
                        {/* <!-- <input class="bubble textInput" placeholder="Enter Occasion" type="text" /> --> */}
                    </div>
                    <div className="datePicker">
                        <div className="dateLabel">
                            <label className="control-label" htmlFor="date">Rate outfits until</label>
                            {/* <label htmlFor="rate">Rate outfits until : </label><input id="rating" type="date" value=""/> */}
                        </div>
                        <div className="input-group">
                            <div className="input-group-addon">
                                <span className="glyphicon glyphicon-calendar aria-hidden=" ></span>
                            </div>
                            <input className="form-control" id="date" placeholder="DD/MM/YYYY" type="date" onChange={this.handleOnChangeDate} />
                        </div>
                    </div>
                </div >
                <div className="ImageContainer">
                    <div className="imageButtonContainer">
                        <div className="ImageBox first"></div>
                        <div className="ButtonContainer">
                            <button className="dotted picButton">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>

                    <div className="imageButtonContainer">
                        <div className="ImageBox second"></div>
                        <div className="ButtonContainer">
                            <button className="dotted picButton">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>

                    <div className="imageButtonContainer">
                        <div className="ImageBox third"></div>
                        <div className="ButtonContainer">
                            <button className="dotted picButton">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>

                    <div className="imageButtonContainer">
                        <div className="ImageBox forth"></div>
                        <div className="ButtonContainer">
                            <button className="dotted picButton">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="submitButton">
                    <button className="dotted post">
                        <i className="fa fa-upload" aria-hidden="true"></i>
                    </button>
                    <p className="helptext" style={{fontSize:'20px'}}>
                    </p>
                    <button className="dotted post">Post Event</button>
                </div>
                <div><p className="helptext" style={{fontSize:'20px'}}>Upload up to 4 outfit pictures for one occasion. Filetype: jpg. Maximum file size: 2MB.
        </p></div>
            </div>
        );
    }
}

export default UserBox;


