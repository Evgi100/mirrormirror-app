import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class EventCompo extends Component {
    constructor(props) {
        super(props);
        this.state = {event: this.props.entireEvent};
        this.renderPics = this.renderPics.bind(this);
        this.renderTime=this.renderTime.bind(this);
    }
    

    renderTime () {
        if(this.props.eventDate) {
        let date=this.props.eventDate;
        let newDate=date.split('',10)
        let dateToShow=newDate.join("")
        return dateToShow
            
        }
    }


    //  This is a function for going 
    renderPics() {

        if (this.props.outfits) {
            return this.props.outfits.map((outfit, index) => {

                return (<div className="imageButtonContainer" key={index}>
                    <div className="ImageBoxHome "><img src={outfit.picture} /></div>
                </div>
                );

            })
        }


    }

    render() {
        return (
            <div className="ImageTextContainerHome">
                <div className="titleHome">
                    <div className="occasion">
                        <h1>{this.props.eventName}</h1>
                    </div>
                    <div className="date">
                        <h1>{this.props.eventDate}</h1>
                    </div>
                </div>
                <div className="ImageContainerHome">
                    {this.renderPics()}
                    <div className="imageButtonContainerHome">
                        <div className="picture">
                            <img src="https://queerty-prodweb.s3.amazonaws.com/wp/docs/2014/10/liberace-lee.jpg" className="img-responsive img-thumbnailHome img-circle" />
                        </div>
                        <div className="userNameHome">
                            <h1 className="name">{this.props.username}</h1>
                        </div>
                        <div className="submitButton">
                        <Link to={'/rate/' + this.props.eventID}><button className="dottedHome postHome"> rate</button></Link>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventCompo;