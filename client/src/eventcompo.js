import React, { Component } from 'react';

class EventCompo extends Component {
    constructor(props) {
        super(props);
        this.renderPics = this.renderPics.bind(this);
    }

    renderPics() {
        if(this.props.outfits) {
            return this.props.outfits.map((outfit, index)=> {
                return (<div className="imageButtonContainer" key={index}>
                <div className="ImageBoxHome "><img src={outfit.picture}/></div>
            </div>
                );
            }) 
        }
        
    }

    render() {
        // console.log(this.props.outfits)
        // console.log(this.props.outfits[0].picture)
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
              {/* <div className="imageButtonContainer">
                    <div className="ImageBoxHome "><img src={this.props.outfits.}/>
</div>
                </div> */}
{/* 
                <div className="imageButtonContainer">
                    <div className="ImageBoxHome "><img src={this.props.outfits[1].picture}/></div>
                </div>

                <div className="imageButtonContainer">
                    <div className="ImageBoxHome "><img src={this.props.outfits[2].picture}/></div>
                </div>

                <div className="imageButtonContainer">
                    <div className="ImageBoxHome "><img src={this.props.outfits[3].picture}/></div>
                </div>   */}

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