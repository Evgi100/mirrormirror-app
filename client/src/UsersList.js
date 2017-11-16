import React from 'react';
import UserBox from './userBox';
import UsersDataForm from './usersDataForm';
import axios from 'axios';
class UsersListBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [], src1: "", src2: "", src3: "", src4: "", event: '', eventDate: '' }
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.addPrev = this.addPrev.bind(this);
        this.addEvent = this.addEvent.bind(this);
        this.addEventDate = this.addEventDate.bind(this)
    }

    renderPictures() {
        return this.props.pictures.map((img, index) =>
            <UserBox key={index} index={index} img={img} deleteImg={this.props.deleteImg} />);
    }

    addUser(user) {
        this.setState({ users: this.state.users.concat(user) });
    }

    deleteUser(index) {
        this.setState((prevState) => ({
            users: prevState.users.filter((item, i) => i !== index)
        }));
    }

    addPrev(data) {
        let key = data.key;
        console.log(key);
        // console.log(data.src);
        this.setState({ [key]: data.src }, ()=> console.log(this.state.key))
    }

    addEvent(eventName) {
        this.setState({
            event: eventName,
        }, () => {
            console.log(this.state)
        })
    }

    addEventDate(date) {
        this.setState({
            eventDate: date
        }, () => {
            console.log(this.state)
        })
    }

    // componentDidMount() {
    //     axios.get('/events')
    //         .then(response => {
    //             this.addUser(response.data)
    //         })
    //         .catch(error => {
    //             console.log('Error fetching and parsing data', error);
    //         })
    // }


    render() {
        // console.log(this.state);

        // const renderUsers = this.state.users.map((user, index) =>
        //     <UserBox user={user} index={index} deleteUser={this.deleteUser} key={index} imgsrc={this.state['src' + (index + 1)]} />)
        return (

            <div className="ImageTextContainer ImageTextContainerEvent" >
                <UserBox addEvent={this.addEvent} addEventDate={this.addEventDate} src1={this.state.src1} src2={this.state.src2} src3={this.state.src3} src4={this.state.src4} />
                <UsersDataForm event-data={this.state.eventData} addPrev={this.addPrev} eventName={this.state.event} eventDate={this.state.eventDate} />
            </div>

        );
    }
}




export default UsersListBox;