import React from 'react';
import UsersListBox from './UsersList';
import RateBox from './rateBox'
import UsersDataForm from './usersDataForm'
import EventDataForm from './eventDataForm'
import ImageContainer from './createEventImg/imageContainer';



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
                <EventDataForm addEvent={this.props.addEvent} addEventDate={this.props.addEventDate} />
                <div className="ImageContainer">
                    <ImageContainer imgsrc={this.props.src1} />
                    <ImageContainer imgsrc={this.props.src2} />
                    <ImageContainer imgsrc={this.props.src3} />
                    <ImageContainer imgsrc={this.props.src4} />
                    <div><p className="helptext" style={{ fontSize: '20px' }}>Upload up to 4 outfit pictures for one occasion. Filetype: jpg. Maximum file size: 2MB.</p></div>
                </div>
            </div>

        );
    }
}

export default UserBox;