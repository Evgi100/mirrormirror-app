import React from 'react';
import UsersListBox from './UsersList';
import UsersDataForm from './usersDataForm'

class UserBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { url: "" }
        this.deletePictures = this.deletePictures.bind(this);
        this.addPhoto = this.addPhoto.bind(this);
    }

    addPhoto(img) {
        this.setState({ url: img })
    }

    deletePictures(index) {
        this.props.deletePictures(this.props.index)
    }
    render() {


        var url = "http://img.thedailybeast.com/image/upload/v1492785141/galleries/2013/05/20/liberace-s-wild-style-through-the-years-photos/liberace-7_k9l7ds.jpg"
        var url1 = "https://img.thedailybeast.com/image/upload/d_placeholder_euli9k/dpr_2.0/c_limit,w_585/fl_lossy,q_auto/v1/galleries/2013/05/20/liberace-s-wild-style-through-the-years-photos/liberace-4_h60eyc"
        var url2 = "https://i.pinimg.com/736x/c7/90/a8/c790a8c8f365de39c6121103d95e0ba7--gay-a-drag-queens.jpg"
        var url3 = "https://img.thedailybeast.com/image/upload/d_placeholder_euli9k/dpr_2.0/c_limit,w_585/fl_lossy,q_auto/v1/galleries/2013/05/20/liberace-s-wild-style-through-the-years-photos/liberace-12_bcdyfh"
        return (
            <div className='ImageTextContainer'>
                <span className="glyphicon glyphicon-trash userTrash" onClick={() => { this.props.deleteUser(this.props.index) }}></span>
                <h2>{this.props.user.event}</h2>
                <h4>{this.props.user.name}</h4>

                <div className="submitButton">
                    <button className="action-button animate blue">Upload pic</button>
                </div>
                <div className="ImageContainer">
                    <img className="ImageBox" src={url} />
                    <img className="ImageBox" src={url1} />
                    <img className="ImageBox" src={url2} />
                    <img className="ImageBox" src={url3} />
                    {/* <span className="glyphicon glyphicon-trash userTrash" onClick={this.deletePictures} ></span> */}


                </div>
            </div>
        );
    }
}

export default UserBox;


