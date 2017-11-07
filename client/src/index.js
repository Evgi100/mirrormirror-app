import React from 'react';
import SearchForm from './SearchForm';
import WeatherListBox from "./WeatherListBox";
import CommentsListBox from "./CommentsListBox";



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cities: []};
        this.addCity = this.addCity.bind(this);
    }

    addCity(cityData) {
        this.setState({cities: this.state.cities.concat(cityData)}, ()=> {
            console.log(`Response from App: ${this.state.cities}`);
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h2 style={{color: 'white'}}>Add a city</h2>
                    </div>
                </div>
                <SearchForm addCity={this.addCity} />
                <WeatherListBox cities={this.state.cities}/>
            </div>
        );
    }
}

export default App;