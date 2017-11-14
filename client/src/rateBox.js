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
                  <div className="ImageContainerHome">
            <div className="ImageRatingBox">
                <div className="ImageBoxHome first"></div>
                <fieldset className="rating">
                    <input type="radio" id="star5" name="rating" value="5" />
                    <input type="radio" id="star4" name="rating" value="4" />
                    <label htmlFor="star4" title="Pretty good">4 stars</label>
                    <input type="radio" id="star3" name="rating" value="3" />
                    <label htmlFor="star3" title="Meh">3 stars</label>
                    <input type="radio" id="star2" name="rating" value="2" />
                    <label htmlFor="star2" title="Kinda bad">2 stars</label>
                    <input type="radio" id="star1" name="rating" value="1" />
                    <label htmlFor="star1" title="Sucks big time">1 star</label>
                </fieldset>
            </div>

            <div className="ImageRatingBox">
                <div className="ImageBoxHome second"></div>
                <fieldset className="rating">
                    <input type="radio" id="star5" name="rating" value="5" />
                    <label htmlFor="star5" title="Rocks!">5 stars</label>
                    <input type="radio" id="star4" name="rating" value="4" />
                    <label htmlFor="star4" title="Pretty good">4 stars</label>
                    <input type="radio" id="star3" name="rating" value="3" />
                    <label htmlFor="star3" title="Meh">3 stars</label>
                    <input type="radio" id="star2" name="rating" value="2" />
                    <label htmlFor="star2" title="Kinda bad">2 stars</label>
                    <input type="radio" id="star1" name="rating" value="1" />
                    <label htmlFor="star1" title="Sucks big time">1 star</label>
                </fieldset>
            </div>

            <div className="ImageRatingBox">
                <div className="ImageBoxHome third"></div>
                <fieldset className="rating">
                    <input className="star" type="radio" id="star5" name="rating" value="5" />
                    <label className="star" htmlFor="star5" title="Rocks!">5 stars</label>
                    <input className="star" type="radio" id="star4" name="rating" value="4" />
                    <label className="star" htmlFor="star4" title="Pretty good">4 stars</label>
                    <input className="star" type="radio" id="star3" name="rating" value="3" />
                    <label className="star" htmlFor="star3" title="Meh">3 stars</label>
                    <input className="star" type="radio" id="star2" name="rating" value="2" />
                    <label className="star" htmlFor="star2" title="Kinda bad">2 stars</label>
                    <input className="star" type="radio" id="star1" name="rating" value="1" />
                    <label className="star" htmlFor="star1" title="Sucks big time">1 star</label>
                </fieldset>
            </div>

            <div className="imageButtonContainerHome">
                <div className="picture">
                    <img src="https://queerty-prodweb.s3.amazonaws.com/wp/docs/2014/10/liberace-lee.jpg" className="img-responsive img-thumbnailHome img-circle" />
                </div>
                <div className="userNameHome">
                    <h1 className="name">Valentino</h1>
                </div>
                <div className="submitButton">
                    <button className="dottedHome postHome">Rate</button>
                </div>
            </div>
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


