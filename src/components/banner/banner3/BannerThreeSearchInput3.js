import React, {Component} from 'react';
import  { FiSearch } from 'react-icons/fi'
import  { FaDollarSign } from 'react-icons/fa'
import SelectCountry from "../../common/SelectCountry";
import Select from "react-select";


const properties = [
    {
        value: 0,
        label: 'Property Type'
    },
    {
        value: 1,
        label: 'All Category'
    },
    {
        value: 2,
        label: 'Apartments'
    },
    {
        value: 3,
        label: 'Deluxe Houses'
    },
    {
        value: 4,
        label: 'Modern Flats'
    },
    {
        value: 5,
        label: 'Stylish Houses'
    },
    {
        value: 6,
        label: 'Luxury Houses'
    },
    {
        value: 7,
        label: 'Nature Houses'
    },
    {
        value: 8,
        label: 'Cottage'
    },
    {
        value: 9,
        label: 'Flat'
    },
]

class BannerThreeSearchInput3 extends Component {
    state = {
        selectedPropertyOp: null,
    }

    handleChangeProperty = () => {
        const { selectedPropertyOp } = this.state;
        this.setState(
            { selectedPropertyOp }
        );
    }
    render() {
        return (
            <>
                <div className="main-search-input">
                    <div className="main-search-input-item">
                        <div className="contact-form-action">
                            <form action="#">
                                <div className="form-group mb-0">
                                    <span className="form-icon">
                                        <FiSearch />
                                    </span>
                                    <input className="form-control" type="text" placeholder="What are you looking for?" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="main-search-input-item location">
                        <SelectCountry />
                    </div>
                    <div className="main-search-input-item category">
                        <Select
                            value={this.selectedPropertyOp}
                            onChange={this.handleChangeProperty}
                            placeholder="Property Type"
                            options={properties}
                        />
                    </div>
                    <div className="main-search-input-item">
                        <div className="contact-form-action">
                            <form action="#">
                                <div className="form-group mb-0">
                                    <span className="form-icon">
                                        <FaDollarSign />
                                    </span>
                                    <input type="number" className="form-control" placeholder="Filter by price" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="main-search-input-btn">
                        <button className="button theme-btn" type="submit">Search</button>
                    </div>
                </div>
            </>
        );
    }
}

export default BannerThreeSearchInput3;