import React from 'react';
import axios from 'axios';
// import FormData from 'form-data'

class UsersDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { userID: 1, name: "", event: "", src1: null, src2: null, src3: null, src4: null }
        // this.sendImg = this.sendImg.bind(this)
        this.uploadImage = this.uploadImage.bind(this);
        // this.sendUsersData = this.sendUsersData.bind(this)
        this.imagePreview = this.imagePreview.bind(this);
    }

    // sendUsersData(event) {
    //     event.preventDefault();
    //     console.log(this.state)
    //     axios.post('/events', this.state)
    //         .then(response => {
    //             axios.get('/events')
    //             .then (response => {
    //                 this.props.addUser(response.data)
    //                 this.setState({ name: "", event: "" })
    //             })
    //         })
    //         .catch(error => {
    //             console.log('Error fetching and parsing data', error);
    //         });
    // }

    uploadImage(event) {
        let form = document.getElementById('uploadForm');
        let fileSelect = document.getElementById('img-select');
        let uploadButton = document.getElementById('upload-button');
        let that = this;
        form.onsubmit = function (event) {
            event.preventDefault();
            // Update button text.
            uploadButton.innerHTML = 'Uploading...';
            // The rest of the code will go here...
            let files = fileSelect.files;
            // Create a new FormData object.
            let formData = new FormData();

            for (let i = 0; i < files.length; i++) {
                let file = files[i];
                // Check the file type.
                if (!file.type.match('image.*')) {
                    continue;
                }
                // Add the file to the request.
                formData.append('outfitpicture', file, file.name);
            }
            console.log(files);
            console.log(formData.entries());
            //         let xhr = new XMLHttpRequest();
            //         function sendData(callback) {
            //             xhr.open('POST', '/events', true);
            //             let counter = 0;
            //             xhr.onload = function () {
            //                 if (xhr.status === 200) {
            //                     if (counter === 0) {
            //                         callback(formData, xhr.response.eventID);
            //                         this.props.addUser(xhr.response);
            //                         this.setState({userID:this.state.userID++, name: "", event: "" });
            //                         counter++
            //                         return;
            //                     }
            //                     uploadButton.innerHTML = 'Upload';
            //                 } else {
            //                     alert('An error occurred!');
            //                 }
            //             };
            //             console.log(that);
            //             let data2 = {
            //                 userID: that.state.userID,
            //                 name: that.state.name,
            //                 event: that.state.event
            //             }
            //             // ASK TEACHERS WHY THIS GIVES ERROR CONNECTION REFUSED!!!!!!!!!!!!! good morning :)
            //             xhr.send(JSON.stringify( data2));
            //             ax.
            //         }
            //         function sendEventData(data, eventID) {
            //             xhr.open('POST', '/outfits/' +eventID, true);
            //             xhr.send(data);
            //         }
            //         sendData(sendEventData);



            let data2 = {
                userID: that.state.userID,
                name: that.state.name,
                event: that.state.event
            }
            axios.post('/events', data2)
                .then(response => {
                    console.log(response);
                    axios.post('/outfits/' + response.data[0].eventID, formData)
                        .then(innerResponse => {
                            // that.props.addUser(response.data);
                            that.setState({ userID: that.state.userID++, name: "", event: "" });
                            uploadButton.innerHTML = 'Upload';
                        })
                        .catch(error => {
                            console.log('Error fetching and parsing data', error);
                        });
                })
                .catch(error => {
                    console.log('Error fetching and parsing data', error);
                });
        }
    }
    imagePreview(input) {
        let files = input.target.files;
        let that = this;
        if (files) {
            let missingSrc = [];
            function _findMissing() {
                for (let i = 1; i <= 4; i++) {
                    if (that.state['src' + i] === "") {
                        missingSrc.push(i);
                    }
                }
            }
            _findMissing();
            if (missingSrc.length === 0) {
                for (let i = 0; i < files.length; i++) {
                    var reader = new FileReader();
                    reader.onloadend = function (e) {
                        let data = {
                            key: 'src' + (i + 1),
                            src: reader.result
                        }
                        that.props.addPrev(data);
                        that.setState({ ['src' + (i + 1)]: reader.result })
                    }
                    reader.readAsDataURL(files[i]);
                }
            } else {
                for (let i = 0; i < missingSrc.length; i++) {
                    var reader = new FileReader();
                    reader.onloadend = function (e) {
                        let data = {
                            key: 'src' + missingSrc[i],
                            src: reader.result
                        }
                        that.props.addPrev(data);
                        that.setState({ ['src' + missingSrc[i]]: reader.result })
                    }
                    reader.readAsDataURL(files[i]);
                }
            }
        }
    }

    render() {
        return (
            <div>
                {/* <form id="uploadForm" encType="multipart/form-data" className="buttonWrap">
                    <input type="file" id="img-select" className="action-button animate blue" onChange={this.imagePreview} multiple />
                    <button className="action-button animate blue" onClick={this.uploadImage} id="upload-button">Send</button>
                </form>
                < img src={this.state.img} />
            </div> */}

                <form id="uploadForm" encType="multipart/form-data" className="buttonWrap">
                    <div className="imageButtonContainer">
                        <div className="ImageBox forth"></div>
                        <div className="ButtonContainer">
                            <input type="file" id="img-select"  className="dotted picButton" onChange={this.imagePreview} multiple/>
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="submitButton">
                        <button className="dotted post">
                            <i className="fa fa-upload" aria-hidden="true"></i>
                        </button>
                        <p className="helptext" style={{ fontSize: '20px' }}>
                        </p>
                        <button className="dotted post" onClick={this.uploadImage} >Post Event</button>
                    </div>
                </form>

            </div >
        );
    }
}

// let form = document.getElementById('uploadForm');
// let fileSelect = document.getElementById('img-select');
// let uploadButton = document.getElementById('upload-button');

export default UsersDataForm;