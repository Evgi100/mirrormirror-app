import React from 'react';

class UsersDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "", event: "" }
        this.sendUsersData = this.sendUsersData.bind(this)
    }

    sendUsersData() {
        this.props.addUser(this.state)
        this.setState({ name: "", event: "" })
    }

    render() {
        return (
            <div className="right">
                <input className="bubble" placeholder="Name" className="textInput" type="text" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })}></input>
                <input className="bubble" placeholder="Occasion" className="textInput" type="text" value={this.state.event} onChange={(event) => this.setState({ event: event.target.value })}></input>
                <div className="buttonWrap">
                    <button className="action-button animate blue">Upload pic</button>
                    <button className="action-button animate blue" onClick={this.sendUsersData}>Send</button>
                </div>
            </div>

        );
    }
}

export default UsersDataForm;