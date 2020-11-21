import React, { Component } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { BsPencilSquare, BsQuestion, BsPencil, BsFileCode } from 'react-icons/bs'
import { AiOutlineTags } from 'react-icons/ai'
import Select from "react-select";
import { fetchAmenties, fetchCategory } from '../../services/action/common';
import { Modal } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { FiMap } from 'react-icons/fi';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { CreateListing } from '../../services/action/list';


class AddListing extends Component {
    constructor(props) {
        super(props)
        this.handleListing = this.handleListing.bind(this);
        //this.onReset = this.onReset.bind(this);
        this.onChangeBusinessname = this.onChangeBusinessname.bind(this);
        this.onChangeKeywords = this.onChangeKeywords.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeZipcode = this.onChangeZipcode.bind(this);

        this.state = {
            title: '',
            businessname: '',
            description:'',
            keywords:'',
            address:'',
            selectedCatOp: null,
            breadcrumbimg: require('../../assets/images/bread-bg.jpg'),
            catid: { label: '', value: null },
            category: [],
            amenties: [],
            showModal: false,
            country: '',
            region: '',
            place:'',
            zipcode:'',
            ModelContent:'',
            loading:false
        }
    }

    onReset=()=>
    {
        this.setState({
            country: '',
            region: '',
            place:'',
            zipcode:'',
            businessname: '',
            description:'',
            keywords:'',
            address:''
            
        })
    }
    

    componentDidMount() {
        this.props.dispatch(fetchCategory()).then(() => {
            this.setState({
                category: this.props.category
            })
        });
    }

    onChangeBusinessname(e) {
        this.setState({
            businessname: e.target.value,
        });
    }

    onChangeKeywords(e) {
        this.setState({
            keywords: e.target.value,
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value,
        });
    }

    onChangeCity(e) {
        this.setState({
            place: e.target.value,
        });
    }

    onChangeZipcode(e) {
        this.setState({
            zipcode: e.target.value,
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        });
    }

    selectCountry(val) {
        this.setState({ country: val });
    }

    selectRegion(val) {
        this.setState({ region: val });
    }


    close = () => {
        this.setState({ showModal: false });
    }

    open = () => {
        this.setState({ showModal: true });
    }

 
    handleChangeCat = async (catid) => {
        this.setState({ catid });
        await this.props.dispatch(fetchAmenties(catid.value));

    }

    handleListing(e) {
        e.preventDefault();
        this.setState({
            loading: true,
        });

        const obj={
            list_title:this.state.businessname,
            description:this.state.description,
            keywords:this.state.keywords,
            categoryid:this.state.catid.value,
            address:this.state.address,
            country:this.state.country,
            state:this.state.region,
            city:this.state.place,
            zipcode:this.state.zipcode,
            canonicalurl:this.state.businessname.split(' ', 6).join(' ').toLowerCase().replace(/ /g, '_').replace(/[^\w-]+/g, ''),
            created_by:this.props.userdetails.id && this.props.userdetails.id

        }

        this.props.dispatch(CreateListing(obj)).then(()=>{
            if(this.props.isCreated)
            {
                this.setState({loading:false})
                this.onReset();
                this.props.history.push(`/listing-details/hh`);
			     window.location.reload();
                
            }
        })
    
    }

