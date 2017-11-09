import React from 'react';
import axios from 'axios'

class UsersDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user: "", event: "", img: "" }
        this.sendImg = this.sendImg.bind(this)
        this.uploadImage = this.uploadImage.bind(this)
        // this.sendUsersData = this.sendUsersData.bind(this)
    }

    // sendUsersData(event) {
    //     event.preventDefault();
    //     axios.post('/events', this.state)
    //         .then(response => {
    //             axios.get('/user:/')
    //             this.props.addUser(response.data)
    //             this.setState({ name: "", event: "" })
    //         })
    //         .catch(error => {
    //             console.log('Error fetching and parsing data', error);
    //         });

    // }

    sendImg(e) {

        this.setState({ [e.target.id]: e.target.value })
    }

    uploadImage() {
        if (this.state.img) {
            console.log(this.state.img)
            var filepath = this.state.img;
            event.preventDefault();
            axios.post('/photo', filepath)
                .then(res, function () {
                    this.props.addPhoto(res)
                })
        }

    }


    render() {
        return (
            <div className="right" >
                <input className="bubble" placeholder="Name" type="text" value={this.state.name} onChange={(event) => this.setState({ user: event.target.value })}></input>
                <input className="bubble" placeholder="Occasion" type="text" value={this.state.event} onChange={(event) => this.setState({ event: event.target.value })}></input>
                <div className="buttonWrap">
                    <input type="file" id="img" className="action-button animate blue" onChange={this.sendImg} />
                    <button className="action-button animate blue" onClick={this.uploadImage}>Send</button>
                </div>
            </div>

        );
    }
}

export default UsersDataForm;