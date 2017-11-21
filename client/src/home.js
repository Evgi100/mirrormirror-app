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

                <div className="ImageTextContainerHome colorGarden">
                    <div className="titleHome">
                        <div className="occasion">
                            <h1>Garden Party</h1>
                        </div>
                        <div className="date">
                            <h1>01.04.2018</h1>
                        </div>
                    </div>

                    <div className="ImageContainerHome">
                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome secondOne"></div>
                        </div>

                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome secondTwo"></div>
                        </div>

                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome secondThree"></div>
                        </div>

                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome secondFour"></div>
                        </div>

                        <div className="imageButtonContainerHome">
                            <div className="picture">
                                <img src="https://www.scheideanstalt.de/fileadmin/_processed_/csm_Elisabeth-II-Sovereign-1978-k_fd322f55f5.jpg" className="img-responsive img-thumbnailHome img-circle" />
                            </div>
                            <div className="userNameHome">
                                <h1 className="name">Liz</h1>
                            </div>
                            <div className="submitButton">
                                <button className="dottedHome postHome"><a href="/rate">Rate</a></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ImageTextContainerHome colorKarl">

                    <div className="titleHome">
                        <div className="occasion">
                            <h1>Black Tie</h1>
                        </div>
                        <div className="date">
                            <h1>31.12.2017</h1>
                        </div>
                    </div>

                    <div className="ImageContainerHome">
                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome thirdOne"></div>
                        </div>

                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome thirdTwo"></div>
                        </div>

                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome thirdThree"></div>
                        </div>

                        <div className="imageButtonContainer">
                            <div className="ImageBoxHome thirdFour"></div>
                        </div>

                        <div className="imageButtonContainerHome">
                            <div className="picture">
                                <img src="https://static.webshopapp.com/shops/071467/files/029113561/my-name-is-simone-karl-lagerfeld-my-name-is-simone.jpg" className="img-responsive img-thumbnailHome img-circle" />
                            </div>
                            <div className="userNameHome">
                                <h1 className="name">Karl</h1>
                            </div>
                            <div className="submitButton">
                                <button className="dottedHome postHome"><a href="/rate">Rate</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <EventCompo />{this.renderEvents()}
            </div>
        );
    }
}


export default HomeView;

