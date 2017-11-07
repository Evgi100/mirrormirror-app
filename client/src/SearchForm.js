import React from 'react';
import axios from 'axios';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchInput: "", cityData: null };
        this.search = this.search.bind(this);
        this.updateSearchInput = this.updateSearchInput.bind(this);
        this.weatherApiUrl = 'http://api.apixu.com/v1/current.json?key=43600d09857d4bd5ab5201714170211&q=';
    }

    componentDidMount() {
        const input = document.getElementById('searchInput');
        const autocomplete = new google.maps.places.Autocomplete(input);
    }

    search() {
        axios.get(this.weatherApiUrl + this.state.searchInput)
        .then(response => {
            console.log(`Response from SearchForm: `);
            console.log(response);
            this.props.addCity(response);
        })
    }

    updateSearchInput(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div id="imaginary_container">
                        <div className="input-group stylish-input-group ">
                            <input id="searchInput" type="text" className="form-control" placeholder="Search" onChange={this.updateSearchInput} />
                            <span className="input-group-addon">
                                <button type="submit" onClick={this.search}>
                                    <span className="glyphicon glyphicon-search"></span>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchForm;