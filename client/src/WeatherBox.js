import React, { Component } from 'react';
import CommentBox from "./CommentBox";

class WeatherBox extends Component {
    constructor(props) {
        super(props);
        let data = this.props.city.data;
        this.locationName = data.location.name + ', ' + data.location.country;
        this.weatherCondition = data.current.condition.text;
        this.weatherIcon = data.current.condition.icon;
        this.farenTemp = data.current.temp_f;
        this.celsTemp = data.current.temp_c;
    }

    render() {
        return (
            <div>

                <div className="col-md-6">
                    <div className="weather-card one">
                        <div className="top">
                            <div className="wrapper">
                                <div className="mynav">
                                    <a href="javascript:;"><span className="lnr lnr-chevron-left"></span></a>
                                    <a href="javascript:;"><span className="lnr lnr-cog"></span></a>
                                </div>
                                <h1 className="heading">{this.weatherCondition}<span><img src={this.weatherIcon} className="weatherIcon" /></span></h1>
                                <h3 className="location">{this.locationName}</h3>
                                <p className="temp">
                                    <span className="temp-value">{this.celsTemp}</span>
                                    <span className="deg">0</span>
                                    <a href="javascript:;"><span className="temp-type">C</span></a>
                                </p>

                            </div>
                        </div>
                        <div className="bottom">
                            <div className="wrapper">
                                <CommentBox />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default WeatherBox;