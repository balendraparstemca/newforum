import React, { Component } from 'react';
import axios from 'axios';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export default class FilesUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            imgCollection: '',country: '', region: ''
        }
    }

    selectCountry (val) {
        this.setState({ country: val });
      }
     
      selectRegion (val) {
        this.setState({ region: val });
      }


    onFileChange(e) {
        this.setState({ imgCollection: e.target.files })
    }

    onSubmit(e) {
        e.preventDefault()

        console.log(this.state.imgCollection)

        var formData = new FormData();
        for (const key of Object.keys(this.state.imgCollection)) {
            formData.append('image', this.state.imgCollection[key])

        }
        console.log(formData);
        
     /* axios.post("http://localhost:7999/api/v1/utilities/listprofile_upload/1", formData, {
        }).then(res => {
            console.log(res.data)
        })*/
    }

    render() {
        const { tags, suggestions } = this.state;
        const { country, region } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" name="imgCollection" onChange={this.onFileChange} multiple />
                        </div>

                        <div className="form-group">
                            <img src={'http://localhost:7999/api/v1/utilities/image-dark-mode-1605854407226.png'}></img>
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>

                <div>
                    <CountryDropdown
                        value={country}
                        onChange={(val) => this.selectCountry(val)} />
                    <RegionDropdown
                        country={country}
                        value={region}
                        onChange={(val) => this.selectRegion(val)} />
                </div>
            </div>

        )
    }
}