import React from 'react';


class RateBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { rateOutfit_1: '',rateOutfit_2: '',rateOutfit_3: '',rateOutfit_4: '' }
        this.handleOnChange=this.handleOnChange.bind(this)
        this.handleOnChange1=this.handleOnChange1.bind(this)
        this.handleOnChange2=this.handleOnChange2.bind(this)
        this.jquery=this.jquery.bind(this)
    }

    handleOnChange(e) {
        this.setState({
            rateOutfit_1: e.target.value
        }, ()=> { console.log(this.state)
        })
    }

    handleOnChange1(e) {
        this.setState({
            rateOutfit_2: e.target.value
        }, ()=> { console.log(this.state)
        })
    }

    handleOnChange2(e) {
        this.setState({
            rateOutfit_3: e.target.value
        }, ()=> { console.log(this.state)
        })
    }

    handleOnChange3(e) {
        this.setState({
            rateOutfit_4: e.target.value
        }, ()=> { console.log(this.state)
        })
    }
jquery(){
    $("label").click(function(){
        $(this).parent().find("label").css({"background-color": "#D8D8D8"});
        $(this).css({"background-color": "#7ED321"});
        $(this).nextAll().css({"background-color": "#7ED321"});
      });
}
   
    render() {
 
        return (
           
                  <div className="ImageContainerHome">
            <div className="ImageRatingBox">
                <div className="ImageBoxHome first"></div>
                      <fieldset className="rating" onChange={this.jquery}>
								<input type="radio" id="field1_star5" name="rating1" value="5" /><label className = "full" htmlFor="field1_star5"></label>
								<input type="radio" id="field1_star4" name="rating1" value="4" /><label className = "full" htmlFor="field1_star4"></label>
								<input type="radio" id="field1_star3" name="rating1" value="3" /><label className = "full" htmlFor="field1_star3"></label>
								<input type="radio" id="field1_star2" name="rating1" value="2" /><label className = "full" htmlFor="field1_star2"></label>
								<input type="radio" id="field1_star1" name="rating1" value="1" /><label className = "full" htmlFor="field1_star1"></label>
							</fieldset>

            </div>

            <div className="ImageRatingBox">
                <div className="ImageBoxHome second"></div>
                <fieldset className="rating">
								<input type="radio" id="field1_star5" name="rating1" value="5" /><label className = "full" htmlFor="field1_star5"></label>
								<input type="radio" id="field1_star4" name="rating1" value="4" /><label className = "full" htmlFor="field1_star4"></label>
								<input type="radio" id="field1_star3" name="rating1" value="3" /><label className = "full" htmlFor="field1_star3"></label>
								<input type="radio" id="field1_star2" name="rating1" value="2" /><label className = "full" htmlFor="field1_star2"></label>
								<input type="radio" id="field1_star1" name="rating1" value="1" /><label className = "full" htmlFor="field1_star1"></label>
							</fieldset>
            </div>

            <div className="ImageRatingBox">
                <div className="ImageBoxHome third"></div>
                <fieldset className="rating">
								<input type="radio" id="field1_star5" name="rating1" value="5" /><label className = "full" htmlFor="field1_star5"></label>
								<input type="radio" id="field1_star4" name="rating1" value="4" /><label className = "full" htmlFor="field1_star4"></label>
								<input type="radio" id="field1_star3" name="rating1" value="3" /><label className = "full" htmlFor="field1_star3"></label>
								<input type="radio" id="field1_star2" name="rating1" value="2" /><label className = "full" htmlFor="field1_star2"></label>
								<input type="radio" id="field1_star1" name="rating1" value="1" /><label className = "full" htmlFor="field1_star1"></label>
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


