class rateBox extends React.Component {

    constructor(props) {
        super(props);
        this.state={emojis=['😠','😦','😑','😀','😍']}
    }
    render() {
        return (

            <div class="rate">
                <div class="emoji">😑</div>
                <input class="emoji" type="range" min="0" max="4" step="1"></input>
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
