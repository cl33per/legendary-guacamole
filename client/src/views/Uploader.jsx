import React, { Component } from 'react';
// import API from "../../utils/API"
import axios from 'axios';
// const BASE_URL = 'http://localhost:3000/';
 
class Uploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            imageUrls: [],
            message: ''
        }   
    }

    selectImages = (event) => {
        console.log(event.target.files[0]);
        let images = []
        for (var i = 0; i < event.target.files.length; i++) {
            images[i] = event.target.files.item(i);
        }
        images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
        let message = `${images.length} valid image(s) selected`
        this.setState({ images, message })
    }
    
    uploadImages = () => {
        const uploaders = this.state.images.map(image => {
        const data = new FormData();
        data.append("image", image, image.name);
    
        // Make an AJAX upload request using Axios
        return axios.post('/api/upload', data, {
            onUploadProgress: ProgressEvent => {
                console.log('Upload Progress:' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%')
                }
            })
            .then(response => {
                this.setState({
                imageUrls: [ response.data.imageUrl, ...this.state.imageUrls ]
                });
            })
      
    });
    
    // Once all the files are uploaded
    axios.all(uploaders).then(() => {
        console.log('done');
    }).catch(err => alert(err.message));
    }
    
    // My failed attempt at writing file to files collection
    // uploadFile = () => {
    //     API.saveFile()
    //       .then(res =>
    //         this.setState({ files: res.data, fileTitle: "" })
    //       )
    //       .catch(err => console.log(err));
    //   };
    render() {
        console.log(this.state.imageUrls);
        return (
        <div>
            <div className="col-sm-12">
            <img src="/images/uploads/1579225955755-20191031_191602.jpg" style={{width: '200px', height: '200px'}} className="img-rounded img-responsive" />
                <h1>Image Uploader</h1><hr/>
                <div className="col-sm-4">
                    <input className="form-control " type="file" onChange={this.selectImages} multiple/>
                </div>
                <p className="text-info">{this.state.message}</p>
                <br/><br/><br/>
                <div className="col-sm-4">
                    <button className="btn btn-primary" value="Submit" onClick={this.uploadImages}>Submit</button>
                </div>
            </div>


            <div className="row col-lg-12">
                {this.state.imageUrls.map((url, i) => {
                    console.log(url);
                    return (
                        <div className="col-lg-2" key={i}>
                            <img src={url} className="img-rounded img-responsive" alt="wsup?" />
                            <br/>
                        </div>
                    );
                }
                )}
            </div>
        </div>
        );
    }
}
export default Uploader;