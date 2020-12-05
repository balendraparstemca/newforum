import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FiRefreshCw, FiSearch } from 'react-icons/fi';
import Select from 'react-select';
import { connect } from "react-redux";
import { fetchCategory } from '../../../services/action/common';
import { CountryDropdown } from 'react-country-region-selector';
import { BsChevronRight } from 'react-icons/bs';


class WidgetSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: null,
            selectedCatOp: null,
            country: '',
            category: [],
            catid: null
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchCategory()).then(() => {
            this.setState({
                category: this.props.category
            })
        });
    }



    selectCountry(val) {
        this.setState({ country: val });
    }


    handleChange = () => {
        const { selectedOption } = this.state;
        this.setState(
            { selectedOption }
        );
    };

    handleChangeCat = async (catid) => {
        this.setState({ catid });

    }

    render() {
        const { country,  category } = this.state;

        const categories = category && category.length ? category.map(cat => {
            return { value: `${cat.id}`, label: `${cat.name}` };
        }) : [{
            value: 0,
            label: 'no category feched'
        }];
        return (
            <>
                <div className="sidebar-widget">
                    <div className="contact-form-action">
                        <form>
                            <div className="form-group">
                                <span className="d-inline-block form-icon">
                                    <FiSearch />
                                </span>
                                <input className="form-control" type="text" placeholder="What are you looking for?" />
                            </div>
                        </form>
                    </div>
                  
                   

                </div>
                <div className="sidebar-widget">
                    <div className="btn-box">
                        <Button text="apply filter" url="#" className="d-block w-100 text-center">
                            search<span className="d-inline-block"><BsChevronRight/></span>
                        </Button>
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { category } = state.common;
    return {
        category

    };
}
export default connect(mapStateToProps)(WidgetSearch);