import React from 'react';
import axios from 'axios';
import EventCompo from './eventcompo'


class HomeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = { events: [] }
        this.renderEvents = this.renderEvents.bind(this)
    }

    componentDidMount() {
        axios.get('/events')
            .then(response => {
                this.setState({ events: this.state.events.concat(response.data) }, () => console.log(this.state));
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            })

    }

    renderEvents() {
        return this.state.events.map((event, index) => {
            return <EventCompo key={index} index={index} eventName={event.event} eventDate={event.eventDate} outfits={event.outfits} entireEvent={event} eventID={event.eventID} />;

        })
    }
    render() {
        return (
            <div>
{this.renderEvents()}
            </div>
        );
    }
}


export default HomeView;

