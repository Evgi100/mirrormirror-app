import React from 'react';
import WeatherBox from "./WeatherBox";

class WeatherListBox extends React.Component {
    constructor(props) {
        super(props);
        this.renderBoxes = this.renderBoxes.bind(this);
    }

    renderBoxes() {
        let cities = this.props.cities;
        return cities.map((city, index) => <div key={index}><WeatherBox city={city}/></div>);
    }

    render() {
        return (
            <div className="row">
                {this.renderBoxes()}
            </div>
            );
    }
}

export default WeatherListBox;