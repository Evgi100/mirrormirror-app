import React from 'react';

class UsersDataForm extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='userInput'>
                <h2>Fill in your user-name and your event </h2>
                <div className="input-group-justified">
                    <div className="input-group">
                        <input className="form-control input-lg" type="email" placeholder="user-name..."></input>
                        <input className="form-control input-lg" type="text" placeholder="event..."></input>
                        <button className="form-control input-lg btn-success">Send it <i className="glyphicon glyphicon-send"></i></button>
                    </div>
                </div>
            </div>

        );
    }
}

export default UsersDataForm;