import React, { Component } from 'react';
import axios from 'axios';



class OutfitCompo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ImageRatingBox">
           <img />
           {this.props.imgsrc}
            <fieldset className="rating" onChange={this.props.jquery} onClick={this.props.handleOnChange} value={this.props.valueOutfits}>
                <input type="radio" id="field1_star5" name="rating1" value="5" /><label className="full" htmlFor="field1_star5"></label>
                <input type="radio" id="field1_star4" name="rating1" value="4" /><label className="full" htmlFor="field1_star4"></label>
                <input type="radio" id="field1_star3" name="rating1" value="3" /><label className="full" htmlFor="field1_star3"></label>
                <input type="radio" id="field1_star2" name="rating1" value="2" /><label className="full" htmlFor="field1_star2"></label>
                <input type="radio" id="field1_star1" name="rating1" value="1" /><label className="full" htmlFor="field1_star1"></label>
            </fieldset>
            <img src={`/uploads/${this.props.imgsrc}`}/>
        </div>
        );
    }
}



class RateBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {event: null, outfits:null , rateOutfit_1:null, rateOutfit_2:null, rateOutfit_3:null, rateOutfit_4:null}
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnChange1 = this.handleOnChange1.bind(this)
        this.handleOnChange2 = this.handleOnChange2.bind(this)
        this.jquery = this.jquery.bind(this)
        this.renderPics = this.renderPics.bind(this);
    }

    handleOnChange(e) {
        this.setState({
            rateOutfit_1: e.target.value
        }, () => {
            console.log(this.state)
        })
    }

    handleOnChange1(e) {
        this.setState({
            rateOutfit_2: e.target.value
        }, () => {
            console.log(this.state)
        })
    }

    handleOnChange2(e) {
        this.setState({
            rateOutfit_3: e.target.value
        }, () => {
            console.log(this.state)
        })
    }

    handleOnChange3(e) {
        this.setState({
            rateOutfit_4: e.target.value
        }, () => {
            console.log(this.state)
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
                console.log(outfit);
                return <OutfitCompo key={index} imgsrc={outfit.picture} jquery={this.jquery} handleOnChange={this.handleOnChange} number={index+1} valueOutfits={this.state['rateOutfit_' +(index+1)]}/>
            })
        }
    }
    
    componentDidMount() {
        axios.get('/event/' + this.props.match.params.eventID)
        .then(response => {
            this.setState({ event: response.data.event, outfits: response.data.outfits}, () => console.log(this.state));
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        })
    }

    render() {
        // console.log(this.props.match.params.eventID);
        return (

            <div className="ImageContainerHome">
               {this.renderPics()}
            </div>
            // {/* <select classNameName="rate" onChange={this.handleOnChange}>
            //     <option >Rate the outfit</option>
            //     <option value="1">1</option>
            //     <option value="2">2</option>
            //     <option value="3">3</option>
            //     <option value="4">4</option>
            //       comment
            // </select> */}
        );
    }
}



export default RateBox;