    render() {
        console.log(this.props.isCreated);
        const { country, region, category } = this.state;
        const categories = category && category.length ? category.map(cat => {
            return { value: `${cat.id}`, label: `${cat.name}` };
        }) : [{
            value: 0,
            label: 'no category feched'
        }];

        const { amenties } = this.props;
        const items = amenties && amenties.length ? amenties.map(item => {
            return { id: `${item.amenties_id}`, title: `${item.amenties_name}` };
        }) : [{
            id: 0,
            title: 'no amenties feched'
        }];

        return (

            <main className="add-listing">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Add Listing" MenuPgTitle="Listings" img={this.state.breadcrumbimg} />

                {/* Add Listing */}
                <section className="add-listing-area padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 mx-auto">

                                <div className="billing-form-item">
                                    <div className="billing-title-wrap">
                                        <h3 className="widget-title pb-0">Tell us your business details</h3>
                                        <div className="title-shape margin-top-10px"></div>
                                    </div>
                                    <div className="billing-content">
                                        <div className="contact-form-action">
                                            <form method="post" onSubmit={this.handleListing}>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="input-box">
                                                            <label className="label-text">Business Name</label>
                                                            <div className="form-group">
                                                                <span className="la form-icon">
                                                                    <BsPencilSquare />
                                                                </span>
                                                                <input className="form-control" value={this.state.businessname} onChange={this.onChangeBusinessname} type="text" name="listname" required="required" placeholder="Enter your listing title" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="input-box">
                                                            <label className="label-text">Service you Offer</label>
                                                            <div className="form-group mb-0">
                                                                <Select
                                                                    value={this.state.catid}
                                                                    onChange={this.handleChangeCat}
                                                                    placeholder="Select a Category"
                                                                    options={categories}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <div className="input-box">
                                                            <label className="label-text">Description</label>
                                                            <div className="form-group">
                                                                <span className="la form-icon">
                                                                    <BsPencil />
                                                                </span>
                                                                <textarea className="message-control form-control" value={this.state.description} onChange={this.onChangeDescription} name="description" required="required" placeholder="Write your Business description"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="input-box">
                                                            <label className="label-text d-flex align-items-center ">Keywords
                                                             <i className="la tip ml-1" data-toggle="tooltip" data-placement="top"  title="keywords related with your business it may">
                                                                    <BsQuestion />
                                                                </i>
                                                            </label>
                                                            <div className="form-group">
                                                                <span className="la form-icon">
                                                                    <AiOutlineTags />
                                                                </span>
                                                                <input className="form-control" type="text" name="name" value={this.state.keywords} onChange={this.onChangeKeywords} required="required" placeholder="Keywords should be separated by commas" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="billing-form-item">
                                                    <div className="billing-title-wrap">
                                                        <h3 className="widget-title pb-0">
                                                            Add Location
                                                       </h3>
                                                        <div className="title-shape margin-top-10px"></div>
                                                    </div>
                                                    <div className="billing-content">
                                                        <div className="contact-form-action">

                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="input-box">
                                                                        <label className="label-text">Address</label>
                                                                        <div className="form-group">
                                                                            <span className="la form-icon">
                                                                                <FiMap />
                                                                            </span>
                                                                            <input className="form-control" value={this.state.address} onChange={this.onChangeAddress} type="text" name="address"  required="required" placeholder="Your address" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label className="label-text">Country</label>
                                                                    <div className="form-group">
                                                                        <CountryDropdown
                                                                            value={country}
                                                                            onChange={(val) => this.selectCountry(val)} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="input-box">
                                                                        <label className="label-text">State</label>
                                                                        <div className="form-group">
                                                                            <RegionDropdown
                                                                                country={country}
                                                                                value={region}
                                                                                onChange={(val) => this.selectRegion(val)} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="input-box">
                                                                        <label className="label-text">City or (place name)</label>
                                                                        <div className="form-group">
                                                                            <span className="la form-icon">
                                                                                <BsFileCode />
                                                                            </span>
                                                                            <input className="form-control" type="text" value={this.state.place} onChange={this.onChangeCity} name="place"  required="required" placeholder="(city or place name)" />
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                                <div className="col-lg-6">
                                                                    <div className="input-box">
                                                                        <label className="label-text">
                                                                            Zip-Code
                                                                       </label>
                                                                        <div className="form-group">
                                                                            <span className="la form-icon">
                                                                                <BsFileCode />
                                                                            </span>
                                                                            <input className="form-control" value={this.state.zipcode} onChange={this.onChangeZipcode} type="text" name="zipcode" required="required" placeholder="Zip-Code" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="billing-form-item p-0 border-0 mb-0 shadow-none">
                                                    <div className="billing-content p-0">
                                                        <div className="custom-checkbox d-block mr-0">
                                                            <input type="checkbox" id="privacy" />
                                                            <label htmlFor="privacy">I Agree to Dirto's <Link to="#" onClick={this.open} className="color-text">Privacy Policy</Link></label>
                                                        </div>
                                                        <div className="custom-checkbox d-block mr-0">
                                                            <input type="checkbox" id="terms" />
                                                            <label htmlFor="terms">I Agree to Dirto's <Link to="#" onClick={this.open} className="color-text">Terms of Services</Link>
                                                            </label>
                                                        </div>
                                                        <div className="btn-box mt-4">
                                                            <button type="submit" className="theme-btn border-0" disabled={this.state.loading}>  
                                                            {this.state.loading && (
                                                                    <span className="spinner-border spinner-border-sm"></span>
                                                                )} submit listing</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                   {this.state.ModelContent}

                    </Modal.Body>
                    <Modal.Footer>
                        <span onClick={this.close}>Close</span>
                    </Modal.Footer>
                </Modal>

                {/* Newsletter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

            </main>
        );
    }
}


function mapStateToProps(state) {
    const { isLoggedIn,userdetails } = state.auth;
    const { isCreated } = state.list;
    const { amenties, category } = state.common;
    return {
        isLoggedIn, category, amenties,userdetails,isCreated
    
    };
}
export default connect(mapStateToProps)(AddListing);