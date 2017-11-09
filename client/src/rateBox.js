import React from 'react';

class rateBox extends React.Component {

    constructor(props) {
        super(props);
        this.rateFunction=this.rateFunction.bind(this)
        this.state={emojis:['😠','😦','😑','😀','😍']}
    }


    rateFunction(e){
        var i=e.target.value;
         this.setState(emojis[i])
    }


    render() {
        return (
            <div class="rate">
                <div class="emoji">{this.state}</div>
                <input class="emoji" type="range" min="0" max="4" step="1" onChange={this.rateFunction}></input>
            </div>
        );
    }
}

export default rateBox;

// var emojis = ['😠','😦','😑','😀','😍'];

// $("input").mousemove(function(){
// 	var i = $(this).val();
// 	$(".emoji").html(emojis[i]);
// });

