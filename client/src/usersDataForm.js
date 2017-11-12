import React from 'react';
import axios from 'axios'
import FormData from 'form-data'
class UsersDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user: "", event: "", img: "" }
        this.sendImg = this.sendImg.bind(this)
        this.uploadImage = this.uploadImage.bind(this)
        // this.sendUsersData = this.sendUsersData.bind(this)
    }

    // sendUsersData(event) {
    //     event.preventDefault();
    //     axios.post('/events', this.state)
    //         .then(response => {
    //             axios.get('/user:/')
    //             this.props.addUser(response.data)
    //             this.setState({ name: "", event: "" })
    //         })
    //         .catch(error => {
    //             console.log('Error fetching and parsing data', error);
    //         });
    // hmhgjhf
    // }

    sendImg(e) {
        let data = new FormData();
        data.append('file', e.target.value);
        this.setState({ [e.target.id]: data })
    }

    // uploadImage(event) {
    //     if (this.state.img) {
    //         let that = this;
    //         var filepath = this.state.img;
    //         // let data = new FormData
    //         // imgdata=
    //         // data.append("data");
    //         event.preventDefault();
    //         axios.post('/photo', filepath, {
    //             headers: {
    //                 'accept': 'application/json',
    //                 'Accept-Language': 'en-US,en;q=0.8',
    //                 'Content-Type': `multipart/form-data; boundary=${filepath._boundary}`,
    //             }
    //         })
    //             .then(function (res) {
    //                 that.setState({ img: res })
    //             })
    //     }

    // }

    uploadImage(event) {
        let form = document.getElementById('uploadForm');
        let fileSelect = document.getElementById('img-select');
        let uploadButton = document.getElementById('upload-button');

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
            console.log(formData.entries());
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/photo', true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    // File(s) uploaded.
                    uploadButton.innerHTML = 'Upload';
                } else {
                    alert('An error occurred!');
                }
            };
            xhr.send(formData);
        }
    }



    render() {
        return (
            <div className="right" >
                <input className="bubble" placeholder="Name" type="text" value={this.state.name} onChange={(event) => this.setState({ user: event.target.value })}></input>
                <input className="bubble" placeholder="Occasion" type="text" value={this.state.event} onChange={(event) => this.setState({ event: event.target.value })}></input>
                {/* <form id="uploadForm" encType="multipart/form-data" action="/photo" method="post">
                    <input type="file" name="userPhoto" />
                    <input type="submit" value="Upload Image" name="submit" />
                </form> */}
                <form id="uploadForm" encType="multipart/form-data" className="buttonWrap">
                    <input type="file" id="img-select" className="action-button animate blue" multiple/>
                    <button className="action-button animate blue" onClick={this.uploadImage} id="upload-button">Send</button>

                </form>
                < img src={this.state.img} />
            </div>

        );
    }
}

// let form = document.getElementById('uploadForm');
// let fileSelect = document.getElementById('img-select');
// let uploadButton = document.getElementById('upload-button');

export default UsersDataForm;