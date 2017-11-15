import React from 'react';


class EventDataForm extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {event:"", date: null}
        this.addEvent = this.addEvent.bind(this);
        this.addEventDate = this.addEventDate.bind(this);
    }

addEvent(e) {
    this.props.addEvent(e.target.value);
}

addEventDate(e) {
    // console.log(e.target.value);
    this.props.addEventDate(e.target.value);
}

    render() {
        return (
            <div className="title">
                <div>
                    <select onChange={this.addEvent} style={{ border: '0', backgroundColor: 'rgb(240, 6, 84)', fontSize: '25px', fontFamily: 'Rozha One' }}>
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
                        {/* <label htmlFor="rate">Rate outfits until : </label><input id="rating" type="date" value=""/> */}
                    </div>
                    <div className="input-group">
                        <div className="input-group-addon">
                            <span className="glyphicon glyphicon-calendar aria-hidden=" ></span>
                        </div>
                        <input className="form-control" id="date" placeholder="DD/MM/YYYY" type="date" onChange={this.addEventDate} />
                    </div>
                </div>
            </div>
        );
    }
}

export default EventDataForm;