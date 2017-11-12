import React from 'react';


class RateBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { rating: '' }
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(e) {
        this.setState({
            rating: e.target.value
        }, ()=> {
        })
    }


    render() {
        return (
            <div>
                <select className="rate" onChange={this.handleOnChange}>
                    <option >Rate the outfit</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        );
    }
}

export default RateBox;

