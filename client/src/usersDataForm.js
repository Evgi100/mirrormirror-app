import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router'
// import FormData from 'form-data'

class UsersDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { userID: 1, eventDate: "", event: "", src1: null, src2: null, src3: null, src4: null, redirect:false}
        // this.sendImg = this.sendImg.bind(this)
        this.uploadImage = this.uploadImage.bind(this);
        // this.sendUsersData = this.sendUsersData.bind(this)
        this.imagePreview = this.imagePreview.bind(this);
    }



    uploadImage(event) {
        let form = this.uploadForm;
        let fileSelect = this.imgSelect;
        let uploadButton = this.upButton;
        // let form = document.getElementById('uploadForm');
        // let fileSelect = document.getElementById('img-select');
        // let uploadButton = document.getElementById('upload-button');
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
            // console.log(files);/
            // console.log(formData.entries());

            let data2 = {
                userID: that.state.userID,
                event: that.props.eventName,
                eventDate: that.props.eventDate
            }
            axios.post('/events', data2)
                .then(response => {
                    console.log(response);
                    axios.post('/outfits/' + response.data[0].eventID, formData)
                        .then(innerResponse => {
                            console.log('WWWWWWWWWWWWWWWWWWAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAM')
                            let data = {
                                event: response.data[0].event,
                                date: response.data[0].eventDate,
                                eventID: response.data[0].eventID,
                                outfitsArr: innerResponse.data
                            }
                            console.log(data);
                            // that.props.addUser(response.data);/
                            that.setState({ userID: that.state.userID++, name: "", event: "",redirect:true });
                            uploadButton.innerHTML = 'Upload';
                            // <Redirect to="/"/
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
        let files = this.imgSelect.files;
        let that = this;
        // // console.log(that);
        // // console.log(this.props)
        // if (files) {
        //     let missingSrc = [];
        //     function _findMissing() {
        //         for (let i = 1; i <= 4; i++) {
        //             if (that.state['src' + i] === "") {
        //                 missingSrc.push(i);
        //             }
        //         }
        //     }
        //     _findMissing();
        //     if (missingSrc.length === 0) {
        //         for (let i = 0; i < files.length; i++) {
        //             var reader = new FileReader();
        //             reader.onloadend = function (e) {
        //                 let data = {
        //                     key: 'src' + (i + 1),
        //                     src: reader.result
        //                 }
        //                 that.props.addPrev(data);
        //                 that.setState({ ['src' + (i + 1)]: reader.result })
        //             }
        //             reader.readAsDataURL(files[i]);
        //         }
        //     }
        //     else {
        //         for (let i = 0; i < missingSrc.length; i++) {
        //             var reader = new FileReader();
        //             reader.onloadend = function (e) {
        //                 let data = {
        //                     key: 'src' + missingSrc[i],
        //                     src: reader.result
        //                 }
        //                 that.props.addPrev(data);
        //                 that.setState({ ['src' + missingSrc[i]]: reader.result })
        //             }
        //             reader.readAsDataURL(files[i]);
        //         }
        //     }
        // }
        // console.log(input.target/* = null;*/)



        // let that = this;
        // let files = this.imgSelect.files;

        //     if (!this.fileSelect) {
        //         this.setState({ fileSelect: files },_imagePrev);
        //     } else {
        //         if (this.state.fileSelect.length > 4) {
        //             console.log('too many images');
        //         }
        //         else {
        //             this.setState({
        //                 fileSelect: this.state.fileSelect.filter((file, index, arr) => {
        //                     return file == files[index];
        //                 },_imagePrev)
        //             })
        //         }

        //     }

        //     function _imagePrev() {
        //         console.log(that.state)
        //         // that.state.fileSelect.forEach((element, i, arr)=> {
        //         //     var reader = new FileReader();
        //         //     reader.onloadend = function (e) {
        //         //         let data = {
        //         //             key: 'src' + (i + 1),
        //         //             src: reader.result
        //         //         }
        //         //         that.props.addPrev(data);
        //         //         that.setState({ ['src' + (i + 1)]: reader.result })
        //         //     }
        //         //     reader.readAsDataURL(files[i]);
        //         // });
        //     }

        for (let i = 0; i < files.length; i++) {
            let reader= new FileReader();
            reader.onloadend = function (e) {
                let prevSrc = 'src' + (i + 1);
                let data = {
                    key: prevSrc,
                    src: reader.result
                }
                that.setState({ [prevSrc]: reader.result }, () => {
                    that.props.addPrev(data);
                    console.log(that.state)
                })
            }
            reader.readAsDataURL(files[i]);
        }
    }

    render() {
        if (this.state.redirect) {
           return <Redirect to="/" />
        }
        return (

            <div>
                <form ref={(input) => { this.uploadForm = input; }} id="uploadForm" encType="multipart/form-data" className="buttonWrap">
                    <div className="submitButton">
                        <button className="dotted post">
                            <i className="fa fa-upload" aria-hidden="true"></i>
                            <input className="upload" type="file" ref={(input) => { this.imgSelect = input; }} id="img-select" onChange={this.imagePreview} multiple />
                        </button>
                        <button className="dotted post" ref={(input) => { this.upButton = input; }} id="upload-button"
                            onClick={this.uploadImage}  >Post Event</button>
                    </div>
                </form>

            </div>

        );
    }
}

export default UsersDataForm;