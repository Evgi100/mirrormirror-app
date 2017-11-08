import React from 'react';

class UsersDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state={name:"",event:""}
        this.sendUsersData=this.sendUsersData.bind(this)
    }

  sendUsersData(){
      this.props.addUser(this.state)
      this.setState({name:"",event:""})
  }

    render() {
        return (

            <div>
                <h2>Fill in your name and your event </h2>
                <div className="input-group-justified">
                    <div className="input-group">
                        <input className="form-control input-lg" type="email" placeholder="name..." id="name" value={this.state.name} onChange={(event) => this.setState({name:event.target.value},()=> console.log(this.state))}></input>
                        <input className="form-control input-lg" type="text" placeholder="event..." id="event" value={this.state.event} onChange={(event) => this.setState({event:event.target.value},()=> console.log(this.state))}></input>
                        <button className="form-control input-lg btn-success">Send it <i className="glyphicon glyphicon-send" onClick={this.sendUsersData}></i></button>

                    </div>
                </div>
            </div>

        );
        console.log(this.state)
    }
}

export default UsersDataForm;