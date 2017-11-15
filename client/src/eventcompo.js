import React, { Component } from 'react';

class EventCompo extends Component {
    constructor(props) {
        super(props);
        this.renderPics = this.renderPics.bind(this);
        this.renderTime=this.renderTime.bind(this);
    }
    
// Change the date format to viewvable
    renderTime () {
        if(this.props.eventDate) {
        let date=this.props.eventDate;
        let newDate=date.split('',10)
        let dateToShow=newDate.join("")
        return dateToShow
            
        }
    }


    //  This is a function for going through the images
    renderPics() {
        if(this.props.outfits) {
            return this.props.outfits.map((outfit, index)=> {
                return (<div className="imageButtonContainer" key={index}>
                <img className="ImageBoxHome" src={outfit.picture}/>
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
                    <h1>{this.renderTime()}</h1>
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
                        <button className="dottedHome postHome">Rate</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default EventCompo;