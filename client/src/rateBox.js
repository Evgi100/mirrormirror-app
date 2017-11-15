import React, { Component } from 'react';
import axios from 'axios';



class OutfitCompo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <img className="ImageBoxHome" src={`/uploads/${this.props.imgsrc}`} />
                <fieldset className="rating" onChange={this.props.jquery} onClick={this.props.handleOnChange} value={this.props.valueOutfits}>
                    <input type="radio" id="field1_star5" name="rating1" value="5" /><label className="full" htmlFor="field1_star5"></label>
                    <input type="radio" id="field1_star4" name="rating1" value="4" /><label className="full" htmlFor="field1_star4"></label>
                    <input type="radio" id="field1_star3" name="rating1" value="3" /><label className="full" htmlFor="field1_star3"></label>
                    <input type="radio" id="field1_star2" name="rating1" value="2" /><label className="full" htmlFor="field1_star2"></label>
                    <input type="radio" id="field1_star1" name="rating1" value="1" /><label className="full" htmlFor="field1_star1"></label>
                </fieldset>
                
            </div >
        );
    }
}



class RateBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { rateOutfit_1: null, rateOutfit_2: null, rateOutfit_3: null, rateOutfit_4: null }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnChange1 = this.handleOnChange1.bind(this)
        this.handleOnChange2 = this.handleOnChange2.bind(this)
        this.jquery = this.jquery.bind(this)
        this.renderPics = this.renderPics.bind(this);
        // this.renderEvents = this.renderEvents.bind(this);
    }

    handleOnChange(e) {
        this.setState({
            rateOutfit_1: e.target.value
        })
    }

    handleOnChange1(e) {
        this.setState({
            rateOutfit_2: e.target.value
        })
    }

    handleOnChange2(e) {
        this.setState({
            rateOutfit_3: e.target.value
        })
    }

    handleOnChange3(e) {
        this.setState({
            rateOutfit_4: e.target.value
        })
    }

    jquery() {
        $("label").click(function () {
            $(this).parent().find("label").css({ "background-color": "#D8D8D8" });
            $(this).css({ "background-color": "#7ED321" });
            $(this).nextAll().css({ "background-color": "#7ED321" });
        });
    }

    renderPics() {
        if (this.state.outfits) {
            return this.state.outfits.map((outfit, index) => {
                return <OutfitCompo key={index} imgsrc={outfit.picture} jquery={this.jquery} handleOnChange={this.handleOnChange} number={index + 1} valueOutfits={this.state['rateOutfit_' + (index + 1)]} />
            })
        }
    }

    renderTime() {
        if (this.props.eventDate) {
            let date = this.props.eventDate;
            let newDate = date.split('', 10)
            let dateToShow = newDate.join("")
            return dateToShow

        }
    }


    componentDidMount() {
        axios.get('/event/' + this.props.match.params.eventID)
            .then(response => {
                let eventData = {}
                // for(let i = 0; i<response.data.event.length; i++) {
                //     let keys =  Object.keys(response.data.event[0]);
                //     console.log(keys);
                // }
                this.setState({ event: response.data.event[0], outfits: response.data.outfits });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            })
    }

    render() {
        let event = this.state.event;
        let eventText = null;
        let dateToShow = null;

        if (event) {
            eventText = event.event;
            let eventDate = event.eventDate;
            let newDate = eventDate.split('', 10);
            dateToShow = newDate.join("");
        }
        else {
            // dateToShow = newDate.join("")
            eventText = "";
            dateToShow = "";
            // dateToShow=""
        }

        return (
            <div className="ImageTextContainerHome">
                <div className="titleHome">
                    <div className="occasion">
                        <h1>{eventText}</h1>
                    </div>
                    <div className="date">
                        <h1>{dateToShow}</h1>
                    </div>
                </div>
                <div className="ImageContainerHome">
                    {this.renderPics()}
                    <div className="ImageRatingBox">
                        
                        {/* <img className="ImageBoxHome"  /> */}
                        {/* < OutfitCompo /> */}

                    </div>
                </div>
            </div>
        );
    }
}



export default RateBox;


