import React, {Component} from 'react'
import  { FiSearch } from 'react-icons/fi'
import SelectCountry from "../../common/SelectCountry";
import Select from "react-select";

const categories = [
    {
        value: 0,
        label: 'Select a category'
    },
    {
        value: 1,
        label: 'Outdoor Activities'
    },
    {
        value: 2,
        label: 'Cinemas'
    },
    {
        value: 3,
        label: 'Nightlife'
    },
    {
        value: 4,
        label: 'Bars'
    },
    {
        value: 5,
        label: 'Clubs'
    },
]

export default class BannerOneSearchInput extends Component {
    state = {
        selectedCatOp: null,
    }

    handleChangeCat = () => {
        const { selectedCatOp } = this.state;
        this.setState(
            { selectedCatOp }
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
                                    <FiSearch/>
                                </span>
                                    <input className="form-control" type="text"
                                           placeholder="What are you looking for?"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="main-search-input-item location">
                        <SelectCountry/>
                    </div>
                    <div className="main-search-input-item category">
                        <Select
                            value={this.selectedCatOp}
                            onChange={this.handleChangeCat}
                            placeholder="Select a Category"
                            options={categories}
                        />
                    </div>
                    <div className="main-search-input-item">
                        <div className="contact-form-action">
                            <form action="#">
                                <div className="form-group mb-0">
                                <span className="form-icon">
                                    <FiSearch/>
                                </span>
                                    <input className="date-range form-control" type="date" name="daterange"
                                           defaultValue="04/08/2019"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="main-search-input-btn">
                        <button className="button theme-btn" type="submit">Search</button>
                    </div>

                </div>
            </>
        )
    }
}
