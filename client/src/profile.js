import React from 'react';
import { Redirect } from 'react-router'


const Profile = () => (
   <div>
    <div className="ImageTextContainerProfile ">

        <div className="profileBoxPicture">
            <div className="picture">
                <img src="https://www.scheideanstalt.de/fileadmin/_processed_/csm_Elisabeth-II-Sovereign-1978-k_fd322f55f5.jpg" className="img-responsive img-thumbnailHome img-circle"/>
            </div>
        </div>

        <div className="profileBoxName">
           <p>Liz, London</p> 
        </div>

        <div className="profileBoxButton">
            <button className="edit">
                <i className="fa fa-edit"></i>Edit Profile</button>
            </div>

    </div>

    <div className="ImageTextContainerHome colorGarden">

        <div className="titleHome">
            <div className="occasion">
                <h1>Garden Party</h1>
            </div>
            <div className="date">
                <h1>01.04.2018</h1>
            </div>
        </div>

        <div className="ImageContainerHome">
            <div className="imageButtonContainer">
                <div className="ImageBoxHome secondOne"></div>
                <div className="ratingNumber">4</div>
            </div>

            <div className="imageButtonContainer">
                <div className="ImageBoxHome secondTwo"></div>
                <div className="ratingNumber">1</div>
            </div>

            <div className="imageButtonContainer">
                <div className="ImageBoxHome secondThree"></div>
                <div className="ratingNumber">2</div>
            </div>

            <div className="imageButtonContainer">
                <div className="ImageBoxHome secondFour"></div>
                <div className="ratingNumber">3</div>
            </div>

            <div className="imageButtonContainerHome">
                <div className="userNameHome">
                    <p className="info">Status: Active</p>
                        <hr className="info"/>Votes: 1.654
                </div>
            </div>
        </div>
    </div>

    <div className="containerExpired">
        <div className="ImageTextContainerProfileBest">
            <div className="occasion">
                <p style={{textAlign:'center'}}>Wedding</p>
            </div>

            <div className="imageButtonContainer">
                <div className="ImageBoxProfile profileBestOne"></div>
                <div className="ratingNumber">1</div>
            </div>
        </div>

        <div className="ImageTextContainerProfileBest">
            <div className="occasion">
                <p style={{textAlign:'center'}}>Work</p>
            </div>

            <div className="imageButtonContainer">
                <div className="ImageBoxHome profileBestTwo"></div>
                <div className="ratingNumber">1</div>
            </div>
        </div>

        <div className="ImageTextContainerProfileBest">
            <div className="occasion">
                <p style={{textAlign:'center'}}>Clubbing</p>
            </div>

            <div className="imageButtonContainer">
                <div className="ImageBoxProfile profileBestThree"></div>
                <div className="ratingNumber">1</div>
            </div>
        </div>

        <div className="ImageTextContainerProfileBest">
            <div className="occasion">
                <p style={{textAlign:'center'}}>Safari</p>
            </div>

            <div className="imageButtonContainer">
                <div className="ImageBoxProfile profileBestFour"></div>
                <div className="ratingNumber">1</div>
            </div>
        </div>
    </div>
    </div>
)

export default Profile;