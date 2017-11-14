import React from 'react';
import UsersListBox from './UsersList';
import RateBox from './rateBox'
import UsersDataForm from './usersDataForm'
import EventDataForm from './eventDataForm'



class UserBox extends React.Component {
    constructor(props) {
        super(props)
        // this.state = { event: '', eventDate: '' }
        this.deletePictures = this.deletePictures.bind(this);
        // this.handleOnChange = this.handleOnChange.bind(this)
        // this.handleOnChangeDate = this.handleOnChangeDate.bind(this)
    }

    // handleOnChange(e) {
    //     this.setState({
    //         event: e.target.value,
    //     }, () => {
    //         console.log(this.state)
    //     })
    // }

    // handleOnChangeDate(e) {
    //     this.setState({
    //         eventDate: e.target.value
    //     }, () => {
    //         console.log(this.state)
    //     })
    // }

    deletePictures(index) {
        this.props.deletePictures(this.props.index)
    }
    render() {


        return (

            <div>
{/*          
                <div className="title">
                    <div>
                        <select onChange={this.handleOnChange} style={{ border: '0', backgroundColor: 'rgb(240, 6, 84)', fontSize: '25px', fontFamily: 'Rozha One' }}>
                            <option>Choose Occasion</option>
                            <option value="Party">Party</option>
                            <option value="Concert">Concert</option>
                            <option value="Clubbing">Clubbing</option>
                            <option value="Wedding">Wedding</option>
                        </select>                      
                    </div>
                    <div className="datePicker">
                        <div className="dateLabel">
                            <label className="control-label" htmlFor="date">Rate outfits until</label>
                        </div>
                        <div className="input-group">
                            <div className="input-group-addon">
                                <span className="glyphicon glyphicon-calendar aria-hidden=" ></span>
                            </div>
                            <input className="form-control" id="date" placeholder="DD/MM/YYYY" type="date" onChange={this.handleOnChangeDate} />
                        </div>
                    </div>
                </div > */}

< EventDataForm />
                    <div className="ImageContainer">
                    <div className="imageButtonContainer">
                        <div className="ImageBox">
                            <img  className="image" src={this.props.src1}/ ></div>
                        <div className="ButtonContainer">
                            <button className="dotted picButton">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>

                    <div className="imageButtonContainer">
                        <div className="ImageBox ">
                        <img  className="image" src={this.props.src2}/>
                        </div>
                        <div className="ButtonContainer">
                            <button className="dotted picButton">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>

                    <div className="imageButtonContainer">
                        <div className="ImageBox">
                        <img  className="image" src={this.props.src3}/>
                        </div>
                        <div className="ButtonContainer">
                            <button className="dotted picButton">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>

                    <div className="imageButtonContainer">
                        <div className="ImageBox ">
                        <img  className="image" src={this.props.src4}/>
                        </div>
                        <div className="ButtonContainer">
                            <button className="dotted picButton">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>

                    <div><p className="helptext" style={{ fontSize: '20px' }}>Upload up to 4 outfit pictures for one occasion. Filetype: jpg. Maximum file size: 2MB.
        </p></div>
                </div>
        );
    }
}

export default UserBox;


``