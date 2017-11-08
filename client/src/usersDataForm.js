import React from 'react';

class UsersDataForm extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Fill in your user-name and your event </h2>
                <div class="input-group-justified">
                    <div class="input-group">
                        <input class="form-control input-lg" type="email" placeholder="user-name..."></input>
                        <input class="form-control input-lg" type="text" placeholder="event..."></input>
                        <button class="form-control input-lg btn-success">Send it <i class="glyphicon glyphicon-send"></i></button>
                    </div>
                </div>
            </div>

        );
    }
}

export default UsersDataForm;